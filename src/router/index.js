import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "Home" */'@/views/Home')
const About = () => import(/* webpackChunkName: "About" */'@/views/About')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: '首页',
        keepAlive: false
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: '关于',
        keepAlive: false
      }
    },
  ]
})
export default router
