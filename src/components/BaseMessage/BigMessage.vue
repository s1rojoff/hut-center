<script setup lang="ts">
import type { PropType } from "vue";
import { useAttrs } from "vue";
const attrs = useAttrs();
const props = defineProps({
  cardMessage: {
    type: Object as PropType<any>,
  },
});
</script>
<template>
  <div :class="attrs" class="box-shadow bg-white p-5 rounded-2xl relative">
    <div class="w-4 h-11 rounded-l absolute right-0"></div>
    <p class="font-medium text-sm text-[#5F5F5F]">{{ cardMessage.message }}</p>
    <div class="flex justify-between items-center mt-2">
      <div class="flex justify-start items-center">
        <img src="/images/user.png" class="w-[30px] h-[30px]" alt="user" />
        <div class="ml-2">
          <p class="font-medium text-base text-[#746F6F]">
            {{ cardMessage.name }}
          </p>
          <p class="font-medium -mt-1 text-[10px] text-[#9D9898]">
            {{ cardMessage.position }}
          </p>
        </div>
      </div>
      <p class="text-xs font-medium text-[#9D9898]">{{ cardMessage.date }}</p>
    </div>
  </div>
</template>
<style scoped>
.box-shadow {
  box-shadow: 5px 5px 13px 2px rgba(0, 0, 0, 0.25);
}
</style>
