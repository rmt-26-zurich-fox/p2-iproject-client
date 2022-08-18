<template>
  <LoadingSign v-if="isLoading" />
  <div v-if="!isLoading" class="container">
    <h5 class="mt-3 text-center">Category:</h5>
    <div class="d-flex justify-content-center">
      <input value="" v-model="selectedCategory" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
      <label class="form-check-label me-4 ms-2" for="flexRadioDefault1"> All </label>
      <div v-for="category in categories" class="form-check">
        <input :value="category.name" v-model="selectedCategory" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
        <label class="form-check-label me-3" for="flexRadioDefault1"> {{ category.name }} </label>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-3 mt-5">
      <CardLayout v-for="house in houses" :key="house.id" :house="house" :image="house.Images[0]" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapWritableState } from "pinia";
import { useHouseStore } from "../stores/house";
import CardLayout from "../components/CardLayout.vue";
import LoadingSign from "../components/LoadingSign.vue";

export default {
  components: {
    CardLayout,
    LoadingSign,
  },
  data() {
    return {
      houses: "",
      categories: [],
      selectedCategory: "",
    };
  },
  methods: {
    ...mapActions(useHouseStore, ["getAllHouses", "getAllCategories", "errorHandler"]),

    async fetchHouses(newSelectedCategory) {
      this.isLoading = true;
      try {
        const data = await this.getAllHouses(newSelectedCategory);
        this.houses = data;
      } catch (error) {
        this.errorHandler(error);
      } finally {
        this.isLoading = false;
      }
    },

    async fetchCategories() {
      this.isLoading = true;
      try {
        const data = await this.getAllCategories();
        this.categories = data;
      } catch (error) {
        this.errorHandler(error);
      } finally {
        this.isLoading = false;
      }
    },
  },

  computed: {
    ...mapWritableState(useHouseStore, ["isLoading"]),
  },

  watch: {
    selectedCategory(newSelectedCategory) {
      if (newSelectedCategory) {
        this.$router.push({ name: "housesPage", query: { category: newSelectedCategory } });
        this.fetchHouses(newSelectedCategory);
      } else if (newSelectedCategory === "") {
        this.$router.push({ name: "housesPage" });
        this.fetchHouses();
      }
    },
  },

  created() {
    this.fetchHouses();
    this.fetchCategories();
  },
};
</script>
