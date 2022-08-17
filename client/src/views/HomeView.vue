<script>
import { mapActions, mapState } from 'pinia';
import { useCustom1Store} from '../stores/custom1'
import ProductCard from '../components/ProductCard.vue'
export default{
    methods: {
        ...mapActions(useCustom1Store, ["fetchProduct"])
    },
    computed:{
        ...mapState(useCustom1Store, ["products"])
    },
    created() {
        this.fetchProduct();
    },
    components: { ProductCard }
}
</script>

<template>
  <main>
      <div class="main-content flex-1 bg-gray-100  pb-20 md:pb-12 rounded-b-3xl">

            <div class="bg-[#464E2E] pt-5">
                <div class="rounded-tl-3xl bg-gradient-to-r from-[#ACB992] to-[#464E2E] p-4 shadow text-2xl text-white">
                    <h3 class="font-bold font-isi text-3xl pl-2">Products</h3>
                </div>
            </div>

            <div class="flex flex-wrap">
                <ProductCard v-for="product in products" :key="product.id" :product="product"/>
                <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                  
                </div>
            </div>


            <div class="flex flex-row flex-wrap flex-grow mt-2">

                <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                    <!--Graph Card-->


                <div class="w-full md:w-1/2 xl:w-1/3 p-6">

                </div>


                <div class="w-full md:w-1/2 xl:w-1/3 p-6">

                </div>


            </div>
        </div>
    </div>


  </main>
</template>
