import { defineStore } from 'pinia'
import axiosInstance from '../api/axiosInstance'
import Swal from 'sweetalert2'

export const useAuthStore = defineStore({
    id: 'authStore',
    state: () => ({

    }),
    getters: {

    },
    actions: {
        alertSuccess(data) {
            Swal.fire({
                icon: 'success',
                title: 'SUCCESS !!!',
                text: data.message,
                showConfirmButton: false,
                timer: 1500
            })
        },
        async login(obj) {
            try {
                const { data } = await axiosInstance({
                    method: "POST",
                    url: "/auth/login",
                    data: {
                        email: obj.email,
                        password: obj.password
                    }
                })

                localStorage.setItem("access_token", data.access_token)

                this.alertSuccess(data)
            } catch (error) {
                console.log(error);
            }
        }
    }
})
