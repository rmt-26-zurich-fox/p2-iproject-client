<template>
  <section class="register">
    <div class="container shadow-lg rounded">
      <div class="logo">
        <h1><a>Movie</a><a>Ku</a></h1>
      </div>
      <form @submit.prevent="register({ username, email, password })">
        <label for="">Username</label>
        <input v-model="username" class="form-control" type="text" />
        <label for="">Email</label>
        <input v-model="email" class="form-control" type="text" />
        <label for="">Password</label>
        <input v-model="password" class="form-control" type="password" />
        <label for="">Retype</label>
        <input v-model="retype" class="form-control" type="password" />
        <router-link :to="{ name: 'login' }">Login</router-link>
        <button>Register</button>
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
import { mapState } from "pinia";
import { useGlobalStore } from "../stores/globalStore";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      retype: "",
    };
  },
  computed: {
    ...mapState(useGlobalStore, ["baseUrl"]),
  },
  methods: {
    async register(body) {
      try {
        await axios.post(this.baseUrl + "/register", body);
        this.$router.push("/login")
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
