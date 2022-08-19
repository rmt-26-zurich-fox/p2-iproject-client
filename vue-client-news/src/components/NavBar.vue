<template>
  <div class="container-fluid">
    <a class="navbar-brand">Breaking News</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      href=""
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <!-- <Dropdown /> -->
        <li class="nav-item">
          <a
            class="nav-link active"
            aria-current="page"
            id="homePage"
            @click="home"
            href=""
            >Home</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link active"
            aria-current="page"
            id="homePage"
            @click.prevent="create"
            href=""
            >Create</a
          >
        </li>
      </ul>
      <button class="btn btn-danger" type="submit" @click.prevent="logout">
        Logout
      </button>
      <!-- <button @click="create">create</button> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["isOpen"],

  methods: {
    logout() {
      localStorage.clear();
      this.$emit("handleLogout", false, "login");
    },
    create() {
      this.$emit("create", true, "create");
    },
    homePage() {
      this.$emit("home", true, "main");
    },
  },
};
</script>
