<script setup lang="ts">
import BaseCard from "@/components/BaseCard/index.vue";

</script>


<template >
  <div class="px-8 pb-5 h-screen overflow-y-scroll scrollbar">
    <p class="text-4xl text-[#5F5F5F] font-medium mt-16 pb-10">Responsible staff and teachers</p>
    <div class="grid grid-cols-3 gap-8">
        <BaseCard  v-for="item in 6"/>
    </div>
  </div>
</template>