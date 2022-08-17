<script>
import FindWeather from '../components/FindWeather.vue';
import NewsCard from '../components/NewsCard.vue';
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';
export default {
  components: { FindWeather, NewsCard },
  methods: {
    ...mapActions(useCounterStore, ['fetchState', 'fetchnews'])
  },
  computed: {
    ...mapState(useCounterStore, ['newslist'])
  },
  created() {
    this.fetchState()
    this.fetchnews()
  }
}
</script>

<template>
  <FindWeather />
  <h1 class="text-5xl text-center text-amber-500 font-extrabold">News List</h1>
  <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-3 gap-5">
    <NewsCard v-for="news in newslist" :news="news" />
  </div>
</template>

