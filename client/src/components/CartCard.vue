<script>
import { mapActions, mapState } from "pinia";
import { useAllStore } from "../stores/useAllStore";

export default {
  props: ["cart"],
  computed: {},

  methods: {
    ...mapActions(useAllStore, ["formatRupiah", "deleteCart", "fetchCart"]),

    deleteCartLocal() {
      this.deleteCart(this.cart.id);
      
    },
  },
};
</script>

<template>
  <tr>
    <th scope="row" class="border-0">
      <div class="p-2">
        <img
          :src="cart.Product.imageUrl"
          alt=""
          width="150"
          class="img-fluid rounded shadow-sm"
        />
        <div class="ml-3 d-inline-block align-middle">
          <h5 class="mb-0">
          {{cart.Product.name}}
          </h5>
        </div>
      </div>
    </th>
    <td class="border-0 align-middle">
      <strong>{{this.formatRupiah(cart.Product.price)}} </strong>
    </td>
    <td class="border-0 align-middle">
      <strong>{{ cart.quantity }}</strong>
    </td>
    <td class="border-0 align-middle">
      <a href="#" @click.prevent="deleteCartLocal" class="text-dark"
        >Delete Cart</a
      >
    </td>
  </tr>
</template>
