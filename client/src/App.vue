<script>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
export default {
  components: { RouterView, NavBar },
};
</script>

<template>
  <header>
    <NavBar />
  </header>
  <RouterView />
</template>
