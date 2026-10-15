<template>
  <section id="skills" class="relative mb-10 w-full md:mb-20 lg:mb-32">
    <div class="mx-auto w-full max-w-[1440px] px-6 py-10 md:px-16 md:py-16 lg:px-24 large:px-0">
      <div class="max-w-2xl">
        <h2 class="text-[clamp(1.9rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em]">
          What I work with
        </h2>
        <p class="mt-4 text-base text-softwhite/65 md:text-lg">
          Bottom to top, this is the stack behind most of my apps.
        </p>
      </div>

      <!-- The stack is drawn the way a request travels: app on top, servers underneath. -->
      <div ref="stack" class="mt-12 md:mt-16" :class="{ shown }">
        <ol class="relative">
          <span class="absolute bottom-6 left-[6px] top-6 w-px bg-white/10" aria-hidden="true"></span>
          <span class="rail absolute bottom-6 left-[6px] top-6 w-px bg-main" aria-hidden="true"></span>

          <li
            v-for="(layer, index) in layers"
            :key="layer.id"
            class="layer relative border-t border-white/[0.07] pl-9 first:border-t-0"
            :style="{ '--i': layers.length - 1 - index }"
          >
            <span
              class="node absolute left-0 top-[1.9rem] h-3.5 w-3.5 rounded-full border-2 border-white/25 bg-background md:top-1/2 md:-translate-y-1/2"
            ></span>
            <div class="grid gap-4 py-6 md:grid-cols-[160px_1fr] md:items-center md:gap-8">
              <h3 class="text-lg font-semibold text-softwhite">{{ layer.label }}</h3>
              <ul class="flex flex-wrap gap-3">
                <li
                  v-for="skill in layer.skills"
                  :key="skill.name"
                  class="group flex w-24 flex-col items-center gap-2 rounded-xl border bg-surface-strong px-2 py-3 text-center transition-colors duration-200"
                  :class="
                    isPrimary(skill.name)
                      ? 'border-main/40 hover:border-main'
                      : 'border-white/[0.07] hover:border-white/30'
                  "
                >
                  <img
                    :src="skill.icon"
                    :alt="label(skill.name)"
                    class="h-9 w-9 object-contain"
                    loading="lazy"
                  />
                  <span
                    class="flex min-h-[2lh] items-center text-xs leading-tight text-softwhite/70 transition-colors group-hover:text-softwhite"
                  >
                    {{ label(skill.name) }}
                  </span>
                </li>
              </ul>
            </div>
          </li>
        </ol>
        <p class="mt-4 text-sm text-softwhite/40">Outlined: what I use most.</p>
      </div>
    </div>

    <div class="mt-12 flex w-full items-center justify-center">
      <div class="h-px w-[65%] max-w-xl bg-divider"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { skillData } from '../../data/skill'
import type { skillType } from '../../types/skill.dto'

const layerOrder: { id: skillType['layer']; label: string }[] = [
  { id: 'app', label: 'Mobile' },
  { id: 'web', label: 'Web' },
  { id: 'api', label: 'Backend' },
  { id: 'data', label: 'Data' },
  { id: 'infra', label: 'Infrastructure' }
]
const layers = layerOrder.map((layer) => ({
  ...layer,
  skills: skillData.filter((skill) => skill.layer === layer.id)
}))

const shortNames: Record<string, string> = {
  'Amazon Web Service': 'AWS',
  'Firebase Cloud Service': 'Firebase',
  'Microsoft SQL Server': 'SQL Server',
  'Linux/Ubuntu': 'Linux',
  'Mongo DB': 'MongoDB',
  'Node Js': 'Node.js',
  'Nest Js': 'NestJS',
  'Vue Js': 'Vue.js',
  'React Js': 'React',
  'Next Js': 'Next.js',
  'Android/IOS': 'Android / iOS'
}
const label = (name: string) => shortNames[name] ?? name
const primary = new Set(['Flutter', 'Vue Js', 'Node Js', 'TypeScript'])
const isPrimary = (name: string) => primary.has(name)

// The stack builds from the bottom up once, the first time it scrolls into view.
const stack = ref<HTMLElement | null>(null)
const shown = ref(false)
let observer: IntersectionObserver | null = null
onMounted(() => {
  if (!stack.value || !('IntersectionObserver' in window)) {
    shown.value = true
    return
  }
  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return
      shown.value = true
      observer?.disconnect()
    },
    { threshold: 0.25 }
  )
  observer.observe(stack.value)
})
onBeforeUnmount(() => observer?.disconnect())
</script>

<style scoped>
.layer {
  opacity: 0;
  transform: translateY(14px);
  transition:
    opacity 0.5s ease calc(var(--i) * 0.16s),
    transform 0.5s ease calc(var(--i) * 0.16s);
}
.shown .layer {
  opacity: 1;
  transform: none;
}

.node {
  transition:
    background-color 0.3s ease calc(var(--i) * 0.16s),
    border-color 0.3s ease calc(var(--i) * 0.16s);
}
.shown .node {
  background-color: rgb(var(--c-main));
  border-color: rgb(var(--c-main));
}

.rail {
  transform: scaleY(0);
  transform-origin: bottom center;
  transition: transform 0.9s cubic-bezier(0.4, 0, 0.2, 1);
}
.shown .rail {
  transform: scaleY(1);
}

@media (prefers-reduced-motion: reduce) {
  .layer,
  .node,
  .rail {
    opacity: 1;
    transform: none;
    transition: none;
  }
  .node {
    background-color: rgb(var(--c-main));
    border-color: rgb(var(--c-main));
  }
}
</style>
