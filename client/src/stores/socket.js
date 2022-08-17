import { defineStore } from "pinia";
import io from "socket.io-client";

export const useSocket = defineStore({
  id: "socket",
  state: () => ({
    messages: [],
    users: [],
    socket: io(`http://localhost:3000/socket-chat`),
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
      });
    },
    userConnect() {
      this.socket.on("user-connected", function (userId) {
        this.users.push(userId);
      });
    },
    initChat() {
      this.socket.on("init-chat", function (messages) {
        this.messages = messages;
      });
    },
    updateUser() {
      this.socket.on("update-users", function (users) {
        this.users = users;
      });
    },
  },
});
