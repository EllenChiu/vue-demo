import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/components/WelcomePage'
import Login from '@/components/LoginPage'
import Dashboard from '@/components/DashboardPage'
// import VueGoogleCharts from 'vue-google-charts'

Vue.use(Router)
// Vue.use(VueGoogleCharts)

export default new Router({
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
