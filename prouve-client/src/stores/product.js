import { defineStore } from "pinia";
import axios from "axios";

export const productStore = defineStore({
  id: "product",
  state: () => ({
    baseUrl: "http://localhost:3000/",
    counter: 0,
    recipes: [],
    recipeById: {},
  }),
  actions: {
    async fetchRecipe() {
      try {
        const response = await axios({
          method: "get",
          url: this.baseUrl + "recipes",
        });
        this.recipes = response.data;
        console.log(response.data);
      } catch (error) {}
    },

    async fetchRecipeById(recipeId) {
      try {
        const response = await axios({
          method: "get",
          url: this.baseUrl + `recipes/${recipeId}`,
        });
        this.recipeById = response.data;
        console.log(response.data);
      } catch (error) {}
    },
  },
});
