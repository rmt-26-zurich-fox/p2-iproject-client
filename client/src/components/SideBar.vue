<script>
import { mapActions, mapState } from "pinia";
import { useOtoStore } from "../stores/oto";

export default {
  computed: {
    ...mapState(useOtoStore, ["user", "request"]),
  },
  methods: {
    ...mapActions(useOtoStore, ["processLogout"]),
  },
};
</script>

<template>
  <div
    class="flex-col w-64 h-screen px-4 py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600"
  >
    <h2 class="text-3xl font-semibold text-gray-800 dark:text-white">
      OTOHELPER
    </h2>
    <div class="flex items-center px-4 -mx-2 mt-6">
      <img
        class="object-cover mx-2 rounded-full h-9 w-9"
        :src="
          !user.imageUrl
            ? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
            : user.imageUrl
        "
        alt="avatar"
      />
      <div>
        <h4
          class="mx-2 font-medium text-gray-800 dark:text-gray-200 hover:underline"
        >
          {{ user.email.split("@")[0] }}
        </h4>
        <h4
          class="mx-2 font-light text-gray-800 dark:text-gray-200 hover:underline"
        >
          {{ user.role }}
        </h4>
      </div>
    </div>
    <div class="flex flex-col justify-between flex-1 mt-6">
      <nav>
        <a
          @click="$router.push('/')"
          class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
          href="#"
        >
          <svg
            class="w-8 h-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span class="mx-4 font-medium">Service Provider</span>
        </a>

        <a
          @click="$router.push('/orderlist')"
          class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
          href="#"
        >
          <img
            src="https://cdn.icon-icons.com/icons2/1760/PNG/512/4105931-add-to-cart-buy-cart-sell-shop-shopping-cart_113919.png"
            class="invert"
            width="18"
          />

          <span class="mx-4 font-medium">Cart</span>
          <span
            :hidden="request"
            class="top-0 left-7 absolute w-3.5 h-3.5 bg-orange-700 border-2 border-white dark:border-gray-800 rounded-full"
          ></span>
        </a>
        <hr class="my-6 border-gray-200 dark:border-gray-600" />
        <a
          class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
          href="#"
          @click="processLogout()"
        >
          <img
            src="https://cdn.icon-icons.com/icons2/2518/PNG/512/logout_icon_151219.png"
            alt=""
            class="invert"
            width="22"
          />
          <span class="mx-4 font-medium">Logout</span>
        </a>
      </nav>
    </div>
  </div>
</template>
