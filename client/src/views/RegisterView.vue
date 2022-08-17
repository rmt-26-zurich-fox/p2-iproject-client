<script>
import { mapActions ,mapWritableState} from 'pinia';
// import {useCustomerStore} from "../stores/customerStore";

export default{
  data(){
    return{
      username: '',
      email:'',
      password: '',
      phoneNumber: '',
      address: ''
    }
  },
  // methods:{
  //   ...mapActions(useCustomerStore, ['register']),
  //   registerHandle(){

  //     this.register({
  //       username: this.username,
  //       email: this.email,
  //       password: this.password,
  //       phoneNumber: this.phoneNumber,
  //       address: this.address
  //     })
  //     this.isLogin = true
  //   }
  // },
  // computed:{
  //   ...mapWritableState(useCustomerStore, ['isLogin'])
  // }
}
</script>

<template>
   <main
class="mx-auto flex min-h-screen w-full items-center justify-center bg-[#464E2E] text-white">
  <!-- component -->

  <section class="flex w-[30rem] flex-col space-y-10">
    <div class="text-center text-4xl font-medium font-isi">Sign up</div>

    <div
      class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-gray-400"
    >
      <input
        type="text"
        placeholder="Username"
        class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
        v-model="username"
      />
    </div>
     <div
      class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-gray-400"
    >
      <input
        type="email"
        placeholder="Email"
        class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
        v-model="email"
      />
    </div>
    <div
      class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-gray-400"
    >
      <input
        type="password"
        placeholder="Password"
        class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
        v-model="password"
      />
    </div>
     <div
      class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-gray-400"
    >
      <input
        type="Number"
        placeholder="Phone Number"
        class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
        v-model="phoneNumber"
      />
    </div>
    <div
          class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-gray-400"
        >
          <input
            type="text"
            placeholder="Address"
            class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            v-model="address"
          />
        </div>
    <button
      @click="registerHandle" class="transform rounded-sm bg-[#ACB999] py-2 font-bold duration-300 hover:bg-indigo-400"
    >
      SIGN UP
    </button>

   

   <div class="flex mt-6 text-gray-200 items-center justify-center font-isi">
                    Already have an account?
                    <router-link to="/login" class="text-[#ACB999] hover:underline ml-2" href="javascript:;"  >
                        Log in
                    </router-link>
                </div>
  </section>
</main>
</template>