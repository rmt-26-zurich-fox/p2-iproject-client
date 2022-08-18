<script>
import Thead from '@/components/Thead.vue'
import Trow from '@/components/Trow.vue'
import { useBrandStore } from '@/stores/brandStore'
import { useProductStore } from '../stores/productStore'
import { mapActions, mapState } from 'pinia'

export default {
    components: {
        Thead,
        Trow
    },
    computed: {
        ...mapState(useBrandStore, ["brands", "theadBrand", "actionBrand"]),
        ...mapState(useProductStore, ["products", "theadProduct", "actionProduct"]),
        throwData() {
            const { fullPath } = this.$route
            if (fullPath === "/brands") {
                return this.brands
            } else if (fullPath === "/products") {
                return this.products
            }
        },
        theadData() {
            const { fullPath } = this.$route
            if (fullPath === "/brands") {
                return this.theadBrand
            } else if (fullPath === "/products") {
                return this.theadProduct
            }
        },
        actionData() {
            const { fullPath } = this.$route
            if (fullPath === "/brands") {
                return this.actionBrand.length
            } else if (fullPath === "/products") {
                return this.actionProduct
            }
        }
    },
    methods: {
        ...mapActions(useBrandStore, ["readAllBrand"]),
        ...mapActions(useProductStore, ["readAllProduct"])
    },
    created() {
        const { fullPath } = this.$route

        if (fullPath === "/brands") {
            this.readAllBrand()
        } else if (fullPath === "/products") {
            this.readAllProduct()
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