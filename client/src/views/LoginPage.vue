<script>
import { mapActions } from "pinia";
import { main } from "../stores/counter";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      dataLogin: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(main, ["login"]),
    loginCustomer() {
      this.login(this.dataLogin);
      this.isLoggedIn = true;
      this.$router.push("/");
      Swal.fire({
        title: `Logged in`,
        text: `You are successfully logged in`,
        icon: `success`,
      });
    },
    handleCredentialResponse(data) {
      this.handleGoogleLogin(data);
    },
  },
};
</script>

<template>
  <div class="body mt-20 mx-8">
    <div class="md:flex items-center justify-between">
      <img src="../assets/img/classroom02.jpeg" alt="" />

      <div class="w-full md:max-w-md mt-6">
        <div class="card bg-white shadow-md rounded-lg px-4 py-4 mb-6">
          <form type="submit" v-on:submit="loginCustomer">
            <div class="flex items-center justify-center">
              <h2 class="text-2xl font-bold tracking-wide">Welcome back</h2>
            </div>
            <h2 class="text-xl text-center font-semibold text-gray-800 mb-2">
              Sign In
            </h2>
            <input
              v-model="dataLogin.email"
              type="text"
              class="rounded px-4 w-full py-1 bg-gray-200 border border-gray-400 mb-6 text-gray-700 placeholder-gray-700 focus:bg-white focus:outline-none"
              placeholder="Email Address"
            />
            <input
              v-model="dataLogin.password"
              type="password"
              class="rounded px-4 w-full py-1 bg-gray-200 border border-gray-400 mb-4 text-gray-700 placeholder-gray-700 focus:bg-white focus:outline-none"
              placeholder="Password"
            />
            <div class="flex items-center justify-between">
              <span class="text-gray-600"
                >Already have an account?
                <RouterLink to="/register">register</RouterLink> here</span
              >
              <button
                type="submit"
                class="bg-gray-800 text-gray-200 px-2 py-1 rounded"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
