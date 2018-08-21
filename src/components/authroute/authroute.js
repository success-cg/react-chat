import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

/**
 * 因为AuthRoute不是路由组件，所以它没有操作路由的方法
 * 用withRouter包裹一下，AuthRoute组件就能获得操作路由的方法
 * 这里的是装饰器用法，相当于 withRouter(AuthRoute)
 */
@withRouter
export default class AuthRoute extends Component {
  componentDidMount() {
    const publicList = ['/login', '/register'];
    const { pathname = '' } = this.props.location;
    if (publicList.includes(pathname)) {
      return;
    }

    // 获取用户信息
    axios.get('/user/info').then(({ status, data: { code } }) => {
      if (status === 200) {
        if (code === 0) {
          // 有登陆信息
        } else {
          this.props.history.push('/login');
        }
      }
    });

    // 是否登录
    // 现在的url地址，login是不需要跳转的


    // 用户的type,身份是牛人还是BOSS
    // 用户是否完善信息，(选则头像，个人简介)
  }

  render() {
    return (
      <p>AuthRoute</p>
    );
  }
}
