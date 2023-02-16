<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
import "@fullcalendar/core";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { useStore } from "@/stores/mainStore";
const store = useStore();
const id = ref<number>(0);
const isMobile = ref<boolean>(false);
const options = reactive<any>({
  plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
  headerToolbar: getHeaderToolbar(),
  aspectRatio: 5,
  height: "auto",
  contentHeight: "",
  selectable: true,
  initialView: "dayGridMonth",
  locale: "sv",
  buttonText: {
    today: "i dag",
    month: "månad",
    week: "vecka",
    day: "dag",
    year: "år",
  },
  editable: true,
  weekends: true,
  select: (arg: any) => {
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
onMounted(() => {
  window.addEventListener("resize", checkMobile);
  checkMobile();
});

function checkMobile() {
  isMobile.value = window.innerWidth < 768;
  options.headerToolbar = getHeaderToolbar();
}

function getHeaderToolbar(): any {
  if (isMobile.value) {
    return {
      start: "prev",
      center: "title",
      end: "next",
    };
  }else{
    return{
      start: 'prev,today,next',
      center: 'title',
      end: 'timeGridDay,dayGridMonth,dayGridWeek,dayGridYear'
    }
  }
}
</script>

<template>
  <!-- <BaseModal v-if="store.$state.openModal"/> -->
  <div class="p-2">
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
