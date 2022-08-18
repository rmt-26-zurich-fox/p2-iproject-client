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
  <div class="container">
    <div></div>
    <div>
      <div>
        <input type="text" class="email" placeholder="Email" v-model="email" />
      </div>
      <div>
        <input
          type="password"
          class="password"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <div>
        <button class="buttonLogin" @click="login">Log In</button>
      </div>
      <div class="line"></div>
      <div>
        <button class="buttonRegister">
          <router-link class="buttonNav" to="/register"
            >CREATE NEW ACCOUNT</router-link
          >
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .line {
    margin-top: 30px;
    height: 3px;
    width: 100%;
    background-color: rgb(230, 230, 230);
    justify-content: center;
    text-align: center;
  }
  .buttonNav {
    text-decoration: none;
    color: white;
  }

  .buttonRegister {
    margin-top: 70px;
    font-family: inherit;
    border: none;
    border-radius: 6px;
    font-size: 17px;
    line-height: 48px;
    padding: 0 16px;
    background-color: rgb(65, 194, 0);
    color: white;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 90vh;
    border: solid black;
    padding: 10px;
  }
  .email,
  .password {
    width: 300px;
    height: 30px;
    border-radius: 10px;
    border: solid gray;
    margin-top: 15px;
    padding: 10px;
    text-align: center;
  }
  .buttonLogin {
    margin-top: 25px;
    width: 100%;
    border-radius: 10px;
    background-color: rgb(255, 0, 0);
    cursor: pointer;
    height: 55px;
    font-family: "Ubuntu Condensed", sans-serif;
    color: white;
    font-size: 20px;
  }
  ::placeholder {
    font-family: "Ubuntu Condensed", sans-serif;
    text-align: center;
  }
</style>
