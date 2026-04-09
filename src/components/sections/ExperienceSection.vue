<template>
  <section id="experience" class="mb-10 md:mb-20 lg:mb-32">
    <div
      class="mx-auto w-full max-w-[1440px] px-6 pt-10 pb-12 md:px-16 md:pb-16 lg:px-24 lg:pb-20 large:px-0"
    >
      <div class="glass-panel overflow-hidden px-6 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16">
        <span
          class="pointer-events-none absolute -top-28 right-[-10%] h-72 w-72 rounded-full bg-gradient-to-br from-main/20 via-accent/15 to-primary/20 blur-3xl"
        ></span>
        <span
          class="pointer-events-none absolute -bottom-32 left-[-12%] h-80 w-80 rounded-full bg-gradient-to-r from-primary/20 via-transparent to-main/25 blur-3xl"
        ></span>

        <div class="relative z-10">
          <div data-aos="zoom-in" class="flex flex-col items-center text-center">
            <div class="glass-chip text-xs uppercase tracking-[0.35em] text-softwhite/70">
              {{ careerHistoryContent.label }}
            </div>
            <h1 class="mt-4 text-3xl font-semibold md:text-4xl lg:text-[2.75rem]">
              {{ primaryTitleWord }}
              <span class="text-main">{{ accentTitle }}</span>
            </h1>
            <p class="mt-5 max-w-3xl text-sm leading-relaxed text-softwhite/75 md:text-base">
              {{ careerHistoryContent.description }}
            </p>
            <div class="mt-6 w-24">
              <div class="glass-divider"></div>
            </div>
          </div>

          <div class="mt-12 grid gap-6 lg:gap-8">
            <article
              v-for="(experience, index) in careerHistoryContent.experiences"
              :key="`${experience.company}-${experience.dateRange}`"
              :data-aos="'fade-up'"
              :data-aos-delay="index * 80"
              class="glass-card p-5 md:p-7"
            >
              <div class="grid gap-5 lg:grid-cols-[220px_1fr] lg:gap-8">
                <div class="space-y-3">
                  <div
                    class="inline-flex rounded-full border border-main/20 bg-main/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-main"
                  >
                    {{ experience.dateRange }}
                  </div>
                  <div>
                    <p class="text-lg font-semibold text-softwhite">{{ experience.company }}</p>
                    <p class="mt-1 text-sm text-softwhite/60">{{ experience.companyType }}</p>
                  </div>
                </div>

                <div class="space-y-5">
                  <div class="flex items-start gap-4">
                    <div class="mt-2 hidden items-start lg:flex">
                      <span class="h-3 w-3 rounded-full bg-main shadow-[0_0_18px_rgba(249,115,22,0.8)]"></span>
                    </div>
                    <div class="flex-1">
                      <h2 class="text-xl font-semibold text-softwhite md:text-2xl">
                        {{ experience.role }}
                      </h2>
                      <ul class="mt-4 space-y-3 text-sm leading-relaxed text-softwhite/75 md:text-base">
                        <li
                          v-for="bullet in experience.bullets"
                          :key="bullet"
                          class="flex items-start gap-3"
                        >
                          <span class="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-main/80"></span>
                          <span>{{ bullet }}</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tag in experience.tags"
                      :key="tag"
                      class="glass-chip text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-softwhite/80"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div class="mt-16">
            <div data-aos="fade-up" class="flex flex-col items-start">
              <div class="glass-chip text-xs uppercase tracking-[0.35em] text-softwhite/70">
                {{ careerHistoryContent.educationLabel }}
              </div>
              <h2 class="mt-4 text-2xl font-semibold text-softwhite md:text-3xl">
                <span class="text-main">{{ careerHistoryContent.educationTitle }}</span>
              </h2>
            </div>

            <div class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <article
                v-for="(item, index) in careerHistoryContent.education"
                :key="`${item.degree}-${item.school}`"
                :data-aos="'fade-up'"
                :data-aos-delay="index * 80"
                class="glass-card p-5 md:p-6"
              >
                <div class="flex items-start justify-between gap-4">
                  <h3 class="text-lg font-semibold text-softwhite">{{ item.degree }}</h3>
                  <span class="text-sm font-medium text-main">{{ item.yearRange }}</span>
                </div>
                <p class="mt-4 text-sm leading-relaxed text-softwhite/70 md:text-base">
                  {{ item.school }}
                </p>
              </article>
            </div>
          </div>

          <div class="mt-14">
            <div data-aos="fade-up" class="flex flex-col items-start">
              <div class="glass-chip text-xs uppercase tracking-[0.35em] text-softwhite/70">
                {{ careerHistoryContent.achievementsLabel }}
              </div>
            </div>

            <div class="mt-8 grid gap-4">
              <article
                v-for="(achievement, index) in careerHistoryContent.achievements"
                :key="achievement.title"
                :data-aos="'fade-up'"
                :data-aos-delay="index * 80"
                class="glass-card p-5 md:p-6"
              >
                <h3 class="text-lg font-semibold text-softwhite md:text-xl">
                  {{ achievement.title }}
                </h3>
                <p class="mt-3 text-sm leading-relaxed text-softwhite/70 md:text-base">
                  {{ achievement.description }}
                </p>
              </article>
            </div>
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
import { computed } from 'vue'
import { careerHistoryContent } from '@/data/careerHistory'

const titleWords = computed(() => careerHistoryContent.title.split(' '))
const primaryTitleWord = computed(() => titleWords.value[0] ?? '')
const accentTitle = computed(() => titleWords.value.slice(1).join(' '))
</script>
