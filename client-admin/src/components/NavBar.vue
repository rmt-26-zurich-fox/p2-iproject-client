<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '@/stores/counter';
import { useAuthStore } from '@/stores/authStore';

export default {
    computed: {
        ...mapState(useCounterStore, ["toogle"]),
    },
    methods: {
        ...mapActions(useCounterStore, ["clickSidebar"]),
        ...mapActions(useAuthStore, ["logout"]),
        handleSidebar() {
            this.clickSidebar()
        },
        handleLogout() {
            this.logout()
        }
    }
}
</script>
<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow" style="padding: 15px 25px;">
        <div class="container-fluid">
            <button type="button" id="sidebarCollapse" class="btn" @click.prevent="handleSidebar">
                <i class="fas fa-align-left"></i>
            </button>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <div class="dropdown navbar-nav ms-auto mb-2 mb-lg-0">
                    <div class="d-flex">
                        <div class="text-end me-3">
                            <h6 id="username" class="mb-0 text-gray-600">
                            </h6>
                            <p class="mb-0 text-sm text-gray-600" id="role">
                            </p>
                        </div>
                    </div>
                    <a href="" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa-solid fa-2x fa-circle-user mt-1"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                        <li>
                            <a class="dropdown-item" @click.prevent="handleLogout">
                                <i class="icon-mid bi bi-box-arrow-left me-2"></i>Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>