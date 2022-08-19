<script>
import router from "../router";
import { mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  computed: {
    ...mapWritableState(useCounterStore, ["isLogin"]),
  },
  methods: {
    Home() {
      router.push({
        name: "home",
      });
    },
    Agents() {
      router.push({
        name: "agents",
      });
    },
    Strategies() {
      router.push({
        name: "maps",
      });
    },
    logout() {
      localStorage.clear();
      this.isLogin = false;
      router.push("/login");
    },
  },
};
</script>
<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-transparent">
    <div class="container">
      <a class="navbar-brand" href="#" @click.prevent="Home"
        ><h1 class="text-white">GegeGaming</h1></a
      >
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="#"
              @click.prevent="Home"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="#"
              @click.prevent="Agents"
              >Agents</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="#"
              @click.prevent="Strategies"
              >Maps</a
            >
          </li>
          <li class="nav-item" v-if="isLogin">
            <a
              class="nav-link active"
              aria-current="page"
              href="#"
              @click.prevent="logout"
              >Logout</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
