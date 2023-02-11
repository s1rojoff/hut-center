<script setup lang="ts"></script>
<template>
  <button class="bnt w-80 py-3 text-white text-xs font-medium"><slot></slot></button>
</template>
<style scoped>
.bnt {
  background: #FF7B54;
  box-shadow: 0px 2.9566px 2.9566px rgba(0, 0, 0, 0.25),
    inset 0px 1.4783px 2.9566px rgba(255, 255, 255, 0.25),
    inset 0px -1.4783px 2.9566px rgba(0, 0, 0, 0.25);
  border-radius: 11.8264px;
}
</style>
