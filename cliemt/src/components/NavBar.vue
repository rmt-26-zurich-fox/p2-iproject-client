<script>
  import { mapActions, mapState } from "pinia";
  import { useCounterStore } from "../stores/counter";
  export default {
    computed: {
      ...mapState(useCounterStore, ["isLogin"]),
    },
    methods: {
      ...mapActions(useCounterStore, ["handlesIsLogin", "handleLogout"]),
      handleLogoutBtn() {
        this.handleLogout();
      },
    },
    created() {
      this.handlesIsLogin();
    },
  };
</script>

<template>
  <div id="Navbar">
    <h1>
      <router-link class="logo" to="/">社交</router-link>
    </h1>
    <div v-if="isLogin" class="searchContainer">
      <input type="text" name="" id="search" placeholder="Search" />
      <button class="BTNsearch">
        <img
          class="imageLogout"
          src="https://cdn-icons-png.flaticon.com/512/151/151773.png"
          alt=""
        />
      </button>
    </div>

    <div>
      <router-link v-if="isLogin" class="buttonNav" to="/">
        <img
          class="imageLogout"
          src="https://cdn-icons-png.flaticon.com/512/565/565504.png"
          alt=""
        />
      </router-link>
      <router-link v-if="isLogin" class="buttonNav" to="/profile">
        <img
          class="imageLogout"
          src="https://cdn-icons-png.flaticon.com/512/64/64572.png"
          alt=""
        />
      </router-link>
      <router-link
        v-if="isLogin"
        @click="handleLogoutBtn"
        class="buttonNav"
        to="/login"
        ><img
          class="imageLogout"
          src="https://cdn-icons-png.flaticon.com/512/1828/1828479.png"
          alt=""
      /></router-link>
    </div>
  </div>
</template>

<style scoped>
  .imageSearch {
    max-height: 20px;
    cursor: pointer;
  }
  .BTNsearch {
    border: none;
    background: none;
  }
  .searchContainer {
    /* min-width: ; */
    display: flex;
    flex-direction: row;
    width: 30vw;
  }
  #search {
    min-width: 100%;
    min-height: 15px;
    padding: 5px;
    border-radius: 10px;
    border: rgb(153, 153, 153) solid;
    margin-right: 5px;
  }
  .buttonNav {
    text-decoration: none;
    margin: 5px;
    color: white;
    font-size: 24px;
    justify-content: center;
  }
  .imageLogout {
    max-height: 28px;
    cursor: pointer;
  }
  .buttonNavMark {
    text-decoration: none;
    margin: 5px;
    color: white;
    font-size: 16px;
  }
  #Navbar {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    color: white;
    background-color: rgb(200, 0, 0);
    font-family: Arial, Helvetica, sans-serif;
    padding: 18px 24px;
    box-shadow: 0 4px 2px -2px rgb(71, 71, 71);
  }
  #Navbar h1 {
    font-size: 30px;
  }
  .logo {
    text-decoration: none;
    color: black;
  }
  .buttonNav:first-child {
    margin-right: 12px;
  }
  ::placeholder {
    text-align: center;
  }
</style>
