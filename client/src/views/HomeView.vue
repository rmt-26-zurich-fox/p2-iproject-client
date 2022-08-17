<script>
import { mapState, mapActions } from "pinia";
import { RouterView } from "vue-router";
import TeamsCard from "../components/TeamsCard.vue";
import Swal from "sweetalert2";

import { useMain } from "../stores/main";
import { useSocket } from "../stores/socket";
import InputUsername from "../components/InputUsername.vue";
import MessageInput from "../components/MessageInput.vue";
import TextMessage from "../components/TextMessage.vue";
import UserComponent from "../components/UserComponent.vue";
export default {
  components: {
    TeamsCard,
    InputUsername,
    MessageInput,
    TextMessage,
    UserComponent,
  },
  created() {
    this.fetchTeams();
  },
  methods: {
    ...mapActions(useMain, ["fetchTeams"]),
    ...mapActions(useSocket, [
      "readMsg",
      "initChat",
      "updateUser",
      "userConnect",
    ]),
    sendMessage: function (message) {
      if (message) {
        this.socket.emit("send-msg", { message: message, user: this.userName });
      }
    },
    setName: function (userName) {
      console.log("masuk set name");
      this.userName = userName;
      this.isLogged = true;
      this.socket.emit("add-user", this.userName);
    },
    // This method is used to scroll the chatbox when a new message is printed
    scrollToEnd: function () {
      var container = this.$el.querySelector("#messages");
      container.scrollTop = container.scrollHeight;
    },
  },
  computed: {
    ...mapState(useMain, ["teams"]),
    ...mapState(useSocket, ["socket"]),
  },
  data() {
    return {
      messages: [],
      users: [],
      userName: "",
      isLogged: false,
    };
  },
  mounted() {
    this.readMsg();
    this.initChat();
    this.updateUser();
    this.userConnect();
  },
};
</script>

<template>
  <section id="news_table" class="d-flex flex-column">
    <h1>NBA Team List</h1>
    <div class="table-container shadow login-card rounded-3 d-flex flex-column">
      <!-- <div class="table-container"> -->
      <!-- <div class="form-check-inline text-center my-2">
          </div> -->
      <div class="big-container">
        <div class="d-flex justify-content-center">
          <div class="content-container">
            <div class="row row-cols-1 row-cols-md-3 g-5">
              <!-- CARD -->
              <TeamsCard
                v-for="el in teams"
                :key="'team' + el.id"
                :oneTeam="el"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SOCKET -->
    <!-- <div class="columns"> -->
    <!-- <div class="column is-two-thirds"> -->
    <!-- inputs user name -->
    <!-- we pass isLogged as a property to input-name component, this prop is used to show or not the component -->
    <!-- we also listen to set-name event, when user inputs the username, the component emits an event -->
    <!-- <InputUsername :isLogged="isLogged" v-on:set-name="setName" /> -->

    <!-- message list -->
    <!-- we show the chatbox if user has username (isLogged) -->
    <!-- <div class="box" v-if="isLogged"> -->
    <!-- <div id="#messages" class="messages"> -->
    <!-- <ul> -->
    <!-- iterating over messages -->
    <!-- <li v-for="message in messages"> -->
    <!-- <TextMessage :messageData="message" /> -->
    <!-- bind each message data to the message component -->
    <!-- </li> -->
    <!-- </ul> -->
    <!-- </div> -->
    <!-- inputs new message -->
    <!-- when a message is sent, input-message component emits an event (send-message) which is captured here -->
    <!-- <MessageInput v-on:send-message="sendMessage" /> -->
    <!-- </div> -->
    <!-- </div> -->

    <!-- user list -->
    <!-- <div class="column"> -->
    <!-- <UserComponent :users="users" /> -->
    <!-- the user list is passed as prop to users component -->
    <!-- </div> -->
    <!-- </div> -->
  </section>
</template>
