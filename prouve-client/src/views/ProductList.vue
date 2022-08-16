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
        <ProductCard v-for="cake in cakes" :key="cake.id" :cake="cake" />
      </div>
    </div>
    <!-- <pagination / loadmore> -->
  </div>
</template>
<script>
import ProductCard from "../components/ProductCard.vue";
import SideBar from "../components/SideBar.vue";
import { mapWritableState } from "pinia";
import { mapActions } from "pinia";
import { productStore } from "../stores/product";

export default {
  components: {
    ProductCard,
    SideBar,
  },

  computed: {
    ...mapWritableState(productStore, ["cakes", "initialPage"]),
  },

  methods: {
    ...mapActions(productStore, ["fetchProduct", "fetchNextProduct"]),

    getNextProduct() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          console.log(this.$route.query.category);
          this.fetchNextProduct(this.initialPage, this.$route.query.category);
          this.initialPage++;
        }
      };
    },
  },

  beforeMount() {
    console.log("beforemount");
    this.fetchProduct(this.$route.query);
    this.initialPage = 2;
  },

  mounted() {
    console.log("mounted");
    this.getNextProduct();
  },
};
</script>
