<template>
  <MovieAll />
  <MovieList :data="trending" title="Trending" />
  <MovieList :data="topVote" title="Top Vote" />
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "pinia";
import { useGlobalStore } from "../stores/globalStore";
import MovieAll from "../components/MovieAll.vue";
import MovieList from "../components/MovieList.vue";

export default {
  components: { MovieAll, MovieList },
  data() {
    return {
      trending: [],
      topVote: [],
    };
  },
  computed: {
    ...mapState(useGlobalStore, ["baseUrl"]),
  },
  methods: {
    ...mapActions(useGlobalStore, ["errorHandler"]),
    async movieTrending() {
      try {
        const { data } = await axios.get(this.baseUrl + "/movies/trending");
        this.trending = data.results;
      } catch (error) {
        this.errorHandler(error);
      }
    },
    async movieTopVote() {
      try {
        const { data } = await axios.get(this.baseUrl + "/movies/top-vote");
        this.topVote = data.results;
      } catch (error) {
        this.errorHandler(error);
      }
    },
  },
  created() {
    this.movieTrending();
    this.movieTopVote();
  },
};
</script>
