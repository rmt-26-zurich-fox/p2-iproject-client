<script >
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">CoffeeShop</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="#" class="nav-link" >Home</a>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/login"
                >Sign In</router-link
              >
            </li>
            <li class="nav-item">
              <router-link  class="nav-link" to="/register"
                >Sign Up</router-link
              >
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/cart"
                >My Order</router-link
              >
            </li>

            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/login"
                >Sign Out</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
