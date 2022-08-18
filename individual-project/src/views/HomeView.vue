<script>
import NavBar from "../components/NavBar.vue";
import FooterBar from "../components/FooterBar.vue";
import TopDoctorCard from "../components/TopDoctorCard.vue";
import FilterBar from "../components/FilterFeatures.vue";
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import WeatherVue from "../components/WeatherVue.vue";
export default {
  name: "LoginView",
  components: {
    NavBar,
    FooterBar,
    TopDoctorCard,
    FilterBar,
    WeatherVue,
  },
  computed: {
    ...mapState(useCounterStore, ["celcius"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchProfile"]),
  },
  created() {
    this.fetchProfile();
  },
};
</script>
<template>
  <div class="container">
    <!--Navbar-->
    <NavBar />
    <main>
      <div class="banner">
        <div class="banner-content">
          <h1>
            <span class="toBlue">Kesehatanmu </span>
            <span class="toGray"
              >adalah <br />
              <em>urusan kami</em></span
            >
          </h1>
          <p>
            Tubuh yang kuat dan sehat jasmani merupakan fondasi utama kita untuk
            mencapai tujuan dalam kehidupan sehari hari.
          </p>
        </div>
        <div class="banner-image">
          <img src="../assets/banner.png" alt="banner-image" />
        </div>
      </div>
      <div class="content">
        <div class="content-title">
          <h1 style="color: #ffff">Top Doctors</h1>
        </div>
        <div class="card-content">
          <!--Doctor Card-->
          <TopDoctorCard />
        </div>
      </div>
      <div class="features-filter">
        <FilterBar />
      </div>

      <WeatherVue />
    </main>

    <!--Footer-->
    <FooterBar />
  </div>
</template>
