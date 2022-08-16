<template>
 <div class="w-full mb-10 max-w-sm bg-white rounded-lg shadow-md dark:bg-green-600 opacity-90 dark:border-gray-700">
    <div class="justify-center items-center flex">
        <img class="p-8 rounded-t-lg w-60" :src="el.imageUrl">
    </div>
    <div class="px-5 pb-5">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white" style="font-size:20pt;">{{el.name}}</h5>
        <span class="text-white">Di Upload Tanggal:</span>
        <p class="text-white">{{formatDate}}</p>
        <div class="flex justify-between items-center pt-5">
            <span class="text-3xl font-bold text-gray-900 dark:text-white"></span>
            <button @click.prevent="favouritesAdd(el.id)" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-700 dark:hover:bg-blue-600 dark:focus:ring-blue-800">Edit</button>
        </div >
        <div class="justify-end flex pt-3">
        <button  @click.prevent="detailFood(el.id)" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-700 dark:hover:bg-sky-600 dark:focus:ring-blue-800">Delete</button>
        </div>
    </div>
    </div>
</template>

<script>
export default{
    props: ['el'],
    computed:{
        formatDate(){
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
            return `${new Date(this.el.createdAt).toLocaleDateString('id-ID', options)}`
        }
    }
}
</script>