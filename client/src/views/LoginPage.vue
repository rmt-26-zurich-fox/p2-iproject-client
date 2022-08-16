<template>
  <div class="container pt-5">
    <div class="row justify-content-center">
      <div class="col-md-7 col-lg-5">
        <div class="p-4 p-md-5 border">
          <h1 class="text-center">Branded Things</h1>
          <h5 class="text-center text-muted">Customer Web App</h5>
          <form @submit.prevent="handleLogin">
            <div class="mb-3">
              <label class="form-label">Email address</label>
              <input v-model="login.email" class="form-control" type="text" placeholder="enter your email here" />
            </div>
            <div class="mb-3">
              <label class="form-label">Password</label>
              <input v-model="login.password" class="form-control" type="password" placeholder="enter your password here" />
            </div>
            <div class="mb-3">
              <ButtonLayout class="btn-primary form-control" buttonName="Log in" />
            </div>
          </form>
          <p class="mt-2">
            Don't have an account yet?
            <router-link to="/register" style="text-decoration: none; color: blue">Sign Up</router-link>
          </p>
          <p class="mt-2">
            Browse product first?
            <router-link to="/" style="text-decoration: none; color: blue">Back to Home</router-link>
          </p>
          <div class="row">
            <div class="col">
              <hr />
            </div>
            <div class="col text-center">
              <p>OR</p>
            </div>
            <div class="col">
              <hr />
            </div>
          </div>
          <div id="googleLogin"></div>
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
      login: {
        email: "",
        password: "",
      },
    };
  },
};
</script>
