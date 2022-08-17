<script>
  import { mapActions, mapState } from "pinia";
  import { useCounterStore } from "../stores/counter";
  import CardPost from "../components/CardPost.vue";

  export default {
    components: {
      CardPost,
    },
    methods: {
      ...mapActions(useCounterStore, ["readProfilData", "readLikedPostByUser"]),
      readDataUser() {
        this.readProfilData();
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
    </div>
    <div>
      <button>Your Post</button>
      <button>Your Like</button>
    </div>
    <div v-if="dataUserLogin">
      <CardPost
        v-for="post in dataUserLogin.post"
        :key="post.id"
        :post="post"
      />
    </div>
  </div>
</template>

<style scoped>
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
