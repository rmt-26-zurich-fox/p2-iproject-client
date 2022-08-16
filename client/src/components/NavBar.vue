<template>
  <nav>
   <router-link to="/" class="nav-1">Destination</router-link>
   <router-link to="/mytrip" class="nav-2">My Trip</router-link>
   <router-link to="/login" class="nav-3" @click.prevent="logout">Logout <i class="fa-solid fa-arrow-right-from-bracket"></i></router-link>
  </nav>
</template>
<script>
 export default {
   methods: {
    logout(){
      localStorage.removeItem('access_token')
    }
   }
 }
</script>
<style>
.nav-1 {
  color:black;
  position: absolute;
  right: 200px;
  top: 5px;
  text-decoration: none;
}
.nav-2 {
  color:black;
  position: absolute;
  right: 120px;
  top: 5px;
  text-decoration: none;
}
.nav-3 {
  color:black;
  position: absolute;
  right: 25px;
  top: 5px;
  text-decoration: none;
}
.nav-3:hover {
  color:rgb(153, 2, 2);
}
</style>