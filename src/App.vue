<template>
  <NavigationBar />
  <RouterView />
</template>

<script setup lang="ts">
import NavigationBar from "../src/components/NavigationBar.vue";
import { onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { initFlowbite } from "flowbite";
import "aos/dist/aos.css";
onMounted(() => {
  initFlowbite();
});

</script>
