import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/components/IndexPage'
import List from '@/components/ListPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: welcome
    },
    {
      path: '/demo-list',
      name: 'ListPage',
      component: List
    }
  ]
})
