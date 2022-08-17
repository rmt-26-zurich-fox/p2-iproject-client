<template>
    <!-- Navbar -->
    <div class="site-header">
        <div class="container">
            <a href="index.html" class="branding">
                <img src="https://i.ibb.co/yqzp4qT/weathertive-logo.png" alt="" class="logo" style="width:5rem">
                <div class="logo-type">
                    <h1 class="site-title">Weathertive</h1>
                    <small class="site-description">Hacktiv8's forecasting weather website</small>
                </div>
            </a>

            <!-- Navigation -->
            <div class="main-navigation">
                <button type="button" class="menu-toggle"><i class="fa fa-bars"></i></button>
                <ul class="menu">
                    <li class="menu-item">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="menu-item" v-if="token">
                        <router-link to="/saved">Saved Location</router-link>
                    </li>
                    <li class="menu-item" v-if="!token">
                        <router-link to="/login">Login</router-link>
                    </li>
                    <li class="menu-item" v-if="token"><a @click="handleLogout">Logout</a></li>
                </ul>
            </div>

            <div class="mobile-navigation"></div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            token: localStorage.access_token,
        }
    },
    methods: {
        async handleLogout() {
            localStorage.clear();
            this.$router.push({ name: "login" })
        },
    }
}
</script>