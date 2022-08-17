<script>
import Navbar from './components/Navbar.vue';

export default{
    components:{
        Navbar
    }
}
</script>

<template>

    <!--Nav-->
   <Navbar/>
      
     <router-view/>


</template>

 