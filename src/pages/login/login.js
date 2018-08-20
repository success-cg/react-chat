import React, { Component } from 'react';
import Logo from '../../components/logo/logo.js';
import { List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile';

export default class Login extends Component {
  register() {
    // 路由组件可从props中拿到操作路由的方法和对象
    this.props.history.push('/register');
  }

  render() {
    return (
      <div>
        <Logo/>
        <h1>登录页</h1>
        <WingBlank>
          <List>
            <InputItem>用户名</InputItem>
            <InputItem>密码</InputItem>
          </List>
          <WhiteSpace/>
          <Button type={ 'primary' }>登录</Button>
          <WhiteSpace/>
          <Button onClick={ this.register.bind(this) } type={ 'primary' }>注册</Button>
        </WingBlank>
      </div>
    );
  }
}
