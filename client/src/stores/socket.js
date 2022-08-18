import { defineStore } from "pinia";
import io from "socket.io-client";

export const useSocket = defineStore({
  id: "socket",
  state: () => ({
    messages: [],
    users: [],
    socket: io(`http://localhost:3000`),
    // socket: io(),
  }),
  actions: {
    readMsg() {
      this.socket.on("read-msg", function (message) {
        this.messages.push({
          text: message.text,
          user: message.user,
          date: message.date,
        });
        console.log(this.messages, "INI APAA");
      });
    },
    userConnect() {
      this.socket.on("user-connected", function (userId) {
        console.log(userId);
        this.users.push(userId);
      });
    },
    initChat() {
      this.socket.on("init-chat", function (messages) {
        console.log(messages, "init chat");
        this.messages = messages;
      });
    },
    updateUser() {
      this.socket.on("update-users", function (users) {
        console.log(users);
        this.users = users;
      });
    },
  },
});
