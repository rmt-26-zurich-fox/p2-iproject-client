<template>
  <div class="container pt-5 pb-5">
    <div class="row justify-content-center ">
      <div class="col-md-7 col-lg-5 ">
        <div class="p-4 p-md-5 border">
          <h1 class="text-center">Branded Things</h1>
          <h5 class="text-center text-muted">Customer Web App</h5>
          <p class="lead text-center">Sign up to get product that you need.</p>
          <form @submit.prevent="handleRegisterSubmit">
            <div class="form-group mb-3">
              <label class="form-label">Username</label>
              <input v-model="register.username" type="text" class="form-control" placeholder="enter your username here" />
            </div>
            <div class="form-group mb-3">
              <label class="form-label">Email Address</label>
              <input v-model="register.email" type="email" class="form-control" placeholder="enter your email here" />
            </div>
            <div class="form-group mb-3">
              <label class="form-label">Phone Number</label>
              <input v-model="register.phoneNumber" type="text" class="form-control" placeholder="enter your phone number here" />
            </div>
            <div class="form-group mb-3">
              <label class="form-label">Address</label>
              <input v-model="register.address" type="text" class="form-control" placeholder="enter your address here" />
            </div>
            <div class="form-group mb-3">
              <label class="form-label">Password</label>
              <input v-model="register.password" type="password" class="form-control" placeholder="enter your password here" />
            </div>
            <div class="form-group">
              <ButtonLayout class="btn-primary form-control" buttonName="Sign up" />
            </div>
          </form>
          <p class="mt-2">
            Already have an account?
            <router-link to="/login" style="text-decoration: none; color: blue">Login</router-link>
          </p>
          <p class="mt-2">
            Browse product first?
            <router-link to="/" style="text-decoration: none; color: blue">Back to Home</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonLayout from "../components/ButtonLayout.vue";

export default {
  components: {
    ButtonLayout,
  },

  data() {
    return {
      register: {
        username: "",
        email: "",
        phoneNumber: "",
        address: "",
        password: "",
      },
    };
  },
};
</script>
