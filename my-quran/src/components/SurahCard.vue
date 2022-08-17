<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h4>{{ surah.asma.id.long }}</h4>
      </div>
      <div class="card-content">
        <h5>{{ surah.type.id }}</h5>
      </div>
      <div class="card-footer">
        <h6>Jumlah Ayat : {{ surah.ayahCount }}</h6>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: ['surah'],
}
</script>