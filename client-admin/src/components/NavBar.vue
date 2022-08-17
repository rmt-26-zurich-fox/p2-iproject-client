<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '@/stores/counter';

export default {
    computed: {
        ...mapState(useCounterStore, ["toogle"])
    },
    methods: {
        ...mapActions(useCounterStore, ["clickSidebar"]),
        handleSidebar() {
            this.clickSidebar()
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
                            <h6 id="username" class="mb-0 text-gray-600">Salwa
                            </h6>
                            <p class="mb-0 text-sm text-gray-600" id="role">Admin
                            </p>
                        </div>
                    </div>
                    <a href="" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa-solid fa-2x fa-circle-user mt-1"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                        <li>
                            <h6 class="dropdown-header">Hello, John!</h6>
                        </li>
                        <li>
                            <a class="dropdown-item" href=""><i class="icon-mid bi bi-person me-2"></i> My
                                Profile</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href=""><i class="icon-mid bi bi-gear me-2"></i>
                                Settings</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href=""><i class="icon-mid bi bi-wallet me-2"></i>
                                Wallet</a>
                        </li>
                        <li>
                            <hr class="dropdown-divider" />
                        </li>
                        <li>
                            <a class="dropdown-item" href="" id="logout">
                                <i class="icon-mid bi bi-box-arrow-left me-2"></i>Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>