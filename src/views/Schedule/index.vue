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
    center: "title",
    right: "timeGridDay,dayGridMonth,dayGridWeek,dayGridYear",
  },
  initialView: "dayGridMonth",
});
</script>

<template>
  <div class="h-screen overflow-y-scroll w-full p-2">
    <FullCalendar :options="options" themeSystem="Journal" />
  </div>
</template>
<style scoped>
.fc-button {
  background-color: transparent !important;
  border: none !important;
  border-radius: 20px !important;
  color: black !important;
}
.fc-button:focus {
  background-color: #ee6c4d !important;
}
</style>
