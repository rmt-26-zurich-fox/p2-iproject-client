import { defineStore} from 'pinia'
import axiosInstance from "../helpers/axiosInstance"
import Swal from 'sweetalert2'
import { nextTick } from 'vue'

export const dataStore = defineStore({
    id: "dataStore",
    state: () => {
        return {
            movies: [],
            movie: {},
            urlRoot: "http://localhost:3000"
        }
    },
    actions: {
        errorNotification(error) {
            Swal.fire({
                title: 'Error!',
                text: err.response.data.message,
                icon: 'error',
                confirmButtonText: 'OK'
            })
        },

        async showMovies(all) {
            try {
                let {data} = await axiosInstance({
                    method: "GET",
                    url: this.urlRoot,
                    params: all
                })

                this.movies = data.data
            } catch (error) {
                next(error)
                
            }
        }
    }
})