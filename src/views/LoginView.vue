<template>
  <section class="login">
    <div class="container shadow-lg rounded">
      <span @click="$router.push('/home')">&#10005;</span>
      <div class="logo">
        <h1><a>Movie</a><a>Ku</a></h1>
      </div>
      <form @submit.prevent="login({ email, password })">
        <label for="">Email</label>
        <input v-model="email" class="form-control" type="text" />
        <label for="">Password</label>
        <input v-model="password" class="form-control" type="password" />
        <router-link :to="{ name: 'register' }">Register</router-link>
        <button>
          <div v-if="isLoading" class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          Login
        </button>
      </form>
      <div class="social">
        <div @click="googleLogin"><img src="../assets/google-logo.svg" /></div>
        <div @click="githubLogin"><img src="../assets/github-logo.svg" /></div>
        <div @click="twitterLogin">
          <img src="../assets/twitter-logo.svg" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

import { mapState, mapActions, mapWritableState } from "pinia";
import { useGlobalStore } from "../stores/globalStore";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();

export default {
  data() {
    return {
      eamil: "",
      password: "",
    };
  },
  computed: {
    ...mapState(useGlobalStore, ["baseUrl"]),
    ...mapWritableState(useGlobalStore, ["isLoading"]),
  },
  methods: {
    ...mapActions(useGlobalStore, [
      "errorHandler",
      "successHandler",
      "socialMediaLogin",
    ]),
    async login(body) {
      try {
        this.isLoading = true;
        const { data } = await axios.post(this.baseUrl + "/login", body);
        this.successHandler(data.message);
        localStorage.setItem("access_token", data.access_token);
        this.$router.push("/home");
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.errorHandler(error);
      }
    },
    async googleLogin() {
      try {
        this.isLoading = true;
        const result = await signInWithPopup(auth, googleProvider);

        const user = result.user;
        const { displayName, email } = user;
        const { data } = await axios.post(this.baseUrl + "/social-login", {
          username: displayName,
          email,
        });
        localStorage.setItem("access_token", data.access_token);
        this.successHandler(data.message);
        this.$router.push("/home");
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.errorHandler(error.message);
      }
    },
    async githubLogin() {
      try {
        return this.errorHandler("This feature is not yet available");;
        const result = await signInWithPopup(auth, githubProvider);

        const user = result.user;
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    },
    async twitterLogin() {
      try {
        return this.errorHandler("This feature is not yet available");;
        const result = await signInWithPopup(auth, twitterProvider);

        const user = result.user;
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
