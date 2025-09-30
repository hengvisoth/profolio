<template>
  <section class="mb-10 md:mb-20 lg:mb-32">
    <div
      id="experience"
      class="mx-auto w-full max-w-[1440px] px-6 pt-10 pb-12 md:px-16 md:pb-16 lg:px-24 lg:pb-20 large:px-0"
    >
      <div class="glass-panel overflow-hidden px-6 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16">
        <span
          class="pointer-events-none absolute -top-28 right-[-10%] h-72 w-72 rounded-full bg-gradient-to-br from-main/20 via-accent/15 to-primary/20 blur-3xl"
        ></span>
        <span
          class="pointer-events-none absolute -bottom-32 left-[-12%] h-80 w-80 rounded-full bg-gradient-to-r from-primary/20 via-transparent to-main/25 blur-3xl"
        ></span>

        <div class="relative z-10 flex flex-col items-center">
          <div data-aos="zoom-in" class="flex flex-col items-center text-center">
            <div class="glass-chip text-xs uppercase tracking-[0.35em] text-softwhite/70">
              Experience
            </div>
            <h1 class="mt-4 text-3xl font-semibold md:text-4xl lg:text-[2.75rem]">
              My <span class="text-main">Experience</span>
            </h1>
            <div class="mt-6 w-24">
              <div class="glass-divider"></div>
            </div>
          </div>

          <div class="mt-12 w-full">
            <ProjectSlider />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-12 flex w-full items-center justify-center">
      <div class="glass-divider max-w-xl"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectSlider from "../ProjectSlider.vue";
</script>
