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
  <div class="text-center" style="padding-top: 100px">
    <h1 class="text-white">Strategy</h1>
    <img class="img-str" :src="strategyValues[idx].imageUrl" alt="" />
    <div class="pagination">
      <a
        class="pagi-btn"
        href="#"
        v-for="(st, idx) in strategy"
        :key="st.id"
        @click.prevent="changeIdx(idx)"
        ><h5>{{ idx + 1 }}</h5></a
      >
    </div>
  </div>
</template>

<style>
.img-str {
  height: 500px;
}
.pagination {
  margin: auto;
  margin-top: 20px;
  justify-content: center;
}

.pagi-btn {
  padding: 10px;
  margin: 5px;
  color: black;
  background-color: white;
  text-decoration: none;
  width: 50px;
  height: 50px;
}
.pagi-btn:hover {
  background-color: red;
  color: white;
}
</style>
