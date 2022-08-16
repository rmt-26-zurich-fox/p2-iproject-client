<script>

export default {
    methods: {
        logoutHandler() {
            localStorage.clear()
        }
    }
}

</script>


<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../assets/logoOrtic2.png" width="50" height="50">
      </a>
      <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="me-3">
          <div class="form-white input-group" style="width: 250px;">
            <input type="search" class="form-control rounded" placeholder="Search..."
              aria-label="Search" aria-describedby="search-addon" />
          </div>
        </form>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link" >Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link">Cart</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/add" class="nav-link">Add Item</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/history" class="nav-link" href="">History</router-link>
          </li>
        </ul>
        <ul class="navbar-nav d-flex flex-row ms-auto me-3">
            <li class="nav-item">
                <router-link to="/login" class="nav-link">Log Out</router-link>
              </li>
          <li class="nav-item">
            <a class="nav-link" href="">Hello Anonymous</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>