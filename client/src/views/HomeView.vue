<script>
import { mapActions, mapState } from "pinia";
import { useAllStore } from "../stores/useAllStore";
// import { defineComponent } from "vue";
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
      center: {lat: 5.548290, lng: 95.323753},
      markers: [
        {
          position: {
            lat: 5.548290, lng: 95.323753
          },
        }
        , // Along list of clusters
      ]
    }
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
    <div class="container mt-3">
      <!-- <div>
        <img
          src="https://img.freepik.com/free-vector/realistic-coffee-background-with-drawings_79603-603.jpg?w=1060&t=st=1660732368~exp=1660732968~hmac=9b590bd8fa1eb7b71ef85394dcf0eceb7d3ff8304ddbb32d334d25a48a3eb382"
          class="img-fluid"
          alt="Responsive image"
        />
      </div> -->

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

      Visit Us

      <GMapMap
        :center="center"
        :zoom="7"
        map-type-id="terrain"
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
</template>
