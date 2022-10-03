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
  <div class="strategy">
    <h1 class="text-white">Site</h1>
    <button class="str-btn bg-danger" @click.prevent="gettingSite('A')">
      A
    </button>
    <button class="str-btn bg-primary" @click.prevent="gettingSite('B')">
      B
    </button>
  </div>
</template>
