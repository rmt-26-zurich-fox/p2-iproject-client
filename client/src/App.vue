<script>
import { RouterLink, RouterView } from "vue-router";
import { mapState, mapActions } from "pinia";
import { useMain } from "./stores/main";
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  methods: {
    ...mapActions(useMain, ["refreshPage"]),
  },
  created() {
    this.refreshPage();
  },
};
</script>
<template>
  <NavBar />
  <RouterView />
</template>
