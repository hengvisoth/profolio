<template>
  <section id="projects" class="relative mb-10 md:mb-20 lg:mb-32">
    <div class="mx-auto w-full max-w-[1440px] px-6 py-10 md:px-16 md:py-16 lg:px-24 large:px-0">
      <div class="mb-10 max-w-2xl md:mb-14">
        <h2
          class="text-[clamp(1.9rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em]"
        >
          Selected work
        </h2>
        <p class="mt-4 text-base text-softwhite/65 md:text-lg">
          Mobile, web and full stack projects, newest first.
        </p>
      </div>

      <ProjectShowcase />
    </div>

    <div class="mt-12 flex w-full items-center justify-center">
      <div class="h-px w-[65%] max-w-xl bg-divider"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectShowcase from '@/components/ProjectShowcase.vue'
</script>
