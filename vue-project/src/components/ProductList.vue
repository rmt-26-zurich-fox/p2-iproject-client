<script>
import ProductCard from "./ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
  props: ["products"],
};
</script>

<template>
  <!-- Food per page -->
  <div class="row mb-3 mt-3">
    <!-- Card Here -->
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
