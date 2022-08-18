<script>
import { mapActions, mapState } from 'pinia'
import { useUserStore } from '../../stores/userStore'
import { RouterLink } from 'vue-router'

export default {
    data() {
        return {
            dataUser: {
                username: '',
                email: '',
                password: '',
                role: '0'
            }
        }
    },
    watch: {
        "$route.fullPath"(value) {
            if (value === "/users/create") {
                this.dataUser = {
                    username: '',
                    email: '',
                    password: '',
                    role: '0'
                }
            }
        }
    },
    computed: {
        ...mapState(useUserStore, ["userById"])
    },
    methods: {
        ...mapActions(useUserStore, ["addUser", "updateUser"]),
        postUser() {
            if (this.userById.username) {
                this.updateUser(this.userById.id, this.dataUser)
            } else {
                this.addUser(this.dataUser)
            }
        }
    },
    created() {
        if (this.userById.username) {
            this.dataUser.username = this.userById.username
            this.dataUser.email = this.userById.email
            this.dataUser.password = this.userById.password
            this.dataUser.role = this.userById.role
        }
    }
}
</script>
<template>
    <div id="content" class="overflow-auto">
        <div class="card shadow-sm" style="border-radius: 10px; background-color: white;">
            <div class="card-body p-5">
                <h3 class="mb-4">Form User</h3>
                <p>Form User</p>
                <form @submit.prevent="postUser" autocomplete="off" class="mt-4">
                    <div class="form-group mb-3">
                        <label for="username">Username</label>
                        <input type="text" id="username" v-model="dataUser.username" class="form-control mt-2">
                    </div>
                    <div class="form-group mb-3">
                        <label for="email">E-mail Address</label>
                        <input type="email" id="email" v-model="dataUser.email" class="form-control mt-2">
                    </div>
                    <div class="form-group mb-3">
                        <label for="password">Password</label>
                        <input type="text" id="password" v-model="dataUser.password" class="form-control mt-2">
                        <small v-if="userById.username">leave it blank if you don't want to change the
                            password</small>
                    </div>
                    <div class="form-group mb-3">
                        <label for="role">Role</label>
                        <select id="role" v-model="dataUser.role" class="form-control mt-2">
                            <option value="0">--- Select One ---</option>
                            <option value="Admin">Admin</option>
                            <option value="Customer">Customer</option>
                        </select>
                    </div>

                    <div class="form-group mt-4">
                        <RouterLink to="/users" class="btn button-pink-outline float-start">Cancel</RouterLink>
                        <button type="submit" class="btn button-pink float-end">Submit User</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>