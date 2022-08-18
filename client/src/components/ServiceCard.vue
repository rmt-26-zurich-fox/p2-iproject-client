<script>
import { mapActions, mapState } from "pinia";
import { useOtoStore } from "../stores/oto";

export default {
  computed: {
    ...mapState(useOtoStore, ["productsList", "serviceList"]),
  },
  methods: {
    ...mapActions(useOtoStore, ["fetchDataById", "requestProduct", 'requestService']),
  },
  components: {},
  created() {
    this.fetchDataById(this.$route.params.id);
  },
};
</script>

<template>
  <div class="w-screen my-3">
    <div class="max-w-full mx-auto">
      <div class="main flex flex-col m-5">
        <div class="header">
          <div class="text-3xl font-bold text-gray-600 mb-4">
            Available Service
          </div>
        </div>

        <div
          class="each flex hover:shadow-lg select-none p-10 rounded-md border-gray-300 border mb-3 hover:border-gray-500 cursor-pointer"
          v-for="service in serviceList"
          :key="service.id"
        >
          <div class="left">
            <div class="header text-blue-600 font-semibold text-2xl">
              {{ service.name }}
            </div>
            <div class="desc text-gray-600">
              {{
                service.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })
              }}
            </div>
          </div>
          <div class="right m-auto mr-0">
            <button
              @click="requestService(service.id)"
              class="hover:shadow-lg select-none p-3 rounded-md border-gray-300 border mb-3 hover:border-gray-500 cursor-pointer"
            >
              Add to request
            </button>
          </div>
        </div>
        <div class="header">
          <div class="text-3xl font-bold text-gray-600 mb-4">
            Available Product
          </div>
        </div>

        <div
          class="each flex hover:shadow-lg select-none p-10 rounded-md border-gray-300 border mb-3 hover:border-gray-500 cursor-pointer"
          v-for="product in productsList"
          :key="product.id"
        >
          <div class="left">
            <div class="header text-blue-600 font-semibold text-2xl">
              {{ product.name }}
            </div>
            <div class="desc text-gray-600">
              {{ product.detail }}
            </div>
            <div class="desc text-gray-600">
              {{
                product.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })
              }}
            </div>
          </div>
          <div class="right m-auto mr-0">
            <button
              class="hover:shadow-lg select-none p-3 rounded-md border-gray-300 border mb-3 hover:border-gray-500 cursor-pointer"
              @click="requestProduct(product.id)"
            >
              Add to request
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
