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
      this.register(this.newUser);
    },
    ...mapActions(useMain, ["register"]),
  },
  data() {
    return {
      newUser: {
        email: "",
        password: "",
        username: "",
        address: "",
        phoneNumber: "",
      },
    };
  },
};
</script>
<template>
  <section class="vh-200" id="register_page">
    <div class="container py-5 h-100">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <!-- <div class="card border-0 shadow rounded-3 my-5 login-card"> -->
          <div class="card-body p-4 p-sm-5 shadow login-card rounded-3">
            <form id="registerForm" @submit.prevent="registerHandler">
              <div class="form-outline mb-4">
                <h1 class="text-center">Register</h1>
              </div>
              <!-- Username input -->
              <div class="form-outline mb-4">
                <label class="form-label" for="registerUsername"
                  >Username</label
                >
                <input
                  id="registerUsername"
                  type="text"
                  class="form-control"
                  placeholder="Your Username"
                  v-model="newUser.username"
                />
              </div>

              <!-- Email input -->
              <div class="form-outline mb-4">
                <label class="form-label" for="registerEmail"
                  >Email address</label
                >
                <input
                  v-model="newUser.email"
                  id="registerEmail"
                  type="email"
                  class="form-control"
                  placeholder="Register Email address"
                />
              </div>

              <!-- Password input -->
              <div class="form-outline mb-4">
                <label class="form-label" for="registerPassword"
                  >Password</label
                >
                <input
                  v-model="newUser.password"
                  id="registerPassword"
                  type="password"
                  class="form-control"
                  placeholder="Please input Password"
                />
              </div>

              <!-- phone number input -->
              <div class="form-outline mb-4">
                <label class="form-label" for="registerPhoneNumber"
                  >Phone Number</label
                >
                <input
                  v-model="newUser.phoneNumber"
                  id="registerPhoneNumber"
                  type="text"
                  class="form-control"
                  placeholder="Please input your Phone Number"
                />
              </div>

              <!-- address input -->
              <div class="form-outline mb-4">
                <label class="form-label" for="registerAddress">Address</label>
                <input
                  v-model="newUser.address"
                  id="registerAddress"
                  type="text"
                  class="form-control"
                  placeholder="Please input your Address"
                />
              </div>
              <ButtonComponent
                buttonType="submit"
                buttonClass="btn btn-primary btn-lg"
                buttonText="Sign Up"
              />
            </form>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </section>
</template>
