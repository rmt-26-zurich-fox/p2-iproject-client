<script>
import { mapState, mapActions } from "pinia";
import { useCustomStore } from "../stores/custom";
import NavBarComp from "../components/NavBarComp.vue";
import OrderProductTable from "../components/OrderProductTable.vue";

export default {
  components: {
    NavBarComp,
    OrderProductTable,
  },
  methods: {
    ...mapActions(useCustomStore, ["fetchOrderList"]),
  },
  computed: {
    ...mapState(useCustomStore, ["orders"]),
  },
  created() {
    this.fetchOrderList();
  },
};
</script>

<template>
  <NavBarComp />
  <div class="card">
    <div class="card-header text-center title">Order List</div>
    <div class="card-body text-center">
      <h1>List Product</h1>
      <!-- Table here -->
      <OrderProductTable :orders="orders" />
    </div>
  </div>
</template>
