<template>
  <div class="bg">
    <h1>
      <div class="flex flex-col items-center">
        <img
          class="w-1/4 opacity-90"
          src="../assets/logo-moren.png"
          alt=""
          srcset=""
        />
        <a href="" @click.prevent="this.$router.push({ name: 'shop' })"
          ><p
            class="self-center text-base font-semibold whitespace-nowrap hover:text-white hover:bg-slate-900 bg-slate-200 text-slate-900 rounded-full shadow-md w-fit px-4 py-2"
          >
            HOME
          </p></a
        >
      </div>
    </h1>
  </div>
</template>
<script>
export default {
  methods: {},
};
</script>
