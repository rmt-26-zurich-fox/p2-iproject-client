<script>
import { useCustomStore } from '../stores/custom';
import { mapActions } from 'pinia';

export default {
    data() {
        return {
            token: localStorage.token,
            username: localStorage.username,
            role: localStorage.role
        }
    },
    methods: {
        logoutHandler() {
            localStorage.clear()
        },
        ...mapActions(useCustomStore, ['fetchDataItemFilter', 'fetchItems']),
        onClickSearch(searchQuery) {
            if (searchQuery) {
                this.$router.push(`/?search=${searchQuery}`)
                this.fetchDataItemFilter(searchQuery)
            }
            else {
                this.$router.push('/')
                this.fetchItems()
            }
        }
    },
    created() {
        const searchQuery = this.$route.query.search
        if(searchQuery) {
            this.searchQuery = searchQuery
        }
        else {
            this.searchQuery = ''
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
            <input type="search" class="form-control rounded" placeholder="Item name..."
              aria-label="Search" aria-describedby="search-addon" v-model="this.searchQuery"/>
              <button @click.prevent="onClickSearch(this.searchQuery)" class="btn btn-info">Search</button>
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
            <router-link v-if="role==='admin'" to="/add" class="nav-link">Add Item</router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="role==='admin'" to="/history" class="nav-link" href="">History</router-link>
          </li>
        </ul>
        <ul class="navbar-nav d-flex flex-row ms-auto me-3">
            <li class="nav-item">
                <router-link v-if="token" to="/login" class="nav-link" @click.prevent="logoutHandler">Log Out</router-link>
              </li>
            <li class="nav-item">
                <router-link v-if="!token" to="/login" class="nav-link">Login</router-link>
              </li>
          <li class="nav-item">
            <a v-if="!username" class="nav-link" href="">Hello Anonymous</a>
            <a v-if="username" class="nav-link" href="">Hello {{username}}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>