<script>
import { useCounterStore } from '../stores/counter';
import { mapActions } from 'pinia';

export default {
    props: ["page"],
    methods: {
        ...mapActions(useCounterStore, ["fetchDataReview"]),
       async toPage(input) {
            const obj = {
                page: input
            }
            const response = await this.fetchDataReview(obj);
            if (response) this.$router.push({ path: '/', query: { page: input }})
        }   
    }
}
</script>

<template>
    <button
        class="items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-gray-200 rounded-md sm:flex  hover:bg-blue-600  hover:text-white dark:hover:text-gray-200" @click.prevent="toPage(page)">
        {{ page }}
    </button>
</template>