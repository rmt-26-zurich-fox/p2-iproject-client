import axios from 'axios';
import { defineStore } from 'pinia'
import Swal  from "sweetalert2";

export const useCustom2Store = defineStore({
  id: 'custom2',
  state: () => ({
    url: 'http://localhost:3000',
    shoppingCarts: [],
    payments:[]
  }),
  getters: {
    doubleCount: (state) => state.custom2 * 2
  },
  actions: {
    async addShopCart(id){
        try {
            
        Swal.fire({
            title: 'How many item would you like to order?',
            input: 'number',
            inputAttributes: {
            autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Add to Cart',
            showLoaderOnConfirm: true,
            preConfirm: (quantity) => {
                
                if(+quantity < 1){
                    Swal.showValidationMessage(
                        `We cannot accept your request`
                      )
                }else{
                    this.loading()
                    const  data  = axios({
                        url: `${this.url}/shoppingcarts/${id}`,
                        method: "POST",
                        data:{quantity},
                        headers: {access_token: localStorage.access_token}
                    })

                    return data

                }
            },
                allowOutsideClick: () => !Swal.isLoading()
            }).then((result) =>{
                 Swal.close()
                 Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: result.value.data.message,
                    showConfirmButton: false,
                    timer: 1500
                  })
                  this.router.push('/')
            }).catch((err)=>{
                this.errAlert(err)
            })
        } catch (err) {
            Swal.showValidationMessage(
                `Request failed: ${error}`
              )
            console.log(err)
        }
    },
    async fetchCart(){
        try {
            this.loading()
            const { data } = await axios({
                url: `${this.url}/shoppingcarts`,
                method: "get",
                headers:{access_token: localStorage.access_token}
            })

            this.shoppingCarts = data
            Swal.close()

        } catch (err) {
            this.errAlert(err)
        }
    },
    async deleteCart(id){
        try {
            Swal.fire({
                title: 'Are you sure?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#5BB318',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                    const {data} =  axios({
                        url:`${this.url}/shoppingcarts/${id}`,
                        method:"Delete",
                        headers:{access_token: localStorage.access_token}
                    })
                    
                   Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                  this.fetchCart()
                  this.router.push('/shoppingcart')
                  
                }
              })
        } catch (err) {
            this.errAlert(err) 
        }
    },
    errAlert(err){
        console.log(err.response)
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data,
          })
      },
      loading(){
        Swal.fire({
            position: 'center',
            title: 'Loading',
            showConfirmButton: false,
            didOpen: () => {
                Swal.showLoading()
            }
      })
    }

    
}

})
  