<template>
  <div class="flex flex-col items-center">
    <div class="font-semibold text-gray-800 text-4xl mt-14 mb-28">
      <p>{{ recipeById.name }}</p>
    </div>
    <div class="flex justify-center">
      <div
        class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md h-fit"
      >
        <p
          class="mb-5 ml-5 text-2xl font-semibold text-white bg-lime-700 rounded-lg shadow-md w-fit px-2 py-2"
        >
          Ingredients
        </p>
        <ul class="mb-2 ml-5 text-base text-lime-700 list-disc">
          <IngredientsList
            class="mb-3"
            v-for="(item, idx) in recipeById.ingredients"
            :key="idx"
            :ingredient="item.ingredient"
          />
        </ul>
      </div>
      <div class="block p-6 max-w-sm bg-white rounded-lg ml-16 h-fit">
        <img class="rounded-full" :src="recipeById.image" alt="" />
        <p class="font-normal text-slate-700 text-justify mt-8">
          {{ recipeById.description }}
        </p>
      </div>
    </div>
  </div>
  <div class="flex justify-center mx-48 mt-10 mb-16">
    <div
      class="block p-6 w-full bg-white rounded-lg border border-gray-200 shadow-md h-fit"
    >
      <p
        class="mb-5 ml-5 text-2xl font-semibold text-white bg-red-900 rounded-lg shadow-md w-fit px-2 py-2"
      >
        Instructions
      </p>
      <ol class="mb-2 ml-5 text-base text-gray-800 list-decimal">
        <InstructionsList
          v-for="(instruction, idx) in recipeById.instructions"
          :key="idx"
          :instruction="instruction.display_text"
        />
      </ol>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { mapState } from "pinia";
import { productStore } from "../stores/product";
import InstructionsList from "../components/InstructionsList.vue";
import IngredientsList from "../components/IngredientsList.vue";
export default {
  components: { InstructionsList, IngredientsList },
  computed: {
    ...mapState(productStore, ["recipeById"]),
  },

  methods: {
    ...mapActions(productStore, ["fetchRecipeById"]),
  },

  created() {
    this.fetchRecipeById(this.$route.params.recipeId);
  },
};
</script>
