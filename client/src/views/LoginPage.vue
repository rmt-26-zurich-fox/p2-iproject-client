<template>
    <section class="form-login">
        <div class="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8 rounded-2xl bg-black bg-opacity-60">
                <div>
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-amber-500">Sign in to your account</h2>
                    <p class="mt-2 text-center text-sm text-gray-600">
                    </p>
                </div>
                <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
                    <input type="hidden" name="remember" value="true">
                    <div class="rounded-md shadow-sm -space-y-px text-center">
                        <div>
                            <label for="email-address" class="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autocomplete="email"
                                class="appearance-none rounded-none relative px-24 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm text-center"
                                placeholder="Email address" v-model="emailLogin">
                        </div>
                        <div>
                            <label for="password" class="sr-only">Password</label>
                            <input id="password" name="password" type="password" autocomplete="current-password"
                                class="appearance-none rounded-none relative px-24 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm text-center"
                                placeholder="Password" v-model="passwordLogin">
                        </div>
                    </div>
                    <div class="flex items-center justify-center gap-1 bg-black bg-opacity-0">
                        <div class="flex items-between">
                            <label for="remember-me" class="ml-2 block text-sm text-amber-500">No have Account?</label>
                        </div>

                        <div class="text-sm">
                            <RouterLink to="/register" class="font-medium text-amber-500 hover:text-slate-50">Register
                                Here!</RouterLink>
                        </div>
                    </div>

                    <div class="flex item-center justify-center pb-2 ml-2 gap-2">
                        <ButtonUsage nameButton="Sign In" />
                        <button id="buttonGoogle" class="rounded-md"></button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>
<script>
import { mapActions } from 'pinia';
import ButtonUsage from '../components/ButtomUsage.vue'
import { useCounterStore } from '../stores/counter';
export default {
    components: { ButtonUsage },
    methods: {
        ...mapActions(useCounterStore, ['login']),
        handleLogin() {
            let obj = {
                email: this.emailLogin,
                password: this.passwordLogin
            }
            this.login(obj)
        }
    },
    data() {
        return {
            emailLogin: "",
            passwordLogin: ""
        }
    }
}
</script>