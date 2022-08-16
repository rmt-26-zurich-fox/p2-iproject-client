<template>
    <section>
        <div class="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8 rounded-2xl bg-black bg-opacity-60">
                <div>
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-amber-500">Search Here</h2>
                    <p class="mt-2 text-center text-sm text-gray-600">
                    </p>
                </div>
                <form class="mt-8 space-y-6" @submit.prevent="handleRegister">
                    <input type="hidden" name="remember" value="true">
                    <div class="rounded-md shadow-sm -space-y-px text-center">
                        <div>
                            <label for="City" class="sr-only">City</label>
                            <input id="City" name="City" type="text"
                                class="appearance-none rounded-t-lg relative px-24 py-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm text-center"
                                placeholder="Ex: Batam" v-model="Customer.username">
                        </div>
                        <div>
                            <label for="State" class="sr-only">State</label>
                            <input id="State" name="text" type="text" autocomplete="State Name"
                                class="appearance-none relative px-24 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none focus:ring-indigo-700 focus:border-indigo-700 focus:z-10 sm:text-sm text-center"
                                placeholder="Ex: Riau Islands" v-model="Customer.email">
                        </div>
                        <div>
                            <label for="Country" class="sr-only">Country</label>
                            <input id="Country" name="Country" type="text" autocomplete="current-Country"
                                class="appearance-none relative px-24 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm text-center"
                                placeholder="Ex: Indonesia" v-model="Customer.password">
                        </div>
                    </div>

                    <div class="flex item-center justify-center gap-2 pb-2">
                        <ButtonUsage nameButton="Submit" />
                        <RouterLink to="/login">
                            <ButtonUsage nameButton="Cancel" />
                        </RouterLink>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>
<script>
import ButtonUsage from '../components/ButtomUsage.vue'
export default {
    components: { ButtonUsage },
}
</script>

