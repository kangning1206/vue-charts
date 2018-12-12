import Vue from 'vue';

// 在 ./App.vue 前引用，避免加载顺序
import ElementUI from 'element-ui';

import 'normalize.css';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import '@/assets/css/flex.less';
import '@/assets/css/base.css';
import '@/assets/css/iconfont/iconfont.css';

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
