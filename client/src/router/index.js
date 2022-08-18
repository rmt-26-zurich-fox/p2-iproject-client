import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import DetailPage from '../views/DetailPage.vue'
import BookmarkPage from '../views/BookmarkPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailPage
    },
    {
      path: '/bookmarks',
      name: 'bookmarks',
      component: BookmarkPage
    },
  ]
})

router.beforeEach((to, from, next) => {
  const access_token = localStorage.access_token
  if ((to.name === 'login' || to.name === 'register') && access_token) {
    next('/')
  } else if (to.name === 'bookmarks' && !access_token) {
    next('/login')
  } else {
    next()
  }
})

export default router
