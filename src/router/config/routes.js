/**
 * Created by houenxing on 17/8/19.
 */
'use strict';

//import your components here

import home from '../../components/home.vue';
import test from '../../components/test.vue';

export default [
  {
    path: '/home',
    name: 'home',
    component: home,
    // redirect: {path: '/home/dashboard'},      //进入home页面后自动重新定位至/home/dashboard
  },
  {
    path: '/test',
    name: 'test',
    component: test,
    // redirect: {path: '/home/dashboard'},      //进入home页面后自动重新定位至/home/dashboard
  },
  {
    path: '*',
    redirect: {path: '/home'}
  },
]
