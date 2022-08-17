<template>
  <div class="containerHome mt-100">
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
            <h4 class="card-title">{{ element.name }}</h4>
            <p>
              {{
                element.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })
              }}
            </p>

            <a class="btn btn-outline-light btn-md" href="#" data-abc="true"
              >View Product</a
            >
            <a class="btn btn-outline-light btn-md" href="#" data-abc="true"
              >Add to Cart</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { theSouthFace } from "../stores/theSouthFace";
export default {
  name: "HomePage",
  computed: {
    ...mapState(theSouthFace, ["products"]),
  },
  methods: {
    ...mapActions(theSouthFace, ["getProducts"]),
  },
  created() {
    this.getProducts();
    // console.log(this.products); // masuk
  },
};
</script>

<style>
.containerHome {
  margin-top: 100px;
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
.btn{
    width : 150px;
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
  vertical-align: middle;
}

.card-img-tiles .main-img > img:last-child,
.card-img-tiles .thumblist > img:last-child {
  height: fit-content;
  justify-content: baseline;
  margin-bottom: 0;
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
