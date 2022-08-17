<template>
    <!-- halaman login -->
    <div class="container-fluid p-0 d-lg-flex">
        <div class="col-lg-8">
            <div class="img-background overflow-hidden" style="height: 100vh;">
                <h1 class="position-absolute text-yellow" style="font-size:5em; bottom:50px; left: 20px;">
                    HiLING SKUY</h1>
                <h3 class="position-absolute text-light" style="font-size:2em; bottom:27px; left: 20px;">SOLUSI
                    HILING TANPA PUSING</h3>
                <img src="/bglogin.png" alt="" style="width: 150%;">
            </div>
        </div>
        <div class="col-lg-4">
            <div class="container-sm p-3 mt-5 text-center">
                <form @submit.prevent="handleLogin">
                    <h1 class=" fw-bold text-blue">HiLING SKUY</h1>
                    <p class=" fw-bold text-blue">LOGIN</p>
                    <input class="form-control rounded-0 mb-3" type="email" placeholder="e.g.email" v-model="email">
                    <input class="form-control rounded-0 mb-3" type="password" placeholder="e.g.password"
                        v-model="password">
                    <button class="btn btn-primary rounded-0 mb-3 w-100">LOGIN <i
                            class="fa-solid fa-right-to-bracket"></i></button>
                    <p style="line-height:0%;">don't have account ? <router-link to="/register">Register</router-link> here</p>
                    <p style="line-height:0%;">or sign up with</p>
                    <div class="d-flex justify-content-center">
                    <div id="google-button-login"></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/index'
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapActions(useCounterStore, ['login', 'handleCredentialResponse']),
        handleLogin() {
            this.login({ email: this.email, password: this.password })
        }
    },
    mounted() {
        const cb = this.handleCredentialResponse

        google.accounts.id.initialize({
            client_id: "192317249394-020h8lnbson6pqe71vp9ntjo4pej3n7d.apps.googleusercontent.com",
            callback: cb
        });
        google.accounts.id.renderButton(
            document.getElementById("google-button-login"),
            { theme: "outline", size: "large" }
        );

    }
}
</script>

<style>
</style>
