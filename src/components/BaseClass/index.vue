<script setup lang="ts">
import type { PropType } from "vue";
import BaseIcon from '@/components/BaseIcon/index.vue'
import { useAttrs } from "vue";
const attrs = useAttrs();
const props = defineProps({
  cardData: {
    type: Object as PropType<any>,
  },
});
</script>
<template>
  <div :class="attrs" class="box-shadow bg-white p-5 rounded-2xl relative">
    <div
      :class="cardData.color"
      class="w-4 h-11 rounded-l absolute right-0"
    ></div>
    <div class="flex items-center justify-start">
      <img src="/images/user.png" class="w-16 h-16" alt="user" />
      <div class=" ml-4">
        <p class="font-medium text-xl text-[#333333]">{{ cardData.title }}</p>
        <p class="font-medium text-base text-[#746F6F]">
          <span class="text-base font-medium text-black">Teacher: </span>{{ cardData.name }}
        </p>
        <div class="flex mt-2 items-center justify-between">
            <span class="flex items-center justify-start">
                <BaseIcon class="w-5 h-5 mr-1" name="Hat" />
                Student: 14
            </span>
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
  </div>
</template>
<style scoped>
.box-shadow {
  box-shadow: 5px 5px 13px 2px rgba(0, 0, 0, 0.25);
}
</style>
