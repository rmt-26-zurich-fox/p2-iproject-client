<script>
import NavBar from "../components/NavBar.vue";
import FooterBar from "../components/FooterBar.vue";
import TopDoctorCard from "../components/TopDoctorCard.vue";
import FilterBar from "../components/FilterFeatures.vue";
import FilterResult from "../components/FilterResult.vue";
export default {
  name: "LoginView",
  components: {
    NavBar,
    FooterBar,
    TopDoctorCard,
    FilterBar,
    FilterResult,
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
            <span class="toBlue">Kesehatanmu</span>
            <span class="toGray"
              >adalah <br />
              <em>urusan kami</em></span
            >
          </h1>
          <p>
            Tubuh yang kuat dan sehat jasmani merupakan fondasi utama kita untuk
            mencapai tujuan dalam kehidupan sehari hari.
          </p>
          <button class="button-style">Cari Gejala <span>›</span></button>
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
        <div class="filter">
          <div class="features-filter-title"><h2>Filter pencarianmu</h2></div>
          <!--Filter-->
          <FilterBar />
          <hr />
          <p>
            Tidak menemukan pencarian? <br /><span class="fontSize"
              >Tanya dokter
              <span class="toBlue underscore features-cursor-pointer"
                >disini</span
              ></span
            >
          </p>
        </div>
        <div class="diagnosa">
          <div class="diagnosa-title"><h1>Diagnosa penyakitmu</h1></div>
          <!--Filter Result-->
          <FilterResult />
        </div>
      </div>
    </main>
    <!--Footer-->
    <FooterBar />
  </div>
</template>
