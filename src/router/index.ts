import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Money from '../views/money.vue'
import Labels from '../views/labels.vue'
import Statistic from '../views/statistic.vue'
Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
    {
      path: '/',
      component: Money
    },

    {
      path: '/labels',
      component: Labels
    },
    {
      path: '/statistic',
      component: Statistic
    },
]

const router = new VueRouter({
  routes
})

export default router
