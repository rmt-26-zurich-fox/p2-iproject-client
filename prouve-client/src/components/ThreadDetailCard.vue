<template>
  <div class="flex justify-center mt-10">
    <div class="bg-white rounded-lg shadow-md mr-10 h-fit">
      <div class="container3 flex justify-center">
        <div class="vertical-center3">
          <img
            src="https://img.icons8.com/external-sbts2018-outline-color-sbts2018/58/000000/external-user-ecommerce-basic-1-sbts2018-outline-color-sbts2018.png"
          />
        </div>
      </div>
    </div>
    <div
      class="block p-6 w-9/12 bg-white rounded-lg border border-gray-200 shadow-md h-fit"
    >
      <div class="flex justify-start">
        <div class="w-full">
          <p class="text-lg font-normal text-gray-800 mt-5">
            {{ reply.content }}
          </p>
          <div class="mt-10">
            <span class="text-base text-gray-800">
              {{ reply.User.userName }}
            </span>
            <span class="text-base text-gray-800 float-right">
              {{ dateTime }}
            </span>
          </div>
        </div>
        <div class="mr-0"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["reply"],

  computed: {
    dateTime() {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
      };
      let date = new Date(this.reply.createdAt);
      return new Intl.DateTimeFormat("default", options).format(date);
    },
  },
};
</script>
