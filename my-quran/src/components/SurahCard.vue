<template>
  <div class="container">
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
  </div>

</template>

<script>
import { mapActions, mapWritableState } from 'pinia';
import { quranStore } from '../stores/quranStore';
import router from '../router';


export default {
  props: ['surah'],
  methods: {
    ...mapActions(quranStore, ['fetchSurah']),
    SurahDetail(){
      router.push(`detail/${this.surah.number}`)
      this.surahId = this.surah.number
    }
  },
  computed: {
    ...mapWritableState(quranStore, ['surahId'])
  }
}
</script>