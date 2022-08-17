<template>
  <div class="containerHome">
    <div class="row">
      <div
        class="col-md-4 col-sm-6"
        v-for="element in products"
        v-bind:key="element.id"
      >
        <div class="card mb-30">
          <a class="card-img-tiles" href="#" data-abc="true">
            <div class="inner">
              <div class="main-img">
                <img v-bind:src="element.imageUrl1" />
              </div>
            </div>
          </a>
          <div class="card-body text-center">
            <h4 class="card-title" v-if="element.type === 'prebuilt'">
              Prebuilt: {{ element.name }}
            </h4>
            <h4 class="card-title" v-if="element.type === 'barebones'">
              Barebones: {{ element.name }}
            </h4>
            <h4 class="card-title" v-if="element.type === 'switch'">
              Switch: 90 pcs {{ element.name }}
            </h4>
            <h4 class="card-title" v-if="element.type === 'addon'">
              Add-on: {{ element.name }}
            </h4>
            <h4 class="card-title" v-if="element.type === 'keycaps'">
              Keycaps: {{ element.name }}
            </h4>

            <RouterLink
              to="/detail/{{element.id}}"
              class="btn btn-outline-light btn-md"
              @click.prevent="productDetail(element.id)"
              >Details</RouterLink
            >
            <a
              class="btn btn-outline-light btn-md"
              href="#"
              data-abc="true"
              v-if="access_token"
              >Add to Cart</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { theSouthFace } from "../stores/theSouthFace";
export default {
  name: "HomePage",
  computed: {
    ...mapState(theSouthFace, ["products"]),
    ...mapWritableState(theSouthFace, ["access_token"]),
  },
  methods: {
    ...mapActions(theSouthFace, ["getProducts"]),
    productDetail(productId) {
      this.$router.push({ name: "DetailPage", params: { productId } });
    },
  },
  created() {
    this.getProducts();
    if (localStorage.getItem("access_token")) {
      this.access_token = localStorage.access_token;
    }
  },
};
</script>

<style>
.containerHome {
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
  width: 100%;
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
</style>
