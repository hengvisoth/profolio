<template>
  <div
    class="grid w-full grid-cols-1 gap-8 py-6 md:grid-cols-[1.1fr_1fr] md:py-10 lg:gap-12 lg:py-14"
  >
    <!-- left sides -->
    <div class="glass-card order-last flex h-full flex-col justify-between gap-10 p-6 md:order-first md:p-8">
      <!-- index and role -->
      <div>
        <div>
          <h1 class="text-main text-6xl font-Angkor font-bold md:text-7xl lg:text-8xl">
            {{ projectCode }}
          </h1>
          <h2 class="text-2xl font-semibold text-softwhite md:text-3xl lg:text-4xl">
            {{ title }}
          </h2>
          <div
            class="mt-4 flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between"
          >
            <p class="text-main text-base font-medium md:text-lg">
              {{ roleAs }}
            </p>
            <!-- Date range -->
            <p class="glass-chip text-[0.65rem] font-medium uppercase tracking-[0.35em] text-softwhite/80">
              <span class="text-softwhite">From</span>: {{ startDate }}
              <span class="mx-2 text-main">•</span>
              <span class="text-softwhite">To</span>: {{ endDate }}
            </p>
          </div>
        </div>
        <div class="my-5">
          <p
            class="whitespace-pre-line leading-relaxed text-sm text-softwhite/80 md:text-base"
          >
            {{ short_desc }}
          </p>
        </div>
      </div>

      <!-- ------------------------- -->
      <div class="glass-card flex flex-col gap-4 p-5">
        <!-- Technologies -->
        <div class="flex flex-wrap gap-3">
          <!-- Display technologies in the desired format -->
          <span
            class="glass-chip group flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em]"
            v-for="(tech, index) in technologies"
            :key="tech.name"
          >
            <img
              :src="tech.icon?.logo"
              :alt="tech.name"
              class="mr-2 inline-block h-4 w-4 rounded bg-white p-0.5 transition-transform duration-200 ease-out group-hover:scale-105 md:h-5 md:w-5"
            />
            <span class="text-softwhite/80">{{ tech.name }}</span>
          </span>
        </div>

        <!-- divider -->
        <div class="glass-divider"></div>

        <!-- git and project detail -->
        <div class="flex flex-row flex-wrap items-center gap-4">
          <button
            class="glass-chip group flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-softwhite/80 transition-transform duration-200 hover:-translate-y-1"
          >
            <Icon
              class="h-5 w-5 text-main transition-transform duration-200 group-hover:scale-110"
              icon="tdesign:arrow-right-up"
            />
            Preview
          </button>

          <a :href="gitHubUrl" target="_blank" rel="noopener noreferrer">
            <span
              class="glass-chip group flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-softwhite/80 transition-transform duration-200 hover:-translate-y-1"
            >
              <Icon
                class="h-5 w-5 text-main transition-transform duration-200 group-hover:scale-110"
                icon="mdi:github"
              />
              GitHub
            </span>
          </a>
        </div>
      </div>
    </div>

    <!-- slider -->
    <div class="glass-card flex h-full items-center justify-center overflow-hidden p-4">
      <div id="controls-carousel" class="relative w-full" data-carousel="static">
        <div class="relative flex items-center justify-center overflow-hidden">
          <Swiper
            class="mySwiper h-full flex justify-center items-center"
            @slideChange="onSlideChange"
            @swiper="onSwiper"
          >
            <SwiperSlide v-for="(project, index) in projects" :key="index">
              <img
                v-if="index === activeIndex"
                :src="project.imageUrl"
                data-aos="zoom-in"
                class="glass-panel mx-auto h-[280px] max-w-full rounded-3xl border-0 bg-black/20 object-contain p-4 shadow-2xl md:h-[420px] md:max-w-[480px] lg:h-[460px]"
                alt="Project Image"
              />

              <!-- <img
                :v-if="index == activeIndex"
                :src="project.imageUrl"
                data-aos="zoom-in"
                class="max-w-[500px] max-h-[500px] object-container mx-auto"
                alt="Project Image"
              /> -->
            </SwiperSlide>
          </Swiper>
        </div>

        <div>
          <button
            @click="slidePrev"
            :disabled="isPrevDisabled"
            type="button"
            class="absolute -left-3 top-1/2 z-30 -translate-y-1/2 rounded-full bg-main/20 p-1.5 text-main backdrop-blur-md transition-all duration-200 ease-in-out hover:-translate-y-1 hover:bg-main/30 md:-left-6"
            :class="isPrevDisabled ? 'opacity-20 cursor-not-allowed' : 'cursor-pointer'"
          >
            <Icon
              icon="ooui:next-rtl"
              class="h-6 w-6 transition-transform duration-200 ease-in-out"
            />
            <span class="sr-only">Previous</span>
          </button>

          <button
            @click="slideNext"
            :disabled="isNextDisabled"
            type="button"
            class="absolute -right-3 top-1/2 z-30 -translate-y-1/2 rounded-full bg-main/20 p-1.5 text-main backdrop-blur-md transition-all duration-200 ease-in-out hover:-translate-y-1 hover:bg-main/30 md:-right-6"
            :class="isNextDisabled ? 'opacity-20 cursor-not-allowed' : 'cursor-pointer'"
          >
            <Icon
              icon="ooui:next-ltr"
              class="h-6 w-6 transition-transform duration-200 ease-in-out"
            />
            <span class="sr-only">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { projectsData } from '../data/project'
