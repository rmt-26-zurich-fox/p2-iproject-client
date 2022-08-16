<template>
    <!--Card 1-->
    <div class="rounded overflow-hidden shadow-lg bg-white">
        <img class="aspect-square h-80 w-96" :src="movie.imgUrl">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ movie.title }}</div>
            <h3>{{ ratingRate }}</h3>
        </div>
        <div class="px-6 pt-4 pb-2">
            <div class="mb-2">
                <ButtonUsage nameButton="See Detail" @click="linkTodetail(movie.id)" />
            </div>
            <ButtonUsage v-if="this.$route.fullPath !== '/likeMovie'" nameButton="Add To My Like"
                @click.prevent="linkTolike(movie.id)" />
        </div>
    </div>
</template>
<script>
import ButtonUsage from '../components/ButtomUsage.vue'
export default {
    components: { ButtonUsage },
}
</script>