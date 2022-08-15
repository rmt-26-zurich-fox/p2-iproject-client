<template>
  <aside class="w-64 fixed ml-10 mt-8" aria-label="Sidebar">
    <div class="overflow-y-auto h-screen py-4 px-3 bg-white">
      <ul class="space-y-2">
        <li class="mb-10">
          <div
            class="flex items-center p-2 text-base font-normal rounded-lg text-black"
          >
            <input
              class="flex-1 ml-3 whitespace-nowrap w-1 text-black border-2 border-gray-300"
              v-model="searchName"
            />
            <a
              href=""
              class="inline-flex justify-center items-center px-2 text-sm font-medium text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </a>
          </div>
        </li>
        <li>
          <a
            href=""
            class="flex items-center p-2 text-base font-normal rounded-lg text-black hover:bg-gray-100"
          >
            <img
              class="w-6"
              src="https://img.icons8.com/glyph-neue/64/000000/double-tick.png"
            />
            <span class="flex-1 ml-3 whitespace-nowrap">All</span>
          </a>
        </li>
        <li>
          <a
            href=""
            class="flex items-center p-2 text-base font-normal rounded-lg text-black hover:bg-gray-100"
          >
            <img
              class="w-6"
              src="https://img.icons8.com/windows/64/000000/croissant.png"
            />
            <span class="flex-1 ml-3 whitespace-nowrap">Pastries</span>
          </a>
        </li>
        <li>
          <a
            href=""
            class="flex items-center p-2 text-base font-normal rounded-lg transition duration-75 hover:bg-gray-100 text-black group"
          >
            <img
              class="w-6"
              src="https://img.icons8.com/fluency-systems-regular/48/000000/birthday.png"
            />
            <span class="ml-4">Whole Cakes</span>
          </a>
        </li>
        <li>
          <a
            href=""
            class="flex items-center p-2 text-base font-normal rounded-lg text-black hover:bg-gray-100"
          >
            <img
              class="w-6"
              src="https://img.icons8.com/ios/50/000000/cookie.png"
            />
            <span class="flex-1 ml-3 whitespace-nowrap">Cookies</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script></script>
