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
    ...mapActions(useCustomStore, [
      "loginSubmitHandler",
      "loginGuestSubmitHandler",
      "handleCredentialResponseGoogle",
    ]),
    submitLogin() {
      this.loginSubmitHandler({
        email: this.email,
        password: this.password,
      });
    },
    guestLogin() {
      this.loginGuestSubmitHandler();
    },
    // Google Login
    handleCredentialResponse(response) {
      this.handleCredentialResponseGoogle(response);
    },
  },
  mounted() {
    const callback = this.handleCredentialResponse;

    google.accounts.id.initialize({
      client_id:
        "299892906015-qf1uud5l10l3i0mpmg57a73bqd35l2ov.apps.googleusercontent.com",
      callback,
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonGoogleDiv"),
      {
        theme: "outline",
        size: "large",
        width: (document.getElementById("buttonGoogleDiv").style.maxWidth =
          "inherit"),
      }
    );
  },
};
</script>

<template>
  <div class="row">
    <div class="col-12 col-md-5 text-center">
      <img
        src="../assets/imgs/undraw_Login.png"
        style="width: 90%; height: 100%"
      />
    </div>
    <div class="col-12 col-md-7 pb-3">
      <!-- Form Login -->
      <h1 class="text-center">Login</h1>
      <div class="card text-center mx-auto" style="width: 75%">
        <div class="card-body rounded shadow">
          <form @submit.prevent="submitLogin">
            <div class="mb-3">
              <label for="form-user-login-email" class="form-label">
                Email
              </label>
              <input
                type="text"
                id="form-user-login-email"
                class="form-control"
                placeholder="foo@bar.com"
                v-model="email"
              />
            </div>

            <div class="mb-3">
              <label for="form-user-login-password" class="form-label">
                Password
              </label>
              <input
                type="password"
                id="form-user-login-password"
                class="form-control"
                v-model="password"
              />
            </div>

            <button type="submit" class="btn btn-secondary rounded shadow">
              Login
            </button>
            <hr />
          </form>
          <p>Don't have an account yet?</p>
          <button class="btn btn-primary rounded shadow">
            <router-link
              to="/register"
              style="color: white; text-decoration: none"
            >
              Register
            </router-link>
          </button>
          <hr />
          <p>Login as guest</p>
          <button class="btn btn-success" @click="guestLogin">
            Guest Login
          </button>
          <hr />
          <p>Social Media Login</p>
          <div id="buttonGoogleDiv" class="text-center"></div>
        </div>
      </div>
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
