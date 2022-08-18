<script>
import { mapWritableState, mapActions } from "pinia";
import { useAllStore } from "../stores/useAllStore";

export default {
  computed: {
    ...mapWritableState(useAllStore, ["isLogin"]),
  },

  methods: {
    ...mapActions(useAllStore, [
      "fetchAllProducts",
      "fetchCart",
      "fetchTransaction",
    ]),

    handleLogout() {
      localStorage.clear();
      this.$router.push("/");
      this.fetchAllProducts();
      this.isLogin = false;
    },
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.isLogin = true;
    }
  },
};
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">CoffeeShop</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/"
                >Home</router-link
              >
            </li>

            <li class="nav-item">
              <router-link v-if="!isLogin" class="nav-link" to="/login"
                >Sign In</router-link
              >
            </li>
            <li class="nav-item">
              <router-link v-if="!isLogin" class="nav-link" to="/register"
                >Sign Up</router-link
              >
            </li>

            <li class="nav-item">
              <router-link v-if="isLogin" class="nav-link" to="/cart"
                >My Order</router-link
              >
            </li>

            <li class="nav-item">
              <router-link v-if="isLogin" class="nav-link" to="/transaction"
                >My Transaction</router-link
              >
            </li>

            <li class="nav-item">
              <router-link
                v-if="isLogin"
                @click.prevent="handleLogout"
                class="nav-link"
                to="/login"
                >Sign Out</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
