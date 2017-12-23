import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Home = () => import('views/home')
const blogList = () => import('views/blogList')
const labelList = () => import('views/labelList')
const aboutMe = () => import('views/aboutMe')
const newsList = () => import('views/newsList')
const blogInfo = () => import('views/blogInfo')

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
      path: '/blogList',
      name: 'blogList',
      component: blogList
    },
    {
      path: '/blogInfo',
      name: blogInfo,
      component: blogInfo
    },
    {
      path: '/labelList',
      name: 'labelList',
      component: labelList
    },
    {
      path: '/aboutMe',
      name: 'aboutMe',
      component: aboutMe
    },
    {
      path: '/newsList',
      name: 'newsList',
      component: newsList
    }
  ]
})
