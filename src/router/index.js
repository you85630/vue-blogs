import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Home = () => import('views/home')
const blogList = () => import('views/blogList')
const label = () => import('views/label')
const aboutMe = () => import('views/aboutMe')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/bloglist',
      name: 'blogList',
      component: blogList
    },
    {
      path: '/label',
      name: 'label',
      component: label
    },
    {
      path: '/aboutme',
      name: 'aboutMe',
      component: aboutMe
    }
  ]
})
