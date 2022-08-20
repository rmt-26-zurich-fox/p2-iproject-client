<script>
import { mapActions } from "pinia";
import { useCustomStore } from "../stores/custom";
import NavBarCompAdmin from "../components/NavBarCompAdmin.vue";
import AdminProductForm from "../components/AdminProductForm.vue";

export default {
  components: {
    NavBarCompAdmin,
    AdminProductForm,
  },
  methods: {
    ...mapActions(useCustomStore, ["fetchAdminProductDetail"]),
  },
  created() {
    this.fetchAdminProductDetail(+this.$route.params.id);
  },
};
</script>

<template>
  <NavBarCompAdmin />
  <div class="card">
    <div class="card-header text-center title">Edit Product</div>
    <div class="card-body text-center">
      <!-- Form Here -->
      <AdminProductForm isState="Edit" />
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
