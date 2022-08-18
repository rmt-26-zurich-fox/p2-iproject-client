<script>
import { RouterLink } from "vue-router";
import { useCounterStore } from "../stores/counter";
import { mapActions } from "pinia";

export default {
    data() {
        return {
            username: "",
            email: "",
            password: ""
        }
    },
    methods: {
        ...mapActions(useCounterStore, ["handleRegister", "handleRegisterAdmin"]),
        async register() {
            const obj = {
                username: this.username,
                email: this.email,
                password: this.password
            }

            if (this.$route.fullPath != "/register/admin") {
                await this.handleRegister(obj);
            } else {
                await this.handleRegisterAdmin(obj);
            }
        }
    }
}

</script>

<template>

    <div class="flex h-screen">
        <div class="w-full max-w-sm p-6 m-auto bg-gray-100 rounded-md shadow-md">
            <h1 class="text-3xl font-semibold text-center text-gray-700">Register</h1>

            <form class="mt-6" @submit.prevent="register">

                <div>
                    <label for="username" class="block text-sm text-gray-800">Username</label>
                    <input type="text" v-model="username"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        required oninvalid="this.setCustomValidity('Please input your username first.')"
                        oninput="this.setCustomValidity('')">
                </div>

                <div class="mt-4">
                    <label for="username" class="block text-sm text-gray-800">Email</label>
                    <input type="text" v-model="email"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        required oninvalid="this.setCustomValidity('Please input your email first.')"
                        oninput="this.setCustomValidity('')">
                </div>

                <div class="mt-4">
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm text-gray-800">Password</label>
                    </div>

                    <input type="password" v-model="password"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        required oninvalid="this.setCustomValidity('Please input your password first.')"
                        oninput="this.setCustomValidity('')">
                </div>

                <div class="mt-6">
                    <button
                        class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                        Register
                    </button>
                </div>
            </form>

            <p v-if="this.$route.fullPath != '/register/admin'"
                class="mt-8 text-xs font-light text-center text-gray-600"> Already have an account? <RouterLink
                    to="/login"><a href="#" class="font-medium text-gray-700 hover:underline">Login</a>
                </RouterLink>
            </p>
            <p v-else class="mt-2 text-xs font-light text-center text-gray-600"> Cancel register? <RouterLink to="/"><a
                        href="#" class="font-medium text-gray-700 hover:underline">Back to Home</a>
                </RouterLink>
            </p>
        </div>
    </div>
</template>