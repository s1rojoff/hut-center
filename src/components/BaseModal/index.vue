<script setup lang="ts">
import Overlay from "@/components/BaseModal/Overlay.vue";
import BaseIcon from "@/components/BaseIcon/index.vue";
</script>
<template>
  <Overlay />
  <div class="flex justify-center pt-20">
    <dvi class="bg-[#E56F53] absolute px-7 pt-4 pb-16 w-[580px] rounded-3xl">
      <div class="flex justify-end">
        <BaseIcon class="w-4 h-4 text-prmary-900" name="Close" />
      </div>
      <div class="flex items-start">
        <BaseIcon class="w-10 h-10 -mt-1" name="Calendar" />
        <p class="text-3xl font-medium ml-4 text-white">
          English A1 lesson for beginner teenagers after dinner
        </p>
      </div>
      <div class="flex justify-start mt-4 items-center">
        <img src="/images/user.png" class="w-10 h-10" alt="user" />
        <div class="ml-2">
          <p class="font-medium text-base text-white">Sher murodjonov</p>
          <p class="font-medium -mt-1 text-[10px] text-white">Teacher</p>
        </div>
      </div>
      <p class="text-base font-medium text-white mt-2">
        Are you thinking about a future with the English language as your main
        working tool? Do you want to develop your communication skills?
      </p>
      <div class="flex items-center mt-3">
        <BaseIcon class="w-4 h-4 text-prmary-900" name="Hour" />
        <p class="text-base font-medium text-white ml-2">
          Monday, July 15 15:00 - 16:30
        </p>
      </div>
      <div class="flex mt-3 justify-start items-center">
        <div class="flex items-center">
          <BaseIcon class="w-4 h-4 text-prmary-900" name="Location" />
          <p class="text-base font-medium text-white ml-2">
            Rinkeby 15, Stockholm
          </p>
        </div>
        <div class="flex items-center ml-16">
          <BaseIcon class="w-4 h-4 text-prmary-900" name="Student" />
          <p class="text-base font-medium text-white ml-2">14 Students</p>
        </div>
      </div>
      <div class="flex mt-10">
        <select class="outline-none rounded py-1 pl-3 pr-20">
          <option value="">Report Absence</option>
          <option value="">Report Absence</option>
          <option value="">Report Absence</option>
          <option value="">Report Absence</option>
        </select>
        <button class="py-1 px-3 ml-4 rounded bg-white">Send Report</button>
      </div>
    </dvi>
  </div>
</template>
