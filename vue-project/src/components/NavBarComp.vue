<script>
export default {
  data() {
    return {
      access_token: localStorage.access_token,
      email: localStorage.email,
      profile_first_name: localStorage.profile_first_name,
    };
  },
  methods: {
    logoutClearStorage() {
      localStorage.clear();
    },
  },
};
</script>

<template>
  <!-- Nav Bar -->
  <nav class="navbar sticky-top bg-light">
    <div class="container-fluid" style="justify-content: center; gap: 10px">
      <div class="mx-auto" style="padding-left: 13rem">
        <router-link class="navbar-link" to="/">Home </router-link>
        <router-link
          class="navbar-link"
          to="/cart"
          v-if="access_token && email !== 'guest@guest.com'"
        >
          Cart
        </router-link>
        <router-link
          class="navbar-link"
          to="/order-list"
          v-if="access_token && email !== 'guest@guest.com'"
        >
          Order
        </router-link>
        <router-link
          class="navbar-link"
          to="/profile"
          v-if="access_token && email !== 'guest@guest.com'"
        >
          Profile
        </router-link>
        <router-link class="navbar-link" to="/login" v-if="!access_token">
          Login
        </router-link>
        <router-link
          class="navbar-link"
          to="/login"
          @click="logoutClearStorage"
          v-else
        >
          Logout</router-link
        >
      </div>
      <div class="ml-auto my-auto">
        <p class="navbar" v-if="profile_first_name === 'Input First Name'">
          Hi, {{ email }}!
        </p>
        <p class="navbar" v-else>Hi, {{ profile_first_name }}!</p>
      </div>
    </div>
  </nav>
</template>

<style scoped>
a {
  text-decoration: none;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Verdana, sans-serif;
}
p {
  margin-top: 1rem;
  font-family: Cochin, Cambria, Georgia, Times, "Times New Roman", serif;
  font-size: large;
}
</style>
