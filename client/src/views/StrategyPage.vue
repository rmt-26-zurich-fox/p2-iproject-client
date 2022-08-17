<script>
import { mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  data() {
    return {
      strategyValues: [],
      idx: 0,
    };
  },
  computed: {
    ...mapState(useCounterStore, ["strategy"]),
  },
  methods: {
    changeIdx(idx) {
      this.idx = idx;
    },
  },
  created() {
    this.strategyValues = this.strategy;
  },
};
</script>
<template>
  <img :src="strategyValues[idx].imageUrl" alt="" />
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" v-for="(st, idx) in strategy" :key="st.id">
        <a class="page-link" href="#" @click.prevent="changeIdx(idx)">{{
          idx + 1
        }}</a>
      </li>
    </ul>
  </nav>
</template>

<style>
img {
  height: 450px;
}
</style>
