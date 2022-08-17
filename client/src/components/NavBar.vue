<template>
  <nav class="navbar navbar-expand-lg bg-light sticky-top">
    <div class="container">
      <a class="navbar-brand">
        <p class="h3 text-success">Serum</p>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a @click="toHome" style="cursor: pointer" class="nav-link">Home</a>
          </li>
          <li v-if="!access_token">
            <router-link to="/login" class="nav-link">Sign in</router-link>
          </li>
          <li v-if="!access_token">
            <router-link to="/register" class="nav-link">Sign up</router-link>
          </li>
        </ul>
        <div v-if="access_token" class="d-flex nav-item dropdown justify-content-start align-items-center">
          <li class="nav-item dropdown me-3" style="list-style: none">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Category </a>
            <ul class="dropdown-menu">
              <li>
                <a v-for="category in categories" :key="category.id" @click="filterProduct(category.name)" href="#" class="dropdown-item">{{ category.name }}</a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown me-3" style="list-style: none">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png" class="rounded-circle bg-dark" style="width: 40px" />
            </a>
            <ul class="dropdown-menu">
              <li style="cursor: pointer">
                <div @click="toWishlist" class="d-flex">
                  <img src="../assets/heart.png" style="width: 20px; height: 20px; margin-left: 10px" title="logout icons" />
                  <p class="mb-0 ms-2">Wishlist</p>
                </div>
                <hr class="dropdown-divider" />
                <p @click="logout" class="ms-3 mb-0">Logout</p>
              </li>
            </ul>
          </li>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapWritableState } from 'pinia';
import { useLoginStore } from '../stores/user';

export default {
  data() {
    return {
      categories: [],
    };
  },

  methods: {
    logout() {
      localStorage.clear();
      this.access_token = "";
      this.$router.push("/login");
    },
  },

  computed: {
    ...mapWritableState(useLoginStore, ["access_token"]),
  }
};
</script>
