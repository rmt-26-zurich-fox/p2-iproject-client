<script>
import { mapState, mapActions } from "pinia";
import { useAllStateStore } from "../stores/allState";

export default {
  data(){
    return {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      birthDate: ""
    }
  },
  computed: {
    ...mapState(useAllStateStore, []),
  },
  methods: {
    ...mapActions(useAllStateStore, []),
  },
  created(){
  }
}
</script>


<template>
  <div class="login-screen">
    <div class="login-box">
      <h2>Register</h2>
      <form>
        <div class="user-box">
          <input v-model="email" type="text" name="" />
          <label>Email</label>
        </div>
        <div class="user-box">
          <input v-model="password" type="password" name="" />
          <label>Password</label>
        </div>
        <div class="user-box">
          <input v-model="firstName" type="text" name="" />
          <label>firstName</label>
        </div>
        <div class="user-box">
          <input v-model="lastName" type="text" name="" />
          <label>Password</label>
        </div>
        <div class="user-box">
          <input v-model="phoneNumber" type="text" name="" />
          <label>phoneNumber</label>
        </div>
        <div class="user-box">
          <input v-model="birthDate" type="date" name="" />
          <label>birthDate</label>
        </div>
        <a @click.prevent="login" href="#">
          Sign Up
        </a>
      </form>
    </div>
  </div>
</template>