<template>
  <form @submit.prevent="submitLogin">
    <div class="headerText">
      <h1>THE SOUTH FACE</h1>
    </div>

    <div class="container">
      <label class="email"><b>Email</b></label>
      <input
        type="text"
        placeholder="Your login email here"
        v-model="login.email"
        required
      />

      <label class="password"><b>Password</b></label>
      <input
        type="password"
        placeholder="your login password here"
        v-model="login.password"
        required
      />

      <button id="submitlogin" type="submit">Login</button>

      <div style="justiy-content: center !important">
        

        <div class="toRegister">
          New user? register
          <router-link to="/register">here</router-link>
        </div>

      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from "pinia";
import { theSouthFace } from "../stores/theSouthFace";
export default {
  name: "LoginPage",
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(theSouthFace, ["loginUser"]),
    submitLogin() {
      this.loginUser(this.login.email, this.login.password);
    },

  },
};
</script>

<style>
form {
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 5%;
  padding-top: 5%;
  margin-top: 5%;

}
.email {
  color: white;
}
.password {
  color: white;
}
.toRegister {
  color: white;
}
a {
  color: white;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
}

#submitlogin {
  background-color: #889200;
  border-radius: 6px;
  opacity: 1 !important;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}
#buttondiv {
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  border: none;
}
.headerText {
  text-align: center;
  color: white;
}
a {
  text-decoration: none;
}
a:hover {
  color: #889200;
}
</style>
