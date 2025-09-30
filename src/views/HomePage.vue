<template >
  <div class="mx-auto flex h-full w-full flex-col items-center overflow-hidden">
    <LandingPage />
    <AboutSection />
    <SkillSection />
    <ExperienceSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>
<script setup lang="ts">
import LandingPage from '@/components/sections/LandingPage.vue'
import HOCPadding from '@/components/HOC/HOCPadding.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillSection from '@/components/sections/SkillSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import FooterSection from '@/components/sections/FooterSection.vue'
</script>
