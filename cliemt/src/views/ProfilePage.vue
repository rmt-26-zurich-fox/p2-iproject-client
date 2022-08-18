<script>
  import { mapActions, mapState } from "pinia";
  import { useCounterStore } from "../stores/counter";
  import CardPost from "../components/CardPost.vue";

  export default {
    data() {
      return {
        page: "post",
      };
    },
    components: {
      CardPost,
    },
    methods: {
      ...mapActions(useCounterStore, ["readProfilData", "readLikedPostByUser"]),
      readDataUser() {
        this.readProfilData();
      },
      pagePost() {
        this.page = "post";
      },
      pageLike() {
        this.page = "like";
      },
    },
    created() {
      this.readDataUser();
      this.readLikedPostByUser(localStorage.getItem("id"));
    },
    computed: {
      ...mapState(useCounterStore, ["dataUserLogin", "likedPostByUser"]),
    },
  };
</script>
<template>
  <div v-if="dataUserLogin" class="container">
    <div class="profileHeader">
      <div class="profilIcon">
        <img
          src="https://live.staticflickr.com/8631/16462958430_52b377ef11_b.jpg"
          alt=""
        />
      </div>
      <div>
        <h1>{{ dataUserLogin.user.username }}</h1>
      </div>
      <div class="emailUser">
        <p>{{ dataUserLogin.user.email }}</p>
      </div>
      <div class="buttonPage">
        <button @click="pagePost" class="POSTBTN">Your Post</button>
        <button @click="pageLike" class="LIKEDPOSTBTN">Your Like</button>
      </div>
      <div>
        <router-link class="BTNcreateNewPost" to="/new-post"
          >Create new post</router-link
        >
      </div>
    </div>

    <div v-show="this.page === 'post'">
      <CardPost
        v-for="post in dataUserLogin.post"
        :key="post.id"
        :post="post"
      />
    </div>
    <div v-show="this.page === 'like'">
      <CardPost v-for="like in likedPostByUser" :key="like.id" :like="like" />
    </div>
  </div>
</template>

<style scoped>
  .BTNcreateNewPost {
    text-decoration: none;
    color: black;
  }
  .buttonPage {
    margin-top: 100px;
    margin-bottom: 30px;
  }
  .POSTBTN {
    margin-right: 5px;
    width: 100px;
    padding: 10px;
    text-align: center;
    background-color: rgb(251, 46, 46);
    color: white;
    border-radius: 15px;
    cursor: pointer;
    border: none;
  }
  .LIKEDPOSTBTN {
    margin-left: 5px;
    width: 100px;
    padding: 10px;
    text-align: center;
    background-color: rgb(251, 46, 46);
    color: white;
    border-radius: 15px;
    cursor: pointer;
    border: none;
  }
  .container {
    padding: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: normal;
  }
  img {
    object-fit: cover;
    height: 120px;
    width: 120px;
    border-radius: 50%;
  }
  h1 {
    font-size: 50px;
  }
  .emailUser {
    color: rgb(99, 99, 99);
  }
  .profileHeader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
  }
  .profilIcon {
    display: block;
    margin-top: 15px;
    margin-bottom: 4px;
  }
</style>
