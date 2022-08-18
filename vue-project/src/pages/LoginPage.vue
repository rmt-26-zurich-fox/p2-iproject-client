<template>
        <section class="mt-10 mx-28 flex flex-col justify-center items-center block p-6 rounded-lg shadow-lg bg-white border-2">
            <h1 class="text-6xl mb-10">Login form</h1>
            <form @submit.prevent="submitLogin">
              <div class="form-group mb-6">
                <input type="email" class="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                  placeholder="Email"
                  v-model="loginInput.email"> <!--  -->
              </div>
              <div class="form-group mb-6">
                <input type="password" class="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                  placeholder="*********"
                  v-model="loginInput.password"> <!--  -->
              </div>
              <div class="form-group form-check text-center mb-6">
                <input type="checkbox"
                  class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                  id="exampleCheck87" checked>
                <label class="form-check-label inline-block text-gray-800" for="exampleCheck87">Forget Password?</label>
              </div>
              <button type="submit" class="
                w-full
                px-6
                py-2.5
                bg-blue-600
                text-black
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out"
                >Login</button>
            </form>
        </section>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import { mapActions, mapState } from 'pinia';
import { authorizationStore } from '../stores/authorizationStore';


export default {
  data() {
    return{
      loginInput: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    ...mapActions(authorizationStore, ["handleLogin"]),
    submitLogin() {
      this.handleLogin(this.loginInput)
    }
  },
  
  // emits: ["successLogin"],
  // props: ["loginInput"],
  // methods: {
  //   handleLogin: async function () {
  //     try { 
  //       console.log("<<< masuk ke login page 1");
  //       const {data} = await axios({
  //         method: "post",
  //         url: "http://localhost:3000/users/login",
  //         data: {
  //           email: this.email,
  //           password: this.password,
  //         }
  //       })
  //       localStorage.setItem("access_token", data.access_token),
  //       console.log(data);
  //       this.$emit("successLogin")
        
  //     } catch (error) {
  //         Swal.fire({
  //           icon: 'error',
  //           title: 'Oops...',
  //           text: 'Wrong Email/Password!!',
  //         })
  //     }

  //     // console.log("<<< masuk ke login page 1");
  //     // this.$emit("successLogin", this.username)
  //   }
  // }
}
</script>