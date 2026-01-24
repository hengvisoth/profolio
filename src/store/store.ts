// store.js
import { reactive, watch } from 'vue'

export type LanguageCode = 'en' | 'kh' | 'jp' | 'cn'

const languageHtmlMap: Record<LanguageCode, string> = {
  en: 'en',
  kh: 'km',
  jp: 'ja',
  cn: 'zh-Hans'
}

const defaultLanguage: LanguageCode = 'en'

const state = reactive({
  activeSection: '#home', // Default active section
  language: defaultLanguage as LanguageCode
})

function loadPersistedLanguage(): LanguageCode {
  if (typeof window === 'undefined') return defaultLanguage
  const stored = window.localStorage.getItem('preferredLanguage') as LanguageCode | null
  if (stored && stored in languageHtmlMap) {
    return stored
  }
  return defaultLanguage
}

function syncHtmlLang(lang: LanguageCode) {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = languageHtmlMap[lang]
  }
}

if (typeof window !== 'undefined') {
  state.language = loadPersistedLanguage()
  syncHtmlLang(state.language)
}

export function setActiveSection(sectionId: string) {
  state.activeSection = sectionId
}

export function setLanguage(lang: LanguageCode) {
  if (!(lang in languageHtmlMap)) return
  state.language = lang
}

watch(
  () => state.language,
  (lang) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('preferredLanguage', lang)
    }
    syncHtmlLang(lang)
  },
  { immediate: true }
)

export function useStore() {
  return {
    state,
    setLanguage,
    setActiveSection
  }
}
