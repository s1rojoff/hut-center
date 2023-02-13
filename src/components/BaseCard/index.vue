<script setup lang="ts">
import BaseIcon from "@/components/BaseIcon/index.vue";
const props = defineProps({
  cardData: {
    type: Object,
    default: {},
    required: true,
  },
});
</script>


<template >
  <div>
    <div
      class="
      
        wrapper
        px-14
        bg-white
        rounded-2xl
        gap-1
        text-black
        pt-5
        pb-8
        shadow-md
      "
    >
      <img src="/images/user.png" alt="" class="mx-auto" />
      <h1 class="text-center text-3xl text-[#333333]">Shermat xolmatov</h1>
      <p class="text-center text-base text-[#706B6B]">Teacher</p>
      <p
        class="number text-center text-base text-[#706B6B] mt-4 cursor-pointer flex justify-center gap-0.5"
      >
      <BaseIcon class="w-5 h-5 text-prmary-900" name="Telephone"/>
        +998990651701
      </p>
      <p class="text-center text-[15px] text-[#706B6B] cursor-pointer flex justify-center gap-0.5 ">
        <BaseIcon class="w-5 h-5 text-prmary-900" name="Email"/>
         info@onic.desing
      </p>
    </div>
  </div>
</template>
  