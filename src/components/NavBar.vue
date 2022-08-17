<script>
import { RouterLink } from 'vue-router';
import { useCounterStore } from '../stores/counter';
import { mapActions, mapState } from 'pinia';
import { createPopper } from "@popperjs/core";
import DropdownButton from './DropdownButton.vue';

export default {
    data() {
        return {
            dropdownPopoverShow: false,
            dropdownPopoverShowLogout: false,
            search: ""
        };
    },
    methods: {
        ...mapActions(useCounterStore, ["handleLogout", "fetchCategories"]),
        logout() {
            this.handleLogout();
        },
        toggleDropdown: function () {
            if (this.dropdownPopoverShow) {
                this.dropdownPopoverShow = false;
            } else {
                this.dropdownPopoverShow = true;
                createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
                    placement: "bottom-start"
                });
            }
        },
        toggleDropdownLogout: function () {
            if (this.dropdownPopoverShowLogout) {
                this.dropdownPopoverShowLogout = false;
            } else {
                this.dropdownPopoverShowLogout = true;
                createPopper(this.$refs.btnDropdownRefLogout, this.$refs.popoverDropdownRefLogout, {
                    placement: "bottom-start"
                });
            }
        }
    },
    computed: {
        ...mapState(useCounterStore, ["username", "isLogin", "categories"])
    },
    components: {
        DropdownButton
    },
    async created() {
        await this.fetchCategories();
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

                                <input type="text" v-if="$route.fullPath != '/songs'"
                                    class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                                    placeholder="Search" v-model="search">
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

                    <!-- Dropdown Button -->
                    <button
                        class="my-1 text-sm leading-5 text-gray-700 transition-colors duration-200 transform md:mx-4 md:my-0 font-bold  rounded-lg  px-4 py-2.5 text-center inline-flex items-center"
                        type="button" v-on:click="toggleDropdown()" ref="btnDropdownRef"> Review <svg class="h-4"
                            aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7">
                            </path>
                        </svg>
                    </button>
                    <div v-bind:class="{ 'hidden': !dropdownPopoverShow, 'block': dropdownPopoverShow }"
                        class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
                        style="min-width:12rem" ref="popoverDropdownRef">
                        <DropdownButton v-for="category in categories" :key="category.id" :category="category" />
                    </div>

                    <!-- Login/Logout/Username -->
                    <div class="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
                        <RouterLink to="/login"><a v-if="!isLogin"
                                class="my-1 text-sm leading-5 text-gray-700 transition-colors duration-200 transform md:my-0 font-bold px-4 py-2.5 text-center inline-flex items-center"
                                href="#">Login</a></RouterLink>
                        <button v-if="isLogin"
                            class="my-1 text-sm leading-5 text-gray-700 transition-colors duration-200 transform md:my-0 font-bold px-4 py-2.5 text-center inline-flex items-center bg-gray-300 rounded-md md:mx-0 md:w-auto"
                            type="button" v-on:click="toggleDropdownLogout()" ref="btnDropdownRefLogout"> Hello, {{
                                    username
                            }} <svg class="h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7">
                                </path>
                            </svg>
                        </button>
                        <div v-bind:class="{ 'hidden': !dropdownPopoverShowLogout, 'block': dropdownPopoverShowLogout }"
                            class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
                            style="min-width:12rem" ref="popoverDropdownRefLogout">
                            <a v-if="isLogin"
                                class="my-1 text-sm leading-5 text-gray-700 transition-colors duration-200 transform md:mx-4 md:my-0 font-bold"
                                href="#" @click.prevent="logout">Logout</a>
                        </div>
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

                            <input type="text" v-if="$route.fullPath != '/songs'"
                                class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                                placeholder="Search" v-model="search">
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