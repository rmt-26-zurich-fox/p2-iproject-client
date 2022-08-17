<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterView />
  <h6 class="copyright">All images used in website belongs to their respectful user</h6>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');
html {
  font-family: 'poppins', sans-serif;
  height: 100%;
}

body {
  background-image: linear-gradient(rgba(0,0,0,0.8), rgb(0,0,0,0.8)),url(https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/9948bc52-ac5c-4c1f-9fad-711c3b52a82b/mechanical-keyboards-rama.jpg);
  background-size: cover;
}.copyright {
  position: fixed;
  color : white;
  font-size: 12px;
  bottom: 0 !important;
  left: 0 !important;
  padding-left: 20px;
}
</style>
