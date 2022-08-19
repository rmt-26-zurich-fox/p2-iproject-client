<script>
import { mapState, mapActions } from "pinia";
import { useAllStore } from "../stores/useAllStore";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    ...mapActions(useAllStore, ["loginHandler", "errorShow", "loginGoogle"]),

    async localLoginHandler() {
      try {
        console.log("tekan login");
        await this.loginHandler(this.email, this.password);
        this.$router.push("/");
      } catch (error) {
        this.errorShow(error);
      }
    },

    handleCredentialResponse(response) {
      this.loginGoogle(response);
      this.$router.push("/");
    },
  },

  mounted() {
    const cb = this.handleCredentialResponse;

    google.accounts.id.initialize({
      client_id:
        "474149543961-u5195ojkj9raorksl4ugnvpegvsd50jt.apps.googleusercontent.com",
      callback: cb,
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      {
        theme: "outline",
        size: "large",
      } // customization attributes
    );
    //google.accounts.id.prompt(); // also display the One Tap dialog
  },
};
</script>

<template>
  <div>
    <div class="container mt-3" style="height: 100vh">
      <div class="row">
        <div class="col-12 col-md-6 offset-md-3">
          <form @submit.prevent="localLoginHandler">
            <div class="card o-hidden border-0 shadow-lg my-5">
              <div class="card-body">
                <h3 class="card-title text-gray-900 mb-4 text-center">
                  Welcome back
                </h3>
                <div class="mb-3">
                  <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    placeholder="Enter Email Address..."
                  />
                </div>
                <div class="mb-3">
                  <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    placeholder="Enter Password..."
                  />
                </div>

                <div class="d-grid gap-2 col-6 mx-auto">
                  <button type="submit">Login</button>
                </div>

                <div class="d-grid gap-2 col-6 mx-auto" id="buttonDiv"></div>
                <p class="text-center" color="black">
                  don't have an account?<br />
                  <router-link class="nav-link" to="/register">
                    Register here</router-link
                  >
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
