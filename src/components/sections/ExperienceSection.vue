<template>
  <section id="experience" class="mb-10 md:mb-20 lg:mb-32">
    <div class="mx-auto w-full max-w-[1440px] px-6 py-10 md:px-16 md:py-16 lg:px-24 large:px-0">
      <div class="max-w-2xl">
        <h2 class="text-[clamp(1.9rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em]">
          {{ content.title }}
        </h2>
        <p class="mt-4 text-base text-softwhite/65 md:text-lg">{{ content.description }}</p>
      </div>

      <!-- Tenure chart: each bar sits where the job sits on the calendar, so overlaps show. -->
      <div ref="chart" class="mt-12 md:mt-16" :class="{ shown }">
        <ol>
          <li aria-hidden="true" class="md:grid md:grid-cols-[280px_1fr] md:gap-x-6">
            <span class="hidden md:block"></span>
            <span class="relative block h-5">
              <span
                v-for="tick in ticks"
                :key="tick.label"
                class="absolute text-xs tabular-nums text-softwhite/40"
                :class="tick.nearEnd ? '-translate-x-full pr-1.5' : 'pl-1.5'"
                :style="{ left: tick.left }"
              >
                {{ tick.label }}
              </span>
            </span>
          </li>

          <li v-for="(role, index) in rows" :key="`${role.company}-${role.dateRange}`">
            <div
              class="grid items-center gap-x-6 gap-y-2 py-3.5 md:grid-cols-[280px_1fr]"
              :title="role.dateRange"
            >
              <span class="block">
                <span class="block font-semibold text-softwhite">{{ role.company }}</span>
                <span class="block text-sm text-softwhite/50">{{ role.role }}</span>
              </span>
              <span class="relative block h-8">
                <span
                  v-for="tick in ticks"
                  :key="tick.label"
                  class="absolute inset-y-0 w-px bg-white/[0.07]"
                  :style="{ left: tick.left }"
                ></span>
                <span
                  class="bar absolute inset-y-1 rounded-md"
                  :class="role.partTime ? 'hatch' : 'bg-main'"
                  :style="{ left: role.left, width: role.width, '--d': `${index * 0.12}s` }"
                ></span>
                <span
                  class="bar-label absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-xs tabular-nums text-softwhite/55"
                  :style="{ ...role.labelPos, '--d': `${index * 0.12}s` }"
                >
                  {{ role.duration }}
                </span>
              </span>
            </div>
          </li>
        </ol>
        <p class="mt-3 text-sm text-softwhite/40">Hatched bars were part-time.</p>
      </div>

      <div class="mt-16 grid gap-14 border-t border-white/10 pt-14 md:mt-24 lg:grid-cols-2 lg:gap-24">
        <div>
          <h3 class="text-2xl font-bold tracking-tight md:text-3xl">{{ content.educationTitle }}</h3>
          <ul class="mt-6">
            <li
              v-for="item in content.education"
              :key="`${item.degree}-${item.school}`"
              class="flex items-baseline justify-between gap-6 border-t border-white/10 py-4 first:border-t-0 first:pt-0"
            >
              <div>
                <p class="font-medium text-softwhite">{{ item.degree }}</p>
                <p class="mt-1 text-sm text-softwhite/50">{{ item.school }}</p>
              </div>
              <span class="shrink-0 text-sm tabular-nums text-softwhite/45">{{ item.yearRange }}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-2xl font-bold tracking-tight md:text-3xl">{{ content.achievementsLabel }}</h3>
          <ul class="mt-6 space-y-6">
            <li
              v-for="(achievement, index) in content.achievements"
              :key="achievement.title"
              class="flex gap-4"
            >
              <span
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-main/10 text-main"
              >
                <Icon :icon="achievementIcons[index] ?? achievementIcons[0]" class="h-6 w-6" />
              </span>
              <div>
                <p class="font-medium text-softwhite">{{ achievement.title }}</p>
                <p class="mt-1 text-sm leading-relaxed text-softwhite/55">
                  {{ achievement.description }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mt-12 flex w-full items-center justify-center">
      <div class="h-px w-[65%] max-w-xl bg-divider"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { careerHistoryContent as content } from '@/data/careerHistory'

const achievementIcons = [
  'solar:cup-star-bold-duotone',
  'solar:medal-ribbons-star-bold-duotone',
  'solar:star-shine-bold-duotone'
]

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
// 'Sep 2025' -> a month counter, so spans between dates are plain subtraction.
const monthIndex = (text: string) => {
  const match = text.match(/([A-Za-z]{3})\s+(\d{4})/)
  return match ? Number(match[2]) * 12 + MONTHS.indexOf(match[1]) : 0
}

const spans = content.experiences.map((role) => {
  const [from, to] = role.dateRange.split(' - ')
  // The end month is worked in full, so the bar runs to the start of the next one.
  return { start: monthIndex(from), end: monthIndex(to) + 1 }
})
const first = Math.min(...spans.map((s) => s.start))
const last = Math.max(...spans.map((s) => s.end))
const percent = (months: number) => `${((months / (last - first)) * 100).toFixed(3)}%`

const duration = (months: number) => {
  const years = Math.floor(months / 12)
  const rest = months % 12
  if (!years) return `${rest} months`
  return rest ? `${years} yr ${rest} mo` : `${years} yr`
}

const rows = content.experiences.map((role, index) => {
  const { start, end } = spans[index]
  const total = last - first
  // The duration sits just past the bar's end, or just before its start when the bar nears the edge.
  const labelPos =
    (end - first) / total > 0.82
      ? { right: `calc(${100 - ((start - first) / total) * 100}% + 8px)` }
      : { left: `calc(${((end - first) / total) * 100}% + 8px)` }
  return {
    company: role.company,
    role: role.role,
    dateRange: role.dateRange,
    partTime: role.companyType === 'Part-time',
    left: percent(start - first),
    width: percent(end - start),
    duration: duration(end - start),
    labelPos
  }
})

const ticks: { label: string; left: string; nearEnd: boolean }[] = []
for (let year = Math.ceil(first / 12); year * 12 < last; year++) {
  if (year * 12 <= first) continue
  // A label that would run past the right edge is drawn to the left of its line instead.
  const nearEnd = (year * 12 - first) / (last - first) > 0.9
  ticks.push({ label: String(year), left: percent(year * 12 - first), nearEnd })
}

// Bars grow in once, the first time the chart scrolls into view.
const chart = ref<HTMLElement | null>(null)
const shown = ref(false)
let observer: IntersectionObserver | null = null
onMounted(() => {
  if (!chart.value || !('IntersectionObserver' in window)) {
    shown.value = true
    return
  }
  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return
      shown.value = true
      observer?.disconnect()
    },
    { threshold: 0.35 }
  )
  observer.observe(chart.value)
})
onBeforeUnmount(() => observer?.disconnect())
</script>

<style scoped>
.bar {
  transform: scaleX(0);
  transform-origin: left center;
  transition:
    transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) var(--d, 0s),
    filter 0.2s;
}
.shown .bar {
  transform: scaleX(1);
}
.bar-label {
  opacity: 0;
  transition: opacity 0.4s ease calc(var(--d, 0s) + 0.7s);
}
.shown .bar-label {
  opacity: 1;
}
.hatch {
  border: 1px solid rgb(var(--c-main) / 0.6);
  background: repeating-linear-gradient(
    135deg,
    rgb(var(--c-main) / 0.5) 0 6px,
    rgb(var(--c-main) / 0.14) 6px 12px
  );
}

@media (prefers-reduced-motion: reduce) {
  .bar {
    transform: none;
    transition: none;
  }
  .bar-label {
    opacity: 1;
    transition: none;
  }
}
</style>
