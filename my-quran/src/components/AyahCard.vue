<template>
  <div class="ayah-card">
    <div class="ayah-arabic">
      <h2>{{ayah.text.ar}}</h2>
    </div>
    <div class="ayah-translation">
      <p>{{ayah.number.insurah}}. {{ayah.translation.id}}</p>
    </div>
    <audio controls>
      <source :src="ayah.audio.url" type="audio/mpeg">
      your browser doesn't support this
    </audio>
  </div>
</template>

<script>
export default {
  props: ['ayah']
}
</script>