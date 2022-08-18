<script>
// import ButtonComp from "./ButtonComp.vue";
import { mapState, mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
import { RouterLink } from "vue-router";
export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["loginHandler"]),
    ...mapActions(useCounterStore, ["googleLoginHandler"]),
    loginHandle() {
      this.loginHandler(this.email, this.password);
    },
    handleCredentialResponse(response) {
      this.googleLoginHandler(response);
    },
  },
  mounted() {
    const cb = this.handleCredentialResponse;

    google.accounts.id.initialize({
      client_id:
        "720518888938-56i0s5tpbh86n9ng856as9t070kne0qo.apps.googleusercontent.com",
      callback: cb,
    });
    google.accounts.id.renderButton(document.getElementById("buttonDiv"), {
      theme: "outline",
      size: "large",
    });
  },
};
</script>
<template>
  <section>
    <div
      class="container d-flex align-items-center justify-content-center"
      style="width: 100%; height: 100vh"
    >
      <div class="card" style="width: 32rem">
        <div class="card-body">
          <div class="mb-4 text-center">
            <h2>Login</h2>
            <p>Silahkan login terlebih dahulu</p>
          </div>
          <form id="login" @submit.prevent="loginHandle">
            <div>
              <div>
                <label class="form-label">Email:</label>
                <input
                  class="form-control"
                  type="text"
                  id="emailLogin"
                  v-model="email"
                /><br /><br />
              </div>
              <div>
                <label class="form-label">Password:</label>
                <input
                  class="form-control"
                  type="password"
                  id="passwordLogin"
                  v-model="password"
                /><br /><br />
              </div>
              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-primary">Login</button>
              </div>
              <div class="mt-3 text-center">
                <span
                  >Belum punya akun ?
                  <!-- <a href="" id=" goToRegister" @click.prevent="goToRegister"
                    >daftar disini</a -->
                  <RouterLink to="/register">Daftar disini</RouterLink>
                </span>
              </div>
              <div
                class="align-items-center d-flex justify-content-center mt-3"
              >
                <div id="buttonDiv"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
