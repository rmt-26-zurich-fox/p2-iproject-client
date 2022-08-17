<script>
  import { mapActions, mapState } from "pinia";
  import { useCounterStore } from "../stores/counter";
  export default {
    data() {
      return {
        username: "",
        email: "",
        password: "",
      };
    },
    methods: {
      ...mapActions(useCounterStore, ["handleRegister"]),
      register() {
        this.handleRegister({
          username: this.username,
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
        <input type="text" placeholder="Username" v-model="username" />
      </div>
      <div>
        <input type="text" placeholder="Email" v-model="email" />
      </div>
      <div>
        <input type="password" placeholder="Password" v-model="password" />
      </div>
      <div>
        <button @click="register">Register</button>
      </div>
      <div>
        already have account?
        <button>
          <router-link class="buttonNav" to="/login">Login</router-link>
        </button>
      </div>
    </div>
  </div>
</template>
