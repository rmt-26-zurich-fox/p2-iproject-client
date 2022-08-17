import { defineStore } from 'pinia'
import axiosInstance from '../api/axiosInstance'
import Swal from 'sweetalert2'

export const useProductStore = defineStore({
    id: 'productStore',
    state: () => ({
        products: [],
        theadProduct: ["Name Product", "Image  Product"],
        actionProduct: ["show", "edit", "delete"],
        productById: {}
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
        async readAllProduct() {
            try {
                const { data } = await axiosInstance({
                    method: "GET",
                    url: "/products",
                    headers: {
                        access_token: localStorage.access_token
                    }
                })

                this.products = data
            } catch (error) {
                this.alertError(error)
            }
        }
    }
})
