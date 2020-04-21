import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Welcome from '@/components/Welcome'
import Users from '@/components/users/Users'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: Welcome },
        { path: '/users', component: Users }
      ]

    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
