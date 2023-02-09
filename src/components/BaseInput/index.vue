<script setup lang="ts">
import { ref, useAttrs } from "vue";
import type { PropType } from "vue";
import Email from "../icons/Email.vue";
import Eye from "../icons/Eye.vue";
import EyeUnpublish from "../icons/EyeUnpublish.vue";
import Lock from "../icons/Lock.vue";
defineEmits(['update:modelValue'])
const attrs = useAttrs()
const props = defineProps({
  type: {
    type: String as PropType<string>,
    default: "text",
  },
  placeholder: {
    type: String as PropType<string>,
    default: "",
  },
  modelValue: {
    type: String as PropType<string>,
    default: "",
  },
  inputClass:{
    type: String as PropType<string>,
    default: "",
  }
});
</script>
<template>
  <div v-bind="attrs" class="relative">
    <Email
      v-if="props.type == 'email'"
      class="w-5 left-2 text-[#C2D0D4] absolute top-3 h-5"
    />
    <Lock
      v-if="props.type == 'password'"
      class="w-5 left-2 text-[#C2D0D4] absolute top-3 h-5"
    />
    <input
      :placeholder="placeholder"
      :type="type"
      :class="inputClass"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="border pl-8 pr-2 h-10 placeholder:text-xs border-[#C2D0D4] outline-none rounded-md"
    />
    <Eye
      v-if="props.type == 'password'"
      class="w-5 text-[#C2D0D4] absolute h-5 top-3 right-2"
    />
    <EyeUnpublish
      v-if="false"
      class="w-5 text-[#C2D0D4] absolute h-5 top-3 right-2"
    />
  </div>
</template>
