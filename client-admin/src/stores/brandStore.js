import { defineStore } from 'pinia'
import axiosInstance from '../api/axiosInstance'
import Swal from 'sweetalert2'

export const useBrandStore = defineStore({
    id: 'brandStore',
    state: () => ({
        data: [],
        thead: ["Name Brand", "Logo  Brand"]
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
        async readAllBrand() {
            try {
                const { data } = await axiosInstance({
                    method: "GET",
                    url: "/brands",
                    headers: {
                        access_token: localStorage.access_token
                    }
                })

                this.data = data
            } catch (error) {
                this.alertError(error)
            }
        }
    }
})
