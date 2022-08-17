<template>
    <div>
        <section id="login" class="vh-100">
            <form id="formLogin" @submit.prevent="submitLogin">
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div class="card shadow-2-strong" style="border-radius: 1rem;">
                                <div class="card-body p-5 text-center">
                                    <img src='https://i.ibb.co/yqzp4qT/weathertive-logo.png' style="width:50%;" />
                                    <br>
                                    <br>
                                    <div>
                                        <h2 class="mb-5">Log In</h2>
                                        <div class="form-outline mb-4">
                                            <label class="form-label" for="loginEmail">Email</label>
                                            <input type="email" id="loginEmail" class="form-control form-control-lg"
                                                placeholder="Input your email" v-model="email">
                                        </div>

                                        <div class="form-outline mb-4">
                                            <label class="form-label" for="loginPassword">Password</label>
                                            <input type="password" id="loginPassword"
                                                class="form-control form-control-lg" placeholder="Input your password"
                                                v-model="password">
                                        </div>

                                        <button class="btn btn-secondary btn-lg btn-block rounded-pill" type="submit">
                                            Login
                                        </button>

                                        <br>
                                        <br>
                                        <!-- Google sign in -->
                                        <div class="d-flex justify-content-center align-items-center"
                                            id="google-button-login">
                                        </div>

                                        <hr class="my-4">
                                        Don't have an account? click here to <router-link to="/register"
                                            style="color:gray"><b>create</b></router-link>
                                        <br>
                                        or click here to go
                                        to <router-link to="/" style="color:gray">
                                            <b>home</b>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
    },
}
</script>
