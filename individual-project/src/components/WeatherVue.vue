<script>
import { mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  computed: {
    ...mapState(useCounterStore, ["celcius"]),
  },
};
</script>

<template>
  <div class="box">
    <div class="wave -one"></div>
    <div class="wave -two"></div>
    <div class="wave -three"></div>
    <div class="weathercon">
      <i class="fas fa-sun" style="color: #d36326"></i>
    </div>
    <div class="info">
      <h1 class="temp">{{ celcius }} &deg;C</h1>
    </div>
  </div>
</template>

<style>
.box {
  margin-left: 100px;

  width: 20vw;
  height: 25vh;
  border-radius: 5px;
  box-shadow: 0 2px 30px rgba(black, 0.2);
  /* background: darken(#5f96e9, 20%); */
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
}

.wave {
  opacity: 0.3;
  position: absolute;
  top: 160%;
  left: 50%;
  background: #26abeb;
  width: 500px;
  height: 500px;
  margin-left: -250px;
  margin-top: -250px;
  transform-origin: 50% 48%;
  border-radius: 43%;
  animation: drift 3000ms infinite linear;
  z-index: 1;
}

.wave.-three {
  animation: drift 5000ms infinite linear;
  z-index: 2 !important;
  opacity: 0.2;
}

.wave.-two {
  animation: drift 7000ms infinite linear;
  opacity: 0.1;
  z-index: 3 !important;
}

.box:after {
  content: "";
  display: block;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 11;
  transform: translate3d(0, 0, 0);
}

@keyframes drift {
  from {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(360deg);
  }
}

.info {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 45%;
  z-index: 4;
}

.location {
  text-align: center;
  font-weight: 800;
}

.date {
  text-align: center;
  margin-top: 5%;
  color: lighten(grey, 10%);
  font-size: 70%;
}

.temp {
  margin-top: 10%;
  text-align: center;
}

.weathercon {
  height: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
}
</style>
