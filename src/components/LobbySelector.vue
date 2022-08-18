<script>
export default {
  name: "LobbySelector",
  methods: {
    createNewLobby() {
      console.log("create new lobby");
    },
    joinLobby() {
      console.log("join lobby");
    },
  },
};
</script>

<template>
  <div class="relative">
    <div
      class="w-[200px] primary-red flex justify-center items-center rounded h-[70px] mb-2 text-white cursor-pointer"
    >
      Create new lobby
    </div>
    <div class="or">OR</div>
    <div
      class="w-[200px] primary-blue flex justify-center items-center rounded h-[70px]"
    >
      <input type="text" placeholder="Enter Lobby code" class="input-lobby" />
    </div>
  </div>
</template>
