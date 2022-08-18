import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../views/HomePage.vue"
import LoginPage from "../views/LoginPage.vue"
import RegisterPage from "../views/RegisterPage.vue"
import AddPage from "../views/AddPage.vue"
import MyReport from "../views/MyReport.vue"
import EditPage from "../views/EditPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
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
      path: '/reports/add',
      name: 'add',
      component: AddPage
    },
    {
      path: '/myreport',
      name: 'myreport',
      component: MyReport
    },
    {
      path: '/reports/:id',
      name: 'editReport',
      component: EditPage
    }



  ]
})

router.beforeEach((to,from,next)=>{
  let token = localStorage.getItem("access_token")
  if((to.name=== 'add'|| to.name ==='myreport'|| to.name=== 'editReport') && !token){
    next('/login')
  }else if((to.name==='login'|| to.name === 'register') && token){
    next('/')
  }else{
    next()
  }
})

export default router
