const baseUrl = "http://localhost:3000";
import { defineStore } from "pinia";
import Swal from "sweetalert2";
import axios from "axios";
export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    isLogin: false,
    allPost: [],
    dataUserLogin: null,
    dataPostById: null,
    likedPostByUser: []



  }),
  getters: {

  },
  actions: {
    async unlikePost(id) {
      try {
        console.log(id);
        const { data } = await axios({
          url: `${baseUrl}/like/${id}`,
          method: "DELETE",
          headers: {
            access_token: localStorage.getItem("access_token")
          },
        });
        Swal.fire({
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 800,
        });
      } catch (error) {
        console.log(error);
      }
    },
    async createNewPost(value) {
      try {
        console.log(value);
        const data = new FormData();
        data.append("caption", value.caption);
        data.append("content", value.content);
        data.append("imgUrl", value.imgUrl);
        const response = await axios({
          url: `${baseUrl}/post`,
          method: "post",
          headers: {
            access_token: localStorage.getItem("access_token")
          },
          data: data
        });
        this.readProfilData();
        this.router.push("/");
      } catch (error) {
        console.log(error);
        const msg = error.response.data.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: msg,
        });
      }
    },


    async readLikedPostByUser(id) {
      try {
        const { data } = await axios({
          url: `${baseUrl}/profile/${id}/like`,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token")
          },
        });
        this.likedPostByUser = data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    async likePost(id) {
      try {
        const { data } = await axios({
          url: `${baseUrl}/like/${id}`,
          method: "POST",
          headers: {
            access_token: localStorage.getItem("access_token")
          },
        });
        console.log(data);
        Swal.fire({
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 800,
        });
      } catch (error) {
        console.log(error);
        const msg = error.response.data.message.join("; ");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: msg,
        });
      }
    },
    async addCommentToPost(id, comment) {
      try {
        const response = await axios({
          url: `${baseUrl}/comment/${id}`,
          method: "POST",
          headers: {
            access_token: localStorage.getItem("access_token")
          },
          data: {
            comment
          }
        });
        console.log(response.data);
        this.readDataPostById(id);
      } catch (error) {
        console.log(error);
      }
    },
    async readDataPostById(id) {
      try {
        const response = await axios({
          url: `${baseUrl}/post/${id}`,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        });
        this.dataPostById = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async handleLogin(value) {
      try {
        const { email, password } = value;
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/login`,
          data: {
            email,
            password
          }
        });
        const { access_token, id } = data;
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("email", data.email);
        localStorage.setItem("id", id);
        // console.log("berhasil login");
        this.isLogin = true;
        this.readProfilData();

        this.router.push("/");

      } catch (error) {
        console.log(error);
        const msg = error.response.data.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: msg,
        });
      }
    },
    handleLogout() {
      localStorage.clear();
      this.isLogin = false;
      this.dataUserLogin = null;
    },
    handlesIsLogin() {
      if (localStorage.getItem("access_token")) {
        this.isLogin = true;
      }
    },
    async handleRegister(value) {
      try {
        console.log("masuk register");
        const { username, email, password } = value;
        const { data } = await axios({
          url: `${baseUrl}/register`,
          method: "POST",
          data: {
            username, email, password
          }
        });
        // console.log(data);
        this.router.push("/login");
      } catch (error) {
        console.log(error);
        const msg = error.response.data.message.join("; ");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: msg,
        });
      }
    },
    async readProfilData() {
      try {
        const id = localStorage.getItem("id");
        console.log(id);
        const response = await axios({
          url: `${baseUrl}/profile/${id}`,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        });
        console.log(response.data);
        this.dataUserLogin = response.data;
        // console.log(this.dataUserLogin.user);
      } catch (error) {
        console.log(error);
      }
    },
    async readAllPost() {
      try {
        const response = await axios({
          url: `${baseUrl}/post`,
          method: "get",
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        });
        this.allPost = response.data;
        console.log(this.allPost);
      } catch (error) {
        console.log(error);
      }
    }

















  },
});
