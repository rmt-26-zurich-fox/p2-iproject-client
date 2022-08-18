<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';
import { sub } from 'date-fns'

export default {
    props: ["el"],
    methods: {
        ...mapActions(useCounterStore, ["fetchDetail", "deletePlanning"]),
         planningDrop(id){
            this.deletePlanning(id)
        },
        searchDetail(id){
            this.fetchDetail(id)
        }
    },
    computed: {
        timeFormat(time){
        },
        delButton(){
            if(this.$route.fullPath === "/plannings"){
                return `text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`
            }else{
                return `hidden`
            }
        }
    }
}
</script>

<template>
    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <a @click.prevent="searchDetail(el.id)" href="#"
            class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:bg-white dark:hover:bg-gray-300">
            <div class="w-full relative">
                <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    :src="el.imageUrl" alt="">
                <div class="bg-gray-700 w-full h-16 absolute bottom-0 bg-opacity-80">
                    <p class="text-white text-xs font-semibold line-clamp-1 ml-2 mt-2 mr-1">{{el.title}}</p>
                    <p class="text-orange-500 ml-2 font-normal text-sm mt-1">{{el.season}}</p>
                </div>
            </div>
            <div class="flex flex-col ml-2 -mt-20 justify-between -mt-10 leading-normal">
                <p class="text-gray-600 font-semibold text-xs  mb-1">{{el.episodes}} episode aired on</p>
                <p class="text-gray-600 font-semibold text-lg mb-1">{{el.airingStart}}</p>
                <p class="mb-3 font-normal w-64 text-gray-700 text-xs line-clamp-6 mr-2 dark:text-gray-400">{{el.synopsis}}</p>
                <button @click="deletePlanning(el.id)" :class="delButton">Drop Anime</button>
            </div>
        </a>
    </div>
</template>