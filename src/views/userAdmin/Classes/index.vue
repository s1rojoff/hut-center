<script setup lang="ts">
import BaseClass from "@/components/BaseClass/index.vue";
const smallData = [
  {
    title: "Engelska A2",
    name: "Shermorad Holmatov",
    color: "bg-red-500",
  },
  {
    title: "Engelska A2",
    name: "Shermorad Holmatov",
    color: "bg-red-500",
  },
  {
    title: "Engelska A2",
    name: "Shermorad Holmatov",
    color: "bg-red-500",
  },
  {
    title: "Engelska A2",
    name: "Shermorad Holmatov",
    color: "bg-red-500",
  },
  {
    title: "Engelska A2",
    name: "Shermorad Holmatov",
    color: "bg-red-500",
  },
  {
    title: "Engelska A2",
    name: "Shermorad Holmatov",
    color: "bg-red-500",
  },
  {
    title: "Engelska A2",
    name: "Shermorad Holmatov",
    color: "bg-red-500",
  },
  {
    title: "Engelska A2",
    name: "Shermorad Holmatov",
    color: "bg-red-500",
  },
];
</script>
<template>
  <div class="px-5 py-10">
    <div class="flex items-center justify-between">
      <p class="font-medium text-3xl text-[#5F5F5F]">All Classes</p>
      <button class="uppercase text-white text-lg button">create</button>
    </div>
    <div class="grid grid-cols-2 gap-4 mt-5">
      <BaseClass v-for="item in smallData" :card-data="item" />
    </div>
  </div>
</template>
<style>
.button {
  width: 186px;
  height: 51px;
  background: #ff7b54;
  border: 1px solid #ee6c4d;
  border-radius: 50px;
}
</style>
