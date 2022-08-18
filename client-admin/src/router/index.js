import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import HomePage from '@/views/HomePage.vue'
import BrandList from '@/views/brand/BrandList.vue'
import BrandForm from '@/views/brand/BrandForm.vue'
import BrandDetail from '@/views/brand/BrandDetail.vue'
import ProductList from '@/views/product/ProductList.vue'
import ProductForm from '@/views/product/ProductForm.vue'
import ProductDetail from '@/views/product/ProductDetail.vue'
import ListUser from '@/views/user/ListUser.vue'
import UserForm from '@/views/user/UserForm.vue'
import UserDetail from '@/views/user/UserDetail.vue'

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
        },
        {
          path: 'brands/:brandId',
          name: "showBrand",
          component: BrandDetail
        },
        {
          path: 'products',
          name: "products",
          component: ProductList
        },
        {
          path: 'products/create',
          name: "createProduct",
          component: ProductForm
        },
        {
          path: 'products/:productId',
          name: "editProduct",
          component: ProductForm
        },
         {
          path: 'products/:productId',
          name: "showProduct",
          component: ProductDetail
        },
        {
          path: 'users',
          name: "users",
          component: ListUser
        },
        {
          path: 'users/create',
          name: "createUser",
          component: UserForm
        },
        {
          path: 'users/:userId',
          name: "editUser",
          component: UserForm
        },
        {
          path: 'users/:userId',
          name: "showUser",
          component: UserDetail
        },
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
