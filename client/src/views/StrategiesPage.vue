<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  methods: {
    ...mapActions(useCounterStore, ["getMap"]),
    gettingMap(map) {
      this.getMap(map);
    },
  },
};
</script>
<template>
  <div class="container" style="margin-top: 100px">
    <div class="row">
      <div class="col-12">
        <a href="" @click.prevent="gettingMap('Ascent')">
          <div class="bg-danger text-white position-relative m-3 rounded">
            <div class="overlays"></div>
            <img class="maps" src="../assets/Ascent.jpg" alt="" />
            <div class="card-img-overlay">
              <h1 class="title position-absolute bottom-0 start-0 m-3">
                Ascent
              </h1>
            </div>
          </div>
        </a>
      </div>
      <div class="col-12">
        <a href="" @click.prevent="gettingMap('Bind')">
          <div class="bg-danger text-white position-relative m-3 rounded">
            <div class="overlays"></div>
            <img class="maps" src="../assets/Bind.jpg" alt="" />
            <div class="card-img-overlay">
              <h1 class="title position-absolute bottom-0 start-0 m-3">Bind</h1>
            </div>
          </div>
        </a>
      </div>
      <div class="col-12">
        <a href="" @click.prevent="gettingMap('Breeze')">
          <div class="bg-danger text-white position-relative m-3 rounded">
            <div class="overlays"></div>
            <img class="maps" src="../assets/breeze.jpg" alt="" />
            <div class="card-img-overlay">
              <h1 class="title position-absolute bottom-0 start-0 m-3">
                Breeze
              </h1>
            </div>
          </div>
        </a>
      </div>
      <div class="col-12">
        <a href="" @click.prevent="gettingMap('Fracture')">
          <div class="bg-danger text-white position-relative m-3 rounded">
            <div class="overlays"></div>
            <img class="maps" src="../assets/Fracture.jpeg" alt="" />
            <div class="card-img-overlay">
              <h1 class="title position-absolute bottom-0 start-0 m-3">
                Fracture
              </h1>
            </div>
          </div>
        </a>
      </div>
      <div class="col-12">
        <a href="" @click.prevent="gettingMap('Haven')">
          <div class="bg-danger text-white position-relative m-3 rounded">
            <div class="overlays"></div>
            <img class="maps" src="../assets/haven.jpg" alt="" />
            <div class="card-img-overlay">
              <h1 class="title position-absolute bottom-0 start-0 m-3">
                Haven
              </h1>
            </div>
          </div>
        </a>
      </div>
      <div class="col-12">
        <a href="" @click.prevent="gettingMap('Icebox')">
          <div class="bg-danger text-white position-relative m-3 rounded">
            <div class="overlays"></div>
            <img class="maps" src="../assets/icebox.jpg" alt="" />
            <div class="card-img-overlay">
              <h1 class="title position-absolute bottom-0 start-0 m-3">
                IceBox
              </h1>
            </div>
          </div>
        </a>
      </div>
      <div class="col-12">
        <a href="" @click.prevent="gettingMap('Pearl')">
          <div class="bg-danger text-white position-relative m-3 rounded">
            <div class="overlays"></div>
            <img class="maps" src="../assets/pearl.jpg" alt="" />
            <div class="card-img-overlay">
              <h1 class="title position-absolute bottom-0 start-0 m-3">
                Pearl
              </h1>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: #1b2430;
  height: 100vh;
}

.title {
  font-size: 80px;
}
.maps {
  width: 100%;
  height: 100%;
  max-height: 300px;
  object-fit: cover;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.overlays {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: black;
  opacity: 0;
  z-index: 1;
  transition: all 0.5s;
}
.overlays:hover {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.333);
}
</style>
