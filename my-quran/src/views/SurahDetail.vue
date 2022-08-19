<template>
  <section class="surah-detail">
    <div class="title">
      <h2>{{ this.surah.asma.id.long }}</h2>
    </div>
    <div class="detail">
      <h4>{{ this.surah.type.id }}</h4>
      <p>{{ this.surah.tafsir.id }}</p>
    </div>
    <div class="record">
      <p>Berikut merupakan bacaan Lengkap dari Imam Ahmed ibn Ali al-Ajamy</p>
      <audio controls>
        <source :src="surah.recitation.full" type="audio/mpeg">
        your browser doesn't  support this
      </audio>
    </div>
    <div clas="recitation">
      <div class="opening" v-if="surah.preBismillah">
        <h2>{{ this.surah.preBismillah.text.ar }}</h2>
        <p>{{ this.surah.preBismillah.translation.id }}</p>
      </div>
      <AyahCard v-for="ayah in surah.ayahs" :key="ayah.number.insurah" :ayah="ayah" />
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'pinia'
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
}
</script>