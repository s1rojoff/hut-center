<script setup lang="ts">
import BaseCard from "@/components/BaseCard/index.vue";

</script>


<template >
  <div class="">
    <h1
      class="
        text-3xl text-[#5F5F5F]
        font-semibold
        mt-18
        ml-6
        mb-12 
      "
    >
      Responsible staff and teachers
    </h1>
    <div class="grid grid-cols-3 gap-12">
        <BaseCard v-for="i in 18" :key="i" class="" />
    </div>
  </div>
</template>