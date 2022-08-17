<template>
  <div class="max-w-sm bg-white rounded-lg shadow-md">
    <div class="container1">
      <div class="vertical-center">
        <img
          class="p-8 rounded-t-lg"
          :src="cake.imageUrl"
          alt="product image"
        />
      </div>
    </div>

    <div class="px-5 pb-5 mb-0">
      <h5 class="text-l font-semibold tracking-tight text-gray-900">
        {{ cake.name }}
      </h5>

      <div class="flex items-center mt-2.5 mb-5"></div>
      <div class="flex justify-between items-center">
        <span class="text-l font-semibold text-gray-900">{{ priceIDR }}</span>
        <a
          href=""
          v-if="showIcon"
          @click.prevent="addCart"
          class="text-white hover:bg-green-100 font-medium rounded-lg text-sm text-center"
          ><img
            class="w-6"
            src="https://img.icons8.com/pastel-glyph/64/000000/shopping-basket-2--v2.png"
        /></a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "pinia";
import { mapState } from "pinia";
import { productStore } from "../stores/product";

export default {
  props: ["cake"],

  computed: {
    ...mapState(productStore, ["cart"]),
    priceIDR() {
      let price = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(this.cake.price);

      return price;
    },

    showIcon() {
      let show = true;
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].CakeId === this.cake.id) {
          show = false;
        }
      }
      return show;
    },
  },
  methods: {
    ...mapActions(productStore, ["createCart", "fetchCart"]),

    addCart() {
      if (!localStorage.access_token) {
        this.$router.push({ name: "login" });
      } else {
        this.createCart(this.cake.id)
          .then((response) => {
            console.log(response.data.message);
            this.fetchCart();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style>
.container1 {
  height: 250px;
  position: relative;
}

.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>
