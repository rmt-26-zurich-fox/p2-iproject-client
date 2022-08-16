<template>
    <section class="form-register">
        <div class="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8 rounded-2xl bg-black bg-opacity-60">
                <div>
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-amber-500">Register your account Here!</h2>
                    <p class="mt-2 text-center text-sm text-gray-600">
                    </p>
                </div>
                <form class="mt-8 space-y-6" @submit.prevent="handleRegister">
                    <input type="hidden" name="remember" value="true">
                    <div class="rounded-md shadow-sm -space-y-px text-center">
                        <div>
                            <label for="username" class="sr-only">Username</label>
                            <input id="username" name="username" type="text"
                                class="appearance-none rounded-t-lg relative px-24 py-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm text-center"
                                placeholder="Username" v-model="User.username">
                        </div>
                        <div>
                            <label for="email-address" class="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autocomplete="email"
                                class="appearance-none relative px-24 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none focus:ring-indigo-700 focus:border-indigo-700 focus:z-10 sm:text-sm text-center"
                                placeholder="Email address" v-model="User.email">
                        </div>
                        <div>
                            <label for="password" class="sr-only">Password</label>
                            <input id="password" name="password" type="password" autocomplete="current-password"
                                class="appearance-none relative px-24 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm text-center"
                                placeholder="Password" v-model="User.password">
                        </div>
                    </div>

                    <div class="flex item-center justify-center gap-2 pb-2">
                        <ButtonUsage nameButton="Submit" />
                        <RouterLink to="/login">
                            <ButtonUsage nameButton="Cancel" />
                        </RouterLink>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>
<script>
import { mapActions } from 'pinia'
import ButtonUsage from '../components/ButtomUsage.vue'
import { useCounterStore } from '../stores/counter';
export default {
    components: { ButtonUsage },
    data() {
        return {
            User: {
                username: "",
                email: "",
                password: ""
            }
        }
    },
    methods: {
        ...mapActions(useCounterStore, ['register']),
        handleRegister() {
            console.log(this.User)
            this.register(this.User)
        }
    }
}
</script>