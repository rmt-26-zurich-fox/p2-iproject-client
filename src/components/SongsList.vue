<script>
export default {
    props: ["song"]
}
</script>

<template>
    <div class="w-full max-w-xs text-center">
        <img class="object-cover object-center w-full h-50 mx-auto rounded-lg"
            :src="song.result.header_image_url"
            alt="avatar" />
            
        <div class="mt-2">
            <h3 class="text-lg font-medium text-gray-200">{{ song.result.title }}</h3>
            <span class="mt-1 font-medium text-gray-300">{{ song.result.artist_names }}</span>
        </div>
    </div>
</template>