<template>
  <div>
    <nav class="glass-panel ios-nav">
      <ul class="ios-nav__list">
        <li v-for="item in navItems" :key="item.id" class="ios-nav__item">
          <button
            type="button"
            @click="scrollToSection(item.id)"
            class="ios-nav__button"
            :class="{ 'ios-nav__button--active': activeSection === item.id }"
            :data-aos="'fade-up'"
            :data-aos-delay="item.delay"
          >
            <span class="ios-nav__icon">
              <Icon :icon="item.icon" class="h-5 w-5" />
            </span>
            <span class="ios-nav__label">{{ item.label }}</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { gsap } from "gsap";
import { Icon } from "@iconify/vue";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register GSAP's ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

const activeSection = ref("#home"); // Default active section

const navItems = [
  { id: "#home", label: "Home", icon: "ph:house-line-duotone", delay: 0 },
  { id: "#about", label: "About", icon: "ph:user-circle-duotone", delay: 120 },
  { id: "#skills", label: "Skills", icon: "ph:squares-four-duotone", delay: 240 },
  { id: "#experience", label: "Work", icon: "ph:briefcase-duotone", delay: 360 },
  { id: "#contact", label: "Contact", icon: "ph:paper-plane-tilt-duotone", delay: 480 },
];

// Scroll to the section when the button is clicked
const scrollToSection = (sectionId: string) => {
  const section = document.querySelector(sectionId);
  if (section) {
    const navbarHeight = document.querySelector("header")?.clientHeight || 0; // Get the navbar height
    const targetPosition =
      section.getBoundingClientRect().top + window.scrollY - navbarHeight;

    gsap.to(window, {
      duration: 1.5, // Duration of scroll (1.5 seconds)
      scrollTo: {
        y: targetPosition,
        autoKill: false, // Prevent GSAP from killing the scroll if the user scrolls
      },
      ease: "power2.inOut", // Easing function for smooth animation
    });

    activeSection.value = sectionId; // Set the active section when clicked
  }
};

// IntersectionObserver to track which section is in view
const observerOptions = {
  rootMargin: "-50% 0px",
};

const observerCallback = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      activeSection.value = `#${entry.target.id}`; // Update active section when it's in view
    }
  });
};

onMounted(() => {
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  const sections = document.querySelectorAll("section");
  sections.forEach((section) => observer.observe(section)); // Observe each section

  // Cleanup observer on unmount
  onBeforeUnmount(() => observer.disconnect());
});
</script>

<style scoped>
.ios-nav {
  position: fixed;
  top: 50%;
  right: clamp(1rem, 3vw, 2rem);
  transform: translateY(-50%);
  z-index: 50;
  padding: 1.1rem 0.9rem;
  border-radius: 28px;
  backdrop-filter: blur(26px);
  -webkit-backdrop-filter: blur(26px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 25px 65px -35px rgba(8, 13, 35, 0.85);
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
  transition: transform 0.25s ease, color 0.25s ease;
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
  transition: transform 0.3s ease, background 0.3s ease;
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
  transition: max-width 0.35s ease, opacity 0.3s ease, transform 0.3s ease;
}

.ios-nav__button:hover .ios-nav__label,
.ios-nav__button--active .ios-nav__label {
  max-width: 160px;
  opacity: 1;
  transform: translateX(0);
}

@media (max-width: 640px) {
  .ios-nav {
    right: 0.85rem;
    padding: 0.9rem 0.7rem;
  }

  .ios-nav__icon {
    width: 48px;
    height: 48px;
    border-radius: 16px;
  }

  .ios-nav__label {
    font-size: 0.62rem;
  }
}
</style>
