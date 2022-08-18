<template>
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-3 gap-5">
        <CardReuse v-for="bookmark in listbookmarks" :key="bookmark.id" :bookmark="bookmark" />
    </div>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import CardReuse from '../components/CardReuse.vue';
import { useCounterStore } from '../stores/counter';
export default {
    components: {
        CardReuse
    },
    computed: {
        ...mapState(useCounterStore, ['listbookmarks'])
    },
    methods: {
        ...mapActions(useCounterStore, ['fetchMybookmark'])
    },
    async created() {
        await this.fetchMybookmark()
    }
}
</script>