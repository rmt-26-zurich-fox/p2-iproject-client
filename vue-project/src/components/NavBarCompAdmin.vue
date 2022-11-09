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
      <div class="mx-auto" style="padding-left: 11rem">
        <router-link class="navbar-link" to="/admin">Home</router-link> |
        <router-link class="navbar-link" to="/add-item">Add Item </router-link>
        |
        <router-link class="navbar-link" to="/order-list-customer">
          Order List Customer
        </router-link>
        |
        <router-link class="navbar-link" to="/profile"> Profile</router-link> |
        <router-link
          class="navbar-link"
          to="/login"
          @click="logoutClearStorage"
        >
          Logout
        </router-link>
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
