/*
 * @Author: kangning1206
 * @Date:   2018-12-12 11:20:38
 * @Last Modified by:   kangning1206
 * @Last Modified time: 2018-12-14 21:32:52
 */

// vue.config.js
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/vue-charts/' : '/',
  outputDir: process.env.NODE_ENV === 'production' ? 'docs' : 'dist',
  lintOnSave: true,
  // devtool:'#cheap-module-eval-source-map'
  // devtool: '#source-map'
};
