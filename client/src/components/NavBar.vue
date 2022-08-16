<template>
    <div>
        <nav class="bg-black px-2 sm:px-4 py-2.5 dark:mb-5 mt-0 bg-opacity-5">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
                <div class="flex items-center md:order-2">
                    <ul
                        class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-9 md:mt-0 md:text-sm md:font-medium md:border-0 bg-black bg-opacity-0">
                        <li class="text-amber-300">
                            <ul class="text-xl justify-">
                                Welcome {{ username }}
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                    <ul
                        class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-black bg-opacity-0">
                        <li>
                            <RouterLink to="/"
                                class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-amber-300 md:hover:text-slate-100 md:p-0 dark:text-white text-xl">
                                Home
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/likeMovie"
                                class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-amber-300 md:hover:text-slate-100 md:p-0 dark:text-white text-xl">
                                {{ likename }}</RouterLink>
                        </li>
                        <li class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-amber-300 md:hover:text-slate-100 md:p-0 dark:text-white text-xl"
                            @click="changeAction">
                            {{ name }}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
</script>
