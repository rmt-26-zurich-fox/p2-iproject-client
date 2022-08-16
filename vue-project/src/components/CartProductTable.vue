<script>
import CartProductRow from "../components/CartProductRow.vue";

export default {
  components: {
    CartProductRow,
  },
  props: ["carts"],
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
    </tbody>
  </table>
  <button class="btn btn-success">Buy All Item in Cart</button>
</template>
