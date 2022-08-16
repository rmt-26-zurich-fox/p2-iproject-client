<template>
  <MovieSearch @search="searchMovie" />
  <div class="movie-all">
    <div class="cards">
      <MovieCard v-for="el in results" :key="el.id" :el="el" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useGlobalStore } from "../stores/globalStore";
import MovieSearch from "./MovieSearch.vue";
import MovieCard from "./MovieCard.vue";
import axios from "axios";

export default {
  components: { MovieSearch, MovieCard },
  data() {
    return {
      page: "",
      results: "",
      totalPage: "",
      totalResults: "",
    };
  },
  computed: {
    ...mapState(useGlobalStore, ["baseUrl"]),
  },
  methods: {
    ...mapActions(useGlobalStore, ["errorHandler"]),
    async searchMovie(keyword) {
      try {
        const { data } = await axios.get(this.baseUrl + "/movies", {
          params: { keyword },
        });
        const { page, results, totalPage, totalResults } = data;
        this.page = page;
        this.results = results;
        this.totalPage = totalPage;
        this.totalResults = totalResults;
      } catch (error) {
        this.errorHandler(error);
      }
    },
  },
};
</script>
