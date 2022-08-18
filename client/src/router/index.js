import { createRouter, createWebHistory } from 'vue-router'
import homePage from "../views/homePage.vue"
import loginPage from "../views/loginPage.vue"
import registerPage from "../views/registerPage.vue"
import seasonPage from "../views/seasonPage.vue"
import detailPage from "../views/detailPage.vue"
import artsPage from "../views/artsPage.vue"
import planningsPage from "../views/planningsPage.vue"
import notFoundPage from "../views/notFoundPage.vue"


function notLogin(to, from, next){
  if(!localStorage.access_token){
    return next("/login")
  }
  next()
}

function alLogin(to, from, next){
  if(localStorage.access_token){
    return next("/")
  }
  next()
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: notFoundPage
    },
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/login',
      name: 'login',
      component: loginPage,
      beforeEnter: [alLogin]
    },
    {
      path: '/register',
      name: 'register',
      component: registerPage,
      beforeEnter: [alLogin]
    },
    {
      path: '/season/:season',
      name: 'season',
      component: seasonPage
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detailPage
    },
    {
      path: '/arts',
      name: 'arts',
      component: artsPage,
      beforeEnter: [notLogin]
    },
    {
      path: '/plannings',
      name: 'plannings',
      component: planningsPage,
      beforeEnter: [notLogin]
    }
  ]
})

export default router
