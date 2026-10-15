<template>
  <div class="grid xl:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] xl:gap-20">
    <div>
      <article
        v-for="(item, index) in projects"
        :key="item.id"
        :ref="(el) => setEl(el, index)"
        :data-index="index"
        class="flex flex-col gap-8 border-t border-white/10 py-12 first:border-t-0 first:pt-0 xl:min-h-[80vh] xl:justify-center xl:border-t-0 xl:py-10 xl:transition-opacity xl:duration-500"
        :class="isWide && index !== activeIndex ? 'opacity-25' : 'opacity-100'"
      >
        <div
          v-if="!isWide"
          class="relative h-[260px] overflow-hidden rounded-xl border border-white/[0.07] bg-surface-strong sm:h-[340px] md:h-[420px]"
        >
          <template v-if="seen[index]">
            <ProjectArt v-if="item.art" :kind="item.art" class="p-4 md:p-8" />
            <img
              v-else
              :src="item.imageUrl"
              :alt="`${item.title} poster`"
              class="mx-auto h-full max-w-full object-contain p-6"
            />
          </template>
          <img
            v-if="item.art"
            :src="item.imageUrl"
            :alt="`${item.title} logo`"
            class="absolute left-4 top-4 h-11 w-11 rounded-lg bg-white object-contain p-1 md:left-5 md:top-5 md:h-14 md:w-14"
          />
        </div>

        <div class="flex flex-col gap-4">
          <span
            v-if="item.art"
            class="flex h-11 w-11 items-center justify-center rounded-xl bg-main/10 text-main"
          >
            <Icon :icon="artIcons[item.art]" class="h-6 w-6" />
          </span>
          <h3 class="text-3xl font-bold tracking-tight md:text-4xl xl:text-5xl">
            {{ item.title }}
          </h3>
          <p class="text-softwhite/50">
            {{ item.role }}<template v-if="item.company"> at {{ item.company }}</template>,
            {{ period(item) }}
          </p>
        </div>

        <div class="flex max-w-xl flex-col gap-3">
          <p v-if="item.outcome" class="text-lg leading-snug text-softwhite md:text-xl">
            {{ item.outcome }}
          </p>
          <p class="leading-relaxed text-softwhite/55">{{ item.short_desc }}</p>
        </div>

        <dl
          v-if="item.caseStudy"
          class="grid gap-x-10 gap-y-6 border-t border-white/10 pt-6 sm:grid-cols-2"
        >
          <div v-for="entry in caseStudyEntries(item)" :key="entry.label">
            <dt class="text-sm text-softwhite/45">{{ entry.label }}</dt>
            <dd class="mt-1 text-sm leading-relaxed text-softwhite/80">{{ entry.value }}</dd>
          </div>
        </dl>

        <ul v-if="item.highlights" class="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <li
            v-for="highlight in item.highlights"
            :key="highlight.label"
            class="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-surface-strong px-3 py-3"
          >
            <span
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-main/10 text-main"
            >
              <Icon :icon="highlight.icon" class="h-6 w-6" />
            </span>
            <span class="text-sm leading-snug text-softwhite/85">{{ highlight.label }}</span>
          </li>
        </ul>

        <ul class="flex flex-wrap gap-x-5 gap-y-2">
          <li
            v-for="tech in item.technologies"
            :key="tech.name"
            class="flex items-center gap-2 text-sm text-softwhite/70"
          >
            <img
              v-if="tech.icon?.logo"
              :src="tech.icon.logo"
              alt=""
              class="h-4 w-4 rounded-sm bg-white p-0.5"
            />
            {{ tech.name }}
          </li>
        </ul>
      </article>
    </div>

    <!-- Wide screens: one stage stays pinned while the text scrolls past it. -->
    <div
      v-if="isWide"
      class="sticky top-[max(6rem,calc(50vh-18rem))] self-start"
    >
      <div
        class="relative h-[460px] overflow-hidden rounded-xl border border-white/[0.07] bg-surface-strong"
      >
        <Transition name="stage" mode="out-in">
          <ProjectArt
            v-if="active.art"
            :key="activeIndex"
            :kind="active.art"
            class="p-8"
          />
          <img
            v-else
            :key="`img-${activeIndex}`"
            :src="active.imageUrl"
            :alt="`${active.title} poster`"
            class="mx-auto h-full max-w-full object-contain p-8"
          />
        </Transition>
        <img
          v-if="active.art"
          :src="active.imageUrl"
          :alt="`${active.title} logo`"
          class="absolute left-5 top-5 h-14 w-14 rounded-lg bg-white object-contain p-1"
        />
      </div>

      <div class="mt-5 flex items-center gap-5">
        <ol class="flex flex-1 gap-2">
          <li v-for="(item, index) in projects" :key="item.id" class="flex-1">
            <button
              type="button"
              class="group block h-6 w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-main"
              :aria-label="`Jump to ${item.title}`"
              :aria-current="index === activeIndex"
              @click="go(index)"
            >
              <span
                class="block h-1 w-full rounded-full transition-colors duration-300"
                :class="index <= activeIndex ? 'bg-main' : 'bg-white/15 group-hover:bg-white/30'"
              ></span>
            </button>
          </li>
        </ol>
        <span class="text-sm tabular-nums text-softwhite/45">
          {{ activeIndex + 1 }} of {{ projects.length }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import { Icon } from '@iconify/vue'
import ProjectArt from '@/components/visuals/ProjectArt.vue'
import { projectsData } from '../data/project'
import type { projectType } from '../types/project.dto'

const projects: projectType[] = projectsData

const artIcons: Record<NonNullable<projectType['art']>, string> = {
  pos: 'solar:cart-large-2-bold-duotone',
  plate: 'solar:car-bold-duotone',
  face: 'solar:face-scan-circle-bold-duotone',
  delivery: 'solar:delivery-bold-duotone',
  shop: 'solar:bag-4-bold-duotone'
}

const activeIndex = ref(0)
const active = computed(() => projects[activeIndex.value])

// Below xl every project sits in one column with its own scene, so nothing is hidden.
const wide = window.matchMedia('(min-width: 1280px)')
const isWide = ref(wide.matches)
const onWideChange = (event: MediaQueryListEvent) => {
  isWide.value = event.matches
}

// Narrow layout: a scene only plays once its project scrolls into view.
const seen = ref<boolean[]>(projects.map(() => false))

const els: (HTMLElement | null)[] = []
const setEl = (el: Element | ComponentPublicInstance | null, index: number) => {
  els[index] = el as HTMLElement | null
}

let observer: IntersectionObserver | null = null
const observe = () => {
  observer?.disconnect()
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const index = Number((entry.target as HTMLElement).dataset.index)
        if (isWide.value) activeIndex.value = index
        else seen.value[index] = true
      }
    },
    // Wide: a thin band across the middle of the screen decides which project is active.
    isWide.value ? { rootMargin: '-45% 0px -45% 0px' } : { threshold: 0.3 }
  )
  els.forEach((el) => el && observer?.observe(el))
}

