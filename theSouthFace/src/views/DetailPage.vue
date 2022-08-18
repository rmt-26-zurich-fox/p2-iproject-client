<template>
  <div class="col">
    <div class="cardDetail text-white">
      <img
        v-bind:src="oneProduct.imageUrl1"
        class="card-img-top"
        style="width: 700px; height: 500px"
      />

      <div class="card-body1">
        <div class="text-center">
          <h5 class="card-title">
            <strong>{{ oneProduct.name }}</strong>
          </h5>
          <p v-if="oneProduct.type === 'prebuilt'">Prebuilt</p>
          <p v-if="oneProduct.type === 'barebones'">Barebones</p>
          <p v-if="oneProduct.type === 'switch'">Switch</p>
          <p v-if="oneProduct.type === 'keycaps'">Keycaps</p>
          <p v-if="oneProduct.type === 'addon'">Addon</p>
        </div>
        <div class="desc">
          <div>{{ oneProduct.description }}</div>
          <br />

          Price :

          {{ currency(oneProduct.price) }}
        </div>
        <br />
        <a
          class="btn btn-outline-light btn-md"
          href="#"
          data-abc="true"
          @click.prevent="submitAddToCart(oneProduct.id)"
          >Add to Cart</a
        >
        <a class="btn btn-outline-light btn-md" v-bind:href="oneProduct.videolink" v-if="oneProduct.videolink!==' '"  target="_blank" data-abc="true"
          >Review Video</a
        >
      </div>
      <img
        v-bind:src="oneProduct.imageUrl2"
        class="card-img-top"
        style="width: 700px; height: 500px"
      />
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "pinia";
import { theSouthFace } from "../stores/theSouthFace";

export default {
  name: "DetailPage",
  computed: {
    ...mapState(theSouthFace, ["oneProduct"]),
  },
  methods: {
    ...mapActions(theSouthFace, ["fetchOneProduct", "addToCart"]),
    currency(price) {
      return price.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      });
    },
    submitAddToCart(productId) {
      this.addToCart(productId);
    },
  },
  created() {
    this.fetchOneProduct(this.$route.params.productId);
  },
};
</script>
<style>
.cardDetail {
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center !important;
  opacity: 0.9;
  width: 100% !important;
  border: none;
  padding-right: 30px;
  padding-left: 30px;
}
.card-body1 {
  width: 700px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 100px;
  text-align: justify;
}
.card-img-top {
  border-radius: 10px;
}
.btn {
  align-items: center;
  justify-content: center;
}
</style>
