import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: ()=> import ('../views/LandingPage.vue')
    },
    {
      path: '/home',
      name: 'HomePage',
      component: ()=> import ('../views/HomePage.vue')
    },

  ]
})

export default router
