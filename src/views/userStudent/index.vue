<script setup lang="ts">
import { ref } from "vue";
import BaseIcon from "@/components/BaseIcon/index.vue";
import { RouterLink, RouterView } from "vue-router";
import MobileBar from "@/views/userStudent/MobileBar.vue";
const selectedItem = ref<any>();
const items = [
  {
    icon: "Schedule",
    name: "Schedule",
    route: "schedule",
  },
  {
    icon: "Homework",
    name: "Homework",
    route: "homework",
  },
  {
    icon: "Messages",
    name: "Message",
    route: "message",
  },
  {
    icon: "Logout",
    name: "Log out",
    route: "/",
  },
];
function clickItem(item: any) {
  selectedItem.value = item;
}
</script>
<template>
  <div class="relative flex min-h-screen">
    <!-- sidebar -->
    <div class="hidden xl:block xl:w-1/5 bg-[#F9F5F1]">
      <div class="bg-[#F6CFC6] py-5 px-7">
        <div class="flex justify-between items-center">
          <img
            class="w-[90px] cursor-pointer h-[22px]"
            src="/images/mainLogo.png"
            alt="error"
          />
          <BaseIcon
            class="w-[18px] h-[18px] text-primary-900"
            name="editProfile"
          />
        </div>
        <div class="mt-6">
          <div class="flex justify-center">
            <img
              src="/images/user.png"
              alt=""
              class="w-232 h-32 cursor-pointer border-blue-700 border-2 p-0.5 rounded-full"
            />
          </div>
          <div class="mt-2">
            <p class="text-lg font-medium text-center">Muzaffar Holmatov</p>
            <p class="text-sm font-normal text-center">STUDENT</p>
            <div class="flex justify-center mt-2">
              <BaseIcon
                v-for="(item, index) in 5"
                :key="index"
                class="w-4 ml-1 first:ml-0 h-4"
                name="Star"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="py-5 px-7">
          <router-link
            @click="clickItem(item.route)"
            v-for="(item, index) in items"
            :to="item.route == '/' ? '/' : '/student/'+ item.route"
          >
            <div :class="{'mt-0 ': index==0}" class="flex cursor-pointer item items-center mt-3.5">
              <BaseIcon class="w-5 text-slate-700 h-5 icon" :name="item.icon" />
              <p
                :class="{ 'active-link': item.route === selectedItem }"
                class="text-base ml-3 item-nav font-medium"
              >
                {{ item.name }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <!-- main content -->
    <div class="xl:w-4/5 bg-[#F5F7FB] w-full relative h-full">
      <div
        class="h-screen xl:overflow-y-scroll"
      >
        <router-view></router-view>
      </div>
      <MobileBar class="block md:hidden z-50 bottom-0 absolute" :items="items"/>
    </div>
  </div>
</template>
<style scoped>
.item:hover .item-nav {
  color: #ee6c4d;
}
.active-link {
  color: #ee6c4d;
}
</style>
