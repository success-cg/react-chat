import React, { Component } from 'react';
import Logo from '../../components/logo/logo.js';
import { List, Radio, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';

const RadioItem = Radio.RadioItem;

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pwd: '',
      repeatPwd: '',
      type: 'genius'
    };
  }

  handleChange(key, val) {
    this.setState({
      [key]: val
    });
  }

  handleRegister() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Logo/>
        <h1>注册页</h1>
        <WingBlank>
          <List>
            <InputItem onChange={ (val) => {this.handleChange('user', val);} }
            >用户名</InputItem>
            <InputItem onChange={ (val) => {this.handleChange('pwd', val);} }
                       type={ 'password' }
            >密码</InputItem>
            <InputItem onChange={ (val) => {this.handleChange('repeatPwd', val);} }
                       type={ 'password' }
            >确认密码</InputItem>
          </List>
          <WhiteSpace/>
          <List>
            <RadioItem checked={ this.state.type === 'genius' }
                       onChange={ () => {this.handleChange('type', 'genius');} }
            >牛人
            </RadioItem>
            <RadioItem checked={ this.state.type === 'boss' }
                       onChange={ () => {this.handleChange('type', 'boss');} }
            >BOSS
            </RadioItem>
          </List>
          <WhiteSpace/>
          <Button type={ 'primary' } onClick={ this.handleRegister.bind(this) }>注册</Button>
        </WingBlank>
      </div>
    )
      ;
  }
}