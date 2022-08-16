<template>
  <h2>Chat Messages</h2>

  <div class="container">
    <div style=" margin-left: 570px;">
        <p  >Hello. How are you today?</p>
        <span class="time-right">11:00</span>
    </div>
  </div>

  <div class="container darker">
    <p>Hey! I'm fine. Thanks for asking!</p>
    <span class="time-left">11:01</span>
  </div>

  <form action="" class="">
    <div class="form-input">
    <textarea
      class="form-control"
      rows="2"
      id="comment"
      v-model="inputMessage"
    ></textarea>
    <button type="submit" @click.prevent="toSendMessage">Send</button>
  </div>
  </form>

  
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { useQuoteStore } from '../stores/qoutes';

export default {

    data(){
        return{

            inputMessage: ''
        }
    },

    methods: {

        ...mapActions(useQuoteStore, ['setupSocketConnection']),

        

    },
    computed: {},
};
</script>
<style>
body {
  margin: 0 auto;
  max-width: 800px;
  padding: 0 20px;
}

.container {
  border: 2px solid #dedede;
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
}

.darker {
  border-color: #ccc;
  background-color: #ddd;
}

.container::after {
  content: "";
  clear: both;
  display: table;
}

.container img {
  float: left;
  max-width: 60px;
  width: 100%;
  margin-right: 20px;
  border-radius: 50%;
}

.container img.right {
  float: right;
  margin-left: 20px;
  margin-right: 0;
}

.time-right {
  float: right;
  color: #aaa;
}

.time-left {
  float: left;
  color: #999;
}
</style>
