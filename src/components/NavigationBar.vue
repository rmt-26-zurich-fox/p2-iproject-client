<template>
    <nav>
    <div class="bg-slate-600 w-screen h-20">
    <div class="flex justify-between">
        <ul class="pt-3 pl-8">
            <li>
                <!-- <img class="w-20 absolute" src="./asset/scale-40635_960_720.png" alt=""> -->
            </li>
            <li>
                <h1 class="absolute pl-24 pt-1 " style="font-family:Aboreto ; font-weight: bold; font-size: 25pt;">LAW FIRM</h1>
            </li>
           
        </ul>
        <ul class="flex pl-40">
            <li class="pr-5">
                <button class="border-b-2 border-b-slate-300 mt-5 hover:border-b-slate-500 hover:duration-150" style="font-size: 18pt ;" @click.prevent="clickHome">Home</button>
            </li>
            <li class="pr-5">
                <button v-if="tabs=== 'login'"  class="border-b-2 mt-5 border-b-slate-300 hover:border-b-slate-500 hover:duration-150" style="font-size: 18pt ;"  @click.prevent="clickAdd">Add</button>
            </li>
            <li>
                <button v-if="tabs=== 'login'"  class="border-b-2 mt-5 border-b-slate-300 hover:border-b-slate-500 hover:duration-150" style="font-size: 18pt ;"  @click.prevent="clickMyReport">My Report</button>
            </li>
        </ul>
        <ul class="flex"> 
            <li class="pr-5">
                <p v-if="tabs=== 'login'" class="pt-6 font-bold">Welcome, {{name}}</p>
             </li>
            <li class="pr-10">
               <button v-if="tabs=== 'login'" class="bg-blue-100 w-24 h-10 mt-4 rounded-xl hover:bg-sky-500 hover:duration-150" @click.prevent="clickLogOut">Log Out</button>
                <button v-else-if="tabs=== 'notLogin'" class=" w-20 h-10 mt-5 rounded-xl"  style="font-weight: bold;" @click.prevent="clickSignIn">Sign In</button>
                <button v-if="tabs=== 'notLogin'" class="w-20 h-10 mt-5 rounded-xl" style="font-weight: bold;"  @click.prevent="clickSignUp">Sign Up</button>
            </li>
        </ul>
    </div>
    </div>
   </nav>

</template>
<script>
import { mapWritableState } from 'pinia'
import { useCounterStore } from '../stores/counter'
export default{
    data(){
        return{
           
        }
    },
    methods:{
        clickMyReport(){
            this.$router.push('/myreport')
        },
        clickAdd(){
            this.$router.push('/reports/add')
        },
        clickHome(){
             this.$router.push('/')
        },
        clickSignUp(){
               this.$router.push('/register')
        },
        clickSignIn(){
            this.$router.push('/login')
        },

        clickLogOut(){
            localStorage.clear()
            this.$router.push('/login')
            this.tabs= 'notLogin'
        }
    },
     computed: {
            ...mapWritableState(useCounterStore,['tabs','name'])

        },
    created(){
        if(localStorage.getItem("access_token")){
        this.tabs= 'login'
        this.name= localStorage.getItem("name")
       }else{
        this.tabs= 'notLogin'
       }
    }
}
</script>