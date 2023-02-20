<script setup lang="ts">
import { ref } from "vue";
import BaseCard from "@/components/BaseCard/index.vue";
import AdminButton from "@/components/AdminButton/index.vue";
import AdminModal from "@/components/AdminModal/index.vue";
import BaseIcon from "@/components/BaseIcon/index.vue";
import { useStore } from "@/stores/mainStore";
const store: any = useStore();
const fileInput = ref<any>(null);
function toggleModal() {
  store.modal_teacher = !store.modal_teacher;
}
function openFile() {
  fileInput.value.click();
}
function handleFileUpload(event: any) {
  const file = event.target.files[0];
  console.log(file);
  // process the file here
}
</script>
<template>
  <div class="px-8 pb-5 h-screen">
    <div class="flex items-center justify-between">
      <p class="text-4xl text-[#5F5F5F] font-medium mt-16 pb-10">
        Responsible staff and teachers
      </p>
      <AdminButton @click="toggleModal">create</AdminButton>
    </div>
    <div class="grid grid-cols-3 gap-8">
      <BaseCard v-for="item in 6" />
    </div>
  </div>
  <div class="w-full top-0 absolute h-full" v-if="store.modal_teacher">
    <AdminModal top="top-10" @closeModal="toggleModal">
      <div class="flex items-center justify-between">
        <p class="font-medium text-3xl text-black">Create Teacher</p>
        <BaseIcon
          @click="toggleModal"
          class="w-4 h-4 cursor-pointer text-black"
          name="Close"
        />
      </div>
      <div class="flex mt-3 justify-between gap-4 items-center">
        <div>
          <label for="first_name" class="block">First name</label>
          <input
            type="text"
            class="border mt-1 outline-none w-80 rounded-[50px] py-2 px-3 placeholder:text-black"
            placeholder="Name"
            id="first_name"
          />
        </div>
        <div>
          <label for="last_name" class="block">Last name</label>
          <input
            type="text"
            class="border mt-1 outline-none w-80 rounded-[50px] py-2 px-3 placeholder:text-black"
            placeholder="Last name"
            id="last_name"
          />
        </div>
      </div>
      <div class="flex justify-between mt-3 gap-4 items-center">
        <div>
          <label for="telephone" class="block">Telephone</label>
          <input
            type="text"
            class="border mt-1 w-80 outline-none rounded-[50px] py-2 px-3 placeholder:text-black"
            placeholder="Telephone number"
            id="telephone"
          />
        </div>
        <div>
          <label for="email" class="block">Email</label>
          <input
            type="text"
            class="border w-80 mt-1 outline-none rounded-[50px] py-2 px-3 placeholder:text-black"
            placeholder="Email"
            id="email"
          />
        </div>
      </div>
      <div class="mt-3">
        <label for="adress" class="block">Adress</label>
        <input
          type="text"
          class="border outline-none w-full rounded-[50px] py-2 px-3 placeholder:text-black"
          placeholder="Write adress"
          id="adress"
        />
      </div>
      <div class="mt-3">
        <p class="block">Image</p>
        <label for="">
          <div
            @click="openFile"
            class="border h-[42px] outline-none w-full rounded-[50px] py-2 px-3"
          >
            <p>Image</p>
          </div>
        </label>
        <input
          @change="handleFileUpload"
          type="file"
          ref="fileInput"
          class="hidden"
          id="adress"
        />
      </div>
      <div class="flex items-center mt-5 justify-between">
        <AdminButton size="lg" color="delete">Delete</AdminButton>
        <AdminButton size="lg" color="save">Save</AdminButton>
      </div>
    </AdminModal>
  </div>
</template>
