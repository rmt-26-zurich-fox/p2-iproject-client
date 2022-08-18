<script>
import { RouterLink, RouterView } from 'vue-router'
import navbarComponents from './components/navbarComponents.vue';

export default {
  components: {
    navbarComponents
},
  computed: {
    
  }
}
</script>

<template>
  <navbarComponents/>
  <RouterView />
</template>