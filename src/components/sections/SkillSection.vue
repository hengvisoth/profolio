<template>
  <section class="relative mb-10 md:mb-20 lg:mb-32">
    <div
      id="skills"
      class="relative mx-auto w-full max-w-[1440px] px-6 pt-10 pb-16 md:px-16 lg:px-24 large:px-0"
    >
      <div class="glass-panel relative overflow-hidden px-6 py-10 md:px-12 md:py-16 lg:px-16 lg:py-20">
        <div class="relative z-10 flex flex-col items-center text-center">
          <div data-aos="zoom-in" class="glass-chip text-xs uppercase tracking-[0.3em] text-softwhite/70">
            <span class="h-2 w-2 rounded-full bg-main"></span>
            Toolkit highlights
          </div>
          <h2 class="mt-6 text-3xl font-semibold md:mt-8 md:text-4xl lg:text-[2.75rem]">
            What I work with
          </h2>
          <p class="mt-4 max-w-2xl text-sm text-softwhite/60 md:text-base">
            The tools I use daily across mobile, backend, and frontend — chosen for reliability
            and production results, not hype.
          </p>

          <!-- Primary Stack -->
          <div class="mt-8 flex flex-wrap justify-center gap-3">
            <span
              v-for="tech in primaryStack"
              :key="tech"
              class="glass-chip flex items-center gap-1.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-softwhite ring-1 ring-main/40"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-main"></span>
              {{ tech }}
            </span>
          </div>

          <div class="mt-4 flex flex-wrap justify-center gap-3 text-[0.7rem] uppercase tracking-[0.25em] text-softwhite/50">
            <span v-for="chip in categoryChips" :key="chip" class="glass-chip text-[0.65rem]">
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
const primaryStack = ['Flutter', 'Vue.js', 'Node.js', 'TypeScript']
const categoryChips = ['Languages', 'Frontend Frameworks', 'Cloud & DevOps', 'Design Systems']
</script>