const go = (index: number) => {
  els[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

watch(isWide, () => nextTick(observe))
onMounted(() => {
  wide.addEventListener('change', onWideChange)
  observe()
})
onBeforeUnmount(() => {
  wide.removeEventListener('change', onWideChange)
  observer?.disconnect()
})

const caseStudyEntries = (item: projectType) => {
  const study = item.caseStudy
  if (!study) return []
  return [
    { label: 'Problem', value: study.problem },
    { label: 'Architecture', value: study.architecture },
    { label: 'Challenge', value: study.challenge },
    { label: 'Result', value: study.result }
  ]
}

// Dates in the data are messy ('Jul ,2024', '**, Feb ,2022'), so pull out month + year.
const tidyDate = (raw: string) => {
  const match = raw.match(/([A-Za-z]{3})\s*,\s*(\d{4})/)
  return match ? `${match[1]} ${match[2]}` : raw
}
const period = (item: projectType) => `${tidyDate(item.startDate)} to ${tidyDate(item.endDate)}`
</script>

<style scoped>
.stage-enter-active {
  transition: opacity 0.3s ease;
}
.stage-leave-active {
  transition: opacity 0.15s ease;
}
.stage-enter-from,
.stage-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .stage-enter-active,
  .stage-leave-active {
    transition: none;
  }
}
</style>
