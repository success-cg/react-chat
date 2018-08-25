import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGun, removeGun, addGunSync, getUser } from './reducer';
import { Button, InputItem, WingBlank, WhiteSpace } from 'antd-mobile'
import logo from './logo.svg';
import './App.css';

/**
 *  用装饰器的方法写connect函数，需要安装babel-plugin-transform-decorators-legacy，
 *  在package.json的babel字段中配置
 *  接受2个参数，
 +  第一个用来把state挂到props上，是一个函数返回对象
 +  第二个用来把dispatch挂到props上，是一个对象
 */

function mapDispatchToProps(dispatch) {
  return {
    addGun1(data) {
      dispatch(addGun(data))
    },
    removeGun1(data) {
      dispatch(removeGun(data))
    },
    addGunSync1(data) {
      dispatch(addGunSync(data))
    },
    getUser1(data) {
      dispatch(getUser(data))
    }
  }
}

@connect(
  (state) => (state),
  mapDispatchToProps
)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0
    }
  }

  handleChange(e) {
    console.log(typeof e, e);
    this.setState({
      num: +e
    })

  }

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

        <WingBlank>
          <InputItem type={ 'number' } onChange={ this.handleChange.bind(this) }>把数</InputItem>
        </WingBlank>
        <WhiteSpace/>

        <Button type="primary" inline={ true } onClick={ () => this.props.addGun1(this.state.num) }>加枪</Button>
        <Button type="primary" inline={ true } onClick={ () => this.props.removeGun1(this.state.num) }>减枪</Button>
        <Button type="primary" inline={ true } onClick={ () => this.props.addGunSync1(this.state.num) }>明天加</Button>
        <Button type="primary" inline={ true } onClick={ this.props.getUser1 }>getUser</Button>
      </div>
    );
  }
}

export default App;