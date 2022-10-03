<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  methods: {
    ...mapActions(useCounterStore, ["githubLogin"]),
    githubHandler() {
      this.githubLogin();
    },
  },
};
</script>
<template>
  <img
    src="../assets/bg.jpg"
    alt=""
    style="
      width: 100vw;
      height: 100vh;
      object-fit: cover;
      position: fixed;
      top: 0;
    "
  />
  <div class="container" style="padding-top: 100px">
    <div class="d-flex align-items-center justify-content-center">
      <div class="card" style="width: 500px; height: 500px">
        <form style="padding: 50px">
          <h1 style="text-align: center">Login</h1>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              ><h5>Email</h5></label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              ><h5>Password</h5></label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-dark">Login</button>
            <button
              @click.prevent="githubHandler"
              class="btn"
              style="background-color: #3ccf4e"
            >
              <img src="../assets/iconG.png" alt="" style="width: 20px" />
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
