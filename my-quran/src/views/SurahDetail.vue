<template>
  <div class="title">
    <h2>{{this.surah.asma.id.long}}</h2>
  </div>
  <div class="detail">
    <h4>{{this.surah.type.id}}</h4>
    <p>{{this.surah.tafsir.id}}</p>
  </div>
  <div clas="recitation">
    <AyahCard v-for="ayah in surah.ayahs" :key="ayah.number.insurah" :ayah="ayah"/>
  </div>
  
</template>

<script>
import {mapState, mapActions} from 'pinia'
import { quranStore } from '../stores/quranStore';
import AyahCard from '../components/AyahCard.vue';

export default {
  components: {
    AyahCard
  },
  methods: {
    ...mapActions(quranStore, ['fetchSurah'])
  },
  computed: {
    ...mapState(quranStore, ['surah'])
  },
  created(){
    this.fetchSurah()
  }
}
</script>