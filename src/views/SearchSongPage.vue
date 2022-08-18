<script>
import SongsList from "../components/SongsList.vue";
import LoadingComponent from "../components/LoadingComponent.vue";
import { useCounterStore } from "../stores/counter";
import { mapActions, mapState, mapWritableState } from "pinia";

export default {
    data() {
        return {
            search: ""
        }
    },
    components: {
        SongsList,
        LoadingComponent
    },
    methods: {
        ...mapActions(useCounterStore, ["handleSearchArtist"]),
        async searchArtist() {
            await this.handleSearchArtist(this.search);
        }
    },
    computed: {
        ...mapState(useCounterStore, ["isLoading", "songList"]),
        ...mapWritableState(useCounterStore, ["songList"])
    },
    created() {
        if (this.$route.query.search) {
            this.handleSearchArtist(this.$route.query.search);
        } else {
            this.songList = [];
        }
    }
}
</script>

<template>

    <form @submit.prevent="searchArtist">
        <div class="relative mt-16">
            <input type="search" id="default-search"
                class="block p-4 pl-10 text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 w-2/3 mx-auto"
                placeholder="Search songs by artist.." required v-model="search">
        </div>
    </form>

    <LoadingComponent v-if="isLoading" />

    <section v-else class="container p-6 mx-auto bg-gray-600 mt-20 rounded-lg mb-20">
        <h2 class="text-xl font-medium text-gray-800 capitalize dark:text-white md:text-2xl mb-5">Songs List</h2>

        <div class="flex items-center justify-center">
            <div class="grid grid-cols-4 gap-4">
                <SongsList v-for="(song, idx) in songList" :key="idx" :song="song"/>
            </div>
        </div>
    </section>
</template>

