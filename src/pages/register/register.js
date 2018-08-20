import React, { Component } from 'react';
import Logo from '../../components/logo/logo.js';
import { List, Radio, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';

const RadioItem = Radio.RadioItem;

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'genius'
    };
  }

  render() {
    return (
      <div>
        <Logo/>
        <h1>注册页</h1>
        <WingBlank>
          <List>
            <InputItem>用户名</InputItem>
            <InputItem>密码</InputItem>
            <InputItem>确认密码</InputItem>
          </List>
          <WhiteSpace/>
          <List>
            <RadioItem checked={ this.state.type === 'genius' }>
              牛人
            </RadioItem>
            <RadioItem checked={ this.state.type === 'boss' }>
              BOSS
            </RadioItem>
          </List>
          <WhiteSpace/>
          <Button type={ 'primary' }>注册</Button>
        </WingBlank>
      </div>
    );
  }
}