<template>
  <div class="movie-list">
    <h2>{{ title }}</h2>
    <div class="cards">
      <MovieCard v-for="el in data" :key="el.id" :el="el" :btnText="btnText" />
    </div>
  </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";

export default {
  props: ["title", "data", "btnText"],
  components: { MovieCard },
};
</script>
