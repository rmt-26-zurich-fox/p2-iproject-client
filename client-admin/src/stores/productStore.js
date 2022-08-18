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
        },
        async addProduct(obj) {
            try {
                let formData = new FormData();
                formData.append("nameProduct", obj.nameProduct)
                formData.append("imageProduct", obj.imageProduct)
                formData.append("price", obj.price)
                formData.append("weight", obj.weight)
                formData.append("skinCategory", obj.skinCategory)
                formData.append("productCategory", obj.productCategory)
                formData.append("BrandId", obj.BrandId)
                formData.append("description", obj.description)
                const { data } = await axiosInstance({
                    method: "POST",
                    url: "/products",
                    headers: {
                        access_token: localStorage.access_token,
                        "Content-Type": "multipart/form-data",
                    },
                    data: formData
                })

                this.router.push({ name: "products" })
                this.alertSuccess(data)
            } catch (error) {
                this.alertError(error)
            }
        },
        async editProduct(id) {
            try {
                const { data } = await axiosInstance({
                    method: "GET",
                    url: "/products/" + id,
                    headers: {
                        access_token: localStorage.access_token
                    }
                })

                this.productById = data

                this.router.push({ name: "editProduct", params: { productId: id } })
            } catch (error) {
                this.alertError(error)
            }
        },
        async updateProduct(id, obj) {
            try {
                let formData = new FormData();
                formData.append("nameProduct", obj.nameProduct)
                formData.append("imageProduct", obj.imageProduct)
                formData.append("price", obj.price)
                formData.append("weight", obj.weight)
                formData.append("skinCategory", obj.skinCategory)
                formData.append("productCategory", obj.productCategory)
                formData.append("BrandId", obj.BrandId)
                formData.append("description", obj.description)
                const { data } = await axiosInstance({
                    method: "PUT",
                    url: "/products/" + id,
                    headers: {
                        access_token: localStorage.access_token
                    },
                    data: formData
                })

                this.router.push({ name: "products" })
                this.alertSuccess(data)        
            } catch (error) {
                this.alertError(error)
            }
        },
    }
})
