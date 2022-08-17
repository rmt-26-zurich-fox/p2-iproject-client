<script>
export default {
  props: ["oneThread"],
};
</script>

<template>
  <div class="card thread-list-card">
    <div class="card-header">Category: {{ oneThread.Category.name }}</div>
    <div class="card-body">
      <div class="card-thread-container">
        <div class="card-content-thread">
          <h5 class="card-title">{{ oneThread.title }}</h5>
          <p class="card-text">
            Created by : {{ oneThread.Profile.firstName }}
            {{ oneThread.Profile.lastName }}
          </p>
        </div>
        <div class="text-center button-to-thread-detail-container">
          <router-link
            :to="{
              name: `ThreadDetail`,
              params: {
                id: oneThread.id,
              },
            }"
          >
            <a class="btn btn-primary button-to-thread-detail">Go somewhere</a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