import type { projectType } from '../types/project.dto'
import { Icon } from '@iconify/vue'

// Reactive variables
const activeIndex = ref<number>(0)
const projectCode = ref<string>('01')
const projects = ref<projectType[]>(projectsData)
const roleAs = ref<string | null>('')
const title = ref<string | null>('')
const gitHubUrl = ref<string>('')
const short_desc = ref<string | null>('')
const technologies = ref<{ name: string; icon: any }[] | []>([{ name: '', icon: '' }])
const startDate = ref<string>('None')
const endDate = ref<string>('None')
const isPrevDisabled = ref<boolean>(true)
const isNextDisabled = ref<boolean>(false)

// Function to handle slide changes
const onSlideChange = (swiper: any) => {
  activeIndex.value = swiper.activeIndex
  updateDetails()
}

// Dummy function for Swiper instance (optional)
const onSwiper = (swiper: any) => {
  console.log('Swiper instance:', swiper)
}

// Custom navigation functions
const slidePrev = () => {
  const swiperElement = document.querySelector('.mySwiper') as HTMLElement & {
    swiper: any
  }
  swiperElement?.swiper.slidePrev()
  updateDetails()
}

const slideNext = () => {
  const swiperElement = document.querySelector('.mySwiper') as HTMLElement & {
    swiper: any
  }
  swiperElement?.swiper.slideNext()
  updateDetails()
}

// Function to update details based on activeIndex
const updateDetails = () => {
  gitHubUrl.value = projects.value[activeIndex.value]?.gitHubRepo || ''
  technologies.value = projects.value[activeIndex.value]?.technologies || []
  projectCode.value = projects.value[activeIndex.value]?.code || ''
  roleAs.value = projects.value[activeIndex.value]?.role || ''
  title.value = projects.value[activeIndex.value]?.title || ''
  short_desc.value = projects.value[activeIndex.value]?.short_desc || ''
  isPrevDisabled.value = activeIndex.value === 0
  isNextDisabled.value = activeIndex.value === projects.value.length - 1
  startDate.value = projects.value[activeIndex.value]?.startDate || 'None'
  endDate.value = projects.value[activeIndex.value]?.endDate || 'None'
}

// Set initial values when the component is mounted
onMounted(() => {
  console.log('Component mounted')
  updateDetails()
})
</script>
