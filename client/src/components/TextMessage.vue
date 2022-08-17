<script>
export default {
  props: ["messageData"],
  methods: {},
};
</script>
<template>
  <div class="media-content" v-if="messageData">
    <div class="content">
      <p>
        <strong>{{ messageData.user }}</strong>
        <small>{{ messageData.date }}</small>
        <br />
        {{ messageData.text }}
      </p>
      <!-- <p>
        <strong>halah</strong>
        <small>halah</small>
        <br />
        halah
      </p> -->
    </div>
  </div>
</template>
