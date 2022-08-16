<script>
import { mapActions } from "pinia";
import { useCustomStore } from "../stores/custom";

export default {
  props: ["cart", "index"],
  computed: {
    getTotalCostFormatted() {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(this.cart.totalCost);
    },
  },
  methods: {
    ...mapActions(useCustomStore, ["cancelProductFromCart"]),
    buttonCancelHandler() {
      this.cancelProductFromCart(this.cart.id);
    },
  },
};
</script>

<template>
  <tr>
    <td>{{ index + 1 }}</td>
    <td>
      <img :src="cart.Product.imageUrl" style="width: 80px; height: 100px" />
    </td>
    <td>{{ cart.Product.name }}</td>
    <td>{{ cart.stock }}</td>
    <td>{{ cart.Product.weight }}</td>
    <td>{{ getTotalCostFormatted }}</td>
    <td>
      <button class="btn btn-warning" @click="buttonCancelHandler">
        Cancel
      </button>
    </td>
  </tr>
</template>

<style scoped>
td {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
