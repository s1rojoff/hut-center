<script setup lang="ts">
import { type PropType, useAttrs, ref, onMounted, onBeforeUnmount } from "vue";
import BaseIcon from "@/components/BaseIcon/index.vue";
const attrs = useAttrs();
const openOptions = ref<boolean>(false);
const emit = defineEmits(["select"]);
const props = defineProps({
  options: {
    type: Array as PropType<any[]>,
    required: true
  },
  selectName: {
    type: String as PropType<string>,
    required: true
  },
  size: {
    type: String as PropType<string>,
    default: "md"
  },
  modalPosition: {
    type: String,
    default: "top-9 left-0"
  }
});
const selectedText = ref<any>(props.selectName);
const selectedValue = ref(null);
function clickOption(id: any, val: any): void {
  selectedText.value = val;
  openOptions.value = false;
  selectedValue.value = id;
  emit("select", id);
}
function hideOptions() {
  openOptions.value = false;
}
onMounted(() => {
  document.addEventListener("click", hideOptions, true);
});
onBeforeUnmount(() => {
  document.removeEventListener("click", hideOptions);
});
</script>
<template>
  <div
    v-bind="attrs"
    class="relative flex cursor-pointer justify-center flex-wrap border rounded-[50px]"
    id="select"
    :class="{'w-32': props.size == 'md', 'w-40': props.size == 'lg','w-full': props.size == 'full'}"
  >
    <div
      @click="openOptions = !openOptions"
      class="w-full rounded-lg py-2 px-4 flex items-center justify-between"
    >
      <p class="text-black text-base font-medium">{{ selectedText }}</p>
      <BaseIcon
        class="w-4 h-4 text-[#8996A2] transition-all"
        :class="{ 'rotate-180': openOptions }"
        name="ClassicDown"
      />
    </div>
    <div
      v-if="openOptions"
      :class="modalPosition"
      class="absolute z-50 py-2 w-full rounded-lg bg-white mt-2 shadow-2xl border"
    >
      <div
        v-for="(item, index) in options"
        :key="index"
        @click="clickOption(item.value, item.name)"
      >
        <p
          class="text-base font-medium hover:bg-[#1A5CCE] hover:text-white text-black py-3 px-4"
          :class="{ 'bg-[#1A5CCE] text-white': item.value === selectedValue }"
        >
          {{ item.name }}
        </p>
      </div>
    </div>
  </div>
</template>
