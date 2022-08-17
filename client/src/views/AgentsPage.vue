<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import AgentCard from "../components/AgentCard.vue";
export default {
  computed: {
    ...mapState(useCounterStore, ["agents"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["getAgents"]),
  },
  created() {
    this.getAgents();
  },
  components: { AgentCard },
};
</script>
<template class="d-flex">
  <div class="card" style="width: 500px">
    <AgentCard v-for="agent in agents" :key="agent.id" :agent="agent" />
  </div>
</template>
