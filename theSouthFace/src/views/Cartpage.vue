<template>
  <div class="containerCart">
    <div class="row">
      <div
        class="col-md-4 col-sm-6"
        v-for="element in cart"
        v-bind:key="element.id"
      >
  
        <div class="card mb-30">
          <a class="card-img-tiles" href="#" data-abc="true">
            <div class="inner">
              <div class="main-img">
                <img v-bind:src="element.Product.imageUrl1" />
              </div>
            </div>
          </a>
          <div class="card-body text-center">
            <h4 class="card-title" v-if="element.Product.type === 'prebuilt'">
              Prebuilt: {{ element.Product.name }}
            </h4>
            <h4 class="card-title" v-if="element.Product.type === 'barebones'">
              Barebones: {{ element.Product.name }}
            </h4>
            <h4 class="card-title" v-if="element.Product.type === 'switch'">
              Switch: 90 pcs {{ element.Product.name }}
            </h4>
            <h4 class="card-title" v-if="element.Product.type === 'addon'">
              Add-on: {{ element.Product.name }}
            </h4>
            <h4 class="card-title" v-if="element.Product.type === 'keycaps'">
              Keycaps: {{ element.Product.name }}
            </h4>

            <a
              class="btn btn-outline-light btn-md"
              href=""
              @click.prevent="submitRemoveFromCart(element.id)"
              >Remove</a
            >
          </div>
        </div>
      </div>
    </div>

  </div>
  <div id="delivery">
    <RouterLink id="delivery" class="btn btn-outline-light btn-md" to="/fee">Check Delivery Fee</RouterLink>
  
  </div>
</template>

<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { theSouthFace } from "../stores/theSouthFace";
export default {
  name: "CartPage",
  computed: {
    ...mapState(theSouthFace, ["cart"]),
    ...mapWritableState(theSouthFace, ["access_token"]),
  },
  methods: {
    ...mapActions(theSouthFace, ["fetchAllCarts", "removeFromCart"]),
    submitRemoveFromCart(cartId) {
      this.removeFromCart(cartId);
      this.fetchAllCarts();
    },
  },
  created() {
    this.fetchAllCarts();
    if (localStorage.getItem("access_token")) {
      this.access_token = localStorage.access_token;
    }
  },
};
</script>

<style>
.containerCart {
  margin-top: 20px;
  display: flex !important;
  flex-direction: row !important;
  justify-content: center !important;
}
.card {
  width: 30rem;
  height: 40rem;
  border-radius: 10px !important;
  background-color: rgba(255, 255, 255, 0.418);
}
.card-title {
  color: white;
}

.mb-30 {
  margin-bottom: 30px !important;
}
.btn {
  width: 150px;
  margin-left: 0.5em;
}

.card-img-tiles {
  display: block;
  justify-content: baseline !important;
  border-bottom: 1px solid #e1e7ec;
  height: 30rem;
}

.card-img-tiles > .inner {
  display: table;
  width: 100%;
}

.card-img-tiles .main-img,
.card-img-tiles .thumblist {
  display: table-cell;
  width: auto;
  padding: 15px;
}

.card-img-tiles .main-img > img:last-child,
.card-img-tiles .thumblist > img:last-child {
  margin-bottom: 0;
  border-radius: 10px;
  min-height: 300px;
}

.card-img-tiles .main-img > img,
.card-img-tiles .thumblist > img {
  display: block;
  margin-bottom: 6px;
}
.thumblist {
  width: 35%;
  border-left: 1px solid #1a4c3d !important;
  display: table-cell;
  width: 65%;
  padding: 15px;
  vertical-align: middle;
}

.card-img-tiles .thumblist > img {
  display: block;
  width: 100%;
  margin-bottom: 6px;
}
#delivery{
  text-align: center;


}
</style>
