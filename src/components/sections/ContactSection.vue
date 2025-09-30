<template>
  <section
    id="contact"
    class="relative mx-auto max-w-[1440px] px-6 pt-20 pb-16 md:px-16 lg:px-24"
  >
    <div class="glass-panel relative overflow-hidden px-6 py-10 md:px-12 md:py-16 lg:px-16 lg:py-20">
      <span class="pointer-events-none absolute inset-x-10 top-0 h-40 rounded-b-full bg-gradient-to-b from-main/25 via-transparent to-transparent blur-3xl"></span>
      <span class="pointer-events-none absolute -left-16 bottom-0 hidden h-64 w-64 rounded-full bg-gradient-to-tr from-accent/25 via-main/25 to-primary/30 blur-3xl opacity-80 lg:block"></span>

      <div class="relative z-10 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div class="flex flex-col gap-8">
          <div class="max-w-lg space-y-5">
            <div class="glass-chip text-xs uppercase tracking-[0.35em] text-softwhite/70">
              <span class="h-2 w-2 rounded-full bg-main"></span>
              Let’s connect
            </div>
            <h2 class="text-3xl font-semibold text-softwhite md:text-4xl lg:text-[2.8rem]">
              Let’s shape something memorable together
            </h2>
            <p class="text-sm text-softwhite/70 md:text-base">
              Share a challenge, product idea, or feature concept. I respond within 24 hours with a
              thoughtful follow-up and next steps. Projects of all sizes welcome—from rapid landing
              pages to design systems.
            </p>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div
              v-for="detail in contactDetails"
              :key="detail.label"
              class="glass-card p-5 transition duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <div class="flex items-center gap-3">
                <span class="flex h-10 w-10 items-center justify-center rounded-full bg-main/20 text-main">
                  <Icon :icon="detail.icon" class="h-5 w-5" />
                </span>
                <div>
                  <p class="text-xs uppercase tracking-[0.25em] text-softwhite/40">{{ detail.label }}</p>
                  <a
                    v-if="detail.href"
                    :href="detail.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm font-medium text-softwhite hover:text-main"
                  >
                    {{ detail.value }}
                  </a>
                  <p v-else class="text-sm font-medium text-softwhite">{{ detail.value }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="glass-card bg-background/60 p-6 text-sm text-softwhite/70">
            <p class="font-semibold text-softwhite">Current response time</p>
            <p class="mt-1 text-softwhite/60">Within 24h on weekdays • Within 48h on weekends</p>
          </div>
        </div>

        <div class="glass-panel relative overflow-hidden rounded-[28px] bg-background/70 p-6 shadow-2xl md:p-8">
          <span class="pointer-events-none absolute inset-0 bg-gradient-to-br from-main/5 via-transparent to-primary/10 opacity-0 transition duration-500"></span>
          <form @submit.prevent="sendEmail" class="relative space-y-6">
            <div class="space-y-2">
              <label for="email" class="text-xs uppercase tracking-[0.25em] text-softwhite/40">Email</label>
              <div class="relative flex items-center gap-3 rounded-xl border border-divider bg-surface px-4">
                <Icon icon="solar:letter-linear" class="h-4 w-4 text-softwhite/40" />
                <input
                  v-model="email"
                  type="email"
                  id="email"
                  placeholder="you@awesome.dev"
                  class="w-full bg-transparent py-3 text-sm text-softwhite placeholder:text-softwhite/30 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div class="space-y-2">
              <label for="subject" class="text-xs uppercase tracking-[0.25em] text-softwhite/40">Subject</label>
              <div class="relative flex items-center gap-3 rounded-xl border border-divider bg-surface px-4">
                <Icon icon="solar:pen-2-linear" class="h-4 w-4 text-softwhite/40" />
                <input
                  v-model="subject"
                  type="text"
                  id="subject"
                  placeholder="Project intro or topic"
                  class="w-full bg-transparent py-3 text-sm text-softwhite placeholder:text-softwhite/30 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div class="space-y-2">
              <label for="message" class="text-xs uppercase tracking-[0.25em] text-softwhite/40">Message</label>
              <div class="relative rounded-xl border border-divider bg-surface px-4">
                <textarea
                  v-model="message"
                  id="message"
                  rows="6"
                  placeholder="Share goals, scope, timelines, or links..."
                  class="w-full bg-transparent py-3 text-sm text-softwhite placeholder:text-softwhite/30 focus:outline-none"
                  required
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              class="relative inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-main via-accent to-primary px-6 py-3 text-sm font-semibold text-background shadow-glow transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_-20px_rgba(56,189,248,0.55)] active:scale-95"
            >
              <Icon icon="solar:paper-plane-bold" class="h-5 w-5" />
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const email = ref('')
const subject = ref('')
const message = ref('')

const contactDetails = [
  {
    label: 'Email',
    value: 'hengsoth68@gmail.com',
    href: 'mailto:hengsoth68@gmail.com',
    icon: 'solar:letter-line-duotone'
  },
  {
    label: 'Phone',
    value: '+855 (0) 96 681 5223',
    href: 'tel:+855966815223',
    icon: 'solar:phone-outline'
  },
  {
    label: 'Location',
    value: 'Phnom Penh, Cambodia',
    href: null,
    icon: 'solar:map-point-outline'
  },
  {
    label: 'Telegram',
    value: '@visothhh',
    href: 'https://t.me/@visothhh',
    icon: 'solar:chat-round-line-broken'
  }
]

const sendEmail = () => {
  const to = 'hengsoth68@gmail.com'
  const encodedSubject = encodeURIComponent(subject.value)
  const encodedMessage = encodeURIComponent(message.value)
  const mailtoLink = `https://mail.google.com/mail/u/0/?source=mailto&to=${to}&subject=${encodedSubject}&body=${encodedMessage}&fs=1&tf=cm`
  window.open(mailtoLink, '_blank')
}
</script>
