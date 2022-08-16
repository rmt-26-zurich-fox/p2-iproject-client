<template>
  <div class="flex flex-col items-center">
    <div class="flex items-center mb-14">
      <label for="simple-search" class="sr-only">Search</label>
      <div class="relative w-full">
        <input
          type="text"
          id="simple-search"
          class="w-96 bg-gray-50 border-2 border-gray-300 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Search"
          required
        />
      </div>
      <button class="p-2 text-2xl text-gray-600 bg-white rounded-lg">
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
    <RecipePreviewCard
      v-for="(recipe, idx) in recipes"
      :key="idx"
      :recipe="recipe"
    />
  </div>
</template>
<script>
import RecipePreviewCard from "../components/RecipePreviewCard.vue";
import { mapActions } from "pinia";
import { mapState } from "pinia";
import { productStore } from "../stores/product";
export default {
  components: { RecipePreviewCard },

  computed: {
    ...mapState(productStore, ["recipes"]),
  },

  methods: {
    ...mapActions(productStore, ["fetchRecipe"]),
  },

  created() {
    this.fetchRecipe();
  },
};
</script>
