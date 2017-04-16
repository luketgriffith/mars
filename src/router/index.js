import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Days from '@/components/Days/Days'
import About from '@/components/About/About'
import Faq from '@/components/Faq/Faq'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/days',
      name: 'Days',
      component: Days
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq
    }
  ]
})
