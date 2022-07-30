<template>
  <button
      type="button"
      :class="{ [style.button]: true, [style[size]]: true, [style[variant]]: true, [style.pressed]: isPressed }"
      :disabled="disabled"
      @hover="$emit('hover', $event)"
      @mousedown="isPressed = true"
      @mouseup="isPressed = false"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType, defineProps } from "vue";

export default defineComponent({
  name: "Button",
});
</script>

<script setup lang="ts">
  import { variants, Variants, sizes, Sizes } from "./Button.options";
  import {PropType, useCssModule, defineProps, defineEmits, ref} from 'vue';

  const isPressed = ref(false)

  defineEmits(["hover"])

  defineProps({
    variant: {
      type: String as PropType<keyof typeof Variants>,
      validator(value: string) {
        return variants.includes(value)
      },
      default: variants[0]
    },
    size: {
      type: String as PropType<keyof typeof Sizes>,
      validator(value: string) {
        return sizes.includes(value)
      },
      default: sizes[0]
    },
    disabled: {
      type: Boolean,
      default: false
    }
  });

  const style = useCssModule();
</script>

<style lang="scss" module>
@import "./Button";
</style>
