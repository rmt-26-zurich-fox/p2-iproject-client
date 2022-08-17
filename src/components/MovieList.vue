<template>
  <div class="movie-list">
    <h2>{{ title }}</h2>
    <div class="cards">
      <MovieCard v-for="el in trending" :key="el.id" :el="el" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "pinia";
import { useGlobalStore } from "../stores/globalStore";
import MovieCard from "./MovieCard.vue";

export default {
  props: ["title"],
  components: { MovieCard },
  data() {
    return {
      trending: [],
    };
  },
  computed: {
    ...mapState(useGlobalStore, ["baseUrl"]),
  },
  methods: {
    ...mapActions(useGlobalStore, ["errorHandler"]),
    async trendingMovies() {
      try {
        const { data } = await axios.get(this.baseUrl + "/movies/trending");
        this.trending = data.results;
      } catch (error) {
        this.errorHandler(error);
      }
    },
  },
  created() {
    this.trendingMovies();
  },
};
</script>
