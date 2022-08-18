<script >
import {mapActions, mapState} from "pinia"
import {useAllStore} from "../stores/useAllStore"
import router from "../router";

export default{
    props: ['product'],
    computed: {
        ...mapState(useAllStore, ['isLogin'])
    },

    methods: {
        ...mapActions(useAllStore, ['formatRupiah', 'addProductToCart']),

        addProductToCartLocal(){
            this.addProductToCart(this.product.id)
        }
    }
}


</script>

<template>
  <div class="col-12 col-md-2 py-4">
    <div class="card">
      <img :src="product.imageUrl" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ product.id }}-{{ product.name }}</h5>
        <p class="card-text">{{ product.description }}</p>
        <span>{{ this.formatRupiah(product.price) }}</span>

        <div class="d-flex justify-content-between" aria-label="Basic example">
          <button @click="addProductToCartLocal" class="round-black-btn small-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.round-black-btn {
  border-radius: 25px;
  background: #212529;
  color: #fff;
  padding: 5px 20px;
  display: inline-block;
  border: solid 2px #212529;
  transition: all 0.5s ease-in-out 0s;
  cursor: pointer;
  font-size: 14px;
}
.round-black-btn:hover,
.round-black-btn:focus {
  background: transparent;
  color: #212529;
  text-decoration: none;
}
</style>