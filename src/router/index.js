import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Course from '@/components/Course'
import Micro from '@/components/Micro'
import News from '@/components/News'
import Detail from '@/components/Detail'
import Login from '@/components/Login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/course',
      name: 'course',
      component: Course
    },
    {
      path: '/micro',
      name: 'micro',
      component: Micro,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/News',
      name: 'News',
      component: News,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ],
  mode:'history'
})
