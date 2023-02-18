<script setup lang="ts">
import {useStore} from '@/stores/mainStore'
const store = useStore()
</script>
<template>
   <router-view></router-view>
   <!-- <p>{{ store.$state.openModal }}</p> -->
</template>