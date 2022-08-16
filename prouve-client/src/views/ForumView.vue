<template>
  <div class="flex justify-center mt-10">
    <div
      class="block p-6 w-9/12 bg-white rounded-lg border border-gray-200 shadow-md h-fit"
    >
      <div class="flex justify-start">
        <div class="bg-white rounded-lg shadow-md mr-10 h-fit">
          <div class="container3 flex justify-center">
            <div class="vertical-center3">
              <img
                class="rounded-t-lg"
                src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/48/000000/external-user-social-media-interface-anggara-basic-outline-anggara-putra.png"
                alt="product image"
              />
            </div>
          </div>
        </div>
        <div class="w-full">
          <a href="" @click.prevent="this.$router.push({ path: '/forum/1' })">
            <p class="text-2xl font-semibold text-gray-800 mt-5">
              200 person catering job, portion advice needed
            </p>
          </a>
          <div class="mt-10">
            <span class="text-base text-gray-800"> User </span>
            <span class="text-base text-gray-800 ml-5"> 5 Replies </span>
            <span class="text-base text-gray-800 float-right">
              created date
            </span>
          </div>
        </div>
        <div class="mr-0"></div>
      </div>
    </div>
  </div>
  <div class="flex justify-center mt-10">
    <div
      class="block p-6 w-9/12 bg-white rounded-lg border border-gray-200 shadow-md h-fit"
    >
      <div class="flex justify-start">
        <div class="bg-white rounded-lg shadow-md mr-10 h-fit">
          <div class="container3 flex justify-center">
            <div class="vertical-center3">
              <img
                class="rounded-t-lg"
                src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/48/000000/external-user-social-media-interface-anggara-basic-outline-anggara-putra.png"
                alt="product image"
              />
            </div>
          </div>
        </div>
        <div class="w-full">
          <a href="">
            <p class="text-2xl font-semibold text-gray-800 mt-5">
              Portable prep table organization recommendations
            </p>
          </a>
          <div class="mt-10">
            <span class="text-base text-gray-800"> User </span>
            <span class="text-base text-gray-800 ml-5"> 2 Replies </span>
            <span class="text-base text-gray-800 float-right">
              created date
            </span>
          </div>
        </div>
        <div class="mr-0"></div>
      </div>
    </div>
  </div>
</template>

<style>
.container3 {
  height: 120px;
  width: 120px;
  position: relative;
}

.vertical-center3 {
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>
