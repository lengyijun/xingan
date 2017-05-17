import { fork,call, put, takeEvery, takeLatest,all } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'
import axios from 'axios'
import aesjs from 'aes-js'
import dict1 from './b.js'

// var baseurl="http://www.wangjksjtu.com.cn:2117/"
var baseurl="http://localhost:8000/"
function getinitialdata(){
  return axios.get(baseurl+"ciphertexts.json"
  ).then(function (req) {
    return req.data.map(function (x){
      var a=decrypt(x.context).split("{{{")
      console.log(a)
      return {
        id: x.id,
        title: a[0],
        star: false,
        p:a[1]
      }
    })
    // }).filter(function(x){return x.p!== ""}) //清除空数据
  }).catch(function (error) {
    console.log(error)
  })
}

function* deleteRemote(action){
  console.log(action)
  console.log("delete "+action.payload.id)
  return fetch(baseurl+"ciphertexts/"+action.payload.id+"/",{
    method:"DELETE"
  }).then(res=>console.log(res))
}

function* initlocaldata(action){
    const t=yield call(getinitialdata);
    console.log(t)
    yield put({type:"UPDATE",tasks:t});
}

function* finishsearch(action){
    const t=yield call(search,action.payload.x);
    console.log(t)
    yield put({type:"UPDATE",tasks:t});
}
 
 function encrypt(text){
    var key = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];
    var textBytes = aesjs.utils.utf8.toBytes(text);
    var encryptedHex = aesjs.utils.hex.fromBytes(textBytes);
    var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    var encryptedBytes = aesCtr.encrypt(textBytes);
    var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    return encryptedHex
 }

 function decrypt(encryptedHex) {
   var key = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];
   var encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);

   var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
   var decryptedBytes = aesCtr.decrypt(encryptedBytes);

   var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
   return decryptedText
 }


 function * addonenote(action){ //todo ,keystring需要再这里计算出来
    console.log("add one note")
    var a=encrypt(action.payload.x+"{{{"+action.payload.y)

    return axios.post(baseurl+"ciphertexts/",{
      keystring:action.payload.keystring,
      context:a
    }).then(res => console.log(res))
 }

 //sample ?key=1|3|8-2|4
 function search(keystring) {
   console.log("searching " + keystring)
   var keyarr=keystring.split(" ")
   var a=""
   for (var i = 0; i < keyarr.length; ++i) {
     var b=dict1[keyarr[i]]
     if(b !== undefined){
      a += b
      a += "|"
     }
   }
   console.log(a)
   if (a !== "") {
     a=a.substring(0,a.length-1) //remove the last |
     console.log(a)
     return axios.get(baseurl+"ciphertexts/?key=" + a
     ).then(function (req) {
       return req.data.map(function (x) {
         var a = decrypt(x.context).split("{{{")
         console.log(a)
         return {
           id: x.id,
           title: a[0],
           star: false,
           p: a[1]
         }
       })
     }).catch(function (error) {
       console.log(error)
     })
   } else {
     console.log("not found any word")
     return []
   }
 }

function* mySaga(){
  yield [
    takeEvery("INIT",initlocaldata), //初始化，获得所有数据
    takeEvery("DELREMOTE",deleteRemote), //删除
    takeEvery("ADDREMOTE",addonenote), //添加
    takeLatest("SEARCH",finishsearch) //搜索
  ]
}

export default mySaga;
