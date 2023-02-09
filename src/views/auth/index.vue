<script setup lang="ts">
import Logo from "@/components/icons/Logo.vue";
import BaseInput from "../../components/BaseInput/index.vue";
import BaseButton from "../../components/BaseButton/index.vue";
const navItems = ["About", "Contact"];
</script>

<template>
  <div class="bg-[#EBFCF4] bg-image w-screen h-screen relative">
    <div class="flex pt-4 px-5 justify-between items-center xl:hidden">
      <Logo />
      <div class="w-10">
        <div class="bg-[#0B4654] rounded w-10 h-2"></div>
        <div class="bg-[#0B4654] rounded w-10 h-2 mt-1"></div>
      </div>
    </div>
    <div
      class="xl:w-[45%] w-full bg-white h-2/3 xl:rounded-r-[50px] xl:rounded-l-none rounded-t-[50px] xl:h-full absolute xl:static bottom-0"
    >
      <div class="flex justify-center xl:opacity-100 xl:pt-7 opacity-0">
        <div class="flex justify-start items-center">
          <Logo />
          <p
            v-for="(item, index) in navItems"
            class="font-medium ml-16 last:ml-12 cursor-pointer text-xl text-[#0B4654]"
            :key="index"
          >
            {{ item }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bg-image {
  background-image: url("../../assets/images/bg-big.png");
}
</style>
