import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import ParentView from '../views/ParentView.vue'
import MyTripPage from '../views/MyTripPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/login',
      name: 'login',
      component: LoginPage
    },
    {
      path:'/',
      component: ParentView,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/mytrip',
          name: 'mytrip',
          component: MyTripPage
        }
      ]
    },
    
  ]
})

router.beforeEach((to, from, next) => {
  const access = localStorage.access_token
  if(to.name === 'mytrip' && !access){
    next({name: 'login'})
  }else if(to.name === 'login' && access){
    next({name: 'home'})
  }else{
    next()
  }
})


export default router
