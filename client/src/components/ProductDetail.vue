
<script>
import { mapActions, mapState } from 'pinia';
import { useCustom1Store} from '../stores/custom1'
export default{
    data(){
        return{
            id: this.$route.params.id
        }
    },
    methods:{
        ...mapActions(useCarStore,['useCustom1Store']),
    //     ...mapActions(useWishlistStore,['addWishlist']), 
    //     localAddWishlist(id){
    //         let from = 'car detail'
    //         this.addWishlist(id , from)

    //     }
    },
    // computed:{
    //     ...mapState(useCarStore,['selectedCar','qrCode'])
    // },
    created(){
    this.useCustom1Store(this.id)
    // this.thirdPartyAPI(this.id)
    }
}
</script>

<template>
 
 <div  class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row  dark:border-gray-700 dark:bg-gray-800 ">
    <div class="flex flex-col ">
        <img class="object-cover rounded-t-lg w-[60vh]  md:rounded-l-lg" :src="selectedCar.imgUrl" alt="">
        <div class="w-full flex justify-end">
            <img :src="this.qrCode" class="w-32 h-32  mt-5 " alt="qrcode">
        </div>
    </div>
    <div class="flex flex-col justify-between p-10 leading-normal">
        <h1 class="mb-2 text-[5vh] font-bold tracking-tight  text-white">{{selectedCar.name}}</h1>
        <h3 class="mb-3 font-normal text-white">by <Strong>{{selectedCar.User.username}}</Strong></h3>
        <p class="mb-3 text-[3.5vh] font-normal text-white">$ {{selectedCar.price}}</p>
        <p class="mb-3 text-[2vh] font-normal text-white">Type: {{selectedCar.description}}</p>
        <p class="mb-3 text-[3vh] font-normal text-white">Stock: {{selectedCar.stock}} Piece</p>
        <p class="mb-3 text-[2vh] font-normal text-white">Produced By: <strong>{{selectedCar.Category.name}}</strong></p>
        <div class="flex flex-row mt-5">
            <router-link to='/cars' class="flex flex-row text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"><img src="@/assets/chevrons-left.svg" class="mr-1"> back</router-link>
            <a href="javascript:;" @click="localAddWishlist(selectedCar.id)" class="h-[42px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to Wishlist</a>
       </div>
    </div>
</div>

</template>

