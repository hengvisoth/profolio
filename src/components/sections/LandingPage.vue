<template>
  <section id="home" class="mb-10 md:mb-20 lg:mb-32 overflow-hidden">
    <div
      class="relative z-10 mx-auto w-full max-w-[1440px] px-6 pt-[72px] pb-14 md:px-16 md:pt-[104px] md:pb-24 lg:px-24 lg:pt-[140px] lg:pb-28 large:px-0"
    >
      <div class="grid items-start gap-16 md:grid-cols-[minmax(0,1fr)_320px] md:gap-10 xl:gap-20">
        <div class="flex flex-col gap-10">
          <h1
            class="text-[clamp(2.9rem,12vw,3.5rem)] font-extrabold leading-[0.92] tracking-[-0.045em] [text-wrap:balance] md:text-[clamp(2.75rem,5.2vw,4.5rem)] xl:text-[clamp(4.5rem,8.4vw,7.5rem)]"
          >
            I build the app at the checkout.
          </h1>

          <p class="max-w-md text-base leading-relaxed text-softwhite/65 md:text-lg">
            Flutter, Vue and Node. I own a product from the database to the App Store.
          </p>

          <div class="flex flex-wrap items-center gap-3">
            <button
              @click="handleContact"
              class="inline-flex items-center gap-2 rounded-md bg-main px-6 py-3 text-sm font-semibold text-background transition-colors duration-200 hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main md:text-base"
            >
              <Icon icon="solar:mailbox-bold" class="h-5 w-5" />
              Get in touch
            </button>

            <a
              href="/resume/Heng_RatanakVisoth_CV.pdf"
              download
              class="inline-flex items-center gap-2 rounded-md border border-white/15 px-6 py-3 text-sm font-semibold text-softwhite transition-colors duration-200 hover:border-main hover:text-main focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main md:text-base"
            >
              <Icon icon="solar:download-square-broken" class="h-5 w-5" />
              Download CV
            </a>

            <div class="flex items-center gap-2 pl-2">
              <a
                v-for="item in socialLinks"
                :key="item.label"
                :href="item.url"
                :aria-label="item.label"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex h-10 w-10 items-center justify-center rounded-md text-softwhite/55 transition-colors duration-200 hover:text-main focus-visible:outline focus-visible:outline-2 focus-visible:outline-main"
              >
                <font-awesome-icon :icon="item.icon" class="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>
        </div>

        <ReceiptHero class="mx-auto md:-mt-8 md:mx-0 md:justify-self-end" />
      </div>
    </div>

    <div class="relative z-10 mt-8 flex w-full items-center justify-center">
      <div class="h-px w-[65%] max-w-xl bg-divider"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import ReceiptHero from '@/components/visuals/ReceiptHero.vue'
import { socail } from '../../data/socail'

const socialLinks = [
  { label: 'LinkedIn', icon: ['fab', 'linkedin'], url: socail.linkedin.url },
  { label: 'GitHub', icon: ['fab', 'github'], url: socail.github.url },
  { label: 'Telegram', icon: ['fab', 'telegram'], url: socail.telegram.url }
]

const handleContact = () => {
  window.open(
    'https://mail.google.com/mail/u/0/?source=mailto&to=hengsoth68@gmail.com&fs=1&tf=cm',
    '_blank'
  )
}
</script>
