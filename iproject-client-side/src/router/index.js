import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import FavoritePage from '../views/FavoritePage.vue'
import DashBoard from '../views/DashBoard.vue'
import RegisterPage from '../views/RegisterPage.vue'

// import CreatePage from '../views/CreatePage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'home',
      component: DashBoard,
      children: [
        {
          path: '/',
          name: 'landing-page',
          component: LandingPage
    
        },
        {
          path: '/home',
          name: 'home',
          component: HomeView
        },
        {
          path: '/favorites',
          name: 'favorite',
          component: FavoritePage
        },
        {
          path: '/add',
          name: 'add',
          // component: CreatePage
        },
        {
          path: '/home',
          name: 'home',
          component: HomeView
        },
      ]
    },
    ,
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
      path: '/:pathMatch(.*)*',
      name: 'page-not-found',
    }
  ]
})

export default router
