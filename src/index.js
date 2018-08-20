import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import * as ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './App.js';
import './style/index.css';
import registerServiceWorker from './registerServiceWorker';
import './style/App.css';
import './App.css';
import './config.js';
import 'antd-mobile/dist/antd-mobile.css'

import { reducer } from './reducer.js';

const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : () => {}
));

const Eryin = () => (<h1>二营</h1>);
const Qibinglian = () => (<h1>骑兵连</h1>);

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <div>
        <ul>
          <li><Link to='/'>一营</Link></li>
          <li><Link to='/erying'>二营</Link></li>
          <li><Link to='/qibinlian'>骑兵连</Link></li>
        </ul>
        <Route path='/' exact component={ App }/>
        <Route path='/erying' component={ Eryin }/>
        <Route path='/qibinlian' component={ Qibinglian }/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
