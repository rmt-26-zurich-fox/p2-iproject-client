<template>
  <div class="bg-white">
    <!-- <INI HEADERS> -->
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div
        class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <!-- INI CARDNYA -->
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
    <!-- <pagination / loadmore> -->
  </div>
</template>
<script>
import ProductCard from "../components/ProductCard.vue";
import SideBar from "../components/SideBar.vue";

export default {
  components: {
    ProductCard,
    SideBar,
  },
};
</script>
