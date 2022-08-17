import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import ParentView from '../views/ParentView.vue'
import CartPage from '../views/CartPage.vue'
import AddPage from '../views/AddPage.vue'
import HistoryPage from '../views/HistoryPage.vue'
import DetailPage from '../views/DetailPage.vue'
import UpdatePage from '../views/UpdatePage.vue'

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
        {
          path: '/detail/:id',
          name: 'detail',
          component: DetailPage
        },
        {
          path: '/update/:id',
          name: 'update',
          component: UpdatePage
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.token

  if((to.name === 'login') && token) {
    next('/')
  }
  else if ((to.name === 'cart' || to.name === 'add' || to.name === 'history' || to.name === 'detail' || to.name === 'update') && !token) {
    next('/login')
  }
  else {
    next()
  }
})

export default router
