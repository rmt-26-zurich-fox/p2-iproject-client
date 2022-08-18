
<script>
import { mapActions, mapState } from 'pinia';
import { useCustom1Store} from '../stores/custom1'
import { useCustom2Store} from '../stores/custom2'

export default{
    props:['product'],
    data(){
        return{

        }
    },
    methods:{
        ...mapActions(useCustom1Store, ['productDetail']),
        ...mapActions(useCustom2Store,['addShopCart']),

        localproductFunction(id){
            this.productDetail(id)
        },
        localAddShopCart(id){
            this.addShopCart(id)
        }
    }
}
</script>


<template>
 <div class="p-4 mx-auto">
                    <!--Metric Card-->
      <div class=" flex-col h-full w-96 bg-white rounded-lg shadow-md font-isi max-w-64">
          <a @click="localproductFunction(product.id)" class="cursor-pointer">
              <img class="p-6 rounded-t-lg w-[10cm] h-50 max-w-lg" :src="product.imgUrl" alt="product image">
              </a>
          <div class=" px-5 pb-5">
            <a @click="localproductFunction(product.id)" class="cursor-pointer">
                <h5 class="text-2xl font-semibold tracking-tight text-gray-900 ">{{product.name}}</h5>
                <h5 class="text-lg font-small tracking-tight text-gray-900 ">material : {{product.material}}</h5>
            </a>
              
              <div class="flex justify-between items-center">
                  <span class="text-3xl font-bold text-gray-900 ">€ {{product.price}}</span>
            <h1 class="text-gray-400 my-auto" v-if="product.stock < 1">Don't worry Stock is coming ; )</h1>

                  <a  @click="localAddShopCart(product.id)"  class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center  dark:focus:ring-green-800 " v-if="product.stock > 0">Add to Shopping Cart</a>
              </div>
          </div>
      </div>

                    <!--/Metric Card-->
                </div>
                </template>