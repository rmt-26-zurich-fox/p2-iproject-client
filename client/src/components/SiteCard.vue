<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  methods: {
    ...mapActions(useCounterStore, ["getSite"]),
    gettingSite(site) {
      this.getSite(site);
    },
  },
};
</script>
<template>
  <button @click.prevent="gettingSite('A')">A</button>
  <button @click.prevent="gettingSite('B')">B</button>
</template>
