<template>
  <div class="bg-white">
    <!-- <INI HEADERS> -->
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div
        class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8"
      >
        <!-- INI CARDNYA -->
        <div class="max-w-sm bg-white rounded-lg shadow-md">
          <div class="px-5 pb-0 mb-0 flex justify-center">
            <h5 class="text-l font-semibold tracking-tight text-gray-900">
              Dessert
            </h5>
          </div>
          <a href="" @click.prevent="changePage('dessert')">
            <div class="container2">
              <div class="vertical-center">
                <img
                  class="p-8 rounded-t-lg"
                  src="https://img.taste.com.au/xi2t8DpL/taste/2016/11/lemon-panna-cotta-with-vodka-blueberry-syrup-92005-1.jpeg"
                  alt="product image"
                />
              </div>
            </div>
          </a>
        </div>
        <div class="max-w-sm bg-white rounded-lg shadow-md">
          <div class="px-5 pb-0 mb-0 flex justify-center">
            <a href="">
              <h5 class="text-l font-semibold tracking-tight text-gray-900">
                Dessert
              </h5>
            </a>
          </div>
          <a href="">
            <div class="container2">
              <div class="vertical-center">
                <img
                  class="p-8 rounded-t-lg"
                  src="https://img.taste.com.au/xi2t8DpL/taste/2016/11/lemon-panna-cotta-with-vodka-blueberry-syrup-92005-1.jpeg"
                  alt="product image"
                />
              </div>
            </div>
          </a>
        </div>
        <div class="max-w-sm bg-white rounded-lg shadow-md">
          <div class="px-5 pb-0 mb-0 flex justify-center">
            <a href="">
              <h5 class="text-l font-semibold tracking-tight text-gray-900">
                Dessert
              </h5>
            </a>
          </div>
          <a href="">
            <div class="container2">
              <div class="vertical-center">
                <img
                  class="p-8 rounded-t-lg"
                  src="https://img.taste.com.au/xi2t8DpL/taste/2016/11/lemon-panna-cotta-with-vodka-blueberry-syrup-92005-1.jpeg"
                  alt="product image"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <!-- <pagination / loadmore> -->
  </div>
</template>
<script>
export default {
  methods: {
    changePage(params) {
      this.$router.push({ path: `/recipe/${params}` });
    },
  },
};
</script>

<style>
.container2 {
  height: 250px;
  position: relative;
}

.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>
