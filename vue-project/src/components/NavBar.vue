<script>
import {mapState, mapActions} from "pinia"
import {authorizationStore} from '../stores/authorizationStore'

export default {
    // name: "NavBar",
    computed: {
        ...mapState(authorizationStore, ['isLogin'])
    },
    methods: {
        ...mapActions(authorizationStore, ["handleLogout"]),
        logout() {
            this.handleLogout()
        }
    }
}
</script>

<template>
        <!-- NAVBAR -->
        <section class="w-full px-8 text-gray-700 bg-white body-font border-4">
            <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                <a
                    href="#"
                    class="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none"
                >Virtual MET</a
                >
                <div class="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
                    <a  
                        href="#"    
                        class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border-2"
                        v-if="isLogin === false"
                    >
                    Login
                    </a>
                    <a  
                        href="#"    
                        class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border-2"
                        v-if="isLogin === false"
                    >
                    Register
                    </a>
                    <a  
                        href="#"
                        class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border-2"
                        v-if="isLogin === true"
                    >
                    Logout
                    </a>
                </div> 
                <div class="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
                    <a
                        href="#"
                        class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border-2"
                    >
                    Hello,
                    </a>
                </div> 
            </div>
        </section>

</template>