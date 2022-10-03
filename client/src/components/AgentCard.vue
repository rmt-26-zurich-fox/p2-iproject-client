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
  <div class="bg-danger text-white position-relative m-3 rounded">
    <img
      :src="agent.icon"
      class="card-img"
      alt="..."
      style="width: 100%; height: 100%; object-fit: cover"
    />
    <div class="card-img-overlay overlay">
      <div
        class="position-absolute top-50 start-50 translate-middle text-center"
      >
        <h1 class="card-title">{{ agent.name }}</h1>
        <button class="btn btn-dark" @click.prevent="agentDetail">
          Detail
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.overlay {
  opacity: 0;
  transition: all 0.5s;
}
.overlay:hover {
  opacity: 1;
  background-color: #dc354684;
}
</style>
