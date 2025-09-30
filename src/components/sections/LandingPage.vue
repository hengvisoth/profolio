<template>
  <section id="home" class="mb-10 md:mb-20 lg:mb-32 overflow-hidden">
    <div class="pointer-events-none absolute -right-40 -top-40 hidden lg:block">
      <div
        class="h-80 w-80 rounded-full bg-gradient-to-br from-main/60 via-accent/50 to-primary/70 blur-3xl opacity-70"
      ></div>
    </div>
    <div
      class="relative z-10 mx-auto w-full max-w-[1440px] px-6 pt-[80px] pb-14 md:px-16 md:pt-[96px] md:pb-24 lg:px-24 lg:pt-[120px] lg:pb-28 large:px-0"
    >
      <div class="glass-panel overflow-hidden px-6 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16">
        <span
          class="pointer-events-none absolute -left-32 top-[-45%] h-80 w-80 rounded-full bg-gradient-to-r from-main/15 via-accent/10 to-primary/20 blur-3xl"
        ></span>
        <span
          class="pointer-events-none absolute -bottom-28 right-0 h-72 w-72 rounded-full bg-gradient-to-tr from-main/20 via-transparent to-primary/25 blur-3xl"
        ></span>

        <div class="relative grid items-center gap-12 lg:grid-cols-[minmax(0,420px)_1fr]">
          <div data-aos="zoom-in" class="order-2 lg:order-1 flex w-full flex-col space-y-8">
            <div
            class="glass-chip inline-flex items-center gap-2 self-start text-xs uppercase tracking-[0.2em] text-softwhite/80"
          >
            <span class="h-2 w-2 rounded-full bg-main shadow-[0_0_12px_rgba(234,88,12,0.8)]"></span>
            Available for opportunities
          </div>

          <div class="space-y-4 md:space-y-6">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Hey, I’m
              <span
                class="bg-gradient-to-r from-main via-accent to-primary bg-clip-text text-transparent"
              >
                Visoth
              </span>
            </h1>

            <div
              class="glass-card flex flex-wrap items-center gap-3 px-5 py-4 text-xl md:text-2xl lg:text-3xl font-medium text-softwhite/90"
            >
              <span class="text-softwhite/70">Crafting delightful web experiences as a</span>
              <vue-writer
                class="bg-clip-text text-transparent bg-gradient-to-r from-main via-softwhite to-accent"
                :array="['Front-End Developer|', 'UI Engineer|', 'Design System Lover|']"
                :eraseSpeed="40"
                :typeSpeed="90"
                :delay="1200"
              />
            </div>

            <p class="max-w-xl text-base md:text-lg text-softwhite/80 leading-relaxed">
              I craft responsive, accessible interfaces with modern Vue ecosystems. My work blends
              thoughtful interaction design with performance-focused engineering, resulting in
              experiences that feel polished, immersive, and fast on every device.
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-5">
            <button
              @click="handleContact"
              data-aos="fade-up"
              data-aos-delay="150"
              class="relative inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm md:text-base font-semibold text-background shadow-glow-warm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-18px_rgba(234,88,12,0.65)] active:scale-95"
            >
              <Icon icon="solar:mailbox-bold" class="h-5 w-5" />
              Let’s collaborate
            </button>

            <a href="/resume/Heng_RatanakVisoth_CV.pdf" download class="group inline-flex">
              <span
                data-aos="fade-up"
                data-aos-delay="220"
                class="relative inline-flex items-center gap-2 overflow-hidden rounded-full px-[1px] py-[1px]"
              >
                <span
                  class="absolute inset-0 bg-gradient-to-r from-main via-accent to-primary opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                ></span>
                <span
                  class="relative inline-flex items-center gap-2 rounded-full bg-surface px-6 py-3 text-sm md:text-base font-semibold text-softwhite backdrop-blur-brand ring-1 ring-divider transition-all duration-300 group-hover:-translate-y-1 group-hover:text-softwhite/90"
                >
                  <Icon icon="solar:download-square-broken" class="h-5 w-5" />
                  Download CV
                </span>
              </span>
            </a>
          </div>

          <div class="flex flex-wrap items-center gap-3 pt-2">
            <p class="pr-2 text-sm uppercase tracking-[0.3em] text-softwhite/40">Find me on</p>
            <template v-for="(item, index) in socialLinks" :key="index">
              <a
                :href="item.url"
                target="_blank"
                rel="noopener noreferrer"
                class="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-divider bg-surface text-softwhite/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-main/70 hover:text-main hover:shadow-glow"
              >
                <font-awesome-icon
                  :icon="item.icon"
                  class="h-4 w-4 transition-transform group-hover:scale-110"
                />
              </a>
            </template>
          </div>

          <div class="grid w-full gap-4 pt-6 sm:grid-cols-3">
            <div
              v-for="stat in heroStats"
              :key="stat.label"
              class="glass-card p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <p class="text-2xl font-semibold text-softwhite">{{ stat.value }}</p>
              <p class="text-sm text-softwhite/60">{{ stat.label }}</p>
              <p class="mt-1 text-xs text-softwhite/50">{{ stat.caption }}</p>
            </div>
          </div>
        </div>

        <div data-aos="zoom-in-up" class="order-1 lg:order-2 mx-auto flex justify-center">
          <div class="relative">
            <span
              class="absolute -inset-4 hidden md:block rounded-[40%] bg-gradient-to-br from-main/40 via-accent/30 to-primary/50 blur-2xl opacity-90"
            ></span>
            <div
              class="glass-panel relative w-[240px] overflow-hidden rounded-[32px] md:w-[360px] lg:w-[420px]"
            >
              <div
                class="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent"
              ></div>
              <img
                src="../../../public/pf.jpeg"
                alt="Visoth Profile"
                class="relative z-10 h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>

            <span
              v-for="floating in floatingIcons"
              :key="floating.icon"
              :class="['floating-icon', floating.position]"
              :style="{ animationDelay: floating.delay }"
            >
              <Icon :icon="floating.icon" class="h-5 w-5 text-main" />
            </span>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div class="relative z-10 mt-8 flex w-full items-center justify-center">
      <div class="h-[2px] w-[65%] max-w-xl rounded-full bg-divider"></div>
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
  { icon: ['fab', 'telegram'], url: socailData.value.telegram.url },
  { icon: ['fab', 'facebook'], url: socailData.value.facebook.url }
]

