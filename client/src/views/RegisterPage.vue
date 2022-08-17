<script>
import ButtonComponent from "../components/ButtonComponent.vue";
import { mapState, mapActions } from "pinia";
import { useMain } from "../stores/main";

export default {
  name: "RegisterPage",
  components: {
    ButtonComponent,
  },
  methods: {
    registerHandler() {
      // console.log(this.newUser);
      this.register(this.newUser);
    },
    ...mapActions(useMain, ["register"]),
  },
  data() {
    return {
      newUser: {
        email: "",
        password: "",
      },
    };
  },
};
</script>
<template>
  <section class="vh-100" id="login_page">
    <div class="container py-5 h-100">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card-body p-4 p-sm-5 shadow rounded-3 login-card">
            <div class="form-outline mb-4">
              <h1 class="text-center">Register</h1>
            </div>
            <form id="loginForm" @submit.prevent="registerHandler">
              <!-- Email input -->
              <div class="form-outline mb-4">
                <label class="form-label" for="loginEmail">Email address</label>
                <input
                  v-model="newUser.email"
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
                  v-model="newUser.password"
                  type="password"
                  id="loginPassword"
                  class="form-control form-control-lg"
                  placeholder="Enter your password ..."
                />
              </div>

              <div class="text-center">
                <p>
                  Already have an account? Please login
                  <router-link to="/login">
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
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
