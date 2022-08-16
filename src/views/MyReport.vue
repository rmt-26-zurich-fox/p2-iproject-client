<template>
   <section class="bg-[url('./asset/702871.jpg')] bg-cover">
   <div class="flex justify-center items-center pb-10 pt-10">
        <form action="" @submit.prevent="handleSearch">
        <input type="text" name="" id="" v-model="nama" style="width:500px; height: 48px;" class="focus:outline-none pl-5" placeholder="Search">
           <button type="submit" class="absolute bg-green-200 hover:bg-green-100  h-12 rounded-r"  style="width:20px; font-size:10pt; font-family: Source Code Pro;" ><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
   </div>
    <div class="flex justify-center">
          <div class="grid grid-cols-3 gap-4 pt-5">
            <ReportCard v-for="el in report.Food" :key="el.id" :el="el"/>
          </div>
    </div>
     <div class="flex flex-col items-center pb-20">
  <!-- Help text -->
  <span class="text-sm text-gray-700 dark:text-gray-400">
      Showing <span class="font-semibold text-gray-900 dark:text-white">{{page}}</span> to <span class="font-semibold text-gray-900 dark:text-white">{{totalPage}}</span> Pages
  </span>
  <!-- Buttons -->
  <div class="inline-flex mt-2 xs:mt-0">
      <button @click="clickPrev(-1)" class="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Prev
      </button>
      <button  @click="clickPrev(1)" class="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Next
      </button>
  </div>
</div>
</section>

</template>

<script>
import ReportCard from "../components/ReportCard.vue"
import { mapActions, mapState } from 'pinia'
import { useCounterStore } from '../stores/counter'
export default{
    data(){
        return{
            nama: '',
            page: 1
        }
    },
    components: {
        ReportCard
        },
    methods:{
        ...mapActions(useCounterStore,['fetchReport']),
        handleSearch(){
           let obj= {
                name: this.nama
            }
            this.fetchReport(obj)
        },
          clickPrev(hasil=0){
        if(this.page=== 1 && hasil === -1){
          console.log('No Page Left');
        }else if(this.page === this.totalPage && hasil === 1 ){
          console.log('No Page left more than');
        }else{
          this.page += hasil
          let res= {
            page:this.page-1
          }
          this.fetchReport(res)
        }
        }
    },
    computed:{
        ...mapState(useCounterStore,['report',"totalPage"])
    },
    created(){
        this.fetchReport()
         this.clickPrev()
    }
}
</script>