const heroStats = [
  {
    value: '4+',
    label: 'Years building UI',
    caption: 'Hands-on with Vue, React, and design systems.'
  },
  {
    value: '18+',
    label: 'Projects shipped',
    caption: 'From concept to launch with measurable impact.'
  },
  {
    value: '5',
    label: 'Teams collaborated',
    caption: 'Cross-functional squads across product and design.'
  }
]

const floatingIcons = [
  {
    icon: 'solar:code-square-bold-duotone',
    position: '-left-10 top-6 hidden md:flex',
    delay: '0s'
  },
  { icon: 'solar:palette-round-linear', position: '-right-6 top-8 hidden md:flex', delay: '1.4s' },
  {
    icon: 'solar:cpu-bolt-bold-duotone',
    position: '-left-8 bottom-10 hidden md:flex',
    delay: '2.2s'
  }
]

const handleContact = () => {
  const mailtoLink = `https://mail.google.com/mail/u/0/?source=mailto&to=hengsoth68@gmail.com&fs=1&tf=cm`
  window.open(mailtoLink, '_blank')
}
</script>

<style scoped>
.floating-icon {
  position: absolute;
  display: flex;
  height: 48px;
  width: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(15, 23, 42, 0.75);
  box-shadow: 0 12px 32px -16px rgba(234, 88, 12, 0.6);
  backdrop-filter: blur(18px);
  animation: floatPulse 7s ease-in-out infinite;
}

@keyframes floatPulse {
  0% {
    transform: translateY(0px) scale(1);
    opacity: 0.9;
  }
  50% {
    transform: translateY(-12px) scale(1.05);
    opacity: 1;
  }
  100% {
    transform: translateY(0px) scale(1);
    opacity: 0.85;
  }
}
</style>
