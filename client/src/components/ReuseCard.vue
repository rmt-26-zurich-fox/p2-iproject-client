<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
  computed: {
    ...mapState(useCounterStore, ['heroData'])
  },
  methods:{
    ...mapActions(useCounterStore, ['processChooseHero'])
  },
  components: {},
};
</script>

<template>
<div class="group" v-for="data in heroData" :key="data.id">
        <div class="relative">
          <div class="w-full">
            <img :src="data.imageUrl"
              class="w-full h-full object-center object-cover opacity-70 group-hover:opacity-100 rounded-md" />
            <div class="absolute bottom-0 px-2 py-4 flex flex-col bg-gradient-to-t from-black w-full rounded-md">
              <p class="text-xl text-white uppercase inline-block align-start text-left pl-2 font-bold">{{data.name}}</p>
              <p class="text-md text-white inline-block align-start text-left pl-2">{{data.type}}</p>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center h-16">
          <button
          @click="processChooseHero(data.id)"
            class="px-3 py-2 text-gray-900 bg-gray-100 rounded-sm focus:outline-none focus:ring focus:ring-gray-500 uppercase tracking-widest font-bold">Choose
            Hero</button>
        </div>
      </div>
</template>
