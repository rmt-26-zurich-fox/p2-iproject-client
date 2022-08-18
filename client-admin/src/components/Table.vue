<script>
import Thead from '@/components/Thead.vue'
import Trow from '@/components/Trow.vue'
import { useBrandStore } from '@/stores/brandStore'
import { useProductStore } from '@/stores/productStore'
import { useUserStore } from '@/stores/userStore'
import { mapActions, mapState } from 'pinia'

export default {
    components: {
        Thead,
        Trow
    },
    computed: {
        ...mapState(useBrandStore, ["brands", "theadBrand", "actionBrand"]),
        ...mapState(useProductStore, ["products", "theadProduct", "actionProduct"]),
        ...mapState(useUserStore, ["users", "theadUser", "actionUser"]),
        throwData() {
            const { fullPath } = this.$route
            if (fullPath === "/brands") {
                return this.brands
            } else if (fullPath === "/products") {
                return this.products
            } else if (fullPath === "/users") {
                return this.users
            }
        },
        theadData() {
            const { fullPath } = this.$route
            if (fullPath === "/brands") {
                return this.theadBrand
            } else if (fullPath === "/products") {
                return this.theadProduct
            } else if (fullPath === "/users") {
                return this.theadUser
            }
        },
        actionData() {
            const { fullPath } = this.$route
            if (fullPath === "/brands") {
                return this.actionBrand.length
            } else if (fullPath === "/products") {
                return this.actionProduct.length
            } else if (fullPath === "/users") {
                return this.actionUser.length
            }
        }
    },
    methods: {
        ...mapActions(useBrandStore, ["readAllBrand"]),
        ...mapActions(useProductStore, ["readAllProduct"]),
        ...mapActions(useUserStore, ["readAllUser"])
    },
    created() {
        const { fullPath } = this.$route

        if (fullPath === "/brands") {
            this.readAllBrand()
        } else if (fullPath === "/products") {
            this.readAllProduct()
        } else if (fullPath === "/users") {
            this.readAllUser()
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