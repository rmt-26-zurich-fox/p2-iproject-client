<template>
  <form class="formRegister" @submit.prevent="submitRegister">
    <div class="headerText">
      <h1>Sign up here!</h1>
    </div>

    <div class="containerRegister">
      <label class="email"><b>Email</b></label>
      <input
        type="text"
        placeholder="Your Register email here"
        v-model="register.email"
        required
      />

      <label class="password"><b>Password</b></label>
      <input
        type="password"
        placeholder="Your register password here"
        v-model="register.password"
        required
      />

      <button type="submit">Register</button>
      <router-link to="/login">Cancel and return to login page</router-link>
    </div>
  </form>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { theSouthFace } from "../stores/theSouthFace";

export default {
  name: "RegisterPage",
  data() {
    return {
      register: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(theSouthFace, ["registerUser"]),
    submitRegister() {
      this.registerUser(this.register.email, this.register.password);
    },
  },
};
</script>

<style>
.formRegister {
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
  padding-top: 0;
  margin-left: 0%;
  text-decoration: none;
}
a:hover {
  color: #0489aa;
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

button {
  background-color:#927700;
  border-radius: 6px;
  opacity: 1 !important;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}
.headerText {
  text-align: center;
  color: white;
}
a:hover {
  color: #889200;
}
</style>
