import { computed } from 'vue'
import { useStore } from '@/store/store'
import { translations, fallbackLanguage, type AppTranslations } from './translations'

export function useTranslations() {
  const { state } = useStore()

  return computed<AppTranslations>(() => {
    const lang = state.language
    return translations[lang] ?? translations[fallbackLanguage]
  })
}

export function useT() {
  const translation = useTranslations()

  const resolve = (path: string, fallback: string = path): string => {
    const segments = path.split('.')
    let current: any = translation.value

    for (const segment of segments) {
      if (current && typeof current === 'object' && segment in current) {
        current = current[segment]
      } else {
        return fallback
      }
    }

    if (typeof current === 'string') {
      return current
    }

    return fallback
  }

  return { t: resolve }
}
