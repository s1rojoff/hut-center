<script setup lang="ts">
import Overlay from "@/components/BaseModal/Overlay.vue";
import type { PropType } from "vue";
defineEmits(['closeModal']);
const props = defineProps({
  top:{
    type: String as PropType<string>,
      default: 'top-0'
  }
})
</script>
<template>
  <Overlay @click="$emit('closeModal')"></Overlay>
  <div class="flex justify-center">
    <div :class="top" class="bg-white absolute  p-10 rounded-[40px]">
      <slot></slot>
    </div>
  </div>
</template>
