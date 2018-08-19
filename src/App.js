import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGun, removeGun, addGunSync, getUser } from './reducer';
import { Button } from 'antd-mobile'
import logo from './logo.svg';
import './App.css';

/**
 *  用装饰器的方法写connect函数，需要安装babel-plugin-transform-decorators-legacy，
 *  在package.json的babel字段中配置
 *  接受2个参数，
 +  第一个用来把state挂到props上，是一个函数返回对象
 +  第二个用来把dispatch挂到props上，是一个对象
 */
@connect(
  (state) => (state),
  { addGun, removeGun, addGunSync, getUser }
)

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
          现在有枪{ this.props.gun }把
        </p>
        <h1 className="App-title">我的名字是 { this.props.name }</h1>
        <h1 className="App-title">我的年龄 { this.props.age }</h1>

        <Button type="primary" inline={ true } onClick={ this.props.addGun }>加一把</Button>
        <Button type="primary" inline={ true } onClick={ this.props.removeGun }>减一把</Button>
        <Button type="primary" inline={ true } onClick={ this.props.addGunSync }>明天给一把</Button>
        <Button type="primary" inline={ true } onClick={ this.props.getUser }>getUser</Button>
      </div>
    );
  }
}

export default App;