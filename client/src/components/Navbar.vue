<script>
// import { mapState, mapActions, mapWritableState } from "pinia";
// import { useCarStore } from '../stores/carStore'
// import { useCustomerStore } from "../stores/customerStore";
// mapWritableState
export default{
    // data(){
    //     return{
    //         search: ''
    //     }
    // },
    // methods:{
    //     ...mapActions(useCarStore,['fetchCars']), 
    //     searchFunction(){
    //     this.fetchCars(undefined, undefined, this.search)
    //     console.log(this.search)
    //     } ,
    //     localLogoutHandler(){
    //         localStorage.removeItem('access_token')
    //         this.isLogin = false
    //     }
    // },
    // computed:{
    //     ...mapWritableState(useCustomerStore,['isLogin'])
    // },
    // created(){
    //     this.fetchCars()
    //     // this.searchFunction()
    //     if(localStorage.access_token){
    //         this.isLogin = true
    //     }else{
    //         this.isLogin = false
    //     }
    // }
}
</script>

<template>
   <nav class="bg-[#464E2E] pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">

        <div class="flex flex-wrap items-center">
            <div class="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
                <router-link href="#">
                    <h1 class="font-logo text-5xl pl-5 underline">Renjana</h1>
                </router-link>
            </div>

            <div class="flex flex-1 md:w-1/3 justify-center md:justify-start text-gray-300 px-2 ml-[-100px] mr-[100px]">
                <span class="relative w-full">
                    <input type="search" placeholder="Search" class="w-full bg-[#464E2E] text-gray-400 font-isi transition border border-transparent focus:outline-none focus:border-gray-300 rounded py-3 px-2 pl-10 appearance-none leading-normal">
                    <div class="absolute search-icon" style="top: 1rem; left: .8rem;">
                        <svg class="fill-current pointer-events-none text-gray-300 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                        </svg>
                    </div>
                </span>
            </div>

            <div class="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
                <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
                    <li class="flex-1 md:flex-none md:mr-3">
                        <a class="inline-block py-2 px-4 text-gray-400 font-isi text-xl hover:text-white no-underline" href="#">Shopping cart</a>
                    </li>
                    <li class="flex-1 md:flex-none md:mr-3">
                        <a class="inline-block py-2 px-4 text-gray-400 font-isi text-xl hover:text-white no-underline" href="#">Check Out!</a>
                    </li>
                    
                    <li class="flex-1 md:flex-none md:mr-3">
                        <a class="inline-block  no-underline text-gray-400 font-isi text-xl hover:text-white py-2 px-4" href="#">login</a>
                    </li>
                    <li class="flex-1 md:flex-none md:mr-3">
                        <div class="relative inline-block">
                        <a class="inline-block text-gray-400 no-underline font-isi text-xl hover:text-white py-2 px-4" href="#">logout</a>

                        </div>
                    </li>
                </ul>
            </div>
        </div>

    </nav>


   
</template>

