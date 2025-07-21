<template>
  <section class="max-w-[1440px] mx-auto px-6 md:px-24 py-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <!-- Left: Intro + Message -->
      <div class="flex items-center">
        <p class="text-lg md:text-xl font-semibold leading-relaxed">
          Turn your ideas into reality with efficient and scalable web development
          solutions. Let’s create something impactful together.
        </p>
      </div>

      <!-- Right: Contact + Location + Language -->
      <div class="grid grid-rows-2 gap-y-6">
        <!-- Contact Info -->
        <div>
          <h4 class="font-semibold text-lg md:text-2xl mb-3 uppercase">Contact Me</h4>
          <div class="text-softwhite text-sm md:text-base space-y-2">
            <p>
              <a href="tel:+855966815223" class="hover:underline">+855 (0) 96 681 5223</a>
            </p>
            <p>
              <a href="mailto:hengsoth68@gmail.com" class="hover:underline"
                >hengsoth68@gmail.com</a
              >
            </p>
          </div>
        </div>

        <!-- Location and Language -->
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Location -->
          <div>
            <h4 class="font-semibold text-lg md:text-2xl mb-3 uppercase">Location</h4>
            <p class="text-softwhite text-sm md:text-base">Phnom Penh, Cambodia</p>
          </div>

          <!-- Languages -->
          <div class="text-left md:text-right">
            <h4 class="font-semibold text-lg md:text-2xl mb-3 uppercase">Language</h4>
            <div class="flex justify-start md:justify-end gap-4">
              <p class="text-main font-medium cursor-pointer hover:scale-105">EN</p>
              <p class="text-softwhite font-medium cursor-progress">KH</p>
              <p class="text-softwhite font-medium cursor-progress">JP</p>
              <p class="text-softwhite font-medium cursor-progress">CH</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { socail } from "../../data/socail";
import { ref } from "vue";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
const socailData = ref(socail);

// Register GSAP's ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);
const activeSection = ref("#home"); // Default active section
// Function to animate scrolling to a section
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
</script>
