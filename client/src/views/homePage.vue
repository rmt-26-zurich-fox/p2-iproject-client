<script>
import animeCard from '../components/animeCard.vue';
import loadingPage from './loadingPage.vue';
import { RouterLink, RouterView } from 'vue-router'
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    components: {
    animeCard,
    loadingPage
},
    methods: {
        ...mapActions(useCounterStore, ["fetchTop", "fetchCardHomeFall", "fetchCardHomeSpring", "fetchCardHomeSummer", "fetchCardHomeWinter", "changePage"]),
        carFetch() {
            this.fetchTop()
        },
        seasonSearch(params){
            this.changePage(params)
        }
    },
    computed: {
        ...mapState(useCounterStore, ["dataAnimes", "dataFall", "dataSpring", "dataSummer", "dataWinter", "isLoading"])
    },
    created() {
        this.carFetch()
        this.fetchCardHomeFall()
        this.fetchCardHomeSpring()
        this.fetchCardHomeSummer()
        this.fetchCardHomeWinter()
    }
}
</script>

<template>
    <loadingPage v-if="isLoading === true"/>
    <div v-if="isLoading === false">
    <div v-if="isLoading === false" id="carouselExampleCaptions" class="carousel slide relative -mt-20" data-bs-ride="carousel">
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
                aria-label="Slide 5"></button>
        </div>
        <div class="carousel-inner relative w-full overflow-hidden">
            <div class="carousel-item active relative float-left w-full">
                <img src="https://wallpaper.dog/large/20517200.png" class="m-auto block shadow-lg w-9/12 relative rounded-lg" alt="..." />
                <a href="">
                <div class="hover:bg-orange-100 carousel-caption hidden md:block absolute bottom-10 left-4 text-left bg-white max-w-screen-md h-48 ml-60 rounded-md">
                    <h5 class="ml-4 text-orange-500 text-xl ">{{dataAnimes[0].type}}</h5>
                    <p class="ml-4 font-bold text-black text-4xl">{{dataAnimes[0].title}}</p>
                    <p class="ml-4 text-zinc-400 mt-2">{{dataAnimes[0].start_date}}</p>
                </div>
            </a>
            </div>
            <div class="carousel-item relative float-left w-full">
                <img src="https://images6.alphacoders.com/993/thumb-1920-993076.png" class="m-auto block shadow-lg w-9/12 relative rounded-lg" alt="..." />
                <a href="">
                <div class="hover:bg-orange-100 carousel-caption hidden md:block absolute bottom-10 left-4 text-left bg-white max-w-screen-md h-48 ml-60 rounded-md">
                    <h5 class="ml-4 text-orange-500 text-xl ">{{dataAnimes[1].type}}</h5>
                    <p class="ml-4 font-bold text-black text-4xl">{{dataAnimes[1].title}}</p>
                    <p class="ml-4 text-zinc-400 mt-2">{{dataAnimes[1].start_date}}</p>
                </div>
            </a>
            </div>
            <div class="carousel-item relative float-left w-full">
                <img src="https://i.pinimg.com/originals/30/e8/6a/30e86a9bc41a04bec8a50e9949ff3e88.png" class="m-auto block shadow-lg w-9/12 relative rounded-lg" alt="..." />
                <a href="">
                <div class="hover:bg-orange-100 carousel-caption hidden md:block absolute bottom-10 left-4 text-left bg-white max-w-screen-md h-48 ml-60 rounded-md">
                    <h5 class="ml-4 text-orange-500 text-xl ">{{dataAnimes[2].type}}</h5>
                    <p class="ml-4 font-bold text-black text-4xl">{{dataAnimes[2].title}}</p>
                    <p class="ml-4 text-zinc-400 mt-2">{{dataAnimes[2].start_date}}</p>
                </div>
            </a>
            </div>
            <div class="carousel-item relative float-left w-full">
                <img src="https://wallpaperaccess.com/full/945400.jpg" class="m-auto block shadow-lg w-9/12 relative rounded-lg" alt="..." />
                <a href="">
                <div class="hover:bg-orange-100 carousel-caption hidden md:block absolute bottom-10 left-4 text-left bg-white max-w-screen-md h-48 ml-60 rounded-md">
                    <h5 class="ml-4 text-orange-500 text-xl ">{{dataAnimes[3].type}}</h5>
                    <p class="ml-4 font-bold text-black text-4xl">{{dataAnimes[3].title}}</p>
                    <p class="ml-4 text-zinc-400 mt-2">{{dataAnimes[3].start_date}}</p>
                </div>
            </a>
            </div>
            <div class="carousel-item relative float-left w-full">
                <img src="https://b-static.besthdwallpaper.com/spy-x-family-wallpaper-1920x1080-96022_48.jpg" class="m-auto block shadow-lg w-9/12 relative rounded-lg" alt="..." />
                <a href="">
                <div class="hover:bg-orange-100 carousel-caption hidden md:block absolute bottom-10 left-4 text-left bg-white max-w-screen-md h-48 ml-60 rounded-md">
                    <h5 class="ml-4 text-orange-500 text-xl ">{{dataAnimes[4].type}}</h5>
                    <p class="ml-4 font-bold text-black text-4xl">{{dataAnimes[4].title}}</p>
                    <p class="ml-4 text-zinc-400 mt-2">{{dataAnimes[4].start_date}}</p>
                </div>
            </a>
            </div>
        </div>
        <button
            class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button
            class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>


    <!-- ---------------------------------- -->
    <div class="divide-y">
        <h1
            class="text-center mt-20 font-bold text-5xl text-decoration-line: underline decoration-indigo-200 underline-offset-8">
            Watch Anime Videos</h1>
    </div>
    <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">

            <!-- Column -->
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <div class="p-10">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                        <iframe src="" class="w-full aspect-video"></iframe>
                        <div class="flex px-6 pt-4">
                            <p class="text-gray-500"><i class="fa-solid fa-calendar text-orange-500 mr-2"></i>June 22,
                                2022</p>
                            <p class="text-gray-500 ml-4"><i class="fa-solid fa-film text-orange-500 mr-2"></i>Season
                                Anime</p>
                            <p class="text-gray-500 ml-4"><i class="fa-solid fa-film text-orange-500 mr-2"></i>13
                                episodes</p>
                        </div>
                        <div class="px-6 pt-4">
                            <div class="font-bold text-2xl mb-2">Lycoris recoil</div>
                        </div>
                        <div class="px-6 pt-4 pb-2 -mt-4 text-orange-500">
                            <a href="">
                                <p
                                    class="font-bold text-base tracking-tight transition transform hover:tracking-widest">
                                    Read More <i class="fa-solid fa-right-long text-base"></i></p>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <!-- END Column -->

            <!-- Column -->
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <div class="p-10">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                        <iframe src="" class="w-full aspect-video"></iframe>
                        <div class="flex px-6 pt-4">
                            <p class="text-gray-500"><i class="fa-solid fa-calendar text-orange-500 mr-2"></i>June 22,
                                2022</p>
                            <p class="text-gray-500 ml-4"><i class="fa-solid fa-film text-orange-500 mr-2"></i>Season
                                Anime</p>
                            <p class="text-gray-500 ml-4"><i class="fa-solid fa-film text-orange-500 mr-2"></i>13
                                episodes</p>
                        </div>
                        <div class="px-6 pt-4">
                            <div class="font-bold text-2xl mb-2">Lycoris recoil</div>
                        </div>
                        <div class="px-6 pt-4 pb-2 -mt-4 text-orange-500">
                            <a href="">
                                <p
                                    class="font-bold text-base tracking-tight transition transform hover:tracking-widest">
                                    Read More <i class="fa-solid fa-right-long text-base"></i></p>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <!-- END Column -->

            <!-- Column -->
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <div class="p-10">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                        <iframe src="" class="w-full aspect-video"></iframe>
                        <div class="flex px-6 pt-4">
                            <p class="text-gray-500"><i class="fa-solid fa-calendar text-orange-500 mr-2"></i>June 22,
                                2022</p>
                            <p class="text-gray-500 ml-4"><i class="fa-solid fa-film text-orange-500 mr-2"></i>Season
                                Anime</p>
                            <p class="text-gray-500 ml-4"><i class="fa-solid fa-film text-orange-500 mr-2"></i>13
                                episodes</p>
                        </div>
                        <div class="px-6 pt-4">
                            <div class="font-bold text-2xl mb-2">Lycoris recoil</div>
                        </div>
                        <div class="px-6 pt-4 pb-2 -mt-4 text-orange-500">
                            <a href="">
                                <p
                                    class="font-bold text-base tracking-tight transition transform hover:tracking-widest">
                                    Read More <i class="fa-solid fa-right-long text-base"></i></p>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <!-- END Column -->

            <!-- Column -->
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <div class="p-10">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                        <iframe src="" class="w-full aspect-video"></iframe>
                        <div class="flex px-6 pt-4">
                            <p class="text-gray-500"><i class="fa-solid fa-calendar text-orange-500 mr-2"></i>June 22,
                                2022</p>
                            <p class="text-gray-500 ml-4"><i class="fa-solid fa-film text-orange-500 mr-2"></i>Season
                                Anime</p>
                            <p class="text-gray-500 ml-4"><i class="fa-solid fa-film text-orange-500 mr-2"></i>13
                                episodes</p>
                        </div>
                        <div class="px-6 pt-4">
                            <div class="font-bold text-2xl mb-2">Lycoris recoil</div>
                        </div>
                        <div class="px-6 pt-4 pb-2 -mt-4 text-orange-500">
                            <a href="">
                                <p
                                    class="font-bold text-base tracking-tight transition transform hover:tracking-widest">
                                    Read More <i class="fa-solid fa-right-long text-base"></i></p>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <!-- END Column -->

            <!-- Column -->
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <div class="p-10">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                        <iframe src="" class="w-full aspect-video"></iframe>
                        <div class="flex px-6 pt-4">
                            <p class="text-gray-500"><i class="fa-solid fa-calendar text-orange-500 mr-2"></i>June 22,
                                2022</p>
                            <p class="text-gray-500 ml-4"><i class="fa-solid fa-film text-orange-500 mr-2"></i>Season
                                Anime</p>
                            <p class="text-gray-500 ml-4"><i class="fa-solid fa-film text-orange-500 mr-2"></i>13
                                episodes</p>
                        </div>
                        <div class="px-6 pt-4">
                            <div class="font-bold text-2xl mb-2">Lycoris recoil</div>
                        </div>
                        <div class="px-6 pt-4 pb-2 -mt-4 text-orange-500">
                            <a href="">
                                <p
                                    class="font-bold text-base tracking-tight transition transform hover:tracking-widest">
                                    Read More <i class="fa-solid fa-right-long text-base"></i></p>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <!-- END Column -->

            <!-- Column -->
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <div class="p-10">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                        <iframe src="" class="w-full aspect-video"></iframe>
                        <div class="flex px-6 pt-4">
                            <p class="text-gray-500"><i class="fa-solid fa-calendar text-orange-500 mr-2"></i>June 22,
                                2022</p>
                            <p class="text-gray-500 ml-4"><i class="fa-solid fa-film text-orange-500 mr-2"></i>Season
                                Anime</p>
                            <p class="text-gray-500 ml-4"><i class="fa-solid fa-film text-orange-500 mr-2"></i>13
                                episodes</p>
                        </div>
                        <div class="px-6 pt-4">
                            <div class="font-bold text-2xl mb-2">Lycoris recoil</div>
                        </div>
                        <div class="px-6 pt-4 pb-2 -mt-4 text-orange-500">
                            <a href="">
                                <p
                                    class="font-bold text-base tracking-tight transition transform hover:tracking-widest">
                                    Read More <i class="fa-solid fa-right-long text-base"></i></p>
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>

    <!-- CONTAINERS CARDS -->
    <div class="divide-y">
        <h1
            class="text-center mt-20 font-bold text-5xl text-decoration-line: underline decoration-indigo-200 underline-offset-8">
            Season Anime</h1>
    </div>

    <!-- Winter -->
    <div class="w-full bg-blue-500 py-1 mt-10 bg-opacity-30">

        <div class="container my-12 mx-auto px-4 md:px-12 rounded-xl">

            <div class="flex mt-6">
                <h1 class="text-left font-extrabold text-4xl mr-4">Winter</h1>
                <RouterLink
                    @click.prevent="seasonChange('Winter')"
                    to="/season/Winter"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 mr-2 mb-2 mt-1 dark:bg-blue-600 shadow-lg dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">See
                    All</RouterLink>
            </div>
            <div class="flex flex-wrap -mx-1 lg:-mx-4">
                <animeCard v-for="el in dataWinter" :key="el.id" :el="el"/>
            </div>
        </div>
    </div>

    <!-- Spring -->
    <div class="w-full bg-orange-500 py-1 mt-10 bg-opacity-30">

        <div class="container my-12 mx-auto px-4 md:px-12 rounded-xl">
            <div class="flex mt-6">
                <i class="fa-regular fa-cloud-drizzle text-3xl mr-1"></i>
                <h1 class="text-left font-extrabold text-4xl mr-4">Spring</h1>
                <RouterLink
                    @click.prevent="seasonChange('Spring')"
                    to="/season/Spring"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 mr-2 mb-2 mt-1 dark:bg-blue-600 shadow-lg dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">See
                    All</RouterLink>
            </div>
            <div class="flex flex-wrap -mx-1 lg:-mx-4">
                <animeCard v-for="el in dataSpring" :key="el.id" :el="el" />
            </div>
        </div>
    </div>

    <!-- SUMMER -->
    <div class="w-full bg-red-500 py-1 mt-10 bg-opacity-30">

        <div class="container my-12 mx-auto px-4 md:px-12 rounded-xl">
            <div class="flex mt-6">
                <h1 class="text-left font-extrabold text-4xl mr-4">Summer</h1>
                <RouterLink
                    @click.prevent="seasonChange('Summer')"
                    to="/season/Summer"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 mr-2 mb-2 mt-1 dark:bg-blue-600 shadow-lg dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">See
                    All</RouterLink>
            </div>
            <div class="flex flex-wrap -mx-1 lg:-mx-4">
                <animeCard v-for="el in dataSummer" :key="el.id" :el="el" />
            </div>
        </div>
    </div>

    <!-- FALL -->
    <div class="w-full bg-yellow-500 py-1 mt-10 bg-opacity-30">

        <div class="container my-12 mx-auto px-4 md:px-12 rounded-xl">
            <div class="flex mt-6">
                <h1 class="text-left font-extrabold text-4xl mr-4">Fall</h1>
                <RouterLink
                    @click.prevent="seasonChange('Fall')"
                    to="/season/Fall"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 mr-2 mb-2 mt-1 dark:bg-blue-600 shadow-lg dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">See
                    All</RouterLink>
            </div>
            <div class="flex flex-wrap -mx-1 lg:-mx-4">
                <animeCard v-for="el in dataFall" :key="el.id" :el="el" />
            </div>
        </div>
    </div>
    </div>
</template>