<script>
import { mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import CardChoose from "../components/CardChoose.vue";
import SiteCard from "../components/SiteCard.vue";
export default {
  computed: {
    ...mapState(useCounterStore, ["map"]),
    ...mapState(useCounterStore, ["type"]),
    ...mapState(useCounterStore, ["site"]),
  },
  components: { CardChoose, SiteCard },
  methods: {},
};
</script>
<template>
  <div style="margin-top: 100px">
    <div v-if="map === 'Ascent'">
      <img class="map-img" src="../assets/Ascent.jpg" alt="" />
      <h1 style="color: white" class="map-title">{{ map }}</h1>
      <p class="text-white map-text">
        Sebuah tempat bermain terbuka untuk perang kecil memperebutkan posisi
        dan baku tembak membelah kedua lokasi di Ascent. Tiap lokasi bisa
        diperkuat dengan pintu bom yang tak bisa dibalikkan; setelah terpasang,
        kamu harus menghancurkannya atau mencari jalan lain. Serahkan teritori
        sesedikit mungkin.
      </p>
    </div>
    <div v-if="map === 'Bind'">
      <img class="map-img" src="../assets/Bind.jpg" alt="" />
      <p class="text-white map-text">
        Dua lokasi. Tak ada jalur mid. Harus pilih kiri atau kanan. Mana yang
        kamu pilih? Keduanya menawarkan jalur langsung bagi penyerang dan
        sepasang teleporter satu arah untuk memudahkan pengepungan dari samping.
      </p>
    </div>
    <div v-if="map === 'Breeze'">
      <img class="map-img" src="../assets/breeze.jpg" alt="" />
      <p class="text-white map-text">
        Telusuri reruntuhan bersejarah atau gua-gua tepi laut di nirwana tropis
        ini. Jangan lupa siapkan perlengkapan pelindung untuk saat kamu berada
        di ruang terbuka dan bertarung jarak jauh. Awasi terus sekitarmu agar
        kamu bisa bersantai di Breeze.
      </p>
    </div>
    <div v-if="map === 'Fracture'">
      <img class="map-img" src="../assets/Fracture.jpeg" alt="" />
      <p class="text-white map-text">
        Sebuah fasilitas penelitian sangat rahasia hancur lebur oleh eksperimen
        radianite yang gagal. Dengan opsi pertahanan yang terbagi seperti
        petanya, pilihan ada di tanganmu: temui penyerang di wilayah mereka
        sendiri atau bersiap-siaplah untuk menghadapi serangan.
      </p>
    </div>
    <div v-if="map === 'Haven'">
      <img class="map-img" src="../assets/haven.jpg" alt="" />
      <p class="text-white map-text">
        Di bawah sebuah biara yang terlupakan, sebuah teriakan terdengar dari
        Agen rival yang bertarung memperebutkan tiga lokasi. Ada lebih banyak
        teritori untuk dikuasai, tetapi sisi pertahanan bisa memanfaatkan
        bangunan ekstra untuk mendesak secara agresif.
      </p>
    </div>
    <div v-if="map === 'Icebox'">
      <img class="map-img" src="../assets/icebox.jpg" alt="" />
      <p class="text-white map-text">
        Medan perangmu selanjutnya adalah lokasi penggalian rahasia milik
        Kingdom yang diselimuti oleh es arktik. Kedua lokasi pabrik yang
        terlindung oleh salju dan logam memerlukan kecakapan horizontal.
        Manfaatkan tali luncur gantung dan musuh tak akan bisa melihat
        kedatanganmu.
      </p>
    </div>
    <div v-if="map === 'Pearl'">
      <img class="map-img" src="../assets/pearl.jpg" alt="" />
      <p class="text-white map-text">
        Tim Penyerang push ke area Tim Pertahanan di peta dua lokasi, berlatar
        di kota bawah laut yang meriah. Pearl adalah peta berbasis geografi
        tanpa mekanika. Lancarkan aksi melalui jalur mid yang padat atau sisi
        sayap yang lebih jauh di peta pertama yang berlatar di Omega Earth.
      </p>
    </div>
  </div>

  <CardChoose v-if="!type" />
  <SiteCard v-if="type" />
</template>
<style>
.map-img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
}

.map-title {
  font-size: 100px;
  text-align: center;
}
.map-text {
  text-align: center;
  max-width: 700px;
  margin: auto;
}
</style>
