<script setup lang="ts">
import Overlay from "@/components/BaseModal/Overlay.vue";
defineEmits(['closeModal'])
</script>
<template>
  <Overlay @click="$emit('closeModal')"></Overlay>
  <div class="flex justify-center">
    <div class="bg-white absolute top-2 p-10 rounded-[40px]">
      <slot></slot>
    </div>
  </div>
</template>
