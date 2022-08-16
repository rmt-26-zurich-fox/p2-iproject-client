<template>
    <div class="d-flex justify-content-center mt-3">
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" @click.prevent="category('-')"><i class="fa-solid fa-arrow-left-long"></i> Prev</a>
                </li>
                <li class="page-item"><a class="page-link" @click.prevent="category('+')">Next <i
                            class="fa-solid fa-arrow-right-long"></i></a></li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    methods: {
        category(value){
            this.$emit('category', value)
        }
    }
}
</script>