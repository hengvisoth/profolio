<template>
  <div
    class="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-white w-40 md:w-44 lg:w-48 p-4 flex flex-col items-center transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
  >
    <div class="flex justify-center items-center mb-3">
      <img
        :src="icon"
        alt="Skill"
        class="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 object-contain"
      />
    </div>
    <h3 class="text-sm md:text-base lg:text-lg font-semibold text-center">
      {{ title }}
    </h3>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  title: String,
  icon: String,
});
</script>
