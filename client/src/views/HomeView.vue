<script>
import { mapActions, mapState } from "pinia";
import { useAllStore } from "../stores/useAllStore";
import { GoogleMap, Marker } from "vue3-google-map";

import ProductCard from "../components/ProductCard.vue";

export default {
  components: {
    ProductCard,
    GoogleMap,
    Marker,
  },

  data() {
    return {
      center: { lat: 5.57091, lng: 95.299853 },
      markers: [
        {
          position: {
            lat: 5.57091,
            lng: 95.299853,
          },
        }, // Along list of clusters
      ],
    };
  },

  computed: {
    ...mapState(useAllStore, ["products"]),
  },

  methods: {
    ...mapActions(useAllStore, ["fetchAllProducts"]),

    async getAllProducts() {
      await this.fetchAllProducts();
    },

    // setup() {
    //   const center = { lat: 40.689247, lng: -74.044502 };

    //   return { center };
    // },
  },
  created() {
    this.getAllProducts();
    // console.log(this.fetchAllProducts);
    // this.setup();
  },
};
</script>

<template>
  <div>
    <div class="intro">
      <!-- <h2>The Cafe!</h2>
      <p class="top-text">Lorem ipsum dolor sit</p> -->
    </div>

    <div class="main-content">
      <!-- form will go here -->
    </div>

    <div class="container mt-3">
      <h2>Our Menus</h2>
      <!-- Product List-->
      <div class="row mt-4">
        <!-- Product Card -->
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>

      <!-- <div id="map"></div> -->
      <!-- <GoogleMap
        api-key="AIzaSyCC8DuJiwmnfvfXzx4H9f_Rqt9WxP7s3iE"
        style="width: 100%; height: 500px"
        :center="center"
        :zoom="15"
      > -->
      <!-- <Marker :options="{ position: center }" /> -->
      <!-- </GoogleMap> -->

      <h2>Visit Us</h2>

      <div class="map">
        <GMapMap
          class="d-flex justify-content-center"
          :center="center"
          :zoom="15"
          map-type-id="roadmap"
          style="width: 500px; height: 300px"
        >
          <GMapCluster>
            <GMapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              :draggable="true"
              @click="center = m.position"
            />
          </GMapCluster>
        </GMapMap>
      </div>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1rem;
  color: #404040;
  text-align: center;
}

/* ===== Typography =====*/

h1 {
  font-size: 2.25rem;
  font-weight: 300;
  color: #fff;
  margin: 2em 0;
}

h1 + p {
  color: #f18119;
  font-weight: 900;
  font-size: 1.3125rem;
  text-transform: uppercase;
  margin: 0;
}

h2 {
  font-size: 1.3125rem;
}

h2 + p {
  color: #f18119;
  font-weight: 900;
}

.top-text {
  font-size: 0.625rem;
  font-weight: 900;
  color: #f18119;
  text-transform: uppercase;
  order: -1;
}

.fine-print {
  font-size: 0.625rem;
  letter-spacing: 1px;
}

strong {
  font-weight: 900;
}

.map {

  padding-bottom: 100px;
}
/* intro section  */

.intro {
  background-color: #404040;
  background-image: url(https://dermanis.gr/wp-content/uploads/2017/01/coffee-shop-banner.jpg);
  background-size: cover;
  background-position: center;
  padding: 0 0.25em 1em;
  display: flex;
  flex-direction: column;
  opacity: 0.8;
  height: 500px;
}

/* main content section  */

.main-content {
  padding: 2em 1em;
}

/* media queries */

@media (min-width: 510px) {
  body {
    font-size: 1rem;
  }

  h1 {
    font-size: 3.5rem;
  }

  h2,
  h1 + p {
    font-size: 1.75rem;
  }
}
</style>
