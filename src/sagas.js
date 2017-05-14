import { fork,call, put, takeEvery, takeLatest,all } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'
import axios from 'axios'
import aesjs from 'aes-js'

function getinitialdata(){
  return axios.get("http://localhost:8000/ciphertexts.json"
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
  return fetch("http://localhost:8000/ciphertexts/"+action.payload.id+"/",{
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

    return axios.post("http://localhost:8000/ciphertexts/",{
      keystring:"1010101010",
      context:a
    }).then(res => console.log(res))
 }

 function search(keystring) {
   console.log("searching")
   return axios.get("http://localhost:8000/ciphertexts/?keystring="+"1111001001"
  //  return axios.get("http://localhost:8000/ciphertexts/?keystring="+keystring
   ).then(function (req) {
     return req.data
   }).catch(function (error) {
     console.log(error)
   })
 }

function* mySaga(){
  yield [
    takeEvery("INIT",initlocaldata), //初始化，获得所有数据
    takeEvery("DELREMOTE",deleteRemote), //删除
    takeEvery("ADDREMOTE",addonenote), //添加
    takeEvery("SEARCH",finishsearch) //搜索
  ]
}

export default mySaga;
