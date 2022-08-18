<template>
  <div class="flex flex-col items-center">
    <div class="flex items-center mb-14">
      <label for="simple-search" class="sr-only">Search</label>
      <div class="relative w-full">
        <input
          type="text"
          id="simple-search"
          v-model="searchQuery"
          class="w-96 bg-gray-50 border-2 border-gray-300 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Search"
          required
        />
      </div>
      <button
        class="p-2 text-2xl text-gray-600 bg-white rounded-lg"
        @click="search"
      >
        <svg
          class="w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <span class="sr-only">Search</span>
      </button>
    </div>
    <div
      class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
    >
      <RecipePreviewCard
        v-for="(recipe, idx) in recipes"
        :key="idx"
        :recipe="recipe"
      />
    </div>
  </div>
</template>
<script>
import RecipePreviewCard from "../components/RecipePreviewCard.vue";
import { mapActions } from "pinia";
import { mapWritableState } from "pinia";
import { productStore } from "../stores/product";
export default {
  data() {
    return {
      searchQuery: "",
    };
  },

  components: { RecipePreviewCard },

  computed: {
    ...mapWritableState(productStore, ["recipes", "initialPage"]),
  },

  methods: {
    ...mapActions(productStore, ["fetchRecipe", "fetchNextRecipe"]),
    search() {
      this.fetchRecipe(this.searchQuery).then(() => {
        this.$router.push({
          name: "recipe",
          params: { search: this.searchQuery },
        });
      });
    },

    getNextRecipe() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          this.fetchNextRecipe(this.initialPage, this.searchQuery);
          this.initialPage++;
        }
      };
    },
  },

  beforeMount() {
    this.fetchRecipe();
    this.initialPage = 2;
  },

  mounted() {
    this.getNextRecipe();
  },
};
</script>
