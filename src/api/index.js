/*
* @Author: kangning1206
* @Date:   2018-11-25 18:43:23
* @Last Modified by:   kangning1206
* @Last Modified time: 2018-11-25 19:17:33
*/

import { dbAll } from './fetch';

import dbUser from './user';
import dbJobs from './jobs';
import dbCommon from './common';


export {
  dbUser,
  dbJobs,
  dbCommon,
  dbAll,
};

export default {
  user: dbUser,
  jobs: dbJobs,
  common: dbCommon,
  all: dbAll,
};
