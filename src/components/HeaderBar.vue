<template>
  <header>
    <div class="logo">
      <h1><a>Movie</a><a>Ku</a></h1>
    </div>
    <div>
      <router-link :to="'/home'">Movie</router-link>
      <router-link :to="'/bookmark'">Bookmark</router-link>
    </div>
    <div><h4 @click="$router.push({ name: 'login' })">Login</h4></div>
  </header>
</template>
