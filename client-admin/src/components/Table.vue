<script>
import Thead from '@/components/Thead.vue'
import Trow from '@/components/Trow.vue'
import { useBrandStore } from '@/stores/brandStore'
import { mapActions, mapState } from 'pinia'

export default {
    components: {
        Thead,
        Trow
    },
    computed: {
        ...mapState(useBrandStore, ["data", "thead"])
    },
    methods: {
        ...mapActions(useBrandStore, ["readAllBrand"])
    },
    created() {
        const { fullPath } = this.$route

        if (fullPath === "/brands") {
            this.readAllBrand()
        }
    }
}
</script>
<template>
    <div class="table-responsive mt-4">
        <table class="table table-hover">
            <thead>
                <th>No</th>
                <Thead v-for="(th, idx) in thead" :key="idx" :thead="th" />
            </thead>
            <tbody>
                <Trow v-for="(tr, idx) in data" :key="idx" :trow="tr" />
            </tbody>
        </table>
    </div>
</template>