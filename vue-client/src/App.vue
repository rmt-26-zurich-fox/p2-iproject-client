<script>
import { mapState, mapActions } from "pinia";
import { useAllStateStore } from "./stores/allState";
import { RouterLink, RouterView } from 'vue-router'

export default {
  components: {
    RouterLink,
    RouterView,
  },
  computed: {
    ...mapState(useAllStateStore, []),
  },
  methods: {
    ...mapActions(useAllStateStore, [
      "loginCheck",
      "logoutHandler"
    ]),
    logout(){
      this.logoutHandler();
    }
  },
  created() {
    this.loginCheck();
  }
}
</script>

<template>
  <header>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/login">login</RouterLink>
      <RouterLink to="/register">signup</RouterLink>
      <RouterLink to="/credit">credit</RouterLink>
      <a href="" @click.prevent="logout">logout</a>
  </header>

  <RouterView />

</template>