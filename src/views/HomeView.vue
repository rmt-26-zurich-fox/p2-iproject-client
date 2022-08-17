<template>
  <div class="main-page">
    <section>
      <HeaderBar />
    </section>
    <section>
      <main>
        <RouterView />
        <MovieList title="Trending" />
        <MovieList title="Top Vote" />
      </main>
    </section>
    <section>
      <FooterBar />
    </section>
  </div>
</template>
<script>
import HeaderBar from "../components/HeaderBar.vue";
import FooterBar from "../components/FooterBar.vue";
import MovieList from "../components/MovieList.vue";
export default {
  components: { HeaderBar, FooterBar, MovieList },
};
</script>
