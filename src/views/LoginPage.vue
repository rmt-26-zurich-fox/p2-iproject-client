<script>
import { RouterLink } from 'vue-router';
import { useCounterStore } from '../stores/counter';
import { mapActions } from 'pinia';

export default {
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        ...mapActions(useCounterStore, ["handleLogin", "handleLoginGoogle"]),
        async login() {
            const obj = {
                email: this.email,
                password: this.password
            }
            await this.handleLogin(obj);
        },
        async handleCredentialResponse(response) {
            const hasil = await this.handleLoginGoogle(response);
        }
    },
    mounted() {
        const cb = this.handleCredentialResponse
        google.accounts.id.initialize({
            client_id: "786477668215-ucu41hd1086jp2o1nc58lfktvcjdvbdp.apps.googleusercontent.com",
            callback: cb
        });
          google.accounts.id.renderButton(
            document.getElementById("google-button-login"),
            { theme: "outline", size: "large" }
          );
    }
}
</script>

<template>
    <div class="flex h-screen">
        <div class="w-full max-w-sm p-6 m-auto bg-gray-100 rounded-md shadow-md">
            <h1 class="text-3xl font-semibold text-center text-gray-700">Login</h1>

            <form class="mt-6" @submit.prevent="login">
                <div>
                    <label for="email" class="block text-sm text-gray-800">Email</label>
                    <input type="email"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        required oninvalid="this.setCustomValidity('Please input your email first.')"
                        oninput="this.setCustomValidity('')" v-model="email">
                </div>

                <div class="mt-4">
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm text-gray-800">Password</label>
                    </div>

                    <input type="password"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        required oninvalid="this.setCustomValidity('Please input your password first.')"
                        oninput="this.setCustomValidity('')" v-model="password">
                </div>

                <div class="mt-6">
                    <button
                        class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                        Login
                    </button>
                </div>
            </form>

            <div class="flex items-center justify-between mt-4">
                <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                <a href="#" class="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or
                    login with Social Media</a>

                <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
            </div>

            <div class="flex items-center mt-4 -mx-2">
                <button type="button" id="google-button-login"
                    class="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-200 transform hover:bg-gray-300 rounded-lg focus:outline-none">
                </button>
            </div>

            <p class="mt-4 text-xs font-light text-center text-gray-600"> Don't have an account? <RouterLink
                    to="/register"><a href="#" class="font-medium text-gray-700 hover:underline">Create One</a>
                </RouterLink>
            </p>
            <p class="mt-2 text-xs font-light text-center text-gray-600"> Don't want to login? <RouterLink to="/"><a
                        href="#" class="font-medium text-gray-700 hover:underline">Back to Home</a>
                </RouterLink>
            </p>
        </div>
    </div>
</template>