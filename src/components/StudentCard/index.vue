<script setup lang="ts">
import type { PropType } from "vue";
import BaseIcon from '@/components/BaseIcon/index.vue'

const props = defineProps({
  studentData: {
    type: Object as PropType<any>,
    default: {},
  },
});
</script>
<template>
  <div class="py-5 px-6 bg-white rounded-2xl">
    <div class="flex items-center justify-start">
      <img src="/images/user.png" class="w-16 h-16" alt="" />
      <div class="ml-4">
        <p class="text-lg font-medium text-[#333333]">Shermorad Holmatov</p>
        <span class="flex items-center justify-between">
          <p class="text-sm font-medium text-[#706B6B]">Student</p>
          <p class="text-sm text-[#2B2727] font-medium">Points: 20993</p>
        </span>
      </div>
    </div>
    <div class="w-full bg-slate-300 h-[1px] my-3">
    </div>
    <div class="">
      <div class="flex items-center justify-between">
        <p class="text-base font-medium text-[#706B6B]">Telefon:</p>
        <p class="text-base font-medium text-[#706B6B]">{{ studentData.phone_number }}</p>
      </div>
      <div class="flex items-center mt-2 justify-between">
        <p class="text-base font-medium text-[#706B6B]">Email:</p>
        <p class="text-base font-medium text-[#706B6B]">{{ studentData.email }}</p>
      </div>
      <div class="flex items-center mt-2 justify-between">
        <p class="text-base font-medium text-[#706B6B]">Adress:</p>
        <p class="text-base font-medium text-[#706B6B]">{{ studentData.address }}</p>
      </div>
      <div class="flex items-center mt-2 justify-between">
        <p class="text-base font-medium text-[#706B6B]">ID number:</p>
        <p class="text-base font-medium text-[#706B6B]">{{ studentData.id }}</p>
      </div>
      <div class="flex items-center mt-2 justify-between">
        <p class="text-base font-medium text-[#706B6B]">Parents name:</p>
        <p class="text-base font-medium text-[#706B6B]">{{ studentData.parents_name }}</p>
      </div>
      <div class="flex items-center mt-2 justify-between">
        <p class="text-base font-medium text-[#706B6B]">Parent number:</p>
        <p class="text-base font-medium text-[#706B6B]">{{ studentData.parents_phone_number }}</p>
      </div>
      <div class="flex justify-end items-center mt-3">
        <span class="flex items-center ml-5 justify-start">
                <BaseIcon class="w-4 h-4 mr-1" name="editProfile" />
                Edit
            </span>
            <span class="flex items-center ml-5 justify-start">
                <BaseIcon class="w-3 text-slate-500 h-3 mr-1" name="Close" />
                Delete
            </span>
      </div>
    </div>
  </div>
</template>
