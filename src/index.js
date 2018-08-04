import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import App from './App.js';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import './App.css';

import { reducer, addGun, removeGun, addGunSync } from './reducer.js';

const store = createStore(reducer, applyMiddleware(thunk));

function render() {
  ReactDOM.render(
    <App store={ store }
         addGun={ addGun }
         removeGun={ removeGun }
         addGunSync={ addGunSync }
    />,
    document.getElementById('root'));
}

render();
store.subscribe(render);

registerServiceWorker();
