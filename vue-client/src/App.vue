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
    ...mapActions(useAllStateStore, ["loginCheck"]),
  },
  created() {
    this.loginCheck();
  }
}
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </header>

  <RouterView />

</template>