<template>
  <section class="homepage">
    <h1>List of Surahs</h1>
    <div class="surah-box">
      <SurahCard v-for="surah in surahs" :key="surah.number" :surah="surah" />
    </div>
  </section>
</template>

<script>
import SurahCard from '../components/SurahCard.vue'
import { mapActions, mapState } from 'pinia';
import { quranStore } from '../stores/quranStore'

export default {
  methods: {
    ...mapActions(quranStore, ['fetchQuran'])
  },
  computed: {
    ...mapState(quranStore, ['surahs'])
  },
  components: {
    SurahCard
  },
  created() {
    this.fetchQuran()
  }
}
</script>

