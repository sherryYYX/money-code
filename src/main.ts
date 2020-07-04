import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import statistic from '@/views/statistic.vue';


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

if(document.documentElement.clientWidth>500){
  window.alert('请使用手机打开本页面，以保证浏览效果')
  const img = document.createElement('img')
  console.log(img);
  img.src = './qrcode.png';
  document.body.appendChild(img)
  img.style.position="fixed"
  img.style.top  = '50%'
  img.style.left = '50%'
  img.style.transform='translate(-50%,-50%)'

}
