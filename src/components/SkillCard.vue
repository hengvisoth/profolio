<template>
  <div
    class="group relative flex flex-col overflow-hidden rounded-2xl border border-divider bg-surface p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow"
  >
    <span
      class="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-main/0 via-transparent to-primary/0 opacity-0 transition-all duration-500 group-hover:from-main/15 group-hover:to-primary/20 group-hover:opacity-100"
    ></span>
    <div class="relative flex h-full flex-col gap-4">
      <div
        class="flex h-16 w-16 items-center justify-center rounded-xl border border-divider bg-background/40 p-3 transition-transform duration-300 group-hover:scale-110"
      >
        <img :src="icon" :alt="title" class="h-full w-full object-contain" loading="lazy" />
      </div>
      <div class="space-y-2">
        <h3 class="text-base font-semibold text-softwhite">{{ title }}</h3>
        <span class="inline-block h-[2px] w-10 rounded-full bg-main/70 group-hover:w-14 group-hover:bg-main transition-all duration-300"></span>
        <p class="text-xs text-softwhite/50">
          Crafting scalable interfaces with a focus on developer experience and polished delivery.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>
