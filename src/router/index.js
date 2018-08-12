import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/components/IndexPage'
import Login from '@/components/LoginPage'
import Dashboard from '@/components/DashboardPage'

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
      path: '/login',
      name: 'LoginPage',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'DashboardPage',
      component: Dashboard
    }
  ]
})
