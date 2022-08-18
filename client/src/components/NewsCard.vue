<template>
    <div class="rounded overflow-hidden shadow-lg bg-white">
        <img class="aspect-square h-80 w-full" :src="news.urlToImage">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ news.title }}</div>
            <div class="text-justify">
                <h3 class="font-semibold">Media: {{ news.source.name }} Tanggal:{{ convertDateTime }}</h3>
                <p>{{ news.description }} read more </p>
                <a :href="news.url" class="text-blue-600 text-underline-offset-3">click this link</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['news'],
    computed: {
        convertDateTime() {
            const datetime = (new Date(this.news.publishedAt)).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ")
            return datetime
        }
    }
}
</script>