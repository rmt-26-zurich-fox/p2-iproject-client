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
        ...mapState(useBrandStore, ["brands", "theadBrand", "actionBrand"]),
        throwData() {
            const { fullPath } = this.$route
            if (fullPath === "/brands") {
                return this.brands
            }
        },
        theadData() {
            const { fullPath } = this.$route
            if (fullPath === "/brands") {
                return this.theadBrand
            }
        },
        actionData() {
            const { fullPath } = this.$route
            if (fullPath === "/brands") {
                return this.actionBrand.length
            }
        }
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
                <Thead v-for="(th, idx) in theadData" :key="idx" :thead="th" />
                <th v-if="actionData > 0">Action</th>
            </thead>
            <tbody>
                <Trow v-for="(tr, idx) in throwData" :key="idx" :trow="tr" />
            </tbody>
        </table>
    </div>
</template>