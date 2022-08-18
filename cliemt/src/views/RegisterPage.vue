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
  <div class="register">
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
      <div class="footerRegister">
        already have account?
        <p>
          <router-link class="buttonNav" to="/login">Login</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .footerRegister {
    margin-top: 30px;
  }
  .register {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-height: 90vh;
  }
  .buttonNav {
    text-decoration: none;
    color: red;
  }
  input {
    width: 300px;
    height: 45px;
    border-radius: 10px;
    border: solid gray;
    margin-top: 15px;
    text-align: center;
  }
  button {
    margin-top: 25px;
    width: 300px;
    border-radius: 10px;
    background-color: rgb(186, 0, 0);
    cursor: pointer;
    height: 55px;
    font-family: "Ubuntu Condensed", sans-serif;
    color: white;
  }
  ::placeholder {
    text-align: center;
  }
</style>
