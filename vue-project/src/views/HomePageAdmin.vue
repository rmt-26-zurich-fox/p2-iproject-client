<script>
import NavBarCompAdmin from "../components/NavBarCompAdmin.vue";
import AdminHomeProductTable from "../components/AdminHomeProductTable.vue";

export default {
  components: {
    NavBarCompAdmin,
    AdminHomeProductTable,
  },
};
</script>

<template>
  <NavBarCompAdmin />
  <div class="card">
    <div class="card-header text-center title">Home</div>
    <div class="card-body text-center">
      <AdminHomeProductTable />
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
