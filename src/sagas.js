import { fork,call, put, takeEvery, takeLatest,all } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'
import axios from 'axios'


function getinitialdata(){
  return axios.get("http://localhost:8000/ciphertexts.json"
  ).then(function (req) {
    return req.data.map(function (x){
      return {
        id: x.id,
        title: x.context,
        star: false,
        p: x.context
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
    const t=yield call(search);
    console.log(t)
    yield put({type:"UPDATE",tasks:t});
}
 
 function * addonenote(action){ //todo ,keystring需要再这里计算出来
    console.log("add one note")
    console.log(action.payload.y)
    return axios.post("http://localhost:8000/ciphertexts/",{
      keystring:"1010101010",
      context:action.payload.y
    }).then(res => console.log(res))
 }

 function search(keystring) {
   console.log("searching")
   return axios.get("http://localhost:8000/ciphertexts/?keystring="+keystring
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
