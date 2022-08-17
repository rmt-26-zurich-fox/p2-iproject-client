<template>
  <MovieAll />
  <MovieList title="Trending" />
  <MovieList title="Top Vote" />
</template>

<script>
import MovieAll from "../components/MovieAll.vue";
import MovieList from "../components/MovieList.vue";

export default {
  components: { MovieAll, MovieList },
};
</script>
