<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  methods: {
    ...mapActions(useCounterStore, ["getType"]),
    gettingType(type) {
      this.getType(type);
    },
  },
};
</script>
<template>
  <button @click.prevent="gettingType('Attacker')">Attacker</button>
  <button @click.prevent="gettingType('Defender')">Defender</button>
</template>
