<template>
  <div class="movie-list">
    <h2>{{ title }}</h2>
    <div class="cards">
      <MovieCard v-for="el in movieList" :key="el.id" :el="el" />
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
      movieList: [],
    };
  },
  computed: {
    ...mapState(useGlobalStore, ["baseUrl"]),
  },
  methods: {
    ...mapActions(useGlobalStore, ["errorHandler"]),
    async movieListBy() {
      try {
        let url = "";
        if (this.title === "Trending") url = this.baseUrl + "/movies/trending";
        else if (this.title === "Top Vote")
          url = this.baseUrl + "/movies/top-vote";
        console.log(url, "masukkkk");
        const { data } = await axios.get(url);
        this.movieList = data.results;
      } catch (error) {
        this.errorHandler(error);
      }
    },
  },
  created() {
    this.movieListBy();
  },
};
</script>
