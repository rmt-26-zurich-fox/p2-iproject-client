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
import { mapActions } from "pinia";
import { useGlobalStore } from "../stores/globalStore";

export default {
  data() {
    return {
      isLogin: localStorage.access_token || false,
    };
  },
  methods: {
    ...mapActions(useGlobalStore, ["logout"]),
  },
};
</script>
