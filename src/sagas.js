import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'


function getinitialdata(){
  return fetch("http://localhost:3001/api_test")
          .then(response=>response.json())
          .then(json=>json.data)
}

function* fetchUser(action){
    const t=yield call(getinitialdata);
    console.log(t)
    yield put({type:"UPDATE",tasks:t});
}

function* mySaga(){
  yield takeEvery("INIT",fetchUser);
}

export default mySaga;
