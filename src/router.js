import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
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
    component: () => import('./views/Echarts.vue'),
    children: [
      { path: 'bar', name: 'bar', component: () => import('./views/echarts/Bar.vue') },
      { path: 'pie', name: 'pie', component: () => import('./views/echarts/Pie.vue') },
      { path: 'scatter', name: 'scatter', component: () => import('./views/echarts/Scatter.vue') },
      { path: 'map', name: 'map', component: () => import('./views/echarts/Map.vue') },
      { path: 'candlestick', name: 'candlestick', component: () => import('./views/echarts/Candlestick.vue') },
      { path: 'radar', name: 'radar', component: () => import('./views/echarts/Radar.vue') },
      { path: 'funnel', name: 'funnel', component: () => import('./views/echarts/Funnel.vue') },
      { path: 'gauge', name: 'gauge', component: () => import('./views/echarts/Gauge.vue') },
      { path: 'graphgl', name: 'graphgl', component: () => import('./views/echarts/Graphgl.vue') },
    ],
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "about" */ './views/Admin.vue'),
  },
  ],
});
