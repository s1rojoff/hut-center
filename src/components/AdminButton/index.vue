<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
  size: {
    type: String as PropType<string>,
    default: "md",
  },
  color: {
    type: String as PropType<string>,
    default: "save",
  },
});
</script>
<template>
  <button
    :class="{
      'px-10 py-1.5': props.size == 'md',
      'px-24 py-2': props.size == 'lg',
      'bg-[#ff7b54] text-white': props.color == 'save',
      'bg-white text-black border': props.color == 'delete',
    }"
    class="uppercase rounded-[50px] text-lg"
  >
    <slot></slot>
  </button>
</template>
