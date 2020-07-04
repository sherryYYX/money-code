import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Money from '../views/money.vue'
import Labels from '../views/labels.vue'
import Statistic from '../views/statistic.vue'
import NotFound from '@/views/NotFound.vue';
import Details from '@/components/Statistics/Details.vue';
import Chart from '@/components/Statistics/Chart.vue';

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
    {
      path: '/',
      component: Money
    },
    {
      path: '/money',
      component: Money
    },

    {
      path: '/labels',
      component: Labels
    },
    {
      path: '/statistic',
      component: Statistic,
      redirect: '/statistic/details',
    },
    {
      path: '/statistic/details',
      component: Details
    },
    {
      path: '/statistic/chart',
      component: Chart
    },
    {
      path: '*',
      component: NotFound
    },
]




const router = new VueRouter({

  mode: 'history',
  routes
})

export default router
