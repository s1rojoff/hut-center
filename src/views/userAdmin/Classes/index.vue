<script setup lang="ts">
import { storeToRefs } from "pinia";
import BaseClass from "@/components/BaseClass/index.vue";
import AdminModal from "@/components/AdminModal/index.vue";
import BaseIcon from "@/components/BaseIcon/index.vue";
import BaseSelect from "@/components/BaseSelect/index.vue";
import AdminButton from "@/components/AdminButton/index.vue";
import { useStore } from "@/stores/mainStore";
const store: any = useStore();
const bg_arr = [
  {
    name: "Yellow",
    value: "yellow",
  },
  {
    name: "Red",
    value: "red",
  },
  {
    name: "Green",
    value: "green",
  },
  {
    name: "Blue",
    value: "blue",
  },
];
const text_arr = [
  {
    name: "Yellow",
    value: "yellow",
  },
  {
    name: "Red",
    value: "red",
  },
  {
    name: "Green",
    value: "green",
  },
  {
    name: "Blue",
    value: "blue",
  },
];
const smallData = [
  {
    title: "Engelska A2",
    name: "Shermorad Holmatov",
    color: "bg-red-500",
  },
  {
    title: "Engelska A2",
    name: "Shermorad Holmatov",
    color: "bg-red-500",
  },
  {
    title: "Engelska A2",
    name: "Shermorad Holmatov",
    color: "bg-red-500",
  },
  {
    title: "Engelska A2",
    name: "Shermorad Holmatov",
    color: "bg-red-500",
  },
  {
    title: "Engelska A2",
    name: "Shermorad Holmatov",
    color: "bg-red-500",
  },
  {
    title: "Engelska A2",
    name: "Shermorad Holmatov",
    color: "bg-red-500",
  },
  {
    title: "Engelska A2",
    name: "Shermorad Holmatov",
    color: "bg-red-500",
  },
  {
    title: "Engelska A2",
    name: "Shermorad Holmatov",
    color: "bg-red-500",
  },
];
function toggleModal() {
  store.modal_class = !store.modal_class
}
</script>
<template>
  <div class="px-5 py-10">
    <div class="flex items-center justify-between">
      <p class="font-medium text-3xl text-[#5F5F5F]">All Classes</p>
      <AdminButton @click="toggleModal">create</AdminButton>
    </div>
    <div class="grid grid-cols-2 gap-4 mt-5">
      <BaseClass v-for="item in smallData" :card-data="item" />
    </div>
  </div>
  <div class="w-full top-0 absolute h-full" v-if="store.modal_class">
    <AdminModal top="top-2.5" @closeModal="toggleModal">
      <div class="flex items-center justify-between">
        <p class="font-medium text-3xl text-black">Create Class</p>
        <BaseIcon
          @click="toggleModal"
          class="w-4 h-4 cursor-pointer text-black"
          name="Close"
        />
      </div>
      <div class="mt-7">
        <label for="class_name" class="block">Class name</label>
        <input
          type="text"
          class="border outline-none w-full rounded-[50px] py-2 px-3 placeholder:text-black"
          placeholder="Name"
          id="class_name"
        />
      </div>
      <div class="flex mt-3 items-center justify-between">
        <div>
          <label for="teacher" class="block">Select teacher</label>
          <input
            type="text"
            class="border outline-none w-full mt-1 rounded-[50px] py-2 px-3 placeholder:text-black"
            placeholder="Name"
            id="teacher"
          />
        </div>
        <div class="ml-10">
          <label for="bg_color" class="block mb-1">Select BG color</label>
          <BaseSelect :options="bg_arr" size="lg" selectName="Yellow" />
        </div>
        <div class="ml-5">
          <label for="text_color" class="block mb-1">Text color</label>
          <BaseSelect :options="text_arr" size="md" selectName="White" />
        </div>
      </div>
      <div class="mt-5">
        <label for="bg_color" class="block mb-1">Choose students</label>
        <BaseSelect :options="bg_arr" size="full" selectName="Yellow" />
      </div>
      <div class="mt-5">
        <label for="bg_color" class="block">Choose students</label>
        <textarea
          class="w-full mt-1 rounded-xl outline-none placeholder:text-black border p-3"
          placeholder="Description"
          rows="4"
        ></textarea>
      </div>
      <div class="flex items-center justify-between">
        <AdminButton size="lg" color="delete">Delete</AdminButton>
        <AdminButton size="lg" color="save">Save</AdminButton>
      </div>
    </AdminModal>
  </div>
</template>
<style></style>
