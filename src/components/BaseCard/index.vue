<script setup lang="ts">
import BaseIcon from "@/components/BaseIcon/index.vue";
import type { PropType } from "vue";
const props = defineProps({
  cardData: {
    type: Object as PropType<any>,
    default: {},
    required: true,
  },
});
</script>

<template>
  <div class="bg-white px-8 py-5 rounded-3xl">
    <img src="/images/user.png" class="mx-auto" alt="" />
    <p class="text-xl font-medium text-center mt-2 text-[#333333]">
      Shermorad Holmatov
    </p>
    <p class="font-medium text-center text-base text-[#706B6B]">Teacher</p>
    <div class="flex justify-center mt-4">
      <div class="flex text-center items-center">
        <BaseIcon class="w-5 h-5" name="Telephone" />
        <p class="text-base flex items-center font-medium text-[#706B6B] ml-1">
          0760707070
        </p>
      </div>
    </div>
    <div class="flex justify-center mt-4">
      <div class="flex text-center items-center">
        <BaseIcon class="w-5 h-5 text-[#979797]" name="Email" />
        <p class="text-base flex items-center font-medium text-[#706B6B] ml-1">
          info@onic.design
        </p>
      </div>
    </div>
  </div>
</template>
