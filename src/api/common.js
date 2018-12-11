/*
* @Author: kangning1206
* @Date:   2018-11-25 18:51:54
* @Last Modified by:   kangning1206
* @Last Modified time: 2018-11-25 19:24:53
*/

import fetch from './fetch';

/**
 * [dbCommon 公共数据模块]
 * @type {Object}
 */
const dbCommon = {
  common1() {
    return fetch('/common/fun1');
  },
  common2() {
    return fetch('/common/fun2');
  },
};

export default dbCommon;
