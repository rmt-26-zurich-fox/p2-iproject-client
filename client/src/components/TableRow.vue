<script>
export default {
  props: ["player"],
};
</script>

<template>
  <tr>
    <td>{{ player.first_name }} {{ player.last_name }}</td>
    <td>{{ player.position }}</td>
    <td>{{ player.height_feet }}'{{ player.height_inches }}"</td>
    <td>{{ player.weight_pounds }} lbs</td>
  </tr>
</template>
