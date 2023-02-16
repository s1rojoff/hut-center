<script setup lang="ts">
import SmallMessage from "@/components/BaseMessage/SmallMessage.vue";
import BigMessage from "@/components/BaseMessage/BigMessage.vue";
import BaseInput from "@/components/BaseInput/index.vue";
const smallData = [
  {
    title: "Engelska A2",
    description:
      "Here you can write to your teachers and schoolmates, your message is visible to everyone",
    name: "Shermorad Holmatov",
    position: "Teacher class group",
    color: "bg-red-500",
  },
  {
    title: "Engelska A2",
    description:
      "Here you can write to your teachers and schoolmates, your message is visible to everyone",
    name: "Shermorad Holmatov",
    position: "Teacher class group",
    color: "bg-blue-500",
  },
  {
    title: "Engelska A2",
    description:
      "Here you can write to your teachers and schoolmates, your message is visible to everyone",
    name: "Shermorad Holmatov",
    position: "Teacher class group",
    color: "bg-yellow-500",
  },
  {
    title: "Engelska A2",
    description:
      "Here you can write to your teachers and schoolmates, your message is visible to everyone",
    name: "Shermorad Holmatov",
    position: "Teacher class group",
    color: "bg-orange-500",
  },
  {
    title: "Engelska A2",
    description:
      "Here you can write to your teachers and schoolmates, your message is visible to everyone",
    name: "Shermorad Holmatov",
    position: "Teacher class group",
    color: "bg-purple-500",
  },
];
const bigData = [
  {
    message:
      "En man på ett gruppboende i Råcksta i Stockholm har knivskadats under söndagsmorgonen. Han fördes med ambulans till sjukhuset, skadeläget är oklart. -Vi fick in larmet strax efter klockan nio. Då ska en boende ha hoppat på en annan med kniv, säger Anna Westberg presstalesperson hos polisen.",
    name: "Bekzod Holmatov",
    position: "Student",
    date: "2023- Feb 15",
  },
  {
    message:
      "En man på ett gruppboende i Råcksta i Stockholm har knivskadats under söndagsmorgonen. Han fördes med ambulans till sjukhuset, skadeläget är oklart. -Vi fick in larmet strax efter klockan nio. Då ska en boende ha hoppat på en annan med kniv, säger Anna Westberg presstalesperson hos polisen.",
    name: "Bekzod Holmatov",
    position: "Student",
    date: "2023- Feb 15",
  },
];
</script>
<template>
  <div class="flex w-full">
    <div class="w-2/5 px-8 h-screen overflow-y-scroll scrollbar">
      <p class="font-medium pt-10 pb-3 text-4xl text-[#5F5F5F]">Class Groups</p>
      <SmallMessage
        v-for="(item, index) in smallData"
        :key="index"
        :card-data="item"
        class="mt-4"
      />
    </div>
    <div class="w-3/5 bg-[#F9F5F1] px-5">
      <p class="font-medium pt-10 text-4xl pb-3 text-[#5F5F5F]">Engelska A2</p>
      <div class="h-[74%]">
        <BigMessage
          class="mt-4"
          v-for="(item, index) in bigData"
          :card-message="item"
        />
      </div>
      <div class="w-full pb-2">
        <BaseInput
          type="message"
          inputClass="w-full border-none"
          placeholder="You can write massage here..."
          class="bottom-0"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.scrollbar::-webkit-scrollbar {
  display: none;
}
.scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
