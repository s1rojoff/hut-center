<script setup lang="ts">
import { reactive } from "vue";
import "@fullcalendar/core";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

const options = reactive<any>({
  plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
  headerToolbar: {
    left: "prev,today,next",
    center: 'title',
    right: "dayGridDay,dayGridMonth,dayGridWeek,dayGridYear",
  },
    initialView: 'dayGridMonth'
});
</script>

<template>
  <div class="h-screen w-full p-2 overflow-y-scroll">
    <FullCalendar :options="options" />
  </div>
</template>
<style>
.fc-button{
  background-color: transparent !important;
  border: none !important;
  border-radius: 20px !important;
  color: black!important;
}
.fc-button:focus{
    background-color: #EE6C4D !important;

}
</style>
