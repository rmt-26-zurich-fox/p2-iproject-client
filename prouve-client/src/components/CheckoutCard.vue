<template>
  <div class="flex justify-start mt-5">
    <div class="bg-white rounded-lg shadow-md mr-10 h-fit">
      <div class="container3 flex justify-center">
        <div class="vertical-center3">
          <img
            class="rounded-t-lg"
            :src="item.Cake.imageUrl"
            alt="product image"
          />
        </div>
      </div>
    </div>
    <div class="w-1/3">
      <p class="text-lg font-semibold text-gray-800 mt-7">
        {{ item.Cake.name }}
      </p>
    </div>
    <div class="w-1/4">
      <div
        class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-5"
      >
        <button
          @click="decrease"
          class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-200 h-full px-5 rounded-l cursor-pointer outline-none"
        >
          <span class="m-auto text-2xl font-thin">-</span>
        </button>
        <span
          class="text-center px-5 bg-gray-100 font-semibold text-base flex items-center text-gray-800 outline-none"
          >{{ item.amount }}</span
        >
        <button
          @click="increase"
          class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-200 h-full px-5 rounded-r cursor-pointer"
        >
          <span class="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
    <div class="w-1/4 text-center">
      <p class="text-base font-semibold text-gray-800 mt-7">{{ priceIDR }}</p>
    </div>
    <div>
      <button @click="remove">
        <img
          class="w-5 mt-8"
          src="https://img.icons8.com/color/48/000000/delete-sign--v1.png"
        />
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { productStore } from "../stores/product";

export default {
  props: ["item"],

  methods: {
    ...mapActions(productStore, ["updateCart", "deleteItem"]),

    increase() {
      let amount = this.item.amount + 1;
      console.log(amount);
      this.updateCart(amount, this.item.id);
    },

    decrease() {
      let amount = this.item.amount - 1;
      this.updateCart(amount, this.item.id);
    },

    remove() {
      this.deleteItem(this.item.id);
    },
  },

  computed: {
    priceIDR() {
      let price = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(this.item.price);

      return price;
    },
  },
};
</script>
