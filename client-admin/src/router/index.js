import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import HomePage from '@/views/HomePage.vue'
import BrandList from '@/views/brand/BrandList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/',
      component: HomePage,
      children: [
        {
          path: 'brands',
          name: "brands",
          component: BrandList
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const access_token = localStorage.access_token
  if (to.name === 'brands' && !access_token) next({ name: 'login' })
  else if (to.name === 'login' && access_token) next({ name: 'brands' })
  else next()
})

export default router
