<template>
  <button type="button" :class="style.button">
    <slot />
  </button>
</template>

<script lang="ts">
import { useCssModule, defineComponent } from "vue";

export default defineComponent({
  name: "Button",

  props: {},

  setup() {
    const style = useCssModule();

    return { style };
  },
});
</script>

<style lang="scss" module>
@import "./Button";
</style>
