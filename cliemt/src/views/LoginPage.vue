<script>
  import { mapActions, mapState } from "pinia";
  import { useCounterStore } from "../stores/counter";
  export default {
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      ...mapActions(useCounterStore, ["handleLogin"]),
      login() {
        this.handleLogin({
          email: this.email,
          password: this.password,
        });
      },
    },
  };
</script>

<template>
  <div>
    <div></div>
    <div>
      <div>
        <input type="text" placeholder="Email" v-model="email" />
      </div>
      <div>
        <input type="password" placeholder="Password" v-model="password" />
      </div>
      <div>
        <button @click="login">Log In</button>
      </div>
      <div>
        <button>
          <router-link class="buttonNav" to="/register">REGISTER</router-link>
        </button>
      </div>
    </div>
  </div>
</template>
