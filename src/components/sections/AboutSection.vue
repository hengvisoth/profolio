<template>
  <section id="about" class="mb-10 md:mb-20 lg:mb-32">
    <div class="mx-auto w-full max-w-[1440px] px-6 py-10 md:px-16 md:py-16 lg:px-24 large:px-0">
      <div class="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
        <div class="flex flex-col gap-10 md:gap-12">
          <h2
            class="max-w-3xl text-[clamp(1.9rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em] [text-wrap:balance]"
          >
            I build mobile and web software that solves real operational problems.
          </h2>

          <p class="max-w-xl text-base leading-relaxed text-softwhite/65 md:text-lg">
            Flutter apps on the App Store, Node.js backends, Vue.js dashboards and ML-powered tools.
            All of it runs in production.
          </p>

          <dl class="grid gap-8 border-t border-white/10 pt-8 md:grid-cols-3">
            <div v-for="principle in principles" :key="principle.title">
              <dt class="font-semibold text-softwhite">{{ principle.title }}</dt>
              <dd class="mt-2 text-sm leading-relaxed text-softwhite/55">{{ principle.body }}</dd>
            </div>
          </dl>
        </div>

        <dl class="self-start">
          <div v-for="detail in details" :key="detail.label" class="flex items-baseline gap-3 py-2.5">
            <dt class="text-sm text-softwhite/45">{{ detail.label }}</dt>
            <i
              class="min-w-[1rem] flex-1 -translate-y-[0.25em] border-b border-dotted border-white/30"
              aria-hidden="true"
            ></i>
            <dd class="text-right text-sm text-softwhite md:text-base">
              <a
                v-if="detail.href"
                :href="detail.href"
                class="transition-colors hover:text-main focus-visible:outline focus-visible:outline-2 focus-visible:outline-main"
                target="_blank"
                rel="noopener"
              >
                {{ detail.value }}
              </a>
              <template v-else>{{ detail.value }}</template>
            </dd>
          </div>
        </dl>
      </div>
    </div>

    <div class="mt-12 flex w-full items-center justify-center">
      <div class="h-px w-[65%] max-w-xl bg-divider"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
const principles = [
  {
    title: 'Architecture first',
    body: 'Repository pattern and clean separation of concerns across every project.'
  },
  {
    title: 'One codebase, two stores',
    body: 'A single Flutter codebase ships to both the App Store and Play Store.'
  },
  {
    title: 'Built to stay up',
    body: 'Docker and Linux deployments. 100+ daily active users, zero downtime.'
  }
]

const details: { label: string; value: string; href?: string }[] = [
  { label: 'Degree', value: 'Software Engineering' },
  { label: 'Location', value: 'Phnom Penh, Cambodia' },
  { label: 'Languages', value: 'Khmer, English' },
  { label: 'Email', value: 'hengsoth68@gmail.com', href: 'mailto:hengsoth68@gmail.com' },
  { label: 'Phone', value: '+855 (0) 96 681 5223', href: 'tel:+855966815223' },
  { label: 'Telegram', value: '@visothhh', href: 'https://t.me/@visothhh' }
]
</script>
