<template>
  <section class="mb-10 md:mb-20 lg:mb-32">
    <div
      id="experience"
      class="max-w-[1440px] mx-auto px-6 md:px-24 lg:px-24 lg:px-0 pb-10 md:pb-10 lg:pb-20 pt-10"
    >
      <div class="flex flex-col justify-center items-center">
        <div data-aos="zoom-in" class="inline-block mb-10 md:mb-10 lg:mb-10">
          <h1 class="text-sm-title md:text-md-title lg:text-lg-title font-bold">
            My <span class="text-main">Experience</span>
          </h1>
          <div class="space-y-1 md:space-y-1 lg:space-y-1.5">
            <div class="h-[2px] md:h-[3px] lg:h-[4px] rounded-md bg-main w-full" />
          </div>
        </div>
        <ProjectSlider />
      </div>
    </div>
    <div
      class="mt-auto mx-auto w-full flex items-center justify-center"
    >
      <div class="bg-primary h-[1px] rounded-md w-[60%] md:w-[40%] lg:w-[40%]"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectSlider from "../ProjectSlider.vue";
</script>
