<template>
  <section id="home" class="mb-10 md:mb-20 lg:mb-32 overflow-hidden">
    <div
      class="relative z-10 mx-auto w-full max-w-[1440px] px-6 pt-[80px] pb-14 md:px-16 md:pt-[96px] md:pb-24 lg:px-24 lg:pt-[120px] lg:pb-28 large:px-0"
    >
      <div class="glass-panel overflow-hidden px-6 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16">
        <div class="relative grid items-center gap-12 lg:grid-cols-[minmax(0,420px)_1fr]">
          <div data-aos="zoom-in" class="order-2 lg:order-1 flex w-full flex-col space-y-8">
            <div class="space-y-4 md:space-y-6">
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                Hey, I'm <span class="text-main">Visoth</span>
              </h1>

              <div class="glass-card px-5 py-4">
                <span class="text-lg text-softwhite/50 md:text-xl">
                  Flutter · Vue.js · Node.js
                </span>
                <div class="mt-1 min-h-[2.25rem] md:min-h-[2.75rem] lg:min-h-[3rem] flex items-center">
                  <vue-writer
                    class="text-xl font-semibold text-main md:text-2xl lg:text-3xl"
                    :array="['Flutter Developer', 'Full Stack Developer', 'Mobile App Developer']"
                    :eraseSpeed="40"
                    :typeSpeed="80"
                    :delay="1200"
                    :intervals="[3000, 3000, 3000]"
                  />
                </div>
              </div>

              <p class="max-w-xl text-base md:text-lg text-softwhite/70 leading-relaxed">
                3+ years shipping production apps — 10 Flutter &amp; web apps, 30+ B2B clients, 100+
                daily active users. I own the full stack from database to app store.
              </p>
            </div>

            <div class="flex flex-wrap items-center gap-4">
              <button
                @click="handleContact"
                class="inline-flex items-center gap-2 rounded-full bg-main px-6 py-3 text-sm md:text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-strong active:scale-95"
              >
                <Icon icon="solar:mailbox-bold" class="h-5 w-5" />
                Get in touch
              </button>

              <a
                href="/resume/Heng_RatanakVisoth_CV.pdf"
                download
                class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm md:text-base font-semibold text-softwhite transition-all duration-200 hover:-translate-y-0.5 hover:border-main/50 hover:text-main active:scale-95"
              >
                <Icon icon="solar:download-square-broken" class="h-5 w-5" />
                Download CV
              </a>
            </div>

            <div class="flex flex-wrap items-center gap-3 pt-2">
              <p class="pr-2 text-sm uppercase tracking-[0.3em] text-softwhite/30">Find me on</p>
              <template v-for="(item, index) in socialLinks" :key="index">
                <a
                  :href="item.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-softwhite/60 transition-all duration-200 hover:-translate-y-0.5 hover:border-main/50 hover:text-main"
                >
                  <font-awesome-icon :icon="item.icon" class="h-4 w-4" />
                </a>
              </template>
            </div>
          </div>

          <div class="order-1 lg:order-2 mx-auto flex justify-center">
            <div
              class="w-[240px] overflow-hidden rounded-2xl border border-white/10 md:w-[360px] lg:w-[420px]"
            >
              <img
                src="../../../public/pf.jpeg"
                alt="Visoth"
                class="object-cover w-full transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div class="grid w-full gap-4 pt-10 sm:grid-cols-3">
          <div v-for="stat in heroStats" :key="stat.label" class="glass-card p-5">
            <p class="text-3xl font-semibold text-main">{{ stat.value }}</p>
            <p class="mt-1 text-sm font-medium text-softwhite">{{ stat.label }}</p>
            <p class="mt-1 text-xs text-softwhite/50">{{ stat.caption }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="relative z-10 mt-8 flex w-full items-center justify-center">
      <div class="h-px w-[65%] max-w-xl bg-divider"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { VueWriter } from 'vue-writer'
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { socail } from '../../data/socail'

const socailData = ref(socail)
const socialLinks = [
  { icon: ['fab', 'linkedin'], url: socailData.value.linkedin.url },
  { icon: ['fab', 'github'], url: socailData.value.github.url },
  { icon: ['fab', 'telegram'], url: socailData.value.telegram.url }
]

const heroStats = [
  {
    value: '10+',
    label: 'Production apps shipped',
    caption: 'App Store & Play Store across Flutter and web.'
  },
  {
    value: '30+',
    label: 'Clients served',
    caption: 'B2B products relied on for daily operations.'
  },
  {
    value: '100+',
    label: 'Daily active users',
    caption: 'Zero-downtime platforms running in production.'
  }
]

const handleContact = () => {
  window.open(
    'https://mail.google.com/mail/u/0/?source=mailto&to=hengsoth68@gmail.com&fs=1&tf=cm',
    '_blank'
  )
}
</script>
