<script>
import { mapState, mapActions } from "pinia";
import { useCustomStore } from "../stores/custom";
import NavBarComp from "../components/NavBarComp.vue";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      role: localStorage.role,
      buyStock: 0,
    };
  },
  components: {
    NavBarComp,
  },
  methods: {
    ...mapActions(useCustomStore, ["fetchProductDetail", "addProductToCart"]),
    buttonBuyStock() {
      if (this.buyStock === 0) {
        Swal.fire("Error", "Minimum buy stock is 1", "error");
      } else {
        this.addProductToCart(this.product.id, this.buyStock);
      }
    },
  },
  computed: {
    ...mapState(useCustomStore, ["product"]),
    getPriceFormatted() {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(this.product.price);
    },
    getReleaseDateFormatted() {
      const d = new Date(this.product.createdAt);
      const day = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return `${day[d.getDay()]}, ${d.getDate()} ${
        month[d.getMonth()]
      } ${d.getFullYear()}`;
    },
    getUpdateDateFormatted() {
      const d = new Date(this.product.updatedAt);
      const day = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return `${day[d.getDay()]}, ${d.getDate()} ${
        month[d.getMonth()]
      } ${d.getFullYear()}`;
    },
  },
  created() {
    this.fetchProductDetail(this.$route.params.productId);
  },
};
</script>

<template>
  <NavBarComp />
  <div class="card">
    <div class="card-header text-center title">Product Detail</div>
    <div class="card-body text-center">
      <h1>{{ product.name }}</h1>
      <img :src="product.imageUrl" style="width: 460px; height: 380px" />
      <p class="mt-3">Stock : {{ product.stock }}</p>
      <p class="mt-3">Weight : {{ product.weight }} gram</p>
      <p>Price : {{ getPriceFormatted }} / 1 stock</p>
      <p>Released Date : {{ getReleaseDateFormatted }}</p>
      <p>Last Updated Date : {{ getUpdateDateFormatted }}</p>
    </div>
  </div>
  <div class="card" v-if="role !== 'Guest'">
    <div class="card-header text-center title">Buy Product</div>
    <div class="card-body text-center">
      <h1>
        Input stock you want to buy <i class="fa-solid fa-cart-shopping"></i>
      </h1>
      <form @submit.prevent="buttonBuyStock">
        <input
          class="form-control text-center mx-auto"
          type="number"
          v-model="buyStock"
          min="0"
          :max="product.stock"
          style="width: 50%"
        />
        <button class="btn btn-primary" type="submit">Buy!</button>
      </form>
    </div>
  </div>
  <div class="card">
    <div class="card-header text-center title">Product Share</div>
    <div class="card-body text-center">
      <h1>Product QR Code <i class="fa-solid fa-qrcode"></i></h1>
      <img :src="product.qrcode" style="width: 400px; height: 400px" />
      <p>Share the love! <i class="fa-solid fa-bullhorn"></i></p>
    </div>
  </div>
</template>

<style scoped>
div .title {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: #1e272e;
  font-size: 2rem;
}
h1 {
  font-family: Georgia, "Times New Roman", Times, serif;
  color: #222f3e;
  font-size: 3rem;
}
p {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: #485460;
  font-size: 1.3rem;
  font-weight: 500;
}
</style>
