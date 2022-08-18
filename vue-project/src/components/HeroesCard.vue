<script>

import {RouterLink} from 'vue-router'
import { authorizationStore} from "../stores/authorizationStore";
import {mapState, mapActions} from 'pinia'


</script>

<template>
      <!-- HeroesCard -->
      <div class="group">
        <div class="relative">
          <div class="w-full">
            <img src="https://img.mobilelegends.com/group1/M00/00/B2/Cq2IxmAKtDOAe9QQAAIoQFvuZwA933.jpg"
              class="w-full h-full object-center object-cover opacity-70 group-hover:opacity-100 rounded-md" />
            <div class="absolute bottom-0 px-2 py-4 flex flex-col bg-gradient-to-t from-black w-full rounded-md">
              <p class="text-xl text-white uppercase inline-block align-start text-left pl-2 font-bold">Paquito</p>
              <p class="text-md text-white inline-block align-start text-left pl-2">Fighter</p>
            </div>
          </div>
        </div>

      </div>
</template>