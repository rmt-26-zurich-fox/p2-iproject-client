import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import MyProfileView from '../views/MyProfileView.vue';
import LeaderboardsView from '../views/LeaderboardsView.vue';
import QuizView from '../views/QuizView.vue';

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
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/profile',
      name: 'profile',
      component: MyProfileView
    },
    {
      path: '/leaderboards',
      name: 'leaderboards',
      component: LeaderboardsView
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: QuizView
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   const access_token = localStorage.getItem("access_token");

//   if(to.name === "login" && access_token){
//     next("/");
//   } else if((to.name !== "login" || to.name !== "register") && !access_token){
//     next("/login")
//   } else {
//     next();
//   }
// })

export default router;
