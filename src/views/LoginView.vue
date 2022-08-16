<template>
  <section class="login">
    <div class="container shadow-lg rounded">
      <div class="logo">
        <h1><a>Movie</a><a>Ku</a></h1>
      </div>
      <form @submit.prevent="login({email, password})">
        <label for="">Email</label>
        <input v-model="email" class="form-control" type="text" />
        <label for="">Password</label>
        <input v-model="password" class="form-control" type="password" />
        <a class="text-primary">Register</a>
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
import { mapState } from "pinia";
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
    async login(data) {
      try {
        await axios.post(this.baseUrl + "/login", data);
        this.$router.push("/home")
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
