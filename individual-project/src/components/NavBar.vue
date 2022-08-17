<script>
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  name: "NavBar",
  computed: {
    ...mapWritableState(useCounterStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["handleLogout"]),
    btnLogout() {
      this.handleLogout();
    },
  },
  created() {
    if (localStorage.access_token) {
      this.isLogin = true;
    }
  },
};
</script>

<template>
  <header>
    <nav>
      <div>
        <img src="../assets/logo-myDoctors.png" alt="image" />
      </div>

      <div class="navigation-bar">
        <ul>
          <router-link to="/">
            <li class="features-cursor-pointer home">Beranda</li></router-link
          >

          <router-link to="/profile" v-if="isLogin">
            <li class="features-cursor-pointer home">Profile</li></router-link
          >
          <router-link to="/login"
            ><li class="features-cursor-pointer signIn" v-if="!isLogin">
              Masuk
            </li></router-link
          >
          <router-link to="/register"
            ><li class="features-cursor-pointer register" v-if="!isLogin">
              Daftar
            </li></router-link
          >

          <li
            class="features-cursor-pointer register"
            v-if="isLogin"
            v-on:click="btnLogout"
          >
            Keluar
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
