import {
  defineStore
} from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    baseUrl: "http://localhost:3000",
    isLogin: false,
    username: "",
    role: "",
    totalPage: "",
    songList: "",
    dataFound: true,
    isLoading: false,
    categories: [],
    reviews: [],
    categoriesId: []
  }),
  actions: {
    parseJwt(token) {
      return JSON.parse(atob(token.split('.')[1]));
    },
    async handleLogin(obj) {
      try {
        const {
          data
        } = await axios({
          url: `${this.baseUrl}/users/login`,
          method: "post",
          data: obj
        });
        const payload = this.parseJwt(data.access_token);
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("role", payload.role);
        this.username = payload.username;
        this.role = payload.role;
        this.isLogin = true;

        // Success Login
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Login Success',
          showConfirmButton: false,
          timer: 1500
        });

        this.router.push("/");
      } catch (error) {
        if (error.response.statusText == "Unauthorized") {
          // Error if email/password null
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.response.data.message}`,
          });
        } else {
          // Error if user/password invalid
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.response.data.error.message}`,
          });
        }
      }
    },
    async fetchCategories(value) {
      try {
        const {
          data
        } = await axios({
          url: this.baseUrl + "/categories",
          method: "get",
          params: value
        });
        if (value) {
          this.categoriesId = data.categories;
        } else {
          this.categories = data.categories;
        }
        return true;
      } catch (error) {
        // Error fetch categories
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.code}`,
        });
      }
    },
    async fetchDataReview(obj) {
      try {
        this.isLoading = true;
        const {
          data
        } = await axios({
          url: this.baseUrl + "/posts",
          method: "get",
          params: obj
        });
        this.reviews = data.reviews;
        this.totalPage = data.totalPage;
        return true;
      } catch (error) {
        if (error.response.data.statusCode == "404") {
          return false;
        } else {
          // Error fetch reviews
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.code}`,
          });
        }
      } finally {
        this.isLoading = false;
      }
    },
    async handleSearchArtist(query) {
      try {
        this.isLoading = true;
        const {
          data
        } = await axios({
          url: this.baseUrl + "/api?search=" + query,
          method: "get",
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        });
        this.songList = data;
        this.router.push({
          path: "/songs",
          query: {
            search: query
          }
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
    async handleLoginGoogle(response) {
      try {
        this.isLoading = true;
        const data = await axios({
          method: "post",
          url: `${this.baseUrl}/users/login-google`,
          headers: {
            google_token: response.credential
          }
        });
        const payload = this.parseJwt(data.data.access_token);
        localStorage.setItem("access_token", data.data.access_token);
        localStorage.setItem("role", payload.role);
        this.role = payload.role;
        this.username = payload.username;
        this.isLogin = true;

        // Success Login
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Login Success',
          showConfirmButton: false,
          timer: 1500
        });
        
        this.router.push("/");
      } catch (error) {
        const errorMessage = error.response.data.error.message;
        Swal.fire({ 
          icon: 'error',
          title: 'Oops...',
          text: `${errorMessage}`,
        });
      } finally {
        this.isLoading = false;
      }
    },
    handleRegister(obj) {
      // Handle before register
      Swal.fire({
        title: 'Do you want to save the changes?',
        showCancelButton: true,
        confirmButtonText: 'Save',
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const {
              data
            } = await axios({
              url: this.baseUrl + "/users/register",
              method: "post",
              data: obj
            });

            // Success Register
            await Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Register success!',
              showConfirmButton: false,
              timer: 1500
            });

            this.router.push("/login");
          } catch (error) {
            // Error bad request (null field)
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${error.response.data.error.message}`,
            });
          }
        }
      });
    },
    handleRegisterAdmin(obj) {
      // Handle before register
      Swal.fire({
        title: 'Do you want to save the changes?',
        showCancelButton: true,
        confirmButtonText: 'Save',
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const {
              data
            } = await axios({
              url: this.baseUrl + "/users/register/admin",
              method: "post",
              data: obj
            });

            // Success Register
            await Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Register success!',
              showConfirmButton: false,
              timer: 1500
            });

            this.router.push("/");
          } catch (error) {
            // Error bad request (null field)
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${error.response.data.error.message}`,
            });
          }
        }
      });
    },
    handleAddPost(obj) {
      Swal.fire({
        title: 'Do you want to save the changes?',
        showCancelButton: true,
        confirmButtonText: 'Save',
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const {
              data
            } = await axios({
              url: this.baseUrl + "/posts/create",
              method: "post",
              data: obj,
              headers: {
                access_token: localStorage.getItem("access_token"),
              },
            });

            // Success Add Data
            await Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Add Post success!',
              showConfirmButton: false,
              timer: 1500
            });

            this.router.push("/");
          } catch (error) {
            console.log(error);
            // Error bad request (null field)
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${error.response.data.error.message}`,
            });
          }
        }
      });
    },
    handleEditPost(obj, id) {
      Swal.fire({
        title: 'Do you want to save the changes?',
        showCancelButton: true,
        confirmButtonText: 'Save',
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const {
              data
            } = await axios({
              url: this.baseUrl + "/posts/edit/" + id,
              method: "put",
              data: obj,
              headers: {
                access_token: localStorage.getItem("access_token"),
              },
            });

            // Success Add Data
            await Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Edit Post success!',
              showConfirmButton: false,
              timer: 1500
            });

            this.router.push("/");
          } catch (error) {
            console.log(error);
            // Error bad request (null field)
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${error.response.data.error.message}`,
            });
          }
        }
      });
    },
    handleLogout() {
      localStorage.clear();
      this.isLogin = false;
      this.username = false;

      // Success Logout
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Logout Success',
        showConfirmButton: false,
        timer: 1500
      });

      this.router.push("/login");
    }
  },
});