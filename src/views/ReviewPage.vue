<script>
import { useCounterStore } from "../stores/counter";
import { mapActions, mapState } from "pinia"
import LoadingComponent from "../components/LoadingComponent.vue";

// // Discus
// var disqus_config = function () {
//     this.page.url = this.$route.fullPath;
//     this.page.identifier = `/reviews/${this.route.params.id}`;
//     this.page.title = 'review-page';
// };

// (function () {  // REQUIRED CONFIGURATION VARIABLE: EDIT THE SHORTNAME BELOW
//     var d = document, s = d.createElement('script');

//     s.src = 'audio-id';  // IMPORTANT: Replace EXAMPLE with your forum shortname!

//     s.setAttribute('data-timestamp', +new Date());
//     (d.head || d.body).appendChild(s);
// })();

export default {
    methods: {
        ...mapActions(useCounterStore, ["fetchDataReview"]),
        images(reviews) {
            const imgUrl = reviews[0].imageUrl.slice(7);
            return `http://localhost:3000/images/${imgUrl}`;
        }
    },
    computed: {
        ...mapState(useCounterStore, ["reviews", "isLoading"])
    },
    async created() {
        if (this.$route.params) {
            const obj = {
                id: +this.$route.params.id
            }
            const response = await this.fetchDataReview(obj);
            if (response != true) {
                this.$router.push("/404")
            }
        }
    },
    components: {
        LoadingComponent
    }
}
</script>

<template>

    <LoadingComponent v-if="isLoading"/>

    <div v-else class="bg-white py-6 sm:py-8 lg:py-12 mt-5">
        <div class="max-w-screen-md px-4 md:px-8 mx-auto">

            <div class="bg-gray-100 overflow-hidden rounded-lg shadow-lg relative mb-6 md:mb-8">
                <img :src="images(reviews)" loading="lazy" alt="Photo"
                    class="w-full h-full object-cover object-center" />
            </div>

            <h1 class="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6"> {{ reviews[0].name }}
            </h1>

            <p class="text-gray-500 sm:text-lg mb-6 md:mb-8 antialiased">
                {{ reviews[0].article }}
            </p>

            <h2 class="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4 mt-10">About Me</h2>



            <section class="bg-white dark:bg-gray-800">
                <div class="container px-6 py-8 mx-auto">
                    <div class="items-center lg:flex">
                        <div class="lg:w-1/2">
                            <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Who I am</h2>

                            <p class="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
                                Halo saya Ghozi, lulusan salah satu Univ Swasta di Depok yang saat ini sedang mengikuti
                                bootcamp Hacktiv8.
                            </p>

                            <div class="flex items-center mt-6 -mx-2">

                                <a class="mx-2" href="https://www.linkedin.com/in/ghozi-f-b62772b6/"
                                    aria-label="Linkden" target="_blank">
                                    <svg class="w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z" />
                                    </svg>
                                </a>

                                <a class="mx-2" href="https://github.com/ghozifa" aria-label="Github" target="_blank">
                                    <svg class="w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div class="mt-8 lg:mt-0 lg:w-1/2">
                            <div class="flex items-center justify-center lg:justify-end">
                                <div class="max-w-lg">
                                    <img class="object-cover object-center w-full h-64 rounded-md shadow"
                                        src="../assets/1.jpeg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <!-- <Disqus shortname="audio-id" :identifier="this.$route.fullPath" /> -->
    </div>
</template>