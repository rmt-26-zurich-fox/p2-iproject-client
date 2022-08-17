<script>
import router from "../router";

export default {
  methods: {
    Home() {
      router.push("/");
    },
    Agents() {
      router.push("/agents");
    },
    Strategies() {
      router.push("/strategies");
    },
  },
};
</script>
<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-transparent">
    <div class="container">
      <a class="navbar-brand" href="#" @click="Home"
        ><h1 class="text-white">GegeGaming</h1></a
      >
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="#"
              @click="Home"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="#"
              @click="Agents"
              >Agents</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="#"
              @click="Strategies"
              >Strategies</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
