<script>
export default {
    props: ["review"],
    methods: {
        backgroundStyles(review) {
            return {
                // any other styles you might need to add on as an example
                'background-image': `url(${review.imageUrl})`,
            }
        },
        toDetailPage(input) {
            const obj = {
                id: input
            }

        }
    }
}
</script>

<template>
    <section class="bg-white lg:py-7 lg:flex lg:justify-center">
        <div class="bg-gray-100 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
            <div class="lg:w-1/2">
                <div class="h-64 bg-cover lg:rounded-lg lg:h-full" :style="backgroundStyles(review)">
                </div>
            </div>

            <div class="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                <h2 class="text-2xl font-bold text-gray-800 md:text-3xl">{{ review.name }}</h2>
                <p class="mt-4 text-gray-600 truncate ...">{{ review.article }}</p>
                <p class="mt-4 text-gray-600 font-bold"> Category {{ review.Category.name }} </p>
                <div class="mt-8">
                    <a href="#"
                        class="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700"
                        @click.prevent="toDetailPage(movie.id)">Read More</a>
                </div>
            </div>
        </div>
    </section>
</template>