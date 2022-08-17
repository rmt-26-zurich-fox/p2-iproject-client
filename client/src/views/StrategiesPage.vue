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
  <h1>ini strategi</h1>
  <div class="cards">
    <a href="" @click.prevent="gettingMap('Ascent')">
      <div class="card">
        <img src="../assets/Ascent.jpg" alt="" />
        <div class="details">
          <h5>Ascent</h5>
        </div>
      </div>
    </a>
    <a href="" @click.prevent="gettingMap('Bind')">
      <div class="card">
        <img src="../assets/Bind.jpg" alt="" />
        <div class="details">
          <h5>Bind</h5>
        </div>
      </div>
    </a>
    <a href="" @click.prevent="gettingMap('Breeze')">
      <div class="card">
        <img src="../assets/breeze.jpg" alt="" />
        <div class="details">
          <h5>Breeze</h5>
        </div>
      </div>
    </a>
    <a href="">
      <div class="card" @click.prevent="gettingMap('Fracture')">
        <img src="../assets/Fracture.jpeg" alt="" />
        <div class="details">
          <h5>Fracture</h5>
        </div>
      </div>
    </a>
    <a href="" @click.prevent="gettingMap('Haven')">
      <div class="card">
        <img src="../assets/haven.jpg" alt="" />
        <div class="details">
          <h5>Haven</h5>
        </div>
      </div>
    </a>
    <a href="" @click.prevent="gettingMap('Icebox')">
      <div class="card">
        <img src="../assets/icebox.jpg" alt="" />
        <div class="details">
          <h5>IceBox</h5>
        </div>
      </div>
    </a>
    <a href="" @click.prevent="gettingMap('Pearl')">
      <div class="card">
        <img src="../assets/pearl.jpg" alt="" />
        <div class="details">
          <h5>Pearl</h5>
        </div>
      </div>
    </a>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #1b2430;
  height: 100vh;
  display: flex;
}

.card {
  width: 200px;
  height: 150px;
  margin: 1em;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
