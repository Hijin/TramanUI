import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Instructions',
      alias: '',
      name: 'Instructions',
      component: () => import('@/view/Instructions.vue')
    }, {
      path: '/TramanPagination',
      name: 'TramanPagination',
      component: () => import('@/view/Pagination.vue')
    }, {
      path: '/CheckPop',
      name: 'CheckPop',
      component: () => import('@/view/CheckPop.vue')
    }, {
      path: '/Cascader',
      name: 'Cascader',
      component: () => import('@/view/Cascader.vue')
    }, {
      path: '/Select',
      name: 'Select',
      component: () => import('@/view/Select.vue')
    }, {
      path: '/Input',
      name: 'Input',
      component: () => import('@/view/Input.vue')
    }
  ]
})
