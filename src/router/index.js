import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/components/WelcomePage'
import Login from '@/components/LoginPage'
import Dashboard from '@/components/DashboardPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/welcome',
      name: 'WelcomePage',
      component: welcome
    },
    {
      path: '/',
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
