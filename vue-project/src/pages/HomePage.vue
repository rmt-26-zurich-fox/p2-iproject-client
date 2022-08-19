<script>

import TableRow from "../components/TableRow.vue";
import ArtCard from "../components/ArtCard.vue"
import { mapActions } from "pinia"; 
import { dataStore } from "../stores/dataStore";


export default {
    components: {
    // AddMovieForm,
    // UpdateMovieForm,
    TableRow,
    ArtCard,
    TableRow
},
    data () {
        return{
            title: "",
        }
    }
};
</script>


<template>
        <!-- TABLE -->
        <section  class="justify-center my-5 border-2 flex-auto">
         <div class="flex my-12 justify-center items-center h-16">
          <button
            class="px-3 py-2  text-gray-900 bg-gray-100 rounded-sm focus:outline-none focus:ring focus:ring-gray-500 uppercase tracking-widest font-bold">Get Painting!</button>
        </div>
          <h1 class="text-5xl ml-36 mt-24 mb-12"></h1>
            <div class="overflow-x-auto relative">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 px-8">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                Image
                            </th>
                        </tr>
                    </thead>
                    <div class="flex justify-around md:justify-around">
                    <ArtCard />                
                    <ArtCard />                          
                    </div>
                    
                </table>
            </div>
        </section>
 
        
</template>

