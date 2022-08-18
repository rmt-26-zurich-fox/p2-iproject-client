<script>
import { mapActions, mapState } from "pinia";
import { main } from "../stores/counter";
export default {
  data() {},
  methods: {
    ...mapActions(main, ["fetchShoppingcart"]),
  },
  computed: {
    ...mapState(main, ["dataCourse"]),
  },
};
</script>

<template>
  <div class="container mx-auto p-4 bg-white">
    <div class="w-full md:w-1/2 lg:w-1/3 mx-auto my-12">
      <h1 class="text-lg font-bold">Register</h1>
      <div class="mt-8">
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
                      <a href="#"> Throwback Hip Bag </a>
                    </h3>
                    <p class="ml-4">Rp.30.000</p>
                  </div>
                  <p class="mt-1 text-sm text-gray-500">Salmon</p>
                </div>
                <div class="flex flex-1 items-end justify-between text-sm">
                  <p class="text-gray-500">Qty 1</p>

                  <div class="flex">
                    <button
                      type="button"
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
      <div class="flex justify-between text-base font-medium text-gray-900">
        <p>Subtotal</p>
        <p>Rp.200.000</p>
      </div>
      <p class="mt-0.5 text-sm text-gray-500">
        Shipping and taxes calculated at checkout.
      </p>
      <div class="mt-6">
        <a
          href="#"
          class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >Checkout</a
        >
      </div>
    </div>
  </div>
</template>
