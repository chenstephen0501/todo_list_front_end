import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import Home from '@/components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/users/register',
    name: 'Register',
    component: Register
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('accessToken')

  if (!token && to.path !== '/users/login' && to.path !== '/users/register') {
    next('/users/login')
  } 
  else {
    next()
  }
})

export default router
