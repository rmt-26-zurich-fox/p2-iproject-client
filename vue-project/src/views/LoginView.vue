<template>
  <div id="loginPage" style="margin-top: 3.5vh">
    <div class="d-flex justify-content-center">
      <div class="card shadow" style="width: 25rem">
        <div class="card-body">
          <h2 class="d-flex justify-content-center">Login</h2>
          <form @submit.prevent="loginUser">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Email address</label
              >
              <input
                type="email"
                class="form-control"
                id="loginEmail"
                aria-describedby="emailHelp"
                v-model="login.email"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Password</label
              >
              <input
                type="password"
                class="form-control"
                id="loginPassword"
                v-model="login.password"
              />

              <br />
            </div>
            <div>
              <AnyButton
                class="btn btn-primary"
                buttonType="submit"
                buttonName="Login"
              />
              <!-- <fb:login-button
                scope="public_profile,email"
                onlogin="checkLoginState();"
              >
              </fb:login-button> -->
            </div>

            <br />
            <!-- <span @click="test">TEST</span> -->
            <!-- <span @click="logout">logout</span> -->
            <!-- <span @click="cek">cek</span> -->
            <span></span>
            <span id="buttonDiv"></span>
          </form>
          <p>
            don't have an account ?
            <RouterLink to="/register" for="exampleCheck1" id="register-button">
              Register
            </RouterLink>
          </p>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useRoute } from "vue-router";
import { useCounterStore } from "../stores/counter";
import AnyButton from "../components/AnyButton.vue";

export default {
  components: {
    AnyButton,
  },
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useCounterStore, [
      "checkLoginState",
      "handleLogin",
      "handleCredentialResponse",
    ]),
    loginUser() {
      this.handleLogin(this.login);
    },
    handleLoginGoogle(response) {
      this.handleCredentialResponse(response);
    },
    test() {
      FB.login(
        function (response) {
          console.log(response);
        },
        { scope: "email", auth_type: "rerequest" }
      );
    },
    cek() {
      FB.getLoginStatus(function (response) {
        console.log(response);
      });
      FB.api("/me", function (response) {
        console.log(JSON.stringify(response));
      });
    },
    logout() {
      // FB.logout(function (response) {
      //   // Person is now logged out
      //   console.log(response);
      // });
    },
    // checkLoginState() {
    //   FB.getLoginStatus(function (response) {
    //     statusChangeCallback(response);
    //   });
    // },
  },
  mounted() {
    window.fbAsyncInit = function () {
      console.log("masok fb");
      FB.init({
        appId: "1178491689375015",
        cookie: true,
        xfbml: true,
        version: "v14.0",
        log,
      });

      FB.AppEvents.logPageView();
    };
    console.log("fb masok");
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");

    const cb = this.handleLoginGoogle;
    google.accounts.id.initialize({
      client_id:
        "428051293432-sosih62k33db4bg4co1gfv7qeejdh6re.apps.googleusercontent.com",
      callback: cb,
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" } // customization attributes
    );
  },
};
</script>
