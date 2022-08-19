<script>
import { mapActions, mapState } from "pinia";
import { useOtoStore } from "../stores/oto";

export default {
  computed: {
    ...mapState(useOtoStore, ["productRequested", "serviceRequested"]),
  },
  methods: {
    ...mapActions(useOtoStore, [
      "fetchDataRequest",
      "cancelProduct",
      "cancelService",
      "requestPayment",
    ]),
  },
  components: {},
  created() {
    this.fetchDataRequest();
  },
};
</script>

<template>
  <div class="w-screen my-3">
    <div class="max-w-full mx-auto">
      <div class="main flex flex-col m-5">
        <div class="header">
          <div 
          v-if="!serviceRequested.length && !productRequested.length"
          class="text-3xl font-bold text-gray-600 mb-4">Your Cart is Empty</div>
          <div 
          v-if="serviceRequested.length !== 0"
          class="text-3xl font-bold text-gray-600 mb-4">Service Order</div>
        </div>

        <div
          class="each flex hover:shadow-lg select-none p-10 rounded-md border-gray-300 border mb-3 hover:border-gray-500 cursor-pointer"
          v-for="service in serviceRequested"
          :key="service.id"
        >
          <div class="left">
            <div class="header text-blue-600 font-semibold text-2xl">
              {{ service.Service.name }}
            </div>
            <div class="desc text-gray-600">
              {{
                service.Service.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })
              }}
            </div>
          </div>
          <div class="right m-auto mr-0">
            <button
              @click="cancelService(service)"
              class="hover:shadow-lg select-none p-3 rounded-md border-gray-300 border mb-3 hover:border-gray-500 cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
        <div class="header">
          <div
            v-if="productRequested.length !== 0"
            class="text-3xl font-bold text-gray-600 mb-4"
          >
            Product Order
          </div>
        </div>

        <div
          class="each flex hover:shadow-lg select-none p-10 rounded-md border-gray-300 border mb-3 hover:border-gray-500 cursor-pointer"
          v-for="product in productRequested"
          :key="product.id"
        >
          <div class="left">
            <div class="header text-blue-600 font-semibold text-2xl">
              {{ product.Product.name }}
            </div>
            <div class="desc text-gray-600">
              {{ product.Product.detail }}
            </div>
            <div class="desc text-gray-600">
              {{
                product.Product.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })
              }}
            </div>
          </div>
          <div class="right m-auto mr-0">
            <button
              class="hover:shadow-lg select-none p-3 rounded-md border-gray-300 border mb-3 hover:border-gray-500 cursor-pointer"
              @click="cancelProduct(product.id)"
            >
              Cancel
            </button>
          </div>
        </div>
        <div class="right m-auto mr-0">
          <button
            v-if="
              serviceRequested.length !== 0 || productRequested.length !== 0
            "
            class="hover:shadow-lg select-none p-3 rounded-md bg-gray-800 mt-6 text-white font-medium border-gray-500 border mb-3 hover:border-gray-500 cursor-pointer"
            @click="requestPayment()"
          >
            Pay now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
