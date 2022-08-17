<script>
import { mapActions ,mapWritableState} from 'pinia';
import { useCustom1Store} from '../stores/custom1'


export default{
  data(){
   const localUsername = localStorage.getItem('username')
        const localPassword = localStorage.getItem("password")
        let obj ={
        username:'',
        password:'',
        rememberMe: true,
        }
        if(localUsername && localPassword){
            obj.username = localUsername
            obj.password = localPassword
        }
        return obj
  },
  methods:{
    ...mapActions(useCustom1Store, ['loginHandler']),
    localLoginHandler(){
      this.loginHandler(this.username,this.password, this.rememberMe)
      this.isLogin = true
    },
    // Credential(response){
    //       this.handleCredential(response)
    //       this.isLogin = true
    //     }
  },
  // computed:{
    ...mapWritableState(useCustom1Store, ['isLogin'])
  // },
  //  mounted(){
  //     let callback = this.Credential

  //       google.accounts.id.initialize({
  //             client_id: "98948154373-7i08t8qbfqfqos5o254hkouv8p6ld7pc.apps.googleusercontent.com",
  //             callback,
  //         })
  //         google.accounts.id.renderButton(
  //             document.getElementById("googleButton"),
  //             { theme: "outline", size: "large", width:'800px'}
  //         )

  //  },
  // created(){
    
  // }
}
</script>

<template>
  <main
class="mx-auto flex  items-center justify-center bg-[#464E2E]  text-gray-200  ">
  <!-- component -->
  <section class="flex w-[30rem] flex-col space-y-10 mx-auto">
    <form @submit.prevent="localLoginHandler" class="flex w-[30rem] flex-col space-y-10 mx-auto ">
    <div class="text-center text-4xl font-medium mt-20 font-isi">Log In</div>

    <div
      class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-gray-400"
    >
      <input
        type="username"
        placeholder="username"
        class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
        v-model ="username"
      />
    </div>

    <div
      class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-gray-400"
    >
      <input
        type="password"
        placeholder="Password"
        class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
        v-model = "password"
      />
    </div>
      <div class="flex justify-end mb-6 font-isi">
            <div class="form-group form-check">
              <input
                type="checkbox"
                class=" appearance-none h-4 w-4 border border-gray-700 rounded-sm bg-gray-700 checked:bg-white  checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="remember-me"
                v-model="rememberMe"
              />
              <label class="font-source form-check-label inline-block text-white text-lg" for="exampleCheck2"
                >Remember me</label>
            </div>
          </div>
    <button
    type="submit"
      class="transform rounded-sm bg-[#ACB999] py-2 font-bold duration-300 hover:bg-indigo-400 font-isi"
    >
      LOG IN
    </button>
    </form>
    <h1 class="mx-auto font-isi"> OR</h1>
    <div id="googleButton" ></div>

   

    <p class="text-center text-lg font-isi">
      No account?
      <router-link
        to="/register"
        class="font-medium text-[#ACB999] underline-offset-4 hover:underline"
        >Create One</router-link
      >
    </p>
  </section>
</main>

</template>


