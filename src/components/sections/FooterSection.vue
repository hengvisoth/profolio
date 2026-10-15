<template>
  <section id="contact" class="w-full pb-10 md:pb-16">
    <div class="mx-auto w-full max-w-[1440px] px-6 py-10 md:px-16 md:py-16 lg:px-24 large:px-0">
      <div>
        <h2
          class="max-w-4xl text-[clamp(2.2rem,5.6vw,4.75rem)] font-extrabold leading-[0.98] tracking-[-0.04em] [text-wrap:balance]"
        >
          Looking for a Flutter or full stack engineer? Let’s talk.
        </h2>

        <div class="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="mailto:hengsoth68@gmail.com"
            class="inline-flex items-center gap-2 rounded-md bg-main px-6 py-3 text-sm font-semibold text-background transition-colors duration-200 hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main md:text-base"
          >
            <Icon icon="solar:mailbox-bold" class="h-5 w-5" />
            Email me
          </a>
          <a
            href="tel:+855966815223"
            class="inline-flex items-center gap-2 rounded-md border border-white/15 px-6 py-3 text-sm font-semibold text-softwhite transition-colors duration-200 hover:border-main hover:text-main focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main md:text-base"
          >
            <Icon icon="solar:phone-bold" class="h-5 w-5" />
            Call
          </a>
          <a
            href="/resume/Heng_RatanakVisoth_CV.pdf"
            download
            class="inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-softwhite/70 transition-colors duration-200 hover:text-main focus-visible:outline focus-visible:outline-2 focus-visible:outline-main md:text-base"
          >
            <Icon icon="solar:download-square-broken" class="h-5 w-5" />
            Download CV
          </a>
        </div>

        <div
          class="mt-16 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 text-sm text-softwhite/45 md:mt-24"
        >
          <p>Heng Ratanak Visoth, Phnom Penh, Cambodia</p>
          <div class="flex items-center gap-1">
            <a
              v-for="item in socialLinks"
              :key="item.label"
              :href="item.url"
              :aria-label="item.label"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors duration-200 hover:text-main focus-visible:outline focus-visible:outline-2 focus-visible:outline-main"
            >
              <font-awesome-icon :icon="item.icon" class="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { socail } from '../../data/socail'

const socialLinks = [
  { label: 'LinkedIn', icon: ['fab', 'linkedin'], url: socail.linkedin.url },
  { label: 'GitHub', icon: ['fab', 'github'], url: socail.github.url },
  { label: 'Telegram', icon: ['fab', 'telegram'], url: socail.telegram.url }
]
</script>
