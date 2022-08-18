<script>
import { mapActions } from 'pinia';
import { useAuthStore } from '../stores/authStore';

export default {
    data() {
        return {
            dataLogin: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(useAuthStore, ["login"]),
        handleLogin() {
            this.login(this.dataLogin)
        }
    }
}
</script>
<template>
    <!-- Login -->
    <section class="vh-100" style="background-color: #EA9FA3;">
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-10">
                    <div class="card shadow" style="border-radius: 1rem;">
                        <div class="row">
                            <div class="col-md-5 p-0">
                                <div class="card-body p-5 text-center">
                                    <img src="../assets/logo.png" alt="" width="85%" class="mt-5">
                                </div>
                            </div>
                            <div class="col-md-7 p-0">
                                <div class="card-body p-5">
                                    <h3 class="text-center mb-4">LOGIN</h3>
                                    <p><b>Login to your account here!</b></p>
                                    <form @submit.prevent="handleLogin">
                                        <div class="form-group mb-3">
                                            <label for="">E-mail Address / Username</label>
                                            <input type="text" v-model="dataLogin.email" class="form-control mt-2"
                                                autofocus>
                                        </div>
                                        <div class="form-group mb-3">
                                            <label for="">Password</label>
                                            <input type="password" v-model="dataLogin.password"
                                                class="form-control mt-2">
                                        </div>

                                        <div class="form-group">
                                            <button type="submit" class="btn btn-block mt-3 mb-3"
                                                style="background-color:#EA9FA3; color: white;">Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>