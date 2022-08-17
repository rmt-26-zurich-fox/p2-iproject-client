<script>
export default {
  props: ["users"],
};
</script>
<template>
  <div>
    <h4 class="title is-4">Current users ({{ users.length }})</h4>
    <ul>
      <li v-for="user in users">
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{ user.name }}</strong>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
