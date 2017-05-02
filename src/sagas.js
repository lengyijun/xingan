import { fork,call, put, takeEvery, takeLatest,all } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'


function getinitialdata(){
  return fetch("http://localhost:3001/users")
          .then(response=>response.json())
          .then(json=>json.data)
}

function sync(t){
  console.log("SAGA SYNC")
  console.log(t.tasks)
  return fetch("http://localhost:3001/po",{
    method:"POST",
    body:{tasks:t.tasks}
  }).then(res => console.log(res))
}

function* fetchUser(action){
    const t=yield call(getinitialdata);
    yield put({type:"UPDATE",tasks:t});
}

function* mySaga(){
  yield [
    takeEvery("INIT",fetchUser),
    takeEvery("SYNC",sync)
]
}

export default mySaga;
