<script setup lang="ts">
import Logo from "@/components/icons/Logo.vue";
import BaseInput from '../../components/BaseInput/index.vue'
import BaseButton from '../../components/BaseButton/index.vue'
const navItems = ["About", "Contact"];
</script>

<template>
  <div class="bg-[#EBFCF4] w-screen h-screen">
    <div class="w-[45%] rounded-tr-[52px] h-full bg-white">
      <div class="flex justify-center pt-10">
        <div class="flex justify-start items-center">
          <Logo class="text-[#0B4654] cursor-pointer" />
          <div class="flex justify-start items-center ml-[74px]">
            <p
              v-for="item in navItems"
              :key="item"
              class="font-medium last:ml-12 cursor-pointer text-xl text-[#0B4654]"
            >
              {{ item }}
            </p>
          </div>
        </div>
      </div>
      <div class="mt-36 flex justify-center xl:-ml-10">
        <div>
            <p class="text-3xl font-semibold">Login</p>
            <BaseInput type="email" class="mt-6" inputClass="w-80" placeholder="Email address"/>
            <br>
            <BaseInput type="password" inputClass="w-80"  placeholder="Password"/>
            <div class="flex justify-start items-center mt-3">
                <input type="checkbox" class="w-4 h-4 border-[#0B4654] outline-none rounded">
                <p class="font-normal text-[text-[#7F7F7F] ml-2 text-xs">I agree with <span class="text-[#07B464] cursor-pointer">Terms</span> and <span class="text-[#07B464] cursor-pointer">Privacy</span></p>
            </div>
            <BaseButton class="mt-10">SIGN IN</BaseButton>
            <p class="text-base mt-4 font-medium text-[#7F7F7F]">Forgotten your password? <span class="text-[#07B464] cursor-pointer">Click here</span></p>
        </div>
      </div>
    </div>
  </div>
</template>
