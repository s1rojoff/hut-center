<script setup lang="ts">
import { ref } from "vue";
import BaseIcon from "@/components/BaseIcon/index.vue";
import { RouterLink, RouterView } from "vue-router";
const selectedItem = ref<any>();
const items = [
  {
    icon: "Schedule",
    name: "Schedule",
    route: "schedule",
  },
  {
    icon: "Classes",
    name: "Classes",
    route: "class",
  },
  {
    icon: "Teacher",
    name: "Teacher",
    route: "teacher",
  },
  {
    icon: "Hat",
    name: "Students",
    route: "student",
  },
  {
    icon: "Location",
    name: "Location",
    route: "location",
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
  <div class="w-screen flex h-screen">
    <!-- sidebar -->
    <div class="w-1/5 bg-[#F9F5F1]">
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
          <div class="mt-2 pb-20">
            <p class="text-lg font-medium text-center">Muzaffar Holmatov</p>
            <p class="text-sm font-normal text-center uppercase">Admin</p>
          </div>
        </div>
      </div>
      <div>
        <div class="py-2.5 px-7">
          <router-link
            @click="clickItem(item.route)"
            v-for="(item, index) in items"
            :to="item.route == '/' ? '/' : '/admin/'+ item.route"
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
    <div class="w-4/5 bg-[#F5F7FB] relative overflow-y-scroll">
        <router-view></router-view>
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
