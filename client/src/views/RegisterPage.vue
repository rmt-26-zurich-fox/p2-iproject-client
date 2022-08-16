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
            <div class="container-sm p-3 mt-5">
                <form @submit.prevent="handleRegister">
                    <h1 class="text-center fw-bold text-blue">HiLING SKUY</h1>
                    <p class="text-center fw-bold text-blue">REGISTER</p>
                    <input class="form-control rounded-0 mb-3" type="text" placeholder="e.g.username" v-model="username">
                    <input class="form-control rounded-0 mb-3" type="email" placeholder="e.g.email" v-model="email">
                    <input class="form-control rounded-0 mb-3" type="password" placeholder="e.g.password" v-model="password">
                    <button class="btn btn-primary rounded-0 mb-3 w-100">REGISTER <i class="fa-solid fa-right-to-bracket"></i></button>
                    <p>already have account ? <router-link to="/login">Login</router-link> here</p>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'pinia';
import {useCounterStore} from '../stores/index'
export default {
    data(){
        return {
            username: '',
            email: '',
            password: ''
        }
    },  
    methods: {
        ...mapActions(useCounterStore, ['register']),
        handleRegister(){
            this.register({username: this.username, email:this.email, password:this.password})
            this.$router.push('/login')
        }
    }
}
</script>