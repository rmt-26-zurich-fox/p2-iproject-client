
<script>
import { mapActions, mapState } from 'pinia';
import { useCustom1Store} from '../stores/custom1'
import { useCustom2Store} from '../stores/custom2'

export default{
    data(){
        return{
            id: this.$route.params.id
        }
    },
    methods:{
        ...mapActions(useCustom1Store,['productDetail']),
        ...mapActions(useCustom2Store,['addShopCart']),

       localAddShopCart(id){
            let from = 'car detail'
            console.log("masukkkdmsf" ,id)
            this.addShopCart(id)

        }
    },
    computed:{
        ...mapState(useCustom1Store,['product'])
    },
    created(){
    this.productDetail(this.id)

    // this.thirdPartyAPI(this.id)
    }
}
</script>

<template>
 
 <div  class="flex flex-col items-center bg-white rounded-lg mt-[10vh] border shadow-md md:flex-row font-isi ">
    <div class="flex flex-col ">
        <img class="object-cover rounded-t-lg w-[60vh]  md:rounded-l-lg" :src="product.imgUrl" alt="">
    </div>
    <div class="flex flex-col justify-between p-10 leading-normal">
        <h1 class="mb-2 text-[5vh] font-bold tracking-ti">{{product.name}}</h1>
        <p class="mb-3 text-[3.5vh] font-no">€ {{product.price}}</p>
        <p class="mb-3 text-[2vh] font-no">Material: {{product.material}}</p>
        <div class="flex flex-row mt-5">
            <router-link to='/' class="flex flex-row text-gray-900 bg-[#ACB999] border border-[#ACB999] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "><ion-icon name="arrow-undo-outline"></ion-icon> back</router-link>
            <a  class="h-[42px] text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " v-if="product.stock > 0" @click="localAddShopCart(product.id)">Add to shopping Cart</a>
            <h1 class="text-gray-400 my-auto" v-if="product.stock < 1" >Don't worry Stock is coming ; )</h1>
       </div>
    </div>
</div>

</template>

