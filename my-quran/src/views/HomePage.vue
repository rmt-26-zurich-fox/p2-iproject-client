<template>
  <section class="homepage">
    <h1>List of Surahs</h1>
    <SurahCard v-for="surah in surahs" :key="surah.number" :surah="surah"/>
  </section>
</template>

<script>
import SurahCard from '../components/SurahCard.vue'
import { mapActions, mapState } from 'pinia';
import {quranStore} from '../stores/quranStore'

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
  created(){
    console.log('ini di component')
    this.fetchQuran()
    console.log(this.surahs, '<<<< di component')
  }
}
</script>

