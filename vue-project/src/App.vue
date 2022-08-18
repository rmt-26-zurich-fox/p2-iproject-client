<script>
import FooterBar from "./components/FooterBar.vue"
import NavBar from "./components/NavBar.vue"
import HomePage from "./pages/HomePage.vue"
import LoginPage from "./pages/LoginPage.vue"
import { RouterView } from "vue-router"

import { mapActions, mapWritableState } from "pinia"
import { authorizationStore } from "./stores/authorizationStore"
// import Swal from "sweetalert2"

export default {
  computed: {
    ...mapWritableState(authorizationStore, ["isLogin"])
  },
  created() {
    if (localStorage.access_token) {
      this.isLogin = true
    } else {
      this.isLogin = false
    }
  },

  components: {
    FooterBar,
    NavBar,
    HomePage,
    LoginPage,
  },
  // data() {
  //   return {
  //     page: "isLoginPage",
  //     loginInput: {
  //       email: "",
  //       password: ""
  //     }
  //   }
  // },
  // created() {
  //   if (localStorage.getItem("access_token")) {
  //     this.page = "isHomePage"
  //   }
  // },
  // methods: {
  //   // successLogin() {
  //   //   this.page = 'isHomePage'
  //   // },
  //   successLogin() {
  //     this.page = 'isHomePage'
  //   }
  // }
}

</script>

<template>
  <div>
    <NavBar />
    <RouterView />
  </div>
</template>
