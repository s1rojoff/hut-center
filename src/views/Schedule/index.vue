<script setup lang="ts">
import { reactive, ref } from "vue";
import "@fullcalendar/core";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { useStore } from "@/stores/mainStore";
const store = useStore();
const id = ref<number>(0);
const options = reactive<any>({
  plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
  headerToolbar: {
    left: "prev,today,next",
    center: "title",
    right: "timeGridDay,dayGridMonth,dayGridWeek,dayGridYear",
  },
  initialView: "dayGridMonth",
  locale: "sv",
  buttonText: {
    today: "i dag",
    month: "månad",
    week: "vecka",
    day: "dag",
    year: "år",
  },
  selectable: true,
  editable: true,
  weekends: true,
  // dateClick:(arg:any)=>{
  //     console.log(arg.dateStr);   yacheykaga click boganda
  // }

  select: (arg: any) => {
    // console.log(arg.start + arg.end);
    id.value += 1;
    const cal = arg.view.calendar;
    cal.unselect();
    cal.addEvent({
      id: `${id.value}`,
      title: `New event ${id.value}`,
      start: arg.start,
      end: arg.end,
      allDay: true,
    });
  },
  dateClick: (arg: any) => {
    console.log(arg.event.title);
  },
});
</script>

<template>
  <!-- <BaseModal v-if="store.$state.openModal"/> -->
  <div class="h-screen overflow-y-scroll w-full p-2">
    <FullCalendar :options="options" />
  </div>
</template>
<style>
.fc-button {
  background-color: transparent !important;
  border: none !important;
  color: black !important;
}
.fc-button:focus {
  background-color: #ee6c4d !important;
}
</style>
