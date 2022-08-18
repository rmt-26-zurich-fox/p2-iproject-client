<script>
import { mapActions, mapState } from 'pinia';
import { RouterLink, RouterView } from 'vue-router'
import { useCounterStore } from '../stores/counter';

export default {
    computed: {
        ...mapState(useCounterStore, ["isLogin", "id"]),
        navDynamic(){
            if(this.$route.fullPath === `/detail/${this.id}`){
                return `container absolute shadow-sm flex justify-around pt-7 mx-auto pb-4 bg-opacity-50 hover:bg-opacity-100 bg-indigo-200 max-w-full text-black`
            }else{
                return `container shadow-sm flex justify-around pt-7 mx-auto pb-36 bg-indigo-200 max-w-full text-black`
            }

        }
    },
    methods:{
        ...mapActions(useCounterStore, ["logout", "aldLogin", "yetLogin", "fetchSeason", "changePage", "fetchArts"]),
        userLogout(){
            this.logout()
        },
        seasonChange(params){
            this.changePage(params)
        },
        artsPage(){
            this.fetchArts()
        }
    },
    created(){
        if(localStorage.access_token){
            this.aldLogin()
        }else{
            this.yetLogin()
        }
    }
}

</script>

<template>
 <div :class="navDynamic">
            <div class="flex items-center bg">
                <i class="fa-brands fa-github-alt text-5xl"></i>
            </div>
            <!-- left header section -->
            <div class="items-center hidden space-x-8 lg:flex font-bold text-base">
                <RouterLink to="/" class="hover:text-orange-500" href="">Home</RouterLink>
                <div x-on:clickaway="open = false" class="relative" x-data="{ open: false }">
                    <button x-on:click="open = !open"
                        class="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-pink-300 md:w-auto md:inline md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                        <span class="text-base">Seasons 2022</span>
                        <svg fill="currentColor" viewBox="0 0 20 20" x-bind:class="{'rotate-180': open, 'rotate-0': !open}"
                            class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <div x-show="open" x-transition:enter="transition ease-out duration-100"
                        x-transition:enter-start="transform opacity-0 scale-95"
                        x-transition:enter-end="transform opacity-100 scale-100"
                        x-transition:leave="transition ease-in duration-75"
                        x-transition:leave-start="transform opacity-100 scale-100"
                        x-transition:leave-end="transform opacity-0 scale-95"
                        class="absolute right-0 w-full mt-2 ml-10 origin-top-right rounded-md shadow-lg md:w-auto">
                        <div class="px-2 py-1 bg-white rounded-md shadow dark-mode:bg-gray-800 flex">
                            <RouterLink @click.prevent="seasonChange('Winter')" to="/season/Winter" class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                href="#">Winter</RouterLink>
                            <RouterLink @click.prevent="seasonChange('Spring')" to="/season/Spring" class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                href="#">Spring</RouterLink>
                            <RouterLink @click.prevent="seasonChange('Summer')" to="/season/Summer" class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                href="#">Summer</RouterLink>
                            <RouterLink @click.prevent="seasonChange('Fall')" to="/season/Fall" class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                href="#">Fall</RouterLink>
                        </div>
                    </div>
                </div>
                <RouterLink to="/arts" @click.prevent="artsPage" class="hover:text-orange-500">Arts</RouterLink>
                <RouterLink to="/plannings" class="hover:text-orange-500">Plannings</RouterLink>
            </div>
            <!-- right header section -->
            <div class="flex items-center space-x-4 font-bold">
                <button v-if="isLogin === true" @click="userLogout" class="text-xl"><i class="fa-solid fa-arrow-right-from-bracket mt-1"></i></button> 
                <RouterLink v-if="isLogin === false" to="/login" class="hover:text-orange-500">Login</RouterLink>
                <RouterLink v-if="isLogin === false" to="/register" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-black rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-black dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                    <span class="relative px-5 py-2.5 font-bold transition-all ease-in duration-75 bg-white dark:bg-indigo-200 rounded-md group-hover:bg-opacity-0">
                        Sign Up
                    </span>
                </RouterLink>
            </div>
        </div>
</template>