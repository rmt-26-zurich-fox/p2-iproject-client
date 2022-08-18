<template>
  <button :type="buttonType">
    {{ buttonName }}
  </button>
</template>

<script>
export default {
  props: ["buttonName", "buttonType"],
  data() {
    return {};
  },
};
</script>
