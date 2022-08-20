<script>
import { mapState, mapActions } from "pinia";
import { useCustomStore } from "../stores/custom";
import AdminOrderListCustomerRow from "./AdminOrderListCustomerRow.vue";

export default {
  components: {
    AdminOrderListCustomerRow,
  },
  computed: {
    ...mapState(useCustomStore, ["adminOrderListCustomer"]),
  },
  methods: {
    ...mapActions(useCustomStore, ["fetchAdminOrderListCustomer"]),
  },
  created() {
    this.fetchAdminOrderListCustomer();
  },
};
</script>

<template>
  <table class="table table-striped table-md table-bordered border-dark">
    <thead class="table-secondary">
      <tr>
        <th>No</th>
        <th>Order Status</th>
        <th>Buyed Stock</th>
        <th>Total Cost</th>
        <th>User Name</th>
        <th>User Address</th>
        <th>Product Name</th>
        <th>Product Image</th>
        <th>Order Date</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="adminOrderListCustomer.length === 0">
        <td colspan="9">There is no orders</td>
      </tr>
      <!-- Comp Row Here -->
      <AdminOrderListCustomerRow
        v-for="(order, index) in adminOrderListCustomer"
        :key="order.id"
        :order="order"
        :index="index"
      />
    </tbody>
  </table>
</template>

<style scoped>
th {
  font-family: monospace;
}
td {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>
