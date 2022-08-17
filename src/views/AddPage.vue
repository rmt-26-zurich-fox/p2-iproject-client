<template>
<section class="bg-[url('https://wallpaperaccess.com/full/1558517.jpg')] bg-cover h-screen w-screen" style="font-family: Source Code Pro;">
    <div style="background-color: rgba(11, 132, 202, 0.336);" class="w-screen h-screen flex justify-center">
        <div  class="bg-slate-300 justify-center items-center flex rounded-lg text-center" style="width: 500px; height:400px; margin-top:30px;">
       <form action="" @submit.prevent="reportAdd">
       <p class="pb-10 font-bold" style="font-size: 20pt;">ADD REPORT</p>
        <div class="relative">
            <i class="fa-solid fa-image absolute pt-1.5 text-sky-800"></i>
            <input type="text" v-model="imageUrl"  class="pl-5 bg-transparent border-b-2 focus:border-b-sky-400 focus:outline-none" placeholder="ImageUrl">
        </div>
        <div class="pt-5 relative">
            <i class="fa-solid fa-file-signature absolute pt-1 text-sky-800"></i>
             <input type="text" v-model="name" class="pl-5 bg-transparent border-b-2 focus:border-b-sky-400 focus:outline-none"  placeholder="Name">
        </div>
        <div class="pt-5">
            <label for="">Category</label><br>
             <select class="bg-transparent border-b-2 focus:border-b-sky-400 focus:outline-none" v-model="CategoryId">
                <option value="1">Pengadilan Pidana</option>
                <option value="2">Pengadilan Perdata</option>
                <option value="3">Pengadilan Agama</option>
                <option value="4">Adr Arbitrase</option>
             </select>
        </div>
        <button id="pay-button" class="bg-slate-500 h-10 mt-5 w-24 rounded-xl">Submit</button>
       </form>
    </div>
    </div>
</section>
</template>
<script>
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useCounterStore } from '../stores/counter'
import Swal from "sweetalert2"
export default{
    data(){
        return{
            imageUrl: "",
            name: "",
            CategoryId: "",
        }
    },
    computed:{
    },
    methods:{
        ...mapActions(useCounterStore,['addReport']),
       async reportAdd(){
           let result= await this.addReport({
                imageUrl: this.imageUrl,
                name: this.name,
                CategoryId: this.CategoryId
            })
        let payButton= document.getElementById('pay-button');
        payButton.addEventListener('click', function () {
          // Trigger snap popup. @TODO: Replace TRANSACTION_TOKEN_HERE with your transaction token
          window.snap.pay(result.trans.token, {
          onSuccess: function(result){
            /* You may add your own implementation here */
            Swal.fire({title: "payment success!"}); console.log(result);
          },
          onPending: function(result){
            /* You may add your own implementation here */
            Swal.fire({title:"wating your payment!"}); console.log(result);
          },
          onError: function(result){
            /* You may add your own implementation here */
             Swal.fire({title:"payment failed!"}); console.log(result);
          },
          onClose: function(){
            /* You may add your own implementation here */
             Swal.fire({title:'you closed the popup without finishing the payment'});
          }
        });
          // customer will be redirected after completing payment pop-up
        });
        },
        
    },
   
}
</script>