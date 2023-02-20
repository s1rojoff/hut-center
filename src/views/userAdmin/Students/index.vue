<script setup lang="ts">
import AdminButton from "@/components/AdminButton/index.vue";
import StudentCard from "@/components/StudentCard/index.vue";
import AdminModal from "@/components/AdminModal/index.vue";
import BaseIcon from "@/components/BaseIcon/index.vue";
import { useStore } from "@/stores/mainStore";
const store: any = useStore();
function toggleModal() {
  store.modal_student = !store.modal_student;
}
const data = [
  {
    id: "63e9cc6467477e5625f435e8",
    name: "Hasanboy",
    surname: "Abdullayev",
    email: "hasanboy@gmail.com",
    phone_number: "+998949179933",
    address: "Tashkent",
    parents_name: "Parent Name",
    parents_phone_number: "+998996123344",
  },
  {
    id: "63e9cc6467477e5625f435e8",
    name: "Hasanboy",
    surname: "Abdullayev",
    email: "hasanboy@gmail.com",
    phone_number: "+998949179933",
    address: "Tashkent",
    parents_name: "Parent Name",
    parents_phone_number: "+998996123344",
  },
  {
    id: "63e9cc6467477e5625f435e8",
    name: "Hasanboy",
    surname: "Abdullayev",
    email: "hasanboy@gmail.com",
    phone_number: "+998949179933",
    address: "Tashkent",
    parents_name: "Parent Name",
    parents_phone_number: "+998996123344",
  },
  {
    id: "63e9cc6467477e5625f435e8",
    name: "Hasanboy",
    surname: "Abdullayev",
    email: "hasanboy@gmail.com",
    phone_number: "+998949179933",
    address: "Tashkent",
    parents_name: "Parent Name",
    parents_phone_number: "+998996123344",
  },
];
</script>
<template>
  <div class="px-8 pb-5">
    <div class="flex items-center justify-between">
      <p class="text-4xl text-[#5F5F5F] font-medium mt-16 pb-10">
        All students
      </p>
      <AdminButton @click="toggleModal">create</AdminButton>
    </div>
    <div class="grid grid-cols-2 gap-10">
      <StudentCard v-for="item, index in data" :studentData="item" :key="index"/>
    </div>
  </div>
  <div class="w-full top-0 absolute h-full" v-if="store.modal_student">
    <AdminModal top="top-7" @closeModal="toggleModal">
      <div class="flex items-center justify-between">
        <p class="font-medium text-3xl text-black">Create Student</p>
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
      <div class="flex mt-3 justify-between gap-4 items-center">
        <div>
          <label for="id_number" class="block">ID number</label>
          <input
            type="text"
            class="border mt-1 outline-none w-80 rounded-[50px] py-2 px-3 placeholder:text-black"
            placeholder="ID number here"
            id="id_number"
          />
        </div>
        <div>
          <label for="parent_name" class="block">Parent name</label>
          <input
            type="text"
            class="border mt-1 outline-none w-80 rounded-[50px] py-2 px-3 placeholder:text-black"
            placeholder="Name"
            id="parent_name"
          />
        </div>
      </div>
      <div class="flex mt-3 justify-between gap-4 items-center">
        <div>
          <label for="telephone" class="block">Telefon</label>
          <input
            type="text"
            class="border mt-1 outline-none w-80 rounded-[50px] py-2 px-3 placeholder:text-black"
            placeholder="Tel nr"
            id="telephone"
          />
        </div>
        <div>
          <label for="email" class="block">Email</label>
          <input
            type="text"
            class="border mt-1 outline-none w-80 rounded-[50px] py-2 px-3 placeholder:text-black"
            placeholder="Email adress"
            id="email"
          />
        </div>
      </div>
      <div class="flex items-center mt-5 justify-between">
        <AdminButton size="lg" color="delete">Delete</AdminButton>
        <AdminButton size="lg" color="save">Save</AdminButton>
      </div>
    </AdminModal>
  </div>
</template>
