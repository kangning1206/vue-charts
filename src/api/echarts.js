/*
* @Author: kangning1206
* @Date:   2018-11-25 18:52:35
* @Last Modified by:   kangning1206
* @Last Modified time: 2018-12-11 16:48:17
*/

import fetch from './fetch';

/**
 * [user 用户数据模块]
 * @type {Object}
 */
const dbEcharts = {
  /**
   * 散点图
   */
  scatterNutrients() {
    return fetch('/data/nutrients');
  },

};

export default dbEcharts;
