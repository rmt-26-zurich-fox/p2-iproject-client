<template>
  <section class="login">
    <div class="container shadow-lg rounded">
      <div class="logo">
        <h1><a>Movie</a><a>Ku</a></h1>
      </div>
      <form @submit.prevent="login({ email, password })">
        <label for="">Email</label>
        <input v-model="email" class="form-control" type="text" />
        <label for="">Password</label>
        <input v-model="password" class="form-control" type="password" />
        <router-link :to="{ name: 'register' }">Register</router-link>
        <button>Login</button>
      </form>
      <div class="social">
        <div>G</div>
        <div>F</div>
        <div>H</div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "pinia";
import { useGlobalStore } from "../stores/globalStore";

export default {
  data() {
    return {
      eamil: "",
      password: "",
    };
  },
  computed: {
    ...mapState(useGlobalStore, ["baseUrl"]),
  },
  methods: {
    ...mapActions(useGlobalStore, ["errorHandler", "successHandler"]),
    async login(body) {
      try {
        const { data } = await axios.post(this.baseUrl + "/login", body);
        this.successHandler(data.message);
        localStorage.setItem("access_token", data.access_token);
        this.$router.push("/home");
      } catch (error) {
        this.errorHandler(error);
      }
    },
  },
};
</script>
