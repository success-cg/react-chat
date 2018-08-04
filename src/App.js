import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGun, removeGun, addGunSync } from './reducer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
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
          现在有枪{ this.props.num }把
        </p>
        <button onClick={ this.props.addGun }>加一把</button>
        <button onClick={ this.props.removeGun }>减一把</button>
        <button onClick={ this.props.addGunSync }>明天给一把</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { num: state };
};

const actionCreators = { addGun, removeGun, addGunSync };

/**
 * connect函数接受四个参数，前2个最重要, 都是对象
 * 第一个mapStateToProps，用来把state挂到props上，
 * 第二个actionCreators，用来把action挂到props上
 */
App = connect(mapStateToProps, actionCreators)(App);

export default App;