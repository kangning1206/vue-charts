/*
 * @Author: kangning1206
 * @Date:   2018-11-25 18:43:23
 * @Last Modified by:   kangning1206
 * @Last Modified time: 2018-11-29 15:50:25
 */

import fetch from './fetch';

/**
 * [dbJobs 职位数据模块]
 * @type {Object}
 */
const dbJobs = {
  jobList() {
    return fetch('http://api.test.com:3000/api/detail/12', {}, { headers: { 'FIRST-Custom-Header': 'kang', 'LAST-Custom-Header': 'ning' } });
  },
  jobDetail() {
    return fetch('/jobs/jobDetail');
  },
};

export default dbJobs;
