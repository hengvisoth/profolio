<template>
  <div class="text-left md:text-right" role="group" aria-label="Interface language">
    <transition name="fade">
      <p v-if="feedbackMessage" class="mt-2 text-xs font-medium text-softwhite/70 md:text-right">
        {{ feedbackMessage }}
      </p>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import type { LanguageCode } from '@/store/store'
import { useStore } from '@/store/store'

const { state, setLanguage } = useStore()

interface LanguageMeta {
  code: LanguageCode
  label: string
  name: string
  available: boolean
}

const languages: LanguageMeta[] = [
  { code: 'en', label: 'EN', name: 'English', available: true },
  { code: 'kh', label: 'KH', name: 'Khmer', available: true },
  { code: 'jp', label: 'JP', name: 'Japanese', available: true },
  { code: 'cn', label: 'CN', name: 'Chinese', available: true }
]

const activeLanguage = computed(() => state.language)
const feedbackMessage = ref('')
let feedbackTimeout: ReturnType<typeof setTimeout> | null = null

const clearFeedback = () => {
  if (feedbackTimeout) {
    clearTimeout(feedbackTimeout)
    feedbackTimeout = null
  }
}

const scheduleFeedbackClear = () => {
  clearFeedback()
  feedbackTimeout = setTimeout(() => {
    feedbackMessage.value = ''
    feedbackTimeout = null
  }, 3200)
}

const handleLanguageSelect = (language: LanguageMeta) => {
  if (!language.available) {
    feedbackMessage.value = `${language.name} localization is in progress.`
    scheduleFeedbackClear()
    return
  }

  if (activeLanguage.value !== language.code) {
    setLanguage(language.code)
    feedbackMessage.value = `${language.name} is now active.`
    scheduleFeedbackClear()
  }
}

onBeforeUnmount(() => clearFeedback())
</script>

<style scoped>
.language-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.25rem;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  transition: all 0.25s ease;
  border: 1px solid transparent;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.language-chip--active {
  background: linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(249, 115, 22, 0.05));
  color: #f97316;
  border-color: rgba(249, 115, 22, 0.45);
  box-shadow: 0 12px 32px -18px rgba(249, 115, 22, 0.55);
}

.language-chip--inactive {
  background: rgba(15, 23, 42, 0.55);
  color: rgba(248, 250, 252, 0.72);
  border-color: rgba(248, 250, 252, 0.15);
}

.language-chip--inactive:hover {
  color: #f97316;
  transform: translateY(-3px);
  border-color: rgba(249, 115, 22, 0.35);
}

.language-chip--unavailable {
  cursor: not-allowed;
  opacity: 0.65;
}

.language-chip--unavailable:hover {
  transform: none;
  color: rgba(248, 250, 252, 0.6);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
