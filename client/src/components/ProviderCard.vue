<script>
import { mapActions, mapState } from "pinia";
import { useOtoStore } from "../stores/oto";

export default {
  computed: {
    ...mapState(useOtoStore, ["providerList"]),
  },
  methods: {
    ...mapActions(useOtoStore, ["fetchDataProvider", "fetchDataById"]),
  },
  components: {},
  created() {
    this.fetchDataProvider();
  },
};
</script>

<template>
  <!-- {{providerList.service}} -->
  <div
    class="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 p-10"
  >
    <div class="group" v-for="data in providerList.service" :key="data.id">
      <div class="relative">
        <div class="w-full">
          <img
            :src="
              !data.imageUrl
                ? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                : data.imageUrl
            "
            class="w-full h-full object-center object-cover opacity-70 group-hover:opacity-100 rounded-md"
          />
          <div
            class="absolute bottom-0 px-2 py-4 flex flex-col bg-gradient-to-t from-black w-full rounded-md"
          >
            <p
              class="text-xl text-white uppercase inline-block align-start text-left pl-2 font-bold"
            >
              {{ data.email }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center h-16">
        <button
          @click="fetchDataById(data.id)"
          class="px-3 py-2 text-gray-900 bg-gray-100 rounded-sm focus:outline-none focus:ring focus:ring-gray-500 uppercase tracking-widest font-bold"
        >
          See detail
        </button>
      </div>
    </div>
  </div>
</template>
