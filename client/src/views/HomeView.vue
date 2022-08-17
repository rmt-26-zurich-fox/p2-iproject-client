<script>
import ProductCard from "../components/ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
};
</script>

<template>
  <div>
    <div class="container mt-3">
      <!-- <div>
        <img
          src="https://img.freepik.com/free-vector/realistic-coffee-background-with-drawings_79603-603.jpg?w=1060&t=st=1660732368~exp=1660732968~hmac=9b590bd8fa1eb7b71ef85394dcf0eceb7d3ff8304ddbb32d334d25a48a3eb382"
          class="img-fluid"
          alt="Responsive image"
        />
      </div> -->

      <!-- Product List-->
      <div class="row mt-4">
        <!-- Product Card -->
        <ProductCard />
      </div>
    </div>
  </div>
</template>
