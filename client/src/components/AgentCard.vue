<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  props: ["agent"],
  methods: {
    ...mapActions(useCounterStore, ["getAgent"]),
    agentDetail() {
      this.getAgent(this.agent);
    },
  },
};
</script>
<template>
  <img :src="agent.img" class="card-img-top" alt="..." />
  <div class="card-body" style="color: red">
    <h5 class="card-title">{{ agent.name }}</h5>
    <a href="#" class="btn btn-primary" @click.prevent="agentDetail">Detail</a>
  </div>
</template>
