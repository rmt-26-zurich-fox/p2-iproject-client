<template>
  <div
    class="max-w-4xl bg-white rounded-lg border border-gray-200 shadow-md mb-20"
  >
    <div class="flex justify-center">
      <p class="mb-3 mt-5 font-bold text-gray-800 text-3xl">
        Ice Cream In A Bag
      </p>
    </div>
    <div class="p-5">
      <a href="" @click.prevent="this.$router.push({ path: '/recipe/2' })">
        <img
          src="https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/d2c14b8bbc624fe38be2d9f7bcf1c6c4.jpeg"
          alt=""
      /></a>

      <p class="mb-3 mt-5 font-normal text-gray-800 truncate">
        Homemade ice cream in under 10 minutes? This 3-ingredient ice cream
        comes together with the help of a little ice and rock salt. It’s a great
        activity for kids to join in too. Top with your favorite toppings and
        enjoy all summer long!
      </p>
      <a
        href=""
        @click.prevent="this.$router.push({ path: '/recipe/2' })"
        class="inline-flex float-right items-center my-5 py-2 px-3 text-sm font-medium text-center text-gray-800 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100"
      >
        Read Recipe
        <svg
          aria-hidden="true"
          class="ml-2 -mr-1 w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  </div>
</template>
