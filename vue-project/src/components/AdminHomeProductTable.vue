<script>
import { mapState, mapActions } from "pinia";
import { useCustomStore } from "../stores/custom";
import AdminHomeProductRow from "./AdminHomeProductRow.vue";

export default {
  components: {
    AdminHomeProductRow,
  },
  computed: {
    ...mapState(useCustomStore, ["adminProducts"]),
  },
  methods: {
    ...mapActions(useCustomStore, ["fetchAdminProductHome"]),
  },
  created() {
    this.fetchAdminProductHome();
  },
};
</script>

<template>
  <table class="table table-striped table-md table-bordered border-dark">
    <thead class="table-secondary">
      <tr>
        <th>No</th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Weight</th>
        <th>Image</th>
        <th>Created Date</th>
        <th>Last Update</th>
        <th>Product Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="adminProducts.length === 0">
        <td colspan="9">There is no items</td>
      </tr>
      <!-- Comp Row Here -->
      <AdminHomeProductRow
        v-for="(product, index) in adminProducts"
        :key="product.id"
        :product="product"
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
