<template>
    <div class="card" @click="SurahDetail">
      <div class="card-header">
        <h4>{{ surah.asma.id.long }}</h4>
      </div>
      <div class="card-content">
        <h5>{{ surah.type.id }}</h5>
      </div>
      <div class="card-footer">
        <h6>Jumlah Ayat : {{ surah.ayahCount }}</h6>
      </div>
    </div>
</template>

<script>
import { mapActions, mapWritableState } from 'pinia';
import { quranStore } from '../stores/quranStore';
// import router from '../router';
// console.log(quranStore)
export default {
  props: ['surah'],
  methods: {
    ...mapActions(quranStore, ['fetchSurah']),
    SurahDetail() {
      console.log(this.surah.number)
      this.fetchSurah(this.surah.number)
    }
  },
  computed: {
    ...mapWritableState(quranStore, ['surahId'])
  }
}
</script>