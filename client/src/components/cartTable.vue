<script>
export default{
    props:['cart'],
    methods:{
        
    },
    computed:{
        totalPrice(){
            return this.cart.quantity * this.cart.Product.price
        }
    },
    created(){
        // console.log(cart)
    }
}

</script>


<template>

<tr class="bg-[#E9E5D6] ">
        <th scope="row" class="py-4 px-5 font-medium text-gray-600 whitespace-nowrap ">
            {{cart.Product.name}}
        </th>
        <td>
            <img :src="cart.Product.imgUrl" alt="" class="w-20">
        </td>
        <td lass="py-4 px-5 ">
            <button class="text-xl" >
                <ion-icon name="trash-outline"></ion-icon>
            </button>
        </td>
        
        <td class="py-4 px-5">
            {{cart.quantity}}
        </td>
        <td class="py-4 px-5">
            € {{cart.Product.price}}
        </td>
         <td class="py-4 px-5">
            € {{totalPrice}}
        </td>
</tr>
            
</template>