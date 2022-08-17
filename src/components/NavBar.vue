<script>
import { RouterLink } from 'vue-router';
import { useCounterStore } from '../stores/counter';
import { mapActions, mapState } from 'pinia';
import { createPopper } from "@popperjs/core";

export default {
    data() {
        return {
            dropdownPopoverShow: false
        }
    },
    methods: {
        ...mapActions(useCounterStore, ["handleLogout"]),
        logout() {
            this.handleLogout();
        }
    },
    computed: {
        ...mapState(useCounterStore, ["username", "isLogin"])
    }
}
</script>

<template>
    <nav class="bg-gray-100 shadow">
        <div class="container px-6 py-3 mx-auto">
            <div class="flex flex-col md:flex-row md:justify-between md:items-center">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <a class="text-2xl font-bold text-gray-800 transition-colors duration-200 transform"
                            href="#">audio-id</a>

                        <!-- Search input on desktop screen -->
                        <div class="hidden mx-10 md:block">
                            <div class="relative">
                                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                    </svg>
                                </span>

                                <input type="text"
                                    class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                                    placeholder="Search">
                            </div>
                        </div>
                    </div>

                    <!-- Mobile menu button -->
                    <div class="flex md:hidden">
                        <button type="button"
                            class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-6000"
                            aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                <path fill-rule="evenodd"
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                <div class="items-center md:flex">
                    <div class="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
                        <a class="my-1 text-sm leading-5 text-gray-700 transition-colors duration-200 transform md:mx-4 md:my-0 font-bold"
                            href="#">Home</a>
                        <a class="my-1 text-sm leading-5 text-gray-700 transition-colors duration-200 transform md:mx-4 md:my-0 font-bold"
                            href="#">Search Songs!</a>
                    </div>

                    <!-- Login/Logout/Username -->
                    <div class="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
                        <RouterLink to="/login"><a v-if="!isLogin"
                                class="my-1 text-sm leading-5 text-gray-700 transition-colors duration-200 transform md:mx-4 md:my-0 font-bold"
                                href="#">Login</a></RouterLink>
                        <a v-if="isLogin"
                            class="my-1 text-sm leading-5 text-gray-700 transition-colors duration-200 transform md:mx-4 md:my-0 font-bold"
                            href="#" @click.prevent="logout">Logout</a>
                        <P v-if="isLogin"
                            class="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-gray-700 transition-colors duration-200 transform bg-gray-300 rounded-md md:mx-0 md:w-auto">
                            Hello, {{ username }}</p>
                    </div>

                    <!-- Search input on mobile screen -->
                    <div class="mt-3 md:hidden">
                        <div class="relative">
                            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </svg>
                            </span>

                            <input type="text"
                                class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                                placeholder="Search">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

    <!-- Require css -->
    <style>
    .scroll-hidden::-webkit-scrollbar {
        height: 0px;
        background: transparent;
        /* make scrollbar transparent */
    }
    </style>