<script>
import { mapState } from 'pinia';
import { useCounterStore } from '@/stores/counter';

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
                        <a href="#">Brand List</a>
                    </li>
                    <li>
                        <a href="#">Add Brand</a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>