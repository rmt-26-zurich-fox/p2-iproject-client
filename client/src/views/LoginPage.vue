<script>
import ButtonComponent from "../components/ButtonComponent.vue";
import { mapState, mapActions } from "pinia";
import { useMain } from "../stores/main";

export default {
  name: "LoginPage",
  components: {
    ButtonComponent,
  },
  computed: {
    ...mapState(useMain, ["isLoggedIn"]),
  },
  methods: {
    loginHandler() {
      this.login(this.user);
    },
    ...mapActions(useMain, ["login"]),
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  // async created() {
  //   await this.refreshPage();
  // },
};
</script>

<template>
  <section class="vh-100" id="login_page">
    <div class="container py-5 h-100">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card-body p-4 p-sm-5 shadow rounded-3 login-card">
            <div class="form-outline mb-4">
              <h1 class="text-center">Please Login First</h1>
            </div>
            <form id="loginForm" @submit.prevent="loginHandler">
              <!-- Email input -->
              <div class="form-outline mb-4">
                <label class="form-label" for="loginEmail">Email address</label>
                <input
                  v-model="user.email"
                  type="email"
                  id="loginEmail"
                  class="form-control form-control-lg"
                  placeholder="Enter your registered email ..."
                />
              </div>

              <!-- Password input -->
              <div class="form-outline mb-4">
                <label class="form-label" for="loginPassword">Password</label>
                <input
                  v-model="user.password"
                  type="password"
                  id="loginPassword"
                  class="form-control form-control-lg"
                  placeholder="Enter your password ..."
                />
              </div>

              <div class="text-center">
                <p>
                  Do not have an account? Please register
                  <router-link to="/users/register">
                    <span id="registerButton"> here</span>
                  </router-link>
                </p>
              </div>
              <!-- Submit button -->
              <ButtonComponent
                buttonType="submit"
                buttonClass="btn btn-primary btn-lg"
                buttonText="Sign In"
              />
              <div class="divider text-center text-or">
                <p class="text-center fw-bold mx-3 mb-0">OR</p>
              </div>
            </form>
            <div class="d-flex justify-content-center">
              <div id="google-signin-button"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <RouterView />
</template>
