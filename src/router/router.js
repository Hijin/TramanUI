import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/TramanPagination',
      name: 'TramanPagination',
      component: () => import('@/view/Pagination.vue')
    }, {
      path: '/CheckPop',
      name: 'CheckPop',
      component: () => import('@/view/CheckPop.vue')
    }
  ]
})
