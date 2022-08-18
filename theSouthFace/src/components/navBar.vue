<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <RouterLink class="navbar-brand" to="/">THE SOUTH FACE</RouterLink>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <RouterLink class="nav-link" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
        <RouterLink class="nav-link" to="/cart" v-if="access_token">Cart</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/simulate" v-if="access_token"
            >Simulate</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/login" v-if="!access_token"
            >Login</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/register" v-if="!access_token"
            >Register</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink
            class="nav-link"
            to="/"
            v-if="access_token"
            @click.prevent="logout"
            >Log out</RouterLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState, mapWritableState } from "pinia";
import { theSouthFace } from "../stores/theSouthFace";

export default {
  name: "NavBar",
  data() {
    return {
      userEmail :''
    };
  },
  computed: {
    ...mapWritableState(theSouthFace, ["access_token", "notLoggedIn"]),
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.access_token = localStorage.access_token;
      this.userEmail = localStorage.userEmail
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.notLoggedIn = true;
      this.$router.push("/");
    },
  },
};
</script>

<style>
.navbar {
  padding-left: 30px;
  background-color: rgba(73, 73, 73, 0.281);
}
</style>
