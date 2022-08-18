<script>
import { mapActions, mapState } from 'pinia';
import { useCustom1Store} from '../stores/custom1'
import ProductCard from '../components/ProductCard.vue'
export default{
  data(){
    return{
      page: 0,

    }
  },
    methods: {
        ...mapActions(useCustom1Store, ["fetchProduct"]),
        clickPrev(){
    // let res =  {}

      if(this.page > 1){
        this.page --
        // console.log(this.page)
          this.fetchProduct(this.page)
      }
        },
  clickNext(){
    if(this.page < this.totalPages){
      this.page++
      // console.log(this.page)
          this.fetchProduct(this.page)
  } 
  }
    },
    computed:{
        ...mapState(useCustom1Store, ["products", "totalPages"])
    },
    created() {
        if(this.page === 0){
    this.page == 1
  }
  this.fetchProduct(this.page)
  this.clickPrev()
  this.clickNext()
    },
    components: { ProductCard },
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
        <!-- paginationns -->
                      <div class="pt-2 md:pt-1 pb-1 px-1 mt-[85vh] h-auto fixed w-full z-20 top-10" >

                          <div class="flex flex-col items-center mx-auto">
                            <!-- Help text -->
                            <span class="text-sm text-gray-700 dark:text-gray-400 ">
                                Showing <span class="font-semibold text-black">{{page}}</span> to <span class="font-semibold text-black">{{totalPages}}</span> 
                            </span>
                            <div class="inline-flex mt-2 xs:mt-0">
                              <!-- Buttons -->
                              <button @click="clickPrev()" class="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-green-600 rounded-l hover:bg-[#464E2E]">
                                  <svg aria-hidden="true" class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                                  Prev
                              </button>
                              <button @click="clickNext()" class="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-green-600 rounded-r border-0 border-l border-gray-700 hover:bg-[#464E2E]">
                                  Next
                                  <svg aria-hidden="true" class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                              </button>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
               </div>


  </main>
</template>
