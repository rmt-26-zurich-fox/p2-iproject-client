<script>
import { mapState, mapActions } from "pinia";
import { useCustomStore } from "../stores/custom";
import ProductList from "../components/ProductList.vue";
import NavBarComp from "../components/NavBarComp.vue";

export default {
  data() {
    return {
      searchName: "",
      searchPriceMin: undefined,
      searchPriceMax: undefined,
    };
  },
  components: {
    NavBarComp,
    ProductList,
  },
  methods: {
    ...mapActions(useCustomStore, ["fetchProducts"]),
    clickHandlerSearch() {
      this.fetchProducts(
        this.searchName,
        this.searchPriceMin,
        this.searchPriceMax
      );
    },
    totalPagesArray(page) {
      let pages = [];
      for (let x = 0; x < page; x++) {
        pages.push(x + 1);
      }
      return pages;
    },
    buttonChangePage(pageNumber) {
      if (this.searchName && this.searchPriceMin && this.searchPriceMax) {
        this.fetchProducts(
          this.searchName,
          this.searchPriceMin,
          this.searchPriceMax,
          pageNumber
        );
      } else if (this.searchName && this.searchPriceMin) {
        this.fetchProducts(
          this.searchName,
          this.searchPriceMin,
          undefined,
          pageNumber
        );
      } else if (this.searchName && this.searchPriceMax) {
        this.fetchProducts(
          this.searchName,
          undefined,
          this.searchPriceMax,
          pageNumber
        );
      } else if (this.searchPriceMin && this.searchPriceMax) {
        this.fetchProducts(
          undefined,
          this.searchPriceMin,
          this.searchPriceMax,
          pageNumber
        );
      } else if (this.searchName) {
        this.fetchProducts(this.searchName, undefined, undefined, pageNumber);
      } else if (this.searchPriceMin) {
        this.fetchProducts(
          undefined,
          this.searchPriceMin,
          undefined,
          pageNumber
        );
      } else if (this.searchPriceMax) {
        this.fetchProducts(
          undefined,
          undefined,
          this.searchPriceMax,
          pageNumber
        );
      } else {
        this.fetchProducts(undefined, undefined, undefined, pageNumber);
      }
    },
  },
  computed: {
    ...mapState(useCustomStore, [
      "totalItems",
      "products",
      "totalPages",
      "totalItems",
    ]),
  },
  created() {
    this.fetchProducts();
  },
};
</script>

<template>
  <!-- NavBar -->
  <NavBarComp />
  <!-- Body -->
  <div class="body" style="background-color: #fab1a0">
    <!-- Side Search -->
    <div class="row">
      <!-- Search bar -->
      <div class="col-md-3">
        <div class="card" style="width: 22rem; height: 100vh; position: fixed">
          <div class="card-body">
            <h4 class="card-title">
              <i class="fa-solid fa-magnifying-glass"></i> Search Bar
            </h4>
            <hr />
            <h5>Food Name</h5>
            <input
              type="text"
              class="form-control"
              placeholder="Food Name"
              v-model="searchName"
            />
            <hr />
            <h5>Food Price Min</h5>
            <input
              type="number"
              class="form-control"
              placeholder="Food Description"
              v-model="searchPriceMin"
            />
            <hr />
            <h5>Food Price Max</h5>
            <input
              type="number"
              class="form-control"
              placeholder="Food Description"
              v-model="searchPriceMax"
            />
            <hr />
            <button class="btn btn-secondary" @click="clickHandlerSearch">
              Search
            </button>
          </div>
        </div>
      </div>

      <!-- Food List -->
      <div class="col-md-9 pb-5 mb-3">
        <h1
          v-if="products.length === 0"
          class="text-center"
          style="padding-top: 20rem; height: 100%"
        >
          Sorry, <i class="fa-solid fa-person-digging"></i><br />
          We have no food yet
        </h1>
        <!-- Food List Here -->
        <ProductList :products="products" />

        <div class="row text-center">
          <!-- Pagination -->
          <ul class="pagination" style="justify-content: center">
            <a
              class="page-link shadow"
              style="cursor: pointer; color: #6c5ce7"
              v-for="page in totalPagesArray(totalPages)"
              :key="page"
              @click="buttonChangePage(page - 1)"
            >
              {{ page }}
            </a>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1,
h4,
h5 {
  font-family: Georgia, "Times New Roman", Times, serif;
}
</style>
