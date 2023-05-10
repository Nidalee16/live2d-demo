import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/page/Home.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    redirect: () => {
      return { name: 'Home' }
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// router.beforeEach(async (to, from, next) => {
//   if (localStorage.getItem('aiaLogin') && to.name === 'Login') {
//     next({ name: 'Dashboard' })
//   } else if (!localStorage.getItem('aiaLogin') && to.name !== 'Login') {
//     next({ name: 'Login' })
//   } else {
//     next()
//   }
// })

export default router
