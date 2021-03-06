import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/echarts',
      name: 'echarts',
      redirect: '/echarts/bar',
      component: () => import('./views/Echarts.vue'),
      children: [
        // 匹配默认或者使用 redirect 实现
        // { path: '', name: '', component: () => import('./views/echarts/Bar.vue') },
        { path: 'bar', name: 'bar', component: () => import('./views/echarts/Bar.vue') },
        { path: 'pie', name: 'pie', component: () => import('./views/echarts/Pie.vue') },
        { path: 'javascript', name: 'javascript', component: () => import('./views/echarts/JavaScript.vue') },
        { path: 'map', name: 'map', component: () => import('./views/echarts/Map.vue') },
        { path: 'candlestick', name: 'candlestick', component: () => import('./views/echarts/Candlestick.vue') },
        { path: 'radar', name: 'radar', component: () => import('./views/echarts/Radar.vue') },
        { path: 'funnel', name: 'funnel', component: () => import('./views/echarts/Funnel.vue') },
        { path: 'gauge', name: 'gauge', component: () => import('./views/echarts/Gauge.vue') },
        { path: 'graphgl', name: 'graphgl', component: () => import('./views/echarts/Graphgl.vue') },
        { path: 'dismap', name: 'dismap', component: () => import('./views/echarts/Dismap.vue') },
      ],
    },
    {
      path: '/d3',
      name: 'd3',
      redirect: '/d3/bar',
      component: () => import('./views/D3.vue'),
      children: [
        { path: 'bar', name: 'd3bar', component: () => import('./views/d3/Bar.vue') },
        { path: 'circle', name: 'd3circle', component: () => import('./views/d3/Circle.vue') },
        { path: 'chess', name: 'd3chess', component: () => import('./views/d3/Chess.vue') },
        { path: 'demo', name: 'd3demo', component: () => import('./views/d3/Demo.vue') },
      ],

    },
    {
      path: '/css',
      name: 'css',
      redirect: '/css/rotate',
      component: () => import('./views/CSS.vue'),
      children: [
        { path: 'rotate', name: 'rotate', component: () => import('./views/css/Rotate.vue') },
        { path: 'demo', name: 'cssDemo', component: () => import('./views/css/Demo.vue') },
      ],

    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import(/* webpackChunkName: "about" */ './views/Admin.vue'),
    },
  ],
});
