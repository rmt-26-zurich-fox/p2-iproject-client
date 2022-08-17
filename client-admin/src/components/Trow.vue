<script>
import { mapState, mapActions } from 'pinia'
import { useBrandStore } from '../stores/brandStore'
import { useProductStore } from '../stores/productStore'
import { RouterLink } from 'vue-router'

export default {
    props: ["trow"],
    computed: {
        ...mapState(useBrandStore, ["actionBrand"]),
        ...mapState(useProductStore, ["actionProduct"]),
        columnNames() {
            const { fullPath } = this.$route
            if (fullPath === '/brands') {
                return ["nameBrand", "logoBrand"]
            } else if (fullPath === '/products') {
                return ["nameProduct", "imageProduct"]
            }
        },
        actionData() {
            const { fullPath } = this.$route
            if (fullPath === "/brands") {
                return this.actionBrand
            } else if (fullPath === "/products") {
                return this.actionProduct
            }
        }
    },
    methods: {
        ...mapActions(useBrandStore, ["editBrand", "deleteBrand", "showBrand"]),
        handleEdit() {
            const { fullPath } = this.$route

            if (fullPath === "/brands") {
                this.editBrand(this.trow.id)
            }
        },
        handleDelete() {
            const { fullPath } = this.$route

            if (fullPath === "/brands") {
                this.deleteBrand(this.trow.id)
            }
        },
        handleShow() {
            const { fullPath } = this.$route

            if (fullPath === "/brands") {
                this.showBrand(this.trow.id)
            }
        }
    }
}
</script>
<template>
    <tr>
        <td>#</td>
        <td v-for="(td, idx) in columnNames" :key="idx">
            <p v-if="'logoBrand' === td">
                <img :src="trow.logoBrand" :alt="trow.nameBrand" style="width: 150px">
            </p>
            <p v-else-if="'imageProduct' === td">
                <img :src="trow.imageProduct" :alt="trow.nameProduct" style="width: 150px">
            </p>
            <p v-else>
                {{ trow[td] }}
            </p>
        </td>
        <td v-if="actionData.length > 0">
            <span v-if="actionData.includes('show')">
                <a @click.prevent="handleShow" class="btn btn-outline-info btn-sm"><i class="fa-solid fa-eye"></i></a>
            </span>
            <span v-if="actionData.includes('edit')" class="m-2">
                <a @click.prevent="handleEdit" class="btn btn-outline-primary btn-sm"><i class="fas fa-edit"></i></a>
            </span>
            <span v-if="actionData.includes('delete')">
                <a @click.prevent="handleDelete" class="btn btn-outline-danger btn-sm"><i class="fa fa-trash"></i></a>
            </span>
        </td>
    </tr>
</template>