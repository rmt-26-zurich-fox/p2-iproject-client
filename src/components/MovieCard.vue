<template>
  <div
    @click="$router.push({ name: 'detail', params: { id: el.id } })"
    class="movie-card"
  >
    <div class="img">
      <img :src="'https://image.tmdb.org/t/p/original' + el.poster_path" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["el"],
};
</script>
