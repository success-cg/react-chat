import React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './config.js';
import 'antd-mobile/dist/antd-mobile.css';
import reducers from './reducer.js';
import Login from './pages/login/login.js';
import Register from './pages/register/register.js';
import AuthRoute from './components/authroute/authroute.js';

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <div>
        <AuthRoute/>
        <Route path={ '/login' } component={ Login }/>
        <Route path={ '/register' } component={ Register }/>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
