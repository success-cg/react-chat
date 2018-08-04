import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const store = this.props.store;
    const addGun = this.props.addGun;
    const removeGun = this.props.removeGun;
    const addGunSync = this.props.addGunSync;
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
          现在有枪{ store.getState() }把
        </p>
        <button onClick={ () => store.dispatch(addGun()) }>加一把</button>
        <button onClick={ () => store.dispatch(removeGun()) }>减一把</button>
        <button onClick={ () => store.dispatch(addGunSync()) }>明天给一把</button>
      </div>
    );
  }
}

export default App;