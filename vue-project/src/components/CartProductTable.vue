<script>
import CartProductRow from "../components/CartProductRow.vue";

export default {
  data() {
    return {
      totalCostNeedToPay: 0,
    };
  },
  components: {
    CartProductRow,
  },
  props: ["carts"],
  computed: {
    totalCostProduct() {
      let allProductCost = 0;
      for (let x = 0; x < this.carts.length; x++) {
        allProductCost += this.carts[x].totalCost;
      }
      this.totalCostNeedToPay = allProductCost;
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(allProductCost);
    },
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
        <th>Stock</th>
        <th>Weight (gram)</th>
        <th>Total Cost</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="carts.length === 0">
        <td colspan="7">There is no items</td>
      </tr>
      <!-- Comp Row Here -->
      <CartProductRow
        v-for="(cart, index) in carts"
        :key="cart.id"
        :cart="cart"
        :index="index"
      />
      <tr v-if="carts.length !== 0">
        <td colspan="5">Total item in cart cost :</td>
        <td colspan="2">{{ totalCostProduct }}</td>
      </tr>
    </tbody>
  </table>
  <button class="btn btn-success">Buy All Item in Cart</button>
</template>

<style scoped>
th {
  font-family: monospace;
}
td {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>
