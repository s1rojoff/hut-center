<script setup lang="ts">
import BaseIcon from "@/components/BaseIcon/index.vue";
import type { PropType } from "vue";
import { useAttrs } from "vue";
const attrs = useAttrs();
const props = defineProps({
  items: {
    type: Array as PropType<any[]>,
    default: [],
  },
});
</script>
<template>
  <div class="navigation px-6" v-bind="attrs">
    <ul>
      <router-link v-for="(item, index) in items" :to="item.route">
        <li class="list" :class="{ active: index == 0 }" :key="index">
          <a href="#">
            <span class="icon">
              <BaseIcon class="w-5 h-5 text-black" :name="item.icon" />
            </span>
          </a>
        </li>
      </router-link>

      <div class="indicator"></div>
    </ul>
  </div>
</template>
<style>
.navigation {
position: relative;
  width: auto;
  background: #fff;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.0784314);
}
.navigation ul {
  display: flex;
  width: 100vw;
}

.navigation ul li {
  position: relative;
  list-style: none;
  width: 60px;
  height: 40px;
  z-index: 1;
}

.navigation ul li a {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 26px;
  text-align: center;
  font-weight: 500;
}

.navigation ul li a .icon {
  position: relative;
  display: block;
  line-height: 75px;
  font-size: 1.5em;
  text-align: center;
  transition: 0.5s;
}
.navigation ul li.active a .icon {
  transform: translateY(-35px);
}

.indicator {
  position: absolute;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  top: -50%;
  background: #ee6c4d;
  border: 6px solid #f4f6fa;
  transition: 0.5s;
}


.indicator::after {
  content: "";
  position: absolute;
  top: 66%;
  right: -22px;
  width: 20px;
  height: 20px;
  background: transparent;
  border-top-left-radius: 10px;
  box-shadow: -1px -20px 0 0 var(--clr);
}
.navigation ul li:nth-child(1).active ~ .indicator {
  transform: translateX(calc(70px * 0));
}
.navigation ul li:nth-child(2).active ~ .indicator {
  transform: translateX(calc(70px * 1));
}
.navigation ul li:nth-child(3).active ~ .indicator {
  transform: translateX(calc(70px * 2));
}
.navigation ul li:nth-child(4).active ~ .indicator {
  transform: translateX(calc(70px * 3));
}
.navigation ul li:nth-child(5).active ~ .indicator {
  transform: translateX(calc(70px * 4));
}
</style>
