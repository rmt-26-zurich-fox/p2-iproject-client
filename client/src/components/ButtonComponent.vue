<script>
export default {
  name: "ButtonComponent",
  props: ["buttonType", "buttonClass", "buttonText"],
};
</script>
<template>
  <div class="text-center">
    <button :type="buttonType" :class="buttonClass">
      {{ buttonText }}
    </button>
  </div>
</template>
