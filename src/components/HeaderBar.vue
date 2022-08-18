<template>
  <header>
    <div class="logo">
      <h1><a>Movie</a><a>Ku</a></h1>
    </div>
    <div>
      <router-link :to="'/home'">Movie</router-link>
      <router-link :to="'/bookmark'">Bookmark</router-link>
    </div>
    <div>
      <h4 v-if="!isLogin" @click="$router.push({ name: 'login' })">Login</h4>
      <h4 v-if="isLogin" @click="logout">Logout</h4>
    </div>
  </header>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
import { mapActions } from "pinia";
import { useGlobalStore } from "../stores/globalStore";

const auth = getAuth();

export default {
  data() {
    return {
      isLogin: localStorage.access_token || false,
    };
  },
  methods: {
    ...mapActions(useGlobalStore, ["successHandler"]),
    async logout() {
      try {
        await signOut(auth)
        localStorage.clear();
        this.$router.push("/login");
        this.successHandler("Logout successfully")
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
