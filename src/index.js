import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import App from './App'
import Welcome from './welcome'
import Login from './login'
// import TreeDemo from './treedemo'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import todo from './reducer'
import Vis from './vis'

import mySaga from './sagas'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const store=createStore(todo,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mySaga)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/app" component={App}/>
        <Route exact path="/" component={Welcome}/>
        <Route exact path="/login" component={Login} />
        {/*<Route exact path="/tree" component={TreeDemo} />*/}
        {/* <Route exact path="/vis" component={Vis} /> */}
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
