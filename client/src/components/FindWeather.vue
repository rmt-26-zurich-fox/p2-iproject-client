<template>
    <section>
        <div class="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8 rounded-2xl bg-black bg-opacity-60">
                <div>
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-amber-500">Search Here</h2>
                    <p class="mt-2 text-center text-sm text-gray-600">
                    </p>
                </div>
                <form class="mt-8 space-y-6" @submit.prevent="handleSearch">
                    <input type="hidden" name="remember" value="true">
                    <div class="rounded-md shadow-sm -space-y-px text-center">
                        <div>
                            <label for="City" class="sr-only">City</label>
                            <input id="City" name="City" type="text"
                                class="appearance-none rounded-t-lg relative px-24 py-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm text-center"
                                placeholder="Ex: Batam" v-model="city">
                        </div>
                        <div>
                            <label for="StateName" class="sr-only">State Name</label>
                            <select name="StateName" id="StateName"
                                class="appearance-none rounded-none relative pl-32 pr-24 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-2 rounded-b-lg"
                                v-model="state">
                                <option class="text-justify" value="">State List</option>
                                <option v-for="state in liststate" :key="state.id" class="text-justify"
                                    :value="state.state">
                                    {{ state.state }}</option>
                            </select>
                        </div>
                    </div>

                    <div class="flex item-center justify-center gap-2 pb-2">
                        <ButtonUsage nameButton="Submit" />
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import ButtonUsage from '../components/ButtomUsage.vue'
import { useCounterStore } from '../stores/counter';
export default {
    components: { ButtonUsage },
    computed: {
        ...mapState(useCounterStore, ['liststate'])
    },
    methods: {
        ...mapActions(useCounterStore, ['fetchState', 'fetchWeather']),
        handleSearch() {
            let obj = {
                city: this.city,
                state: this.state,
                country: "indonesia",
                key: "adff6230-bca9-4190-972a-219e13fb5087"
            }
            this.fetchWeather(obj)
        }
    },
    async created() {
        await this.fetchState()
    },
    data() {
        return {
            city: "",
            state: ""
        }
    }
}
</script>

