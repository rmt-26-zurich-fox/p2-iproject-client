import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import ParentView from '../views/ParentView.vue'
import CartPage from '../views/CartPage.vue'
import AddPage from '../views/AddPage.vue'
import HistoryPage from '../views/HistoryPage.vue'

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
      component: ParentView,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomePage
        },
        {
          path: '/cart',
          name: 'cart',
          component: CartPage
        },
        {
          path: '/add',
          name: 'add',
          component: AddPage
        },
        {
          path: '/history',
          name: 'history',
          component: HistoryPage
        },
      ]

    }
  ]
})

export default router
