import { createRouter, createWebHistory } from 'vue-router'
import NotFoundView from '../views/NotFoundView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import ParentView from '../views/ParentView.vue'
import HomeView from '../views/HomeView.vue'
import SavedView from '../views/SavedView.vue'
import PopularDetailView from '../views/PopularDetailView.vue'
import SearchView from '../views/SearchView.vue'
import SavedDetailView from '../views/SavedDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFoundView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      beforeEnter() {
        if (localStorage.access_token) {
          router.push({ name: 'home' })
        }
      }
    },
    {
      path: '/',
      component: ParentView,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: 'search',
          name: 'search',
          component: SearchView,
        },
        {
          path: 'saved',
          name: 'saved',
          component: SavedView,
          beforeEnter() {
            if (!localStorage.access_token) {
              router.push({ name: 'login' })
            }
          }
        },
        {
          path: 'popularDetail/:popularId',
          name: 'popularDetail',
          component: PopularDetailView,
        },
        {
          path: 'savedDetail/:savedId',
          name: 'savedDetail',
          component: SavedDetailView,
        },
      ]
    }
  ]
})

export default router
