<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';
import { formatDistance } from 'date-fns'

export default {
    data() {
        return {
            comment: {
                thread: ""
            }
        }
    },
    methods: {
        ...mapActions(useCounterStore, ["fetchDetail", "addPlannings", "postComment", "changeComment"]),
        postPlanning(id) {
            this.addPlannings(id)
        },
        addComment(id) {
            this.postComment(id, this.comment)
        },
        page() {
            let arr = []
            for (let i = 0; i < this.dataComments.totalPages; i++) {
                arr.push(i + 1)
            }
            return arr
        },
        movePage(data, id) {
            this.changeComment(data, id)
        }
    },
    computed: {
        ...mapState(useCounterStore, ["dataAnimes", "dataComments"]),
        formatTime(time) {
            return formatDistance(time, new Date())
        }
    },
    created() {
        this.fetchDetail(this.$route.params.id)
        this.page()
    }
}
</script>

<template>
    <div>
        <img class="object-cover h-80 w-full" src="https://wallpaperaccess.com/full/1117427.jpg">
    </div>
    <div class="bg-white w-full h-80">
        <div class="container mb-12 -mt-20 mx-auto md:px-12 rounded-xl gap-10 flex">
            <div class="flex flex-col h-28 w-full">
                <img class="ml-40" :src="dataAnimes.imageUrl" width="190">
            </div>
            <div class="mt-24 ml-36 font-semibold">
                <p class="text-2xl mb-2 text-orange-500">{{ dataAnimes.title }}</p>
                <p class="text-xs w-full text-orange-500 ">{{ dataAnimes.synopsis }}
                </p>
                <button @click="postPlanning(dataAnimes.id)"
                    class="text-white w-56 m-auto bg-gradient-to-r mt-2 from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium text-sm p-8 py-1.5 text-center mr-2 mb-2">Add
                    to Plannings</button>
            </div>
        </div>
    </div>
    <div class="container my-12 mx-auto px-4 md:px-12 rounded-xl flex">
        <div class="bg-white ml-36 w-56 h-auto shadow-lg -mt-10">
            <p class="text-orange-500 ml-4 mt-4 font-semibold text-sm">Airing</p>
            <p class="text-orange-500 ml-4 text-sm">{{ dataAnimes.airingStart }}</p>

            <p class="text-gray-500 ml-4 mt-4 font-semibold text-sm">Season</p>
            <p class="text-gray-500 ml-4 text-sm">{{ dataAnimes.season }}</p>

            <p class="text-gray-500 ml-4 mt-4 font-semibold text-sm">Episodes</p>
            <p class="text-gray-500 ml-4 text-sm">{{ dataAnimes.episodes }}</p>

            <p class="text-gray-500 ml-4 mt-4 font-semibold text-sm">Genre</p>
            <p class="text-gray-500 ml-4 text-sm w-1/2">{{ dataAnimes.genre }}</p>

            <p class="text-gray-500 ml-4 mt-4 font-semibold text-sm">Score</p>
            <p class="text-gray-500 ml-4 text-sm mb-4">{{ dataAnimes.score }}</p>
        </div>
        <div class="flex flex-col">
            <div class="-mt-10 ml-4">
                <h1 class="text-gray-500 text-base font-semibold">Trailer</h1>
                <iframe src="https://www.youtube.com/embed/F5DMjhg3A6c" width="350" height="200"></iframe>
            </div>
            <div class="container my-12 mx-auto px-4 md:px-12 rounded-xl">
                <div v-for="el in dataComments.rows" :key="el.id"
                    class="bg-white shadow-xl ml-4 flex flex-wrap mb-2 -mx-1 lg:-mx-4">
                    <img class="m-4" :src="el.gif" width="100">
                    <div class="flex flex-col">
                        <p class="mt-4 text-orange-500 text-sm font-semibold">{{ el.User.username }}</p> <br>
                        <p class="text-orange-500 text-sm -mt-6 mb-1 w-56">{{ el.thread }}</p>
                        <p class="text-gray-500 text-sm -mt-1 mb-2 w-56">{{ el.createdAt }}</p>
                    </div>
                    <!-- <img class="w-full" src="https://www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif"></img> -->
                </div>
            </div>
            <div class="flex items-center space-x-1 ml-10 -mt-10">
                <a @click="movePage('prev', dataAnimes.id)" href="#" class="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                </a>

                <a @click="movePage(el, dataAnimes.id)" v-for="(el, idx) in page()" :key="idx + 1" href="#"
                    class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                    {{ el }}
                </a>
                <a @click="movePage('next', dataAnimes.id)" href="#" class="px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </a>
            </div>
            <div class="ml-4 mt-2">
                <form @submit.prevent="addComment(dataAnimes.id)" action="">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your
                        message</label>
                    <textarea v-model="comment.thread" rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Leave a comment..."></textarea>
                    <button type="submit"
                        class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-3 mt-2 py-2 text-center mr-2 mb-2">Comment</button>
                </form>
            </div>
        </div>
    </div>
</template>