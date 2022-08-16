<template>
    <section class="bg-[url('https://awsimages.detik.net.id/community/media/visual/2022/03/18/hukum-adalah-apa-ini-pengertian-hingga-makna-lambang-dewi-keadilan_169.jpeg?w=700&q=90')] bg-cover bg-fixed w-screen h-screen">
            <div style="background-color: rgba(81, 151, 255, 0.349) ;">
    <form action="" method="post"  >
        <div class="w-screen h-screen flex flex-col justify-center items-center text-center">
        <div class="border-transparent w-96 rounded-xl bg-slate-300" >
            <div class="" >
                <h1 class="mb-8" style="font-family: Source Code Pro; font-size: 30pt;">Welcome</h1>
            </div>
            <div class="relative">
                <i class="fa-solid fa-user-astronaut absolute pt-1.5 pl-0.5 text-blue-700 hover:text-blue-300"></i>
                <input v-model="email" class="pl-5 bg-transparent border-b-2 focus:border-blue-500 transition-all duration-100 outline-none" style="font-family: Source Code Pro;" type="text" placeholder="Email">
            </div>
              <div class="relative mt-7">
                <i class="fa-solid fa-lock absolute  pt-1.5 pl-0.5 text-blue-700  hover:text-blue-300"></i>
                <input v-model="password" class="pl-5 bg-transparent border-b-2 focus:border-blue-500 transition-all duration-100 outline-none" style="font-family: Source Code Pro;" type="password" placeholder="Password">
            </div>
            <div class="mt-10 mb-5 flex justify-center">
                <button @click.prevent="handleLogin" type="submit" class="py-2 px-20 bg-blue-500 rounded-full text-lg font-bold text-white hover:bg-blue-400 cursor-pointer" style="font-family: Source Code Pro;">Sign In</button> 
            </div>
            <div class="justify-center items-center flex">
             <div id="loginButtonGoogle"></div>
            </div>
            <div class="mb-5 mt-5">
                <p style="font-family: Source Code Pro;">Doesn't have an account? <router-link to="/register" class="text-blue-500 hover:text-sky-500 cursor-pointer">Register</router-link ></p>
            </div>
        </div>
    </div>
</form>
</div>
</section>
</template>

<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default{
    data(){
        return{
            email: "",
            password: ""
        }
    },
    methods:{
        ...mapActions(useCounterStore,['handlerLogin']),
        handleLogin(){
            this.handlerLogin({
                email:this.email,
                password: this.password
            })
        }
    }
}
</script>