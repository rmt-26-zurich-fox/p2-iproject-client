<script>

import {RouterLink} from 'vue-router'
import { authorizationStore} from "../stores/authorizationStore";
import {mapState, mapActions} from 'pinia'
import DescriptionRow from './DescriptionRow.vue';


</script>

<template>
      <!-- HeroesCard -->
      <div class="group">
        <div class="relative">
          <div class="w-full">
            <img src="https://images.metmuseum.org/CRDImages/ad/web-large/L.2009.22.55.jpg"
              class="w-full h-full object-center object-cover opacity-70 group-hover:opacity-100 rounded-md" />
            <div class="absolute bottom-0 px-2 py-4 flex flex-col bg-gradient-to-t from-black w-full rounded-md">
              <p class="text-xl text-white uppercase inline-block align-start text-left pl-2 font-bold">A Glass</p>
              <p class="text-md text-white inline-block align-start text-left pl-2">Painter's name</p>
            </div>
            <DescriptionRow />
          </div>
        </div>

      </div>
</template>