<script>
import OrderProductRow from "../components/OrderProductRow.vue";

export default {
  props: ["orders"],
  components: {
    OrderProductRow,
  },
};
</script>

<template>
  <table class="table table-striped table-md table-bordered border-dark">
    <thead class="table-secondary">
      <tr>
        <th>No</th>
        <th>Image</th>
        <th>Product Name</th>
        <th>Product Status</th>
        <th>Stock</th>
        <th>Total Cost</th>
        <th>Order Date</th>
        <th>Last Update</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="orders.length === 0">
        <td colspan="8">There is no items</td>
      </tr>
      <!-- Comp Row Here -->
      <OrderProductRow
        v-for="(order, index) in orders"
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
