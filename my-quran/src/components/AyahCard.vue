<template>
  <div class="ayah-card">
    <div class="ayah-arabic">
      <h2>{{ayah.text.ar}}</h2>
    </div>
    <div class="ayah-translation">
      <p>{{ayah.translation.id}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['ayah']
}
</script>