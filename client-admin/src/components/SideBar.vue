<script>
import { mapState } from 'pinia';
import { useCounterStore } from '@/stores/counter';
import { RouterLink } from 'vue-router';

export default {
    computed: {
        ...mapState(useCounterStore, ["toogle"])
    },
}
</script>
<template>
    <nav id="sidebar" v-if="toogle">
        <div class="sidebar-header text-center shadow p-3">
            <h3 class="m-0">Beauty8</h3>
        </div>

        <ul class="list-unstyled components pt-3">
            <li>
                <a href=""><i class="fa-solid fa-xl fa-table-columns"></i> Dashboard</a>
            </li>
            <li>
                <a data-bs-toggle="collapse" href="#homeSubmenu" role="button" aria-expanded="false"
                    aria-controls="homeSubmenu">
                    <i class="fa-solid fa-xl fa-film"></i> Brands <i class="fa-solid fa-chevron-down"
                        style="margin-left: 75px;"></i>
                </a>
                <ul class="collapse list-unstyled" id="homeSubmenu" style="background-color: white; padding: 10px;">
                    <li>
                        <RouterLink to="/brands">Brand List</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/brands/create">Add Brand</RouterLink>
                    </li>
                </ul>
            </li>
            <li>
                <a data-bs-toggle="collapse" href="#productSubmenu" role="button" aria-expanded="false"
                    aria-controls="productSubmenu">
                    <i class="fa-solid fa-xl fa-list-alt"></i> Products <i class="fa-solid fa-chevron-down"
                        style="margin-left: 55px;"></i>
                </a>
                <ul class="collapse list-unstyled" id="productSubmenu" style="background-color: white; padding: 10px;">
                    <li>
                        <RouterLink to="/products">product List</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/products/create">Add Product</RouterLink>
                    </li>
                </ul>
            </li>
            <li>
                <a data-bs-toggle="collapse" href="#userSubmenu" role="button" aria-expanded="false"
                    aria-controls="userSubmenu">
                    <i class="fa-solid fa-xl fa-users"></i> Users <i class="fa-solid fa-chevron-down"
                        style="margin-left: 80px;"></i>
                </a>
                <ul class="collapse list-unstyled" id="userSubmenu" style="background-color: white; padding: 10px;">
                    <li>
                        <RouterLink to="/users">User List</RouterLink>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>