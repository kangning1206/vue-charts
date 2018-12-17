/*
 * @Author: kangning1206
 * @Date:   2018-12-12 11:20:38
 * @Last Modified by:   kangning1206
 * @Last Modified time: 2018-12-17 10:54:14
 */

// process.env.VUE_APP_VERSION = require('./package.json').version;
// 设置app最后更新时间，然后查看html页面，方便知道是否已更新
process.env.VUE_APP_LAST_UPDATE = new Date().getTime();

// vue.config.js
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/vue-charts/' : '/',
  outputDir: process.env.NODE_ENV === 'production' ? 'docs' : 'dist',
  lintOnSave: true,
  // devtool:'#cheap-module-eval-source-map'
  // devtool: '#source-map'
};
