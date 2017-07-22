import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import { delay } from 'redux-saga'
import fetch from 'isomorphic-fetch'
import axios from 'axios'
import aesjs from 'aes-js'
import dict1 from './b.js'

var baseurl="http://115.159.88.104:2118/"
var nexturl="http://115.159.88.104:2118/ciphertext/?page=2"

function getinitialdata(){
  return axios.get(baseurl+"ciphertext/?page=1"
  ).then(function (req) {
    return req.data.results.map(function (x){
      var a=decrypt(x.content).split("{{{")
      var paragraph=a[1].split("\n")
      paragraph.splice(-1,1)  //删除最后的11010101串
      return {
        id: x.id,
        title: a[0],
        p:paragraph.join("\n"),
        keys:x.keys
      }
    })
  }).catch(function (error) {
    console.log(error)
  })
}

function* deleteRemote(action){
  console.log("delete "+action.payload.id)
  return fetch(baseurl+"ciphertext/"+action.payload.id+"/",{
    method:"DELETE"
  }).then(res=>console.log(res))
}

function* initlocaldata(action){
    const t=yield call(getinitialdata);
    yield put({type:"UPDATE",tasks:t});
}

function* finishsearch(action){
    yield put({type:"UPDATETITLE",middleTitle:"Searching "+action.payload.x});
    const t=yield call(search,action.payload.x);
    yield put({type:"UPDATE",tasks:t});
    yield put({type:"UPDATETITLE",middleTitle:"Find "+t.length+" Results: "+action.payload.x});
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


 function * addonenote(action){ //todo ,keys需要再这里计算出来
    console.log("axios post a note")
    var a=encrypt(action.payload.x+"{{{"+action.payload.y)

    return axios.post(baseurl+"ciphertext/",{
      content:a,
      keys:action.payload.keys
    }).then(res => console.log(res))
 }

 //sample ?key=1|3|8-2|4
 function search(keys) {
   console.log("searching " + keys)
   var keyarr=keys.split(" ")
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
     return axios.get(baseurl+"ciphertext/?key=" + a
     ).then(function (req) {
       return req.data.results.map(function (x) {
         var a = decrypt(x.content).split("{{{")
        var paragraph=a[1].split("\n")
        paragraph.splice(-1,1)  //删除最后的11010101串
         console.log(a)
         return {
           id: x.id,
           title: a[0],
           p: paragraph.join("\n"),
           keys:x.keys
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

function query(url){
  return axios.get(url).
    then(function (req) {
      nexturl=req.data.next
      return req.data.results.map(function (x) {
        var a = decrypt(x.content).split("{{{")
        var paragraph = a[1].split("\n")
        paragraph.splice(-1, 1)  //删除最后的11010101串
        return {
          id: x.id,
          title: a[0],
          p: paragraph.join("\n"),
          keys: x.keys
        }
      })
    }).catch(function (error) {
      console.log(error)
    })

}

function querygraphjson(){
  return axios.get(baseurl+"graph/").
    then(function (req) {
      return req.data
    }).catch(function (error) {
      console.log(error)
    })

}

function * getGraphJson(){
    console.log("query graph json")
    const graphjson=yield call(querygraphjson);
    yield put({type:"GRAPH",edges:graphjson.edges,nodes:graphjson.nodes});
    yield delay(1000)
    yield put({type:"SAGAGRAPH"}) 

}

function * appendNote(action){
    console.log("append note now ")
    console.log(nexturl)
    const t=yield call(query,nexturl);
    yield put({type:"APPEND",tasks:t});
}

function* mySaga(){
  yield [
    takeEvery("INIT",initlocaldata), //初始化，获得所有数据
    takeEvery("DELREMOTE",deleteRemote), //删除
    takeEvery("ADDREMOTE",addonenote), //添加
    takeEvery("APPEND_SAGA",appendNote), //添加
    takeLatest("SEARCH",finishsearch), //搜索
    takeLatest("SAGAGRAPH",getGraphJson) 
  ]
}


export default mySaga;
