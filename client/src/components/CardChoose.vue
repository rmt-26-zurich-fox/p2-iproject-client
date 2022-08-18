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
  <div class="strategy">
    <h1 class="text-white">Strategy</h1>
    <button class="str-btn bg-danger" @click.prevent="gettingType('Attacker')">
      <h3>Attacker</h3>
    </button>
    <button class="str-btn bg-primary" @click.prevent="gettingType('Defender')">
      <h3>Defender</h3>
    </button>
  </div>
</template>
<style>
.strategy {
  text-align: center;
  margin-top: 20px;
}
.str-btn {
  padding: 50px;
  font-size: 24px;
  color: white;
}
</style>
