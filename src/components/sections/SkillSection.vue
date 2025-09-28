<template>
  <section class="relative mb-10 md:mb-20 lg:mb-32">
    <div
      id="skills"
      class="relative mx-auto w-full max-w-[1440px] px-6 pt-10 pb-16 md:px-16 lg:px-24 large:px-0"
    >
      <div class="relative overflow-hidden rounded-[36px] border border-divider bg-surface-strong px-6 py-10 md:px-12 md:py-16 lg:px-16 lg:py-20">
        <span class="pointer-events-none absolute -top-40 right-1/2 h-72 w-72 translate-x-1/2 rounded-full bg-gradient-to-br from-main/35 via-accent/25 to-primary/35 blur-3xl"></span>
        <span class="pointer-events-none absolute -bottom-48 -right-20 hidden h-80 w-80 rounded-full bg-gradient-to-tr from-accent/25 via-main/25 to-primary/35 blur-3xl opacity-80 lg:block"></span>

        <div class="relative z-10 flex flex-col items-center text-center">
          <div data-aos="zoom-in" class="inline-flex items-center gap-3 rounded-full bg-surface px-5 py-2 text-xs uppercase tracking-[0.3em] text-softwhite/60">
            <span class="h-2 w-2 rounded-full bg-main"></span>
            Toolkit highlights
          </div>
          <h2 class="mt-6 text-3xl font-semibold md:mt-8 md:text-4xl lg:text-[2.75rem]">
            <span class="text-softwhite/80">Full-stack craft powered by</span>
            <span class="block bg-gradient-to-r from-main via-accent to-primary bg-clip-text text-transparent">modern tooling</span>
          </h2>
          <p class="mt-4 max-w-3xl text-sm text-softwhite/70 md:text-base">
            I combine strong fundamentals with a curated set of frameworks, libraries, and cloud
            tooling to launch resilient, performant experiences. This stack evolves with each
            project, but the quality bar stays high: clean architecture, pixel-level detail, and
            inclusive user journeys.
          </p>

          <div class="mt-8 flex flex-wrap justify-center gap-3 text-[0.7rem] uppercase tracking-[0.25em] text-softwhite/40">
            <span v-for="chip in categoryChips" :key="chip" class="rounded-full border border-divider px-4 py-2">
              {{ chip }}
            </span>
          </div>
        </div>

        <div
          data-aos="zoom-in-up"
          data-aos-delay="150"
          class="relative z-10 mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <SkillCard
            v-for="(skill, index) in mySkills"
            :key="`${skill.name}-${index}`"
            data-aos="fade-up"
            :data-aos-delay="(index % 4) * 120"
            data-aos-duration="500"
            :icon="skill.icon"
            :title="skill.name"
          />
        </div>
      </div>
    </div>
    <div class="mt-12 flex w-full items-center justify-center">
      <div class="h-[2px] w-[55%] max-w-md rounded-full bg-divider"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SkillCard from '../SkillCard.vue'
import { ref } from 'vue'
import type { skillType } from '../../types/skill.dto'
import { skillData } from '../../data/skill'

const mySkills = ref<skillType[]>(skillData)
const categoryChips = [
  'Languages',
  'Frontend Frameworks',
  'Cloud & DevOps',
  'Design Systems'
]
</script>
