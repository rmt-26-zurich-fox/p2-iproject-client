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
<template>
  <div class="container" style="margin-top: 100px">
    <div class="row">
      <div class="col-3" v-for="agent in agents" :key="agent.id">
        <AgentCard :agent="agent" />
      </div>
    </div>
  </div>
</template>
