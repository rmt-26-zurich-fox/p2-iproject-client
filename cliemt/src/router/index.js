import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import ProfilePage from "../views/ProfilePage.vue";
import ExplorePage from "../views/ExplorePage.vue";
import PostDetailPage from "../views/PostDetailPage.vue";
import CreatePost from "../views/CreatePost.vue";
import Swal from "sweetalert2";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfilePage,
    },
    {
      path: "/explore",
      name: "explore",
      component: ExplorePage,
    },
    {
      path: "/post/:id",
      name: "post_detail",
      component: PostDetailPage
    },
    {
      path: "/new-post/",
      name: "newPost",
      component: CreatePost
    },
  ],
});
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.access_token;
  if ((to.name === "login" || to.name === "register") && isLogin) {
    next({ name: "home" });
  } else if ((to.name === "home" || to.name === "profile") && !isLogin) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "let's login first",
      showConfirmButton: false,
      timer: 1200,
    });
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
