<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="payment">payment</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      token: "",
    };
  },
  methods: {
    async payment() {
      try {
        const response = await axios({
          method: "get",
          url: "http://localhost:3000/payment",
        });
        this.token = response.data.trans_token;
        window.snap.pay(response.data.trans_token);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
