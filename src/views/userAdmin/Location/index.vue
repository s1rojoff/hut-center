<script setup lang="ts">
import BaseIcon from "@/components/BaseIcon/index.vue";
import AdminButton from "@/components/AdminButton/index.vue";
</script>
<template>
  <div class="px-5 py-10">
    <div class="flex items-center justify-between">
      <p class="font-medium text-3xl text-[#5F5F5F]">All Classes</p>
      <AdminButton size="md">create</AdminButton>
    </div>
    <div class="grid  mt-8 grid-cols-2 gap-4">
      <div v-for="item in 6" class="bg-white flex items-center p-5 rounded-2xl">
        <BaseIcon class="w-16 text-black h-16" name="Bulding" />
        <p class="text-[#333333] ml-4 text-xl font-medium">
          Bäckgårdsvägen 27 Vårby
        </p>
      </div>
      
    </div>
  </div>
</template>
