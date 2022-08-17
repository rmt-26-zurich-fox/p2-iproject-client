<script>
import { mapState, mapActions } from "pinia";
import { RouterView } from "vue-router";
import TeamsCard from "../components/TeamsCard.vue";
import Swal from "sweetalert2";
import io from "socket.io-client";

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
    TextMessage,
  },
  created() {
    this.fetchTeams();
  },
  methods: {
    ...mapActions(useMain, ["fetchTeams"]),
    // ...mapActions(useSocket, [
    //   "readMsg",
    //   "initChat",
    //   "updateUser",
    //   "userConnect",
    // ]),
    readMsg() {
      let self = this;
      this.socket.on("read-msg", function (message) {
        self.messages.push({
          text: message.text,
          user: message.user,
        });
      });
    },
    userConnect() {
      let self = this;
      this.socket.on("user-connected", function (userId) {
        self.users.push(userId);
      });
    },
    initChat() {
      let self = this;
      this.socket.on("init-chat", function (messagesFix) {
        console.log(messagesFix);
        self.messages = messagesFix;
        console.log(this.messages, "init chat");
      });
    },
    updateUser() {
      let self = this;
      this.socket.on("update-users", function (usersFix) {
        self.users = usersFix;
        console.log(this.users, "UPDATE USERs");
      });
    },
    sendMessage: function (message) {
      if (message) {
        console.log("INI MASUK SEND MESSAGE");
        this.socket.emit("send-msg", { message: message, user: this.userName });
      }
    },
    setName: function (userName) {
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
    // ...mapState(useSocket, ["socket", "users", "messages"]),
  },
  data() {
    return {
      messages: [],
      users: [],
      socket: io(`http://localhost:3000`),
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
    <!-- SOCKET -->

    <div class="chat-container mx-auto login-card p-4 rounded-3">
      <div>
        <!-- inputs user name -->
        <!-- we pass isLogged as a property to input-name component, this prop is used to show or not the component -->
        <!-- we also listen to set-name event, when user inputs the username, the component emits an event -->
        <InputUsername :isLogged="isLogged" v-on:set-name="setName" />

        <!-- message list -->
        <!-- we show the chatbox if user has username (isLogged) -->
        <div id="messages" class="messages">
          <ul>
            <TextMessage />
            <!-- iterating over messages -->
            <li v-for="message in messages" v-if="isLogged">
              <TextMessage :messageData="message" />
              <!-- bind each message data to the message component -->
            </li>
          </ul>
        </div>
        <!-- inputs new message -->
        <!-- when a message is sent, input-message component emits an event (send-message) which is captured here -->
        <MessageInput v-on:send-message="sendMessage" v-if="isLogged" />
      </div>

      <!-- user list -->
      <div class="list-of-users" v-if="isLogged">
        <UserComponent :users="users" />
        <!-- the user list is passed as prop to users component -->
      </div>
    </div>

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
  </section>
</template>
