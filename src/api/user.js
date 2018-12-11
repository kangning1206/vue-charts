/*
* @Author: kangning1206
* @Date:   2018-11-25 18:52:35
* @Last Modified by:   kangning1206
* @Last Modified time: 2018-11-25 19:37:49
*/

import fetch from './fetch';

/**
 * [user 用户数据模块]
 * @type {Object}
 */
const dbUser = {
  /**
   * 用户登录
   */
  login(params) {
    return fetch('/users/userLogin', params);
  },
  /**
   * 用户注册
   */
  regist(params) {
    return fetch('/users/userRegist', params, { method: 'post' });
  },
  /**
   * 发送注册验证码
   */
  registVerifiCode(tellphone) {
    return fetch('/users/registVerifiCode', { tellphone });
  },
  /**
   * 获取用户信息
   */
  userInfo(id) {
    return fetch('/users/userInfo', { userId: id });
  },
};

export default dbUser;
