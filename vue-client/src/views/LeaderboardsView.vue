<script>
import { mapState, mapActions } from "pinia";
import { useAllStateStore } from "../stores/allState";

export default {
  computed: {
    ...mapState(useAllStateStore, []),
  },
  methods: {
    ...mapActions(useAllStateStore, []),
  },
  created(){
  }
}
</script>

<template>
  <main>
    <h1>Leaderboards</h1>
  </main>
</template>
