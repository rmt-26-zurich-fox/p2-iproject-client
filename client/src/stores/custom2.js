import axios from 'axios';
import { defineStore } from 'pinia'
import Swal  from "sweetalert2";

export const useCustom2Store = defineStore({
  id: 'custom2',
  state: () => ({
    url: 'http://localhost:3000',
    custom2: 0
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
  