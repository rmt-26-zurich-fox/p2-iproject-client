<script>
import { mapActions } from "pinia";
import { useCustomStore } from "../stores/custom";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useCustomStore, ["registerSubmitHandler"]),
    submitRegister() {
      this.registerSubmitHandler({
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<template>
  <div class="row">
    <div class="col-12 col-md-7 pb-3">
      <!-- Form Register -->
      <h1 class="text-center">Register</h1>
      <div class="card text-center mx-auto" style="width: 75%">
        <div class="card-body rounded shadow">
          <form @submit.prevent="submitRegister">
            <div class="mb-3">
              <label for="form-user-register-email" class="form-label">
                Email
              </label>
              <input
                type="text"
                id="form-user-register-email"
                class="form-control"
                placeholder="foo@bar.com"
                v-model="email"
              />
            </div>

            <div class="mb-3">
              <label for="form-user-register-password" class="form-label">
                Password
              </label>
              <input
                type="password"
                id="form-user-register-password"
                class="form-control"
                v-model="password"
              />
            </div>

            <button type="submit" class="btn btn-secondary rounded shadow">
              Register
            </button>
            <hr />
          </form>
          <p>Already have an account?</p>
          <button class="btn btn-primary rounded shadow">
            <router-link
              to="/login"
              style="color: white; text-decoration: none"
            >
              Login
            </router-link>
          </button>
        </div>
      </div>
    </div>
    <div class="col-12 order-first col-md-5 order-md-0 text-center">
      <img
        src="../assets/imgs/undraw_Register.png"
        style="width: 90%; height: 100%"
      />
    </div>
  </div>
</template>

<style scoped>
h1,
label,
p,
button {
  font-family: Cochin, Cambria, Georgia, Times, "Times New Roman", serif;
}
</style>
