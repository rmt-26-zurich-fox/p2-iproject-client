<template>
<section class="bg-[url('https://wallpaperaccess.com/full/1558517.jpg')] bg-cover h-screen w-screen">
    <div style="background-color: rgba(11, 132, 202, 0.336);" class="w-screen h-screen flex justify-center">
        <div  class="bg-slate-300 justify-center items-center flex rounded-lg text-center" style="width: 500px; height:400px; margin-top:30px;">
       <form action="">
       <p class="pb-10 font-bold" style="font-size: 20pt;">ADD PAGE</p>
        <div>
            <input type="text" v-model="imageUrl"  class="bg-transparent border-b-2 focus:border-b-sky-400 focus:outline-none" placeholder="ImageUrl">
        </div>
        <div class="pt-5">
             <input type="text" v-model="name" class="bg-transparent border-b-2 focus:border-b-sky-400 focus:outline-none"  placeholder="Name">
        </div>
        <div class="pt-5">
            <label for="">Category</label><br>
             <select class="bg-transparent border-b-2 focus:border-b-sky-400 focus:outline-none" name="" id="" v-model="category">
                <option value="1">Pengadilan Pidana</option>
                <option value="2">Pengadilan Perdata</option>
                <option value="3">Pengadilan Agama</option>
                <option value="4">Adr Arbitrase</option>
             </select>
        </div>
        <button class="bg-slate-500 h-10 mt-5 w-24 rounded-xl">Submit</button>
       </form>
    </div>
    </div>
</section>
</template>
<script>
export default{
    data(){
        return{
            imageUrl: "",
            name: "",
            category: ""
        }
    }
}
</script>