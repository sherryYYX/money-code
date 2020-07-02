import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import statistic from '@/views/statistic.vue';


Vue.config.productionTip = false

// 引入全局 Nav
Vue.component('Nav',Nav)
Vue.component('Layout',Layout)
Vue.component('Icon',Icon)
Vue.component('Statistic',statistic)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
