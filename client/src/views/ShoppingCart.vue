<script>
import { mapActions, mapState } from "pinia";
import { main } from "../stores/counter";
export default {
  data() {
    return {
      // total: 0,
    };
  },
  methods: {
    ...mapActions(main, [
      "fetchShoppingcart",
      "midtransPay",
      "deleteShoppingCart",
    ]),
    deleteCart() {
      this.deleteShoppingCart();
      this.$router.push("/");
    },
  },
  computed: {
    ...mapState(main, ["dataShoppingCart"]),
  },
  created() {
    this.fetchShoppingcart();
  },
};
</script>

<template>
  <div class="container mx-auto p-4 bg-white">
    <div class="w-full md:w-1/2 lg:w-1/3 mx-auto my-12">
      <h1 class="text-lg font-bold">Register</h1>
      <div v-for="el in dataShoppingCart.Course" :key="el.id" class="mt-8">
        <div class="flow-root">
          <ul role="list" class="-my-6 divide-y divide-gray-200">
            <li class="flex py-6">
              <div
                class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
              ></div>

              <div class="ml-4 flex flex-1 flex-col">
                <div>
                  <div
                    class="flex justify-between text-base font-medium text-gray-900"
                  >
                    <h3>
                      <a href="#"> {{ el.Course.title }} </a>
                    </h3>
                    <p class="ml-4">Rp.{{ el.Course.price }}</p>
                  </div>
                </div>
                <div class="flex flex-1 items-end justify-between text-sm">
                  <p class="text-gray-500">Qty 1</p>

                  <div class="flex">
                    <button
                      class="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
      <div
        class="flex justify-between text-base font-medium text-gray-900"
      ></div>
      <p class="mt-0.5 text-sm text-gray-500">
        Shipping and taxes calculated at checkout.
      </p>
      <button
        v-on:click.prevent="deleteCart"
        class="font-medium text-indigo-600 hover:text-indigo-500"
      >
        Remove all
      </button>
      <div class="mt-6">
        <a
          href=""
          v-on:click.prevent="midtransPay"
          class="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm"
          >Checkout</a
        >
      </div>
    </div>
  </div>
</template>
