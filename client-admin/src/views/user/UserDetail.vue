<script>
import { mapState } from 'pinia'
import { useUserStore } from '@/stores/userStore'
import { RouterLink } from 'vue-router'

export default {
    computed: {
        ...mapState(useUserStore, ["userById"])
    }
}
</script>
<template>
    <div id="content" class="overflow-auto">
        <div class="card shadow-sm" style="border-radius: 10px; background-color: white;">
            <div class="card-body p-5">
                <h3 class="mb-4">User Detail</h3>
                <p>User Detail</p>

                <div class="row mt-5">
                    <div class="col">
                        <img v-if="!userById.Profile.imageUser" src="../../assets/noImage.png" alt="" class="mb-5">
                        <a v-else :href="userById.Profile.imageUser" target="_blank">
                            <img :src="userById.Profile.imageUser" :alt="userById.nameBrand" style="height: 100px"
                                class="mb-5" />
                        </a>
                        <br>
                        <small>click image to view</small>
                    </div>
                    <div class="col">
                        <div>
                            <h6><b>Username</b></h6>
                            <p>{{ userById.username }}</p>
                        </div>
                        <div>
                            <h6><b>E-mail Address</b></h6>
                            <p>{{ userById.email }}</p>
                        </div>
                        <div>
                            <h6><b>Role</b></h6>
                            <p>{{ userById.role }}</p>
                        </div>
                        <div>
                            <h6><b>Public ID Image Profile</b></h6>
                            <p v-if="userById.Profile.publicIdImage">{{ userById.Profile.publicIdImage }}</p>
                            <p v-else>Not available</p>
                        </div>
                        <div>
                            <h6><b>URL Image Profile</b></h6>
                            <p v-if="!userById.Profile.imageUser">Not avaiable</p>
                            <a v-else :href="userById.Profile.imageUser" target="_blank">{{ userById.Profile.imageUser
                            }}</a>
                        </div>
                        <div>
                            <h6><b>Full Name</b></h6>
                            <p v-if="!userById.Profile.fullName">-</p>
                            <p v-else>{{ userById.Profile.fullName }}</p>
                        </div>
                        <div>
                            <h6><b>Gender</b></h6>
                            <p v-if="!userById.Profile.gender">-</p>
                            <p v-else>{{ userById.Profile.gender }}</p>
                        </div>
                        <div>
                            <h6><b>Date Of Birth</b></h6>
                            <p v-if="!userById.Profile.dateOfBirth">-</p>
                            <p v-else>{{ userById.Profile.dateOfBirth }}</p>
                        </div>
                        <div>
                            <h6><b>Phone Number</b></h6>
                            <p v-if="!userById.Profile.phoneNumber">-</p>
                            <p v-else>{{ userById.Profile.phoneNumber }}</p>
                        </div>
                    </div>
                </div>

                <RouterLink to="/users" class="btn btn-outline-primary float-start btn-sm mt-5">Back</RouterLink>

            </div>
        </div>
    </div>
</template>