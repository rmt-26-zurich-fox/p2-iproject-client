import { defineStore } from 'pinia'
import axiosInstance from '../api/axiosInstance'
import Swal from 'sweetalert2'

export const useUserStore = defineStore({
    id: 'userStore',
    state: () => ({
        users: [],
        theadUser: ["Username", "E-mail Address", "Role"],
        actionUser: ["show", "edit", "delete"],
        userById: {}
    }),
    getters: {

    },
    actions: {
        alertSuccess(data) {
            Swal.fire({
                icon: 'success',
                title: 'SUCCESS!',
                text: data.message,
                showConfirmButton: false,
                timer: 1500
            })
        },
        alertError(err) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: err.response.data.message,
                showConfirmButton: false,
                timer: 1500
            })
        },
        async readAllUser() {
            try {
                const { data } = await axiosInstance({
                    method: "GET",
                    url: "/users",
                    headers: {
                        access_token: localStorage.access_token
                    }
                })

                this.users = data
            } catch (error) {
                this.alertError(error)
            }
        },
        async addUser(obj) {
            try {
                const { data } = await axiosInstance({
                    method: "POST",
                    url: "/users",
                    headers: {
                        access_token: localStorage.access_token,
                    },
                    data: {
                        username: obj.username,
                        email: obj.email,
                        password: obj.password,
                        role: obj.role
                    }
                })

                this.router.push({ name: "users" })
                this.alertSuccess(data)
            } catch (error) {
                this.alertError(error)
            }
        },
    }
})
