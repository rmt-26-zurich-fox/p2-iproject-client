<script>
import { RouterView } from 'vue-router'
import SideBar from '@/components/SideBar.vue'
import NavBar from '@/components/NavBar.vue';

export default {
    components: {
        SideBar,
        NavBar
    }
}
</script>
<template>
    <div class="app">
        <SideBar />

        <!-- Page main  -->
        <div id="main">
            <NavBar />


            <RouterView />
        </div>
    </div>
</template>