<template>
    <NavBar />
    <div class="site-content">
        <router-view />
        <FooterBar />
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import FooterBar from '../components/FooterBar.vue'

export default {
    components: {
        NavBar,
        FooterBar
    },
}
</script>