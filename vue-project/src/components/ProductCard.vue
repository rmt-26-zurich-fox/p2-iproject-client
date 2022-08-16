<script>
import { mapActions } from "pinia";
import { useCustomStore } from "../stores/custom";

export default {
  data() {
    return {
      productId: 0,
      name: "",
      price: 0,
      stock: 0,
      weight: 0,
      imageUrl: "",
      productStatus: "",
      createdAt: "",
    };
  },
  props: ["product"],
  created() {
    this.productId = this.product.id;
    this.name = this.product.name;
    this.price = this.product.price;
    this.stock = this.product.stock;
    this.weight = this.product.weight;
    this.imageUrl = this.product.imageUrl;
    this.productStatus = this.product.productStatus;
    this.createdAt = this.product.createdAt;
  },
  methods: {
    ...mapActions(useCustomStore, ["fetchProductDetail"]),
    onClickHandlerDetail(productId) {
      this.fetchProductDetail(productId);
    },
  },
  computed: {
    getPriceFormatted() {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(this.price);
    },
    getDateFormatted() {
      const d = new Date(this.createdAt);
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
};
</script>

<template>
  <div class="col-md-4 mb-3">
    <div class="card shadow" style="width: 21rem">
      <img
        :src="imageUrl"
        class="card-img-top"
        style="width: 100%; height: 240px"
      />
      <div class="card-body">
        <span class="badge rounded-pill text-bg-secondary mb-2">
          Release date : {{ getDateFormatted }}
        </span>
        <br />
        <button class="rounded mb-2" @click="onClickHandlerDetail(productId)">
          <i class="fa-solid fa-circle-info" style="color: #ff9f43">
            Detail for this item
          </i>
        </button>
        <h5 class="card-title">{{ name }}</h5>
        <p class="card-text">Stock : {{ stock }} item</p>
        <p class="card-text">Weight : {{ weight }}g</p>
        <hr />
        <h5 style="color: #ff7675">{{ getPriceFormatted }} / 1 stock</h5>
      </div>
    </div>
  </div>
</template>

<style scoped>
h5,
p {
  font-family: monospace;
}
</style>
