import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App.js';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import './App.css';

import { reducer } from './reducer.js';

const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : () => {}
));

function render() {
  ReactDOM.render(
    <Provider store={ store }>
      <App/>
    </Provider>,
    document.getElementById('root'));
}

render();
store.subscribe(render);

registerServiceWorker();
