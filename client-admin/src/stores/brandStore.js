import { defineStore } from 'pinia'
import axiosInstance from '../api/axiosInstance'
import Swal from 'sweetalert2'

export const useBrandStore = defineStore({
    id: 'brandStore',
    state: () => ({
        brands: [],
        theadBrand: ["Name Brand", "Logo  Brand"],
        actionBrand: ["show", "edit", "delete"],
        brandById: {}
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

                this.brands = data
            } catch (error) {
                this.alertError(error)
            }
        },
        async addBrand(obj) {
            try {
                let formData = new FormData();
                formData.append("logoBrand", obj.logoBrand)
                formData.append("nameBrand", obj.nameBrand)
                const { data } = await axiosInstance({
                    method: "POST",
                    url: "/brands",
                    headers: {
                        access_token: localStorage.access_token,
                        "Content-Type": "multipart/form-data",
                    },
                    data: formData
                })

                this.router.push({ name: "brands" })
                this.alertSuccess(data)
            } catch (error) {
                this.alertError(error)
            }
        },
        async editBrand(id) {
            try {
                const { data } = await axiosInstance({
                    method: "GET",
                    url: "/brands/" + id,
                    headers: {
                        access_token: localStorage.access_token
                    }
                })

                this.brandById = data

                this.router.push({ name: "editBrand", params: { brandId: id}})
            } catch (error) {
                this.alertError(error)
            }
        },
        async updateBrand(id, obj) {
            try {
                let formData = new FormData();
                formData.append("logoBrand", obj.logoBrand)
                formData.append("nameBrand", obj.nameBrand)
                const { data } = await axiosInstance({
                    method: "PUT",
                    url: "/brands/" + id,
                    headers: {
                        access_token: localStorage.access_token
                    },
                    data: formData
                })

                this.router.push({ name: "brands" })
                this.alertSuccess(data)        
            } catch (error) {
                this.alertError(error)
            }
        },
        async showBrand(id) {
            try {
                const { data } = await axiosInstance({
                    method: "GET",
                    url: "/brands/" + id,
                    headers: {
                        access_token: localStorage.access_token
                    }
                })

                this.brandById = data

                this.router.push({ name: "showBrand", params: { brandId: id}})
            } catch (error) {
                this.alertError(error)
            }
        },
        async deleteBrand(id) {
            try {
                const { data } = await axiosInstance({
                    method: "DELETE",
                    url: "/brands/" + id,
                    headers: {
                        access_token: localStorage.access_token
                    }
                })

                this.router.push({ name: "brands" })
                this.readAllBrand()
                this.alertSuccess(data)
            } catch (error) {
                console.log(error);
                this.alertError(error)
            }
        }
    }
})
