<template>
    <div class="bg-[url('https://wallpaperaccess.com/full/1558517.jpg')] bg-cover h-screen w-screen"  style="font-family: Source Code Pro;">
    <div style="background-color: rgba(11, 132, 202, 0.336);" class="w-screen h-screen flex justify-center">
         <div  class="bg-slate-300 justify-center items-center flex rounded-lg text-center" style="width: 500px; height:400px; margin-top:30px;">
       <form action="">
       <p class="pb-10 font-bold" style="font-size: 20pt;">EDIT REPORT</p>
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
             <select class="bg-transparent border-b-2 focus:border-b-sky-400 focus:outline-none" name="" id="" v-model="Category">
                <option value="1">Pengadilan Pidana</option>
                <option value="2">Pengadilan Perdata</option>
                <option value="3">Pengadilan Agama</option>
                <option value="4">Adr Arbitrase</option>
             </select>
        </div>
        <button class="bg-slate-500 h-10 mt-5 w-24 rounded-xl" @click.prevent="updateReport(id)">Submit</button>
       </form>
    </div>
    </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'
export default{
    data(){
        return{
            imageUrl: '',
            name: '',
            Category: '',
            id: this.$route.params.id
        }
    },
    computed:{
        ...mapState(useCounterStore,['detail'])
    },
    methods:{
        ...mapActions(useCounterStore,['fetchReport','reportDetail','update']),
        updateReport(id){
            this.update(id,{
                imageUrl: this.imageUrl,
                name: this.name,
                CategoryId: this.Category
            })
            this.$router.push('/myreport')
            this.fetchReport()
        }
    },
    
    created(){
        if(localStorage.getItem("access_token")){
            this.imageUrl= this.detail.imageUrl,
            this.name= this.detail.name,
            this.Category= this.detail.CategoryId
                this.fetchReport()
               
        }
    }
}
</script>