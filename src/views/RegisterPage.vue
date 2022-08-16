<template>
   <div>
    <section class="bg-[url('https://imgsrv2.voi.id/NC6l9LG3tCmzoOSlDqFQ9l7RyMGPF1ZHmBNOq0BNRfE/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8zOTM2OC8yMDIxMDMxNzE1NDEtbWFpbi5jcm9wcGVkXzE2MTYwNjc5NjkucG5n.jpg')] bg-cover bg-fixed w-screen h-screen">
        <div style="background-color: rgba(81, 151, 255, 0.349) ;">
<form action="" >
  <div class="w-screen h-screen flex flex-col justify-center items-center text-center">
  <div class="border-transparent w-96 rounded-xl bg-slate-300 " >
      <div class="" >
          <h1 class="mb-8" style="font-family: Source Code Pro; font-size: 30pt;" >Register</h1>
      </div>
      <div class="relative">
          <i class="fa-solid fa-user-astronaut absolute  pt-1.5 pl-0.5 text-blue-700 hover:text-blue-300"></i>
          <input v-model="username" class="pl-5 bg-transparent border-b-2 focus:border-blue-500 transition-all duration-100 outline-none" style="font-family: Source Code Pro;" type="text" placeholder="Username">
      </div>
      <div class="relative mt-7">
        <p class="text-red-500"></p>
          <i class="fa-solid fa-envelope absolute  pt-1.5 pl-0.5 text-blue-700 hover:text-blue-300"></i>
          <input v-model="email" class="pl-5 bg-transparent border-b-2 focus:border-blue-500 transition-all duration-100 outline-none" style="font-family: Source Code Pro;" type="text" placeholder="Email">
      </div>
      <div class="relative mt-7">
          <i class="fa-solid fa-house absolute  pt-1.5 pl-0.5 text-blue-700 hover:text-blue-300"></i>
          <input v-model="address" class="pl-5 bg-transparent border-b-2 focus:border-blue-500 transition-all duration-100 outline-none" style="font-family: Source Code Pro;" type="text" placeholder="Address">
      </div>
      <div class="relative mt-7">
          <i class="fa-solid fa-phone absolute  pt-1.5 pl-0.5 text-blue-700 hover:text-blue-300"></i>
          <input v-model="phoneNumber"  class="pl-5 bg-transparent border-b-2 focus:border-blue-500 transition-all duration-100 outline-none" style="font-family: Source Code Pro;" type="text" placeholder="Phone Number">
      </div>
      <div class="relative mt-7">
        <i class="fa-solid fa-lock absolute  pt-1.5 pl-0.5 text-blue-700 hover:text-blue-300"></i>
        <input v-model="password"  class="pl-5 bg-transparent border-b-2 focus:border-blue-500 transition-all duration-100 outline-none" style="font-family: Source Code Pro;" type="password" placeholder="Password">
    </div>
      <div class="mt-10 mb-10 flex justify-center">
       <button type="submit" @click.prevent="handleRegister" class="py-2 px-20 bg-blue-500 rounded-full text-lg font-bold text-white hover:bg-blue-400 cursor-pointer" style="font-family: Source Code Pro;">Sign Up</button>
      </div>
      <div class="mb-5 mt-5">
          <p style="font-family: Source Code Pro;">Already have an account? <router-link to="/login" class="text-blue-500 hover:text-sky-500 cursor-pointer">Login</router-link></p>
      </div>
  </div>
</div>
</form>
</div>
</section>
</div>
</template>

<script>
</script>