<script>
import { RouterView } from "vue-router";
import { useCounterStore } from "./stores/counter";
import { mapWritableState, mapActions } from "pinia";

export default {
  methods: {
    ...mapActions(useCounterStore, ["parseJwt"])
  },  
  computed: {
    ...mapWritableState(useCounterStore, ["isLogin", "username"])
  },
  created () {
    if (localStorage.getItem("access_token")) {
      const payload = this.parseJwt(localStorage.getItem("access_token"));
      this.username = payload.username;
      this.isLogin = true;
    }
  }
}
</script>

<template>
  <RouterView />
</template>
