<script>

export default {
    props: ['newItem']
}

</script>

<template>
    <div class="news-item">
      <a :href="newItem.url" target="_blank" rel="noopener noreferrer">
        <img :src="newItem.image" alt="poster"/>
      </a>
      <h3>{{newItem.title}}</h3>
      <span>{{newItem.description}}</span>
      <strong>by {{newItem.author}}</strong>
    </div>
</template>
<style>

.news-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 8px;
  background-color: azure;
}

</style>