<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from 'pinia'
import BaseIcon from "@/components/BaseIcon/index.vue";
import BaseInput from "@/components/BaseInput/index.vue";
import BaseButton from "@/components/BaseButton/index.vue";
import { useStore } from "@/stores/auth/index";
import { useHelper } from "@/Helpers";
const {toSection} = useHelper()
const store: any = useStore();
const navItems = ["About", "Contact"];
const sidebar = ref<boolean>(false);
const {user} = storeToRefs(store)
const route = ref<string>("");
function getUser(): void {
  if (
    user.value.email == "admin" &&
    user.value.password == "111"
  ) {
    route.value = "admin";
  } 
  else if (
    user.value.email == "student" &&
    user.value.password == "222"
  ) {
    route.value = "student";
  } 
  else if (
    user.value.email == "teacher" &&
    user.value.password == "333"
  ) {
    route.value = "teacher";
  } 
  else {
    route.value = "/";
  }
  toSection(route.value)  
}
</script>

<template>
  <div class="bg-[#F9F5F1] bg-image w-screen h-screen relative">
    <div class="flex pt-4 px-5 justify-between items-center xl:hidden">
      <BaseIcon class="w-36 -5 text-primary-900" name="Logo" />
      <div class="w-10 cursor-pointer" @click="sidebar = !sidebar">
        <div class="bg-[#FF7B54] rounded w-10 h-2"></div>
        <div class="bg-[#FF7B54] rounded w-10 h-2 mt-1"></div>
      </div>
    </div>
    <div class="px-5 block xl:hidden">
      <div
        :class="{ '-ml-[1500px]': !sidebar }"
        class="w-full transition flex rounded-lg mt-2 justify-start items-center h-10 bg-white"
      >
        <p
          v-for="(item, index) in navItems"
          class="font-medium ml-16 cursor-pointer text-xl text-[#0B4654]"
          :key="index"
        >
          {{ item }}
        </p>
      </div>
    </div>
    <div
      class="xl:w-[45%] w-full bg-white h-2/3 xl:rounded-r-[50px] xl:rounded-l-none rounded-t-[50px] xl:h-full absolute xl:static bottom-0"
    >
      <div class="flex justify-center xl:opacity-100 xl:pt-7 opacity-0">
        <div class="flex justify-start items-center">
          <BaseIcon class="w-32 h-5 text-primary-900" name="Logo" />
          <p
            v-for="(item, index) in navItems"
            class="font-medium ml-16 last:ml-12 cursor-pointer text-xl text-[#0B4654]"
            :key="index"
          >
            {{ item }}
          </p>
        </div>
      </div>
      <div class="pt-10 xl:mt-32">
        <div class="flex justify-center xl:-ml-10">
          <div>
            <p class="text-3xl font-semibold">Login</p>
            <BaseInput
              type="email"
              class="mt-6"
              inputClass="w-80 pr-2"
              placeholder="Email address"
              v-model="user.email"
            />
            <br />
            <BaseInput
              type="email"
              inputClass="w-80 pr-2"
              placeholder="Email address"
              v-model="user.password"
            />
            <div class="flex justify-start items-center mt-3">
              <input
                type="checkbox"
                class="w-4 h-4 border-[#0B4654] outline-none rounded"
              />
              <p class="font-normal text-[text-[#7F7F7F] ml-2 text-xs">
                I agree with
                <span class="text-[#07B464] cursor-pointer">Terms</span> and
                <span class="text-[#07B464] cursor-pointer">Privacy</span>
              </p>
            </div>
              <BaseButton @click="getUser" class="uppercase mt-10">sign in</BaseButton>
            <p class="text-base mt-4 font-medium text-[#7F7F7F]">
              Forgotten your password?
              <span class="text-[#07B464] cursor-pointer">Click here</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bg-image {
  background-image: url("/images/bg-big.png");
}
</style>
