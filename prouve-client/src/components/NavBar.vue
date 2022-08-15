<template>
  <div class="top-0 z-50">
    <nav class="px-2 bg-white border-gray-200 border-gray-700 pb-8">
      <div class="flex justify-center text-6xl pt-8">
        <img class="w-80" src="../assets/logo moren.png" alt="" />
      </div>
      <div class="flex justify-end mb-10 mr-10">
        <a href="" @click.prevent="changePage('login')">
          <img
            class="w-6"
            src="https://img.icons8.com/external-those-icons-fill-those-icons/48/000000/external-User-users-those-icons-fill-those-icons-5.png"
          />
        </a>
        <a href="">
          <img
            class="w-6 ml-5"
            src="https://img.icons8.com/ios-glyphs/60/000000/shopping-cart--v1.png"
          />
        </a>
      </div>

      <div class="container flex flex-wrap justify-evenly items-center mx-auto">
        <a
          href=""
          @click.prevent="changePage('shop')"
          class="flex items-center"
        >
          <span
            class="self-center text-xl font-semibold whitespace-nowrap text-black"
            >SHOP</span
          >
        </a>
        <a
          href=""
          @click.prevent="changePage('recipe')"
          class="flex items-center"
        >
          <span
            class="self-center text-xl font-semibold whitespace-nowrap text-black"
            >RECIPE</span
          >
        </a>
        <a href="#" class="flex items-center">
          <span
            class="self-center text-xl font-semibold whitespace-nowrap text-black"
            >FORUM</span
          >
        </a>
        <!-- <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul
            class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white bg-gray-800 md:bg-gray-900 border-gray-700"
          >
            <li>
              <a
                class="block py-2 pr-4 pl-3 text-white font-bold bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:text-white bg-blue-600 md:bg-transparent"
                aria-current="page"
                >user</a
              >
            </li>
          </ul>
        </div> -->
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    changePage(page) {
      this.$router.push({ name: page });
    },
  },
};
</script>
