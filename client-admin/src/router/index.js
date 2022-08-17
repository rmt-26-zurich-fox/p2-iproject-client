import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import HomePage from '@/views/HomePage.vue'
import BrandList from '@/views/brand/BrandList.vue'
import BrandForm from '@/views/brand/BrandForm.vue'

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
        },
        {
          path: 'brands/create',
          name: "createBrand",
          component: BrandForm
        },
        {
          path: 'brands/:brandId',
          name: "editBrand",
          component: BrandForm
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
