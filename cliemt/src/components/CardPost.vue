<script>
  import { mapActions, mapState, mapGetters } from "pinia";
  import { useCounterStore } from "../stores/counter";
  export default {
    props: {
      post: Object,
      like: Object,
    },
    methods: {
      timeSince(date) {
        var seconds = Math.floor((new Date() - date) / 1000);

        var interval = seconds / 31536000;

        if (interval > 1) {
          return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
          return Math.floor(interval) + " months";
        }
        interval = seconds / 86400;
        if (interval > 1) {
          return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
          return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval > 1) {
          return Math.floor(interval) + " minutes";
        }
        return Math.floor(seconds) + " seconds";
      },
      countLike(like) {
        if (like === 0) {
          return `${like} Like`;
        } else if (like === 1) {
          return `${like} Like`;
        } else if (like > 1) {
          return `${like} Likes`;
        }
      },
    },
  };
</script>

<template>
  <div v-if="post" class="instagram-card">
    <div class="instagram-card-header">
      <p class="profilName">{{ post.User.username }}</p>

      <div class="instagram-card-time">
        {{ this.timeSince(new Date(post.createdAt)) }} ago
      </div>
    </div>
    <div class="instagram-card-content">
      <router-link
        :to="{ name: 'post_detail', params: { id: post.id } }"
        style="text-decoration: none"
      >
        <img class="imagePost" :src="post.imgUrl" alt="" />
      </router-link>

      <div class="like">
        <img
          src="https://cdn-icons.flaticon.com/png/512/3128/premium/3128313.png?token=exp=1660722693~hmac=8640e3991af33de3dabe45f892ea2a84"
          alt=""
          style="max-height: 30px"
        />
        <p class="likes">{{ this.countLike(post.Likes.length) }}</p>
      </div>
    </div>
  </div>
  <div v-if="like" class="instagram-card">
    <div class="instagram-card-header">
      <p class="profilName">{{ like.Post.User.username }}</p>
      <div class="instagram-card-time">
        {{ this.timeSince(new Date(like.Post.createdAt)) }} ago
      </div>
    </div>
    <div class="instagram-card-content">
      <router-link
        :to="{ name: 'post_detail', params: { id: like.PostId } }"
        style="text-decoration: none"
      >
        <img class="imagePost" :src="like.Post.imgUrl" alt="" />
      </router-link>

      <div class="like">
        <img
          src="https://cdn-icons.flaticon.com/png/512/3128/premium/3128313.png?token=exp=1660722693~hmac=8640e3991af33de3dabe45f892ea2a84"
          alt=""
          style="max-height: 30px"
        />
        <p class="likes">{{ this.countLike(like.Post.Likes.length) }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .profilName {
    font-size: 25px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    color: black;
  }
  .instagram-card {
    background: #ffffff;
    border: 1px solid #f2f2f2;
    border-radius: 3px;
    width: 100%;
    max-width: 600px;
    margin: 30px auto;
    box-shadow: 12px 0 15px -4px rgba(31, 73, 125, 0.8),
      -12px 0 8px -4px rgba(31, 73, 125, 0.8);
    text-decoration: none;
  }

  .instagram-card-header {
    padding-top: 20px;
    padding-left: 20px;
    height: 40px;
    margin-bottom: 10px;
  }
  .intagram-card-image {
    width: 100%;
    min-height: 200px;
  }
  .imagePost {
    width: 100%;
    min-height: 200px;
    z-index: 10000;
  }

  .instagram-card-time {
    padding-top: 10px;
    text-align: left;
    color: #999;
  }

  .like {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    justify-items: center;
  }
  .instagram-card-user-name {
    margin-left: 20px;
    font-weight: bold;
    color: #262626;
  }

  .instagram-card-content {
    padding: 20px;
  }

  .likes {
    font-weight: bold;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 5px;
    font-family: Arial, Helvetica, sans-serif;
    color: black;
  }

  .instagram-card-content-user {
    font-weight: bold;
    color: #262626;
  }

  .hashtag {
    color: #003569;
  }

  .comments {
    color: #999;
  }

  .user-comment {
    color: #003569;
  }

  .instagram-card-footer {
    padding: 20px;
    display: flex;
    align-items: center;
  }

  hr {
    border: none;
    border-bottom: 1px solid #ccc;
    margin-top: 30px;
    margin-bottom: 0px;
  }

  .footer-action-icons {
    font-size: 16px;
    color: #ccc;
  }

  .comments-input {
    border: none;
    margin-left: 10px;
    width: 100%;
  }
</style>
