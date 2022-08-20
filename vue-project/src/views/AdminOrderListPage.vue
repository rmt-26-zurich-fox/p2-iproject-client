<script>
import NavBarCompAdmin from "../components/NavBarCompAdmin.vue";
import AdminOrderListCustomerTable from "../components/AdminOrderListCustomerTable.vue";

export default {
  components: {
    NavBarCompAdmin,
    AdminOrderListCustomerTable,
  },
};
</script>

<template>
  <NavBarCompAdmin />
  <div class="card">
    <div class="card-header text-center title">Order List Customer</div>
    <div class="card-body text-center">
      <!-- Table Here -->
      <AdminOrderListCustomerTable />
    </div>
  </div>
</template>

<style scoped>
div .title {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: #1e272e;
  font-size: 2rem;
}
</style>
