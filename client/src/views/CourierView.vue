
<script>
import axios from "axios"
export default{
data(){
    return{
        cities: [],
        citySelected: '',
        courier: '',
        type: [],
        delivPrice:''
    }
},
methods: {
    async getCost(){
        if(this.citySelected && this.courier){
        try {
            this.delivPrice = ''
            const {data} = await axios({
                url: "http://localhost:3000/couriers",
                method: "POST",
                headers: {access_token: localStorage.access_token},
                data:{ destination: this.citySelected , courier: this.courier}
            })

            console.log(data.results[0].costs)
            this.type = data.results[0].costs
        } catch (err) {
            console.log(err)
        }
    }
    },
    async toPayment(){
        if(this.delivPrice){

            this.$router.push('/payment')
        }
    }
},
mounted(){

        let{ data }= axios({
            url:'http://localhost:3000/city',
            method: "GET",
            headers: {access_token: localStorage.access_token}
        }).then(res=>{

            this.cities = res.data.results
        })
},
created(){
    this.getCost()
}
}
</script>
<template>
<div class="min-w-screen min-h-screen flex items-center justify-center px-5 pb-10 pt-16">
    <div class="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" style="max-width: 600px">
        <div class="w-full pt-1 pb-5">

        </div>
        <div class="mb-10">
            <h1 class="text-center font-bold text-xl uppercase">Select Destination</h1>
        </div>
        <div class="mb-3 flex -mx-2">

        </div>
        <div class="mb-3">
             <div>
                    <select @Change="getCost" v-model="citySelected" class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                       <option value="" disabled selected> Select city</option>
                       <option :value="city.city_id" v-for="city in cities" >{{city.city_name}}</option>

                    </select>
                </div>
        </div>
        <div class="mb-3">
             <div>
                    <select @Change="getCost" v-model="courier" class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                       <option value="" disabled selected> Select Courier</option>
                       <option value="jne">JNE</option>
                        <option value="pos">POS Indonesia</option>
                        <option value="tiki">TIKI</option>
                    </select>
                </div>
        </div>
         <div class="mb-3" v-if="type.length">
             <div>
                    <select v-model="delivPrice" class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                       <option value="" disabled selected> Select Courier</option>
                       <option :value="typ.cost[0].value" v-for="typ in type" >{{typ.service}} - {{typ.cost[0].value}}</option>
                    </select>
                </div>
        </div>

        <div>
            <button @click="toPayment" class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">Select Payment Method</button>
        </div>
    </div>
</div>
</template>