<template>
  <div>
    <nav
      class="glass-panel ios-nav"
      :style="{ '--visible-count': visibleCount }"
      @mouseenter="setExpanded(true)"
      @mouseleave="setExpanded(false)"
      @focusin="setExpanded(true)"
      @focusout="handleFocusOut"
    >
      <ul class="ios-nav__list">
        <li v-for="item in displayedItems" :key="item.id" class="ios-nav__item">
          <button
            type="button"
            @click="scrollToSection(item.id)"
            class="ios-nav__button"
            :class="{ 'ios-nav__button--active': activeSection === item.id }"
            :data-aos="'fade-up'"
            :data-aos-delay="item.delay"
          >
            <span class="ios-nav__label">{{ item.label }}</span>
            <span class="ios-nav__icon">
              <Icon :icon="item.icon" class="h-5 w-5" />
            </span>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { gsap } from 'gsap'
import { Icon } from '@iconify/vue'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

// Register GSAP's ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin)

const activeSection = ref('#home') // Default active section

const navItems = [
  { id: '#home', label: 'Home', icon: 'ph:house-line-duotone', delay: 0 },
  { id: '#about', label: 'About', icon: 'ph:user-circle-duotone', delay: 120 },
  { id: '#skills', label: 'Skills', icon: 'ph:squares-four-duotone', delay: 240 },
  { id: '#experience', label: 'Work', icon: 'ph:briefcase-duotone', delay: 360 },
  { id: '#contact', label: 'Contact', icon: 'ph:paper-plane-tilt-duotone', delay: 480 }
]

const MAX_COLLAPSED_ITEMS = 3
const isExpanded = ref(false)
const isCompact = ref(false)

const displayedItems = computed(() =>
  isExpanded.value || navItems.length <= MAX_COLLAPSED_ITEMS
    ? navItems
    : navItems.slice(0, MAX_COLLAPSED_ITEMS)
)

const visibleCount = computed(() => displayedItems.value.length)

const setExpanded = (value: boolean) => {
  if (isCompact.value) {
    isExpanded.value = true
    return
  }
  isExpanded.value = value
}

const handleFocusOut = (event: FocusEvent) => {
  if (isCompact.value) return

  const currentTarget = event.currentTarget as HTMLElement | null
  const nextTarget = event.relatedTarget as Node | null
  if (currentTarget && (!nextTarget || !currentTarget.contains(nextTarget))) {
    isExpanded.value = false
  }
}

const applyCompactState = (matches: boolean) => {
  isCompact.value = matches
  isExpanded.value = matches
}

const handleMediaChange = (event: MediaQueryListEvent) => {
  applyCompactState(event.matches)
}

// Scroll to the section when the button is clicked
const scrollToSection = (sectionId: string) => {
  const section = document.querySelector(sectionId)
  if (section) {
    const navbarHeight = document.querySelector('header')?.clientHeight || 0 // Get the navbar height
    const targetPosition = section.getBoundingClientRect().top + window.scrollY - navbarHeight

    gsap.to(window, {
      duration: 1.5, // Duration of scroll (1.5 seconds)
      scrollTo: {
        y: targetPosition,
        autoKill: false // Prevent GSAP from killing the scroll if the user scrolls
      },
      ease: 'power2.inOut' // Easing function for smooth animation
    })

    activeSection.value = sectionId // Set the active section when clicked
  }
}

// IntersectionObserver to track which section is in view
const observerOptions = {
  rootMargin: '-50% 0px'
}

const observerCallback = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      activeSection.value = `#${entry.target.id}` // Update active section when it's in view
    }
  })
}

let observer: IntersectionObserver | null = null
let mediaQuery: MediaQueryList | null = null

onMounted(() => {
  observer = new IntersectionObserver(observerCallback, observerOptions)

  const sections = document.querySelectorAll('section')
  sections.forEach((section) => observer?.observe(section)) // Observe each section

  if (typeof window !== 'undefined' && 'matchMedia' in window) {
    mediaQuery = window.matchMedia('(max-width: 640px)')
    applyCompactState(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleMediaChange)
  }
})

onBeforeUnmount(() => {
  observer?.disconnect()
  mediaQuery?.removeEventListener('change', handleMediaChange)
})
</script>

<style scoped>
.ios-nav {
  position: fixed;
  top: 50%;
  right: clamp(1rem, 3vw, 2rem);
  transform: translateY(-50%);
  z-index: 50;
  --nav-item-height: 52px;
  --nav-item-gap: 12px;
  --nav-padding-y: 2.2rem;
  padding: 1.1rem 0.9rem;
  border-radius: 28px;
  backdrop-filter: blur(26px);
  -webkit-backdrop-filter: blur(26px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 25px 65px -35px rgba(8, 13, 35, 0.85);
  overflow: hidden;
  max-height: calc(
    var(--visible-count, 3) * var(--nav-item-height) + max(0, (var(--visible-count, 3) - 1)) *
      var(--nav-item-gap) + var(--nav-padding-y) + 5
  );
  transition:
    max-height 0.35s ease,
    padding 0.25s ease,
    box-shadow 0.35s ease;
}

.ios-nav__list {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.75rem;
}

.ios-nav__item {
  position: relative;
}

.ios-nav__button {
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row-reverse;
  gap: 0.9rem;
  min-width: 54px;
  padding: 0.35rem 0.4rem;
  color: rgba(248, 250, 252, 0.65);
  transition:
    transform 0.25s ease,
    color 0.25s ease;
}

.ios-nav__button:hover {
  transform: translateX(-4px);
  color: #f97316;
}

.ios-nav__button--active {
  color: #f97316;
}

.ios-nav__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(15, 23, 42, 0.5);
  box-shadow: 0 18px 45px -28px rgba(249, 115, 22, 0.55);
  transition:
    transform 0.3s ease,
    background 0.3s ease;
}

.ios-nav__button--active .ios-nav__icon {
  background: linear-gradient(135deg, rgba(249, 115, 22, 0.28), rgba(249, 115, 22, 0.12));
  transform: translateX(-2px) scale(1.05);
}

.ios-nav__button:hover .ios-nav__icon {
  transform: translateX(-2px) scale(1.04);
}

.ios-nav__label {
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-weight: 600;
  white-space: nowrap;
  max-width: 0;
  opacity: 0;
  transform: translateX(12px);
  transition:
    max-width 0.35s ease,
    opacity 0.3s ease,
    transform 0.3s ease;
}

.ios-nav__button:hover .ios-nav__label,
.ios-nav__button--active .ios-nav__label {
  max-width: 160px;
  opacity: 1;
  transform: translateX(0);
}

@media (max-width: 640px) {
  .ios-nav {
    top: auto;
    bottom: clamp(1rem, 5vw, 1.5rem);
    right: auto;
    left: 50%;
    transform: translate(-50%, 0);
    width: min(480px, calc(100vw - 1rem));
    padding: 0.85rem 1rem;
    max-height: none;
    --nav-item-height: 48px;
    --nav-item-gap: 10px;
    --nav-padding-y: 2rem;
  }

  .ios-nav__icon {
    width: 48px;
    height: 48px;
    border-radius: 16px;
  }

  .ios-nav__label {
    display: none;
  }

  .ios-nav__list {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
  }

  .ios-nav__button {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.35rem;
    min-width: 0;
    padding: 0.3rem 0.4rem;
  }

  .ios-nav__button:hover {
    transform: translateY(-4px);
  }

  .ios-nav__button--active .ios-nav__icon,
  .ios-nav__button:hover .ios-nav__icon {
    transform: translateY(-2px) scale(1.05);
  }
}
</style>
