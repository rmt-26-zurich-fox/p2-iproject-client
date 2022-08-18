<template>
  <LoadingSign v-if="isLoading" />
  <div v-if="house && !isLoading" class="container mt-3">
    <h3>{{ house.name }}</h3>
    <p class="text-muted">{{ house.location }}</p>
    <hr />
    <div class="row justify-content-center">
      <div class="col-6">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div v-for="(image, index) in house.Images" class="carousel-item" style="object-fit: cover" :class="{ active: index === 0 }">
              <img :src="image.imageUrl" class="img-fluid d-block" />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-8">
        <p>hosted by: {{ house.User.username }}</p>
        <hr />
        <h5>What this place offers</h5>
        <ul>
          <li v-for="facility in house.HouseFacilities" :key="facility.id">{{ facility.Facility.name }}</li>
        </ul>
        <hr />
        <h5>Review</h5>
        <p v-if="!house.review" class="text-muted">no review available</p>
        <p v-if="house.review">{{ house.review }}</p>
        <hr />
        <h5>Share this house</h5>
        <img :src="qrcode" alt="qrcode" style="height: 100px; border: 5px solid" class="mb-5" />
      </div>
      <div class="card ms-5 col shadow" style="max-height: 300px">
        <div class="card-body">
          <label>Night(s): </label>
          <input v-model="night" type="number" class="form-control" />
          <h5 class="card-title mt-5">Total price:</h5>
          <h5 class="card-title">{{ formatPrice }}</h5>
          <button @click="paymentGenerator" id="pay-button" class="btn btn-primary mt-3 form-control" :class="{ disabled: night < 1 }">Book now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapWritableState } from "pinia";
import { useHouseStore } from "../stores/house";
import LoadingSign from "../components/LoadingSign.vue";

export default {
  components: {
    LoadingSign,
  },

  data() {
    return {
      house: "",
      night: 1,
      qrcode: "",
    };
  },

  methods: {
    ...mapActions(useHouseStore, ["getDetailHouse", "paymentHandler", "errorHandler", "generateQr"]),

    async fetchDetailHouse() {
      this.isLoading = true;
      try {
        const data = await this.getDetailHouse(this.$route.params.houseId);
        await this.handleQr(this.house.id);
        this.house = data;
      } catch (error) {
        this.errorHandler(error);
      } finally {
        this.isLoading = false;
      }
    },

    async paymentGenerator() {
      try {
        const response = await this.paymentHandler(this.house.price * this.night);

        window.snap.pay(response.data);
      } catch (error) {
        this.errorHandler(error);
      }
    },

    async handleQr(houseId) {
      try {
        const data = await this.generateQr(houseId);
        this.qrcode = data.qrcode;
      } catch (error) {
        console.log(error);
      }
    },
  },

  computed: {
    ...mapWritableState(useHouseStore, ["isLoading"]),

    formatPrice() {
      if (this.night < 1) {
        return 0;
      } else {
        return (this.house.price * this.night).toLocaleString("id-ID", { style: "currency", currency: "IDR" }).replace(",00", "");
      }
    },
  },

  created() {
    this.fetchDetailHouse();
  },
};
</script>
