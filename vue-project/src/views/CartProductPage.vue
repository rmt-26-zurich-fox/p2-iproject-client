<script>
import { mapActions } from "pinia";
import { useCustomStore } from "../stores/custom";
import NavBarComp from "../components/NavBarComp.vue";
import CartProductTable from "../components/CartProductTable.vue";

export default {
  components: {
    NavBarComp,
    CartProductTable,
  },
  methods: {
    ...mapActions(useCustomStore, ["fetchProductCart"]),
  },
  created() {
    this.fetchProductCart();
  },
};
</script>

<template>
  <NavBarComp />
  <div class="card">
    <div class="card-header text-center title">Cart</div>
    <div class="card-body text-center">
      <h1>List Product</h1>
      <!-- Table here -->
      <CartProductTable />
    </div>
  </div>
</template>

<style scoped>
div .title {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: #1e272e;
  font-size: 2rem;
}
h1 {
  font-family: Georgia, "Times New Roman", Times, serif;
  color: #222f3e;
  font-size: 3rem;
}
p {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: #485460;
  font-size: 1.3rem;
  font-weight: 500;
}
</style>
