<script>
import { mapState, mapActions } from "pinia";
import { useAllStore } from "../stores/useAllStore";

export default {
  name: "register",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useAllStore, ["registerHandler"]),

    localRegisterHandler() {
      console.log("tekan register");
      this.registerHandler(this.email, this.password);
    },
  },
};
</script>

<template>
  <div>
    <div class="container mt-3" style="height: 100vh">
      <div class="row">
        <div class="col-12 col-md-6 offset-md-3">
          <form @submit.prevent="localRegisterHandler">
            <div class="card o-hidden border-0 shadow-lg my-5">
              <div class="card-body">
                <h3 class="card-title text-gray-900 mb-4 text-center">
                  Register
                </h3>
                <div class="mb-3">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email Address"
                    v-model="email"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    v-model="password"
                  />
                </div>

                <div class="d-grid gap-2 col-6 mx-auto">
                  <button type="submit">Register</button>
                </div>
                <router-link class="nav-link" to="/login">
                    Back to login</router-link
                  >
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
