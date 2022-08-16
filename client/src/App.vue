<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>

    <HelloWorld msg="You did it!" />
    <div class="wrapper">
      
      <nav>
        <RouterLink to="/" >Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
        <h1 class="text-5xl underline">sl;kfdja</h1>
</template>

 