<script>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
export default {
  components: {
    NavBar
  }
}

</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <NavBar />
  <RouterView />
</template>


