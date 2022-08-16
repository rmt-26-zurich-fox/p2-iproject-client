<template>
  <div class="max-w-sm bg-white rounded-lg shadow-md">
    <a href="">
      <div class="container1">
        <div class="vertical-center">
          <img
            class="p-8 rounded-t-lg"
            :src="cake.imageUrl"
            alt="product image"
          />
        </div>
      </div>
    </a>
    <div class="px-5 pb-5 mb-0">
      <a href="#">
        <h5 class="text-l font-semibold tracking-tight text-gray-900">
          {{ cake.name }}
        </h5>
      </a>
      <div class="flex items-center mt-2.5 mb-5"></div>
      <div class="flex justify-between items-center">
        <span class="text-l font-semibold text-gray-900">{{ priceIDR }}</span>
        <template>
          <a
            href=""
            class="text-white hover:bg-gray-300 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm text-center"
            >ICON BUY / WISHLIST</a
          >
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["cake"],

  computed: {
    priceIDR() {
      let price = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(this.cake.price);

      return price;
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
