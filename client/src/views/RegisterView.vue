<script>
import { mapActions } from "pinia";
import { useOtoStore } from "../stores/oto";

export default {
  components: {},
  data() {
    return {
      register: {
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
        role: "",
      },
      toggle: false,
    };
  },
  methods: {
    ...mapActions(useOtoStore, ["processRegister"]),
  },
  computed: {
    registerAs() {
      this.register.role = this.toggle ? "Customer" : "Service Provider";
      return this.toggle ? "Customer" : "Service Provider";
    },
  },
  created() {
    this.toggle = true;
  },
};
</script>

<template>
  <div
    class="max-w-lg mx-auto my-2 bg-white p-8 rounded-xl shadow shadow-slate-300"
  >
    <h1 class="text-3xl font-medium">Register</h1>
    <form class="my-5" @submit.prevent="processRegister(register)">
      <div class="flex flex-col space-y-2">
        <label for="email">
          <p class="font-medium text-slate-700 pb-2">Email address</p>
          <input
            v-model="register.email"
            id="email"
            name="email"
            type="email"
            class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
            placeholder="Enter email address"
          />
        </label>
        <label for="phoneNumber">
          <p class="font-medium text-slate-700 pb-2">Phone number</p>
          <input
            v-model="register.phoneNumber"
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
            placeholder="Enter phone number"
          />
        </label>
        <label for="address">
          <p class="font-medium text-slate-700 pb-2">Address</p>
          <input
            v-model="register.address"
            id="address"
            name="address"
            type="text"
            class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
            placeholder="Enter address"
          />
        </label>
        <label for="password">
          <p class="font-medium text-slate-700 pb-2">Password</p>
          <input
            v-model="register.password"
            id="password"
            name="password"
            type="password"
            class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
            placeholder="Enter your password"
          />
        </label>
        <label>
          <p class="font-medium text-slate-700 pb-2">Register as</p>
          <label
            for="default-toggle"
            class="inline-flex relative items-center cursor-pointer ml-5"
          >
            <input
              v-model="toggle"
              type="checkbox"
              value=""
              id="default-toggle"
              class="sr-only peer"
            />
            <div
              class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"
            ></div>
            <span class="ml-3 text-sm font-medium text-slate-700">{{
              registerAs
            }}</span>
          </label>
        </label>
        <div class="flex flex-row justify-between"></div>

        <button
          type="submit"
          class="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
        >
          <span>Register</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 rotate-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            />
          </svg>
        </button>
        <button
          @click="$router.push('/login')"
          class="w-full py-3 font-medium text-white bg-red-600 hover:bg-red-500 rounded-lg border-red-500 hover:shadow inline-flex space-x-2 items-center justify-center"
        >
          <span>Cancel</span>
        </button>
      </div>
    </form>
  </div>
</template>
