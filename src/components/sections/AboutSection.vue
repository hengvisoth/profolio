<template>
  <section class="mb-10 md:mb-20 lg:mb-32">
    <div
      id="about"
      class="mx-auto w-full max-w-[1440px] px-6 pt-10 pb-10 md:px-16 md:pb-16 lg:px-24 lg:pb-20 large:px-0"
    >
      <div class="glass-panel overflow-hidden px-6 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16">
        <span
          class="pointer-events-none absolute -right-24 top-[-35%] h-72 w-72 rounded-full bg-gradient-to-br from-main/20 via-accent/15 to-primary/20 blur-3xl"
        ></span>
        <span
          class="pointer-events-none absolute -bottom-24 left-[-20%] h-80 w-80 rounded-full bg-gradient-to-r from-primary/20 via-transparent to-main/25 blur-3xl"
        ></span>

        <!-- Header -->
        <div
          class="relative z-10 col-span-full mb-12 inline-flex w-full flex-col items-center text-center"
        >
          <div class="glass-chip text-xs uppercase tracking-[0.3em] text-softwhite/80">About</div>
          <h1 class="mt-4 text-3xl font-semibold md:text-4xl lg:text-[2.75rem]">
            Who <span class="text-main">I Am</span>
          </h1>
          <div class="mt-6 w-32">
            <div class="glass-divider"></div>
          </div>
        </div>

        <!-- Content -->
        <div
          class="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1.1fr] lg:grid-cols-[0.85fr_1.15fr]"
        >
          <!-- Image -->
          <div class="flex justify-center">
            <div
              class="glass-panel flex h-full max-w-[400px] items-center justify-center overflow-hidden rounded-[32px] p-6"
            >
              <img
                src="../../../public/pf.jpeg"
                alt="About Me"
                class="h-[260px] w-[260px] rounded-full border border-white/10 object-cover shadow-[0_25px_60px_-40px_rgba(249,115,22,0.45)] md:h-[320px] md:w-[320px] lg:h-[360px] lg:w-[360px]"
              />
            </div>
          </div>

          <div class="flex flex-col gap-8 lg:gap-10">
            <!-- Paragraph -->
            <div class="glass-card p-6 md:p-8">
              <h6 class="text-h3-sm font-semibold text-primary md:text-h3-md lg:text-h3-lg">
                Full-Stack &amp; Mobile Engineer
              </h6>
              <p class="mt-3 leading-relaxed text-softwhite/80">
                Flutter developer with 3+ years of experience transforming manual business
                workflows into modern, scalable mobile solutions. Successfully shipped
                <span class="font-semibold text-softwhite">10 production-ready apps</span>,
                modernizing daily operations for
                <span class="font-semibold text-softwhite">30+ clients</span>. I specialize in
                delivering 100% cross-platform parity from a single codebase, ensuring a completely
                smooth, reliable daily experience for
                <span class="font-semibold text-softwhite">100+ active users</span>.
              </p>
            </div>

            <!-- How I Build -->
            <div class="glass-card p-6 md:p-8">
              <h6 class="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-softwhite/50">
                How I Build
              </h6>
              <ul class="flex flex-col gap-3">
                <li
                  v-for="principle in buildPrinciples"
                  :key="principle"
                  class="flex items-start gap-3 text-sm text-softwhite/80 md:text-base"
                >
                  <span class="mt-0.5 h-5 w-5 shrink-0 text-main">
                    <Icon icon="solar:check-circle-bold" class="h-5 w-5" />
                  </span>
                  {{ principle }}
                </li>
              </ul>
            </div>

            <!-- Details -->
            <div class="grid gap-4 md:grid-cols-2">
              <div
                v-for="detail in aboutDetails"
                :key="detail.label"
                class="glass-card flex items-center gap-3 p-4 transition-transform duration-300 hover:-translate-y-1"
              >
                <Icon :icon="detail.icon" class="h-7 w-7 text-main" />
                <p class="text-sm md:text-base">
                  <span class="font-medium text-softwhite/80">{{ detail.label }}:</span>
                  <span class="ml-2 text-softwhite">
                    <template v-if="detail.href">
                      <a :href="detail.href" class="hover:underline" target="_blank" rel="noopener">
                        {{ detail.value }}
                      </a>
                    </template>
                    <template v-else>{{ detail.value }}</template>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Separator -->
    <div class="mt-12 flex w-full items-center justify-center">
      <div class="glass-divider max-w-xl"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const buildPrinciples = [
  'Architecture-first: Repository pattern and clean separation of concerns across every project.',
  'Cross-platform parity: single Flutter codebase shipped to App Store and Play Store.',
  'Production-minded: Docker, Linux deployments — 100+ daily active users, zero downtime.'
]

const aboutDetails = [
  { label: 'Degree', value: 'Software Engineering', icon: 'hugeicons:student' },
  { label: 'Location', value: 'Phnom Penh, Cambodia', icon: 'mdi:location' },
  {
    label: 'Email',
    value: 'hengsoth68@gmail.com',
    href: 'mailto:hengsoth68@gmail.com',
    icon: 'ic:outline-email'
  },
  {
    label: 'Phone',
    value: '+855 (0) 96 681 5223',
    href: 'tel:+855966815223',
    icon: 'majesticons:phone-dial-line'
  },
  { label: 'Languages', value: 'Khmer, English', icon: 'mdi:spoken-language' },
  {
    label: 'Telegram',
    value: '@visothhh',
    href: 'https://t.me/@visothhh',
    icon: 'basil:telegram-solid'
  }
]
</script>
