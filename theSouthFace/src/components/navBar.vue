<template>
<nav class="navbar navbar-expand-lg navbar-dark">
      <RouterLink class="navbar-brand" to="/">THE SOUTH FACE</RouterLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <RouterLink class="nav-link" to="/home">Home</RouterLink>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Cart</a>
      </li>
      <li class="nav-item">
      <RouterLink class="nav-link" to="/simulate">Simulate</RouterLink>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default{
    name:"NavBar",

}

</script>

<style>
.navbar{
padding-left: 30px;
background-color: rgba(73, 73, 73, 0.281);
}
</style>