<template>
  <div class="table-users">
    <div class="header">Laundry List</div>
    <table cellspacing="0">
      <TableHead />
      <TableRow v-for="(el, i) in clothes" :key="el.id" :el="el" />
    </table>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import TableHead from "./TableHead.vue";
import TableRow from "./TableRow.vue";

export default {
  components: {
    TableHead,
    TableRow,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(useCounterStore, ["clothes"]),
  },
  methods: {},
};
</script>
