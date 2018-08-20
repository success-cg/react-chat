import React, { Component } from 'react';
import axios from 'axios';

export default class AuthRoute extends Component {
  componentDidMount() {
    // 获取用户信息

    // 是否登录
    // 现在的url地址，login是不需要跳转的
    // 用户的type,身份是牛人还是BOSS
    // 用户是否完善信息，(选则头像，个人简介)
    axios.get('/user/info').then(({ status, data }) => {
      if (status === 200) {
        console.log(data);
      }
    });
  }

  render() {
    return (
      <h1>AuthRoute</h1>
    );
  }
}