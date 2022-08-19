<script>
import axios from "axios";

// import LoginPageVue from "./components/LoginPage.vue";
import LoginPage from "./components/LoginPage.vue";
import NavBar from "./components/NavBar.vue";
import RegisterForm from "./components/RegisterForm.vue";
import NewNews from "./components/NewNews.vue";
import HomePage from "./components/HomePage.vue";

export default {
  components: {
    LoginPage,
    NavBar,
    RegisterForm,
    NewNews,
    HomePage,
  },
  data() {
    return {
      isLogin: false,
      menu: "login",
      isOpenApp: "123",
      news: [],
    };
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.isLogin = true;
    }
  },
  methods: {
    handleLoginApp: async function (email, password) {
      try {
        const { data } = await axios({
          url: "http://localhost:10000/users/login",
          method: "post",
          data: {
            email,
            password,
          },
        });
        localStorage.setItem("access_token", data.access_token);
        (this.isLogin = true), (this.menu = "main");
        // console.log(data);
      } catch (error) {
        // console.log(error.response.data.message);
      }
    },

    handleRegisterApp: async function (email, password) {
      try {
        const { data } = await axios({
          url: "http://localhost:10000/users/register",
          method: "post",
          data: {
            email: email,
            password: password,
          },
        });
        (this.isLogin = false), (this.menu = "login");
        // console.log(data);/
      } catch (error) {
        console.log(error.response.data.message);
      }
    },

    handleCreateNewsApp: async function (title, imageUrl, content, categoryId) {
      try {
        const { data } = await axios({
          url: "http://localhost:10000/news/create",
          method: "post",
          data: {
            title: title,
            imageUrl: imageUrl,
            content: content,
            categoryId: categoryId,
          },
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        (this.isLogin = true), (this.menu = "main");
        // console.log(data);
      } catch (error) {
        // console.log(error.response.data.message);
        console.log(error);
      }
    },

    handleDeleteApp: async function (id) {
      try {
        const { data } = await axios({
          url: `http://localhost:10000/news/delete/${id}`,
          method: "post",
          data: {
            id,
          },
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        (this.isLogin = true), (this.menu = "main");
        console.log(data);
        // console.log(data);
      } catch (error) {
        // console.log(error.response.data.message);
        console.log(error);
      }
    },

    fetchData: async function () {
      try {
        const { data } = await axios({
          url: "http://localhost:10000/news",
          method: "get",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.news = data.news;
        console.log(news);
      } catch (error) {
        console.log(error);
      }
    },

    changePage(isLogin, menu) {
      (this.isLogin = isLogin), (this.menu = menu);
    },
  },
};
</script>

<template>
  <div v-if="!isLogin">
    <!-- login -->
    <section
      style="margin-top: 1em"
      id="formLogin"
      class="container text-center"
      v-if="menu === 'login'"
    >
      <LoginPage
        @handleLogin="handleLoginApp"
        @handleRegister="changePage"
      ></LoginPage>
    </section>

    <!-- register -->
    <section
      id="createUser"
      style="margin-top: 1em"
      class="container"
      v-if="menu === 'register'"
    >
      <RegisterForm @back="changePage" @createUser="handleRegisterApp" />
    </section>
  </div>

  <div v-if="isLogin">
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark"
      id="navbar"
      style="background-color: aqua"
      v-if="isLogin"
    >
      <NavBar
        :isOpen="isOpenApp"
        @handleLogout="changePage"
        @create="changePage"
        @home="changePage"
      />
    </nav>
    <!-- create form -->
    <section v-if="menu === 'main'">
      <HomePage
        @fetchDataNews="fetchData"
        v-bind:dataNews="news"
        @deleteDataNews="handleDeleteApp"
        @updateDataStatus=""
      />
    </section>

    <section
      id="createForm"
      style="margin-top: 1em"
      class="container"
      v-if="menu === 'create'"
    >
      <NewNews @createNews="handleCreateNewsApp" />
    </section>
  </div>
</template>

<style></style>
