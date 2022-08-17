<script>
import { mapActions, mapState } from 'pinia';
import { computed } from '@vue/reactivity';
import CartTable from '../components/cartTable.vue';
import { useCustom2Store} from '../stores/custom2'
export default{
    components:{
        CartTable
    },
    data(){
        return{
            globalTotal: 0
        }
    },
    methods:{
        ...mapActions(useCustom2Store, ['fetchCart']),
    },
    computed:{
        ...mapState(useCustom2Store, ["shoppingCarts"]),
        globalTotalPrice(){
            let total = 0
            for(let cart of this.shoppingCarts){
                if(total == 0){
                    total = +cart.quantity * cart.Product.price
                }
                    total += +cart.quantity * cart.Product.price

                console.log(total)

            }
             return total
        }
    },
    created(){
        console.log(this.shoppingCarts);
        this.fetchCart()
        console.log(this.shoppingCarts);
    }

}
</script>

<template>

<div class="overflow-x-auto relative">
    <table class="w-full text-sm text-left text-gray-600  mt-5">
        <thead class="text-xs text-gray-800 uppercase bg-[#ACB999]  ">
            <tr>
                <th scope="col" class="py-3 px-5 rounded-tl-lg">
                    Product name
                </th>
                <th scope="col" class="py-3 px-5 ">
                       
                </th>
                <th scope="col" class="py-3 px-5 ">
                       
                </th>
                <th scope="col" class="py-3 px-5">
                    Qty
                </th>
                <th scope="col" class="py-3 px-5">
                    Price/piece
                </th>
                <th scope="col" class="py-3 px-5 rounded-tr-lg">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <CartTable v-for="cart in shoppingCarts" :key="cart.id" :cart="cart" />
        </tbody>
            
        <tfoot>
            <tr class="font-semibold text-gray-600 dark:text-white bg-[#ACB999]">
                <th scope="row" class="py-3 px-5 text-base">Total</th>
                <td class="py-3 px-5"></td>
                <td class="py-3 px-5"></td>
                <td class="py-3 px-5">3</td>
                <td class="py-3 px-5"></td>
                <td class="py-3 px-5">€ {{globalTotalPrice}}</td>
            </tr>
        </tfoot>
    </table>
    <div class="w-full flex">
        <button class="bg-[#ACB999] rounded-lg p-4 mt-5 mx-auto ">Check Out</button>

    </div>
</div>

</template>