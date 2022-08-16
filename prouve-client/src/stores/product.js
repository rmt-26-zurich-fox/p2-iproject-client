import { defineStore } from "pinia";
import axios from "axios";

export const productStore = defineStore({
  id: "product",
  state: () => ({
    baseUrl: "http://localhost:3000/",
    counter: 0,
    recipes: [],
    recipeById: {},
    initialPage: 2,
  }),
  actions: {
    async fetchRecipe(search) {
      try {
        const response = await axios({
          method: "get",
          url: this.baseUrl + "recipes",
          params: {
            search,
          },
        });
        this.recipes = response.data;
      } catch (error) {
        console.log(error.response);
      }
    },

    async fetchNextRecipe(page, search) {
      try {
        const response = await axios({
          method: "get",
          url: this.baseUrl + "recipes",
          params: {
            page,
            search,
          },
        });
        response.data.forEach((el) => {
          this.recipes.push(el);
        });
      } catch (error) {
        console.log(error.response);
      }
    },

    async fetchRecipeById(recipeId) {
      try {
        const response = await axios({
          method: "get",
          url: this.baseUrl + `recipes/${recipeId}`,
        });
        this.recipeById = response.data;
      } catch (error) {
        console.log(error.response);
      }
    },
  },
});
