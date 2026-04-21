<template>
  <section id="projects" class="relative mb-10 md:mb-20 lg:mb-32">
    <div
      class="mx-auto w-full max-w-[1440px] px-6 pt-10 pb-12 md:px-16 md:pb-16 lg:px-24 lg:pb-20 large:px-0"
    >
      <div class="glass-panel overflow-hidden px-6 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16">
        <div data-aos="zoom-in" class="relative z-10 flex flex-col items-center text-center">
          <div class="glass-chip text-xs uppercase tracking-[0.3em] text-softwhite/70">
            <span class="h-2 w-2 rounded-full bg-main"></span>
            Selected Work
          </div>
          <h2 class="mt-6 text-3xl font-semibold md:mt-8 md:text-4xl lg:text-[2.75rem]">
            Projects
          </h2>
          <p class="mt-4 max-w-2xl text-sm text-softwhite/70 md:text-base">
            Production apps across mobile, web, and full-stack — each with real users and
            measurable outcomes.
          </p>
          <div class="mt-6 w-24">
            <div class="glass-divider"></div>
          </div>
        </div>

        <div class="relative z-10">
          <ProjectSlider />
        </div>
      </div>
    </div>

    <div class="mt-12 flex w-full items-center justify-center">
      <div class="h-[2px] w-[55%] max-w-md rounded-full bg-divider"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectSlider from '@/components/ProjectSlider.vue'
</script>
