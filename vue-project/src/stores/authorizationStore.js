import { defineStore} from 'pinia'
import axiosInstance from "../helpers/axiosInstance"
import Swal from 'sweetalert2'

export const authorizationStore = defineStore({
    id:'authorizationStore',
    state: () => {
        return {
            urlRoot: "http://localhost:3000",
            isLogin: false,
        }
    },
    actions: {
        errorNotification(err) {
            Swal.fire({
                title: 'Error!',
                text: err.response.data.message,
                icon: 'error',
                confirmButtonText: 'OK'
            })
        },
        async handleLogin(user) {
            try {
                console.log("Masuk try handlelLogin")
                const { data } = await axiosInstance({
                    method: "POST",
                    url: this.urlRoot + "/login",
                    data: {
                        email: user.email,
                        password: user.password
                    }
                });
                console.log("Masuk try handlelLogin 2")
                localStorage.setItem("access_token", data.access_token)
                this.router.push({name: 'home'})
                // user = {}
                this.isLogin = true
            } catch (error) {
                console.log("Masuk error authorization");
                this.errorNotification(error)
            }
        },
        async handleRegister(user) {
            try{
                const {data} = await axiosInstance({
                    method: "POST",
                    url: this.urlRoot + "/register",
                    data: {
                        email: user.email,
                        password: user.password
                    }
                })
                this.router.push({name: "login"})
                console.log(`success create user ${this.email}`);
                user = {}
            }catch (error) {
                this.errorNotification(error)
            }
        },

        async handleLogout() {
            localStorage.clear()
            this.isLogin = false
            this.router.push({ name: "home"})
        }
    }
})