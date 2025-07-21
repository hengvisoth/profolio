<template>
  <section class="mb-10 md:mb-20 lg:mb-32" id="home">
    <div
      class="z-60 max-w-[1440px] mx-auto px-6 md:px-24 lg:px-24 large:px-0 w-screen pt-[70px] md:pt-[80px] lg:pt-[80px] pb-10 md:pb-32 lg:pb-32"
    >
      <div
        class="h-full flex flex-col md:flex-row items-start justify-center md:justify-between space-y-6 md:space-y-0 lg:space-y-0 space-x-0 md:space-x-8 lg:space-x-10"
      >
        <!-- Ellipse-shaped image container (height 10% longer than width) -->

        <div
          data-aos="zoom-in"
          class="relative z-60 w-[220px] md:w-[380px] lg:w-[420px] aspect-square md:aspect-[4/5] overflow-hidden rounded-full md:rounded-3xl border-4 border-primary shadow-lg hover:shadow-2xl transition-shadow duration-500"
        >
          <img
            src="../../../public/pf.jpeg"
            alt="Visoth Profile"
            class="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
          />

          <!-- Optional Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
        </div>
        <!-- Right Side Text Content -->
        <div class="w-full md:w-3/5 lg:w-3/5 h-[600px] flex flex-col">
          <div class="space-y-2 md:space-y-5 lg:space-y-6">
            <h1
              data-aos="fade-left"
              class="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold"
            >
              I am
              <!-- <span class="font-semibold  ">Seanghor</span> -->
              <span class="font-semibold text-main">Visoth</span>
            </h1>
            <div
              data-aos="fade-right"
              class="flex flex-row text-xl md:text-2xl lg:text-3xl font-medium"
            >
              <h1 class="flex items-center">A&nbsp;</h1>

              <vue-writer
                class="flex items-center text-main"
                :array="['Front-End Developer|']"
                :eraseSpeed="50"
                :typeSpeed="100"
                :delay="1000"
              />
            </div>

            <p
              data-aos="flip-up"
              class="leading-relaxed md:leading-relaxed lg:leading-relaxed mx-auto"
            >
              I am a passionate <span class="text-main">Front-End</span> Developer with strong
              technical skills in modern web technologies and UI frameworks. I specialize in
              creating intuitive, responsive, and visually engaging user interfaces. With a keen eye
              for design and performance, I focus on building seamless user experiences across
              devices. I thrive in dynamic environments and continuously adapt to emerging front-end
              tools and trends to deliver impactful, user-centered web applications.
            </p>
          </div>

          <!-- Social Blocks -->
          <div
            data-aos="fade-left"
            class="my-5 md:my-5 lg:my-6 flex flex-row items-center justify-start space-x-3 md:space-x-3 lg:space-x-6 pl-2 md:pl-3 lg:pl-3"
          >
            <a :href="socailData.linkedin.url" target="_blank" rel="noopener noreferrer">
              <font-awesome-icon
                data-aos="fade-left"
                data-aos-delay="0"
                :icon="['fab', 'linkedin']"
                class="w-5 md:w-5 lg:w-6 h-5 md:h-5 lg:h-6 flex items-center justify-center rounded-full border p-1.5 md:p-2 lg:p-2 transition-all transform hover:scale-110 active:scale-95 hover:bg-orange hover:text-white focus:outline-none cursor-pointer"
              />
            </a>
            <a :href="socailData.github.url" target="_blank" rel="noopener noreferrer">
              <font-awesome-icon
                data-aos="fade-left"
                data-aos-delay="200"
                :icon="['fab', 'github']"
                class="w-5 md:w-5 lg:w-6 h-5 md:h-5 lg:h-6 flex items-center justify-center rounded-full border p-1.5 md:p-2 lg:p-2 transition-all transform hover:scale-110 active:scale-95 hover:bg-orange hover:text-white focus:outline-none cursor-pointer"
              />
            </a>

            <a :href="socailData.telegram.url" target="_blank" rel="noopener noreferrer">
              <font-awesome-icon
                data-aos="fade-left"
                data-aos-delay="400"
                :icon="['fab', 'telegram']"
                class="w-5 md:w-5 lg:w-6 h-5 md:h-5 lg:h-6 flex items-center justify-center rounded-full border p-1.5 md:p-2 lg:p-2 transition-all transform hover:scale-110 active:scale-95 hover:bg-orange hover:text-white focus:outline-none cursor-pointer"
              />
            </a>

            <a :href="socailData.facebook.url" target="_blank" rel="noopener noreferrer">
              <font-awesome-icon
                data-aos="fade-left"
                data-aos-delay="600"
                :icon="['fab', 'facebook']"
                class="w-5 md:w-5 lg:w-6 h-5 md:h-5 lg:h-6 flex items-center justify-center rounded-full border p-1.5 md:p-2 lg:p-2 transition-all transform hover:scale-110 active:scale-95 hover:bg-orange hover:text-white focus:outline-none cursor-pointer"
              />
            </a>
          </div>
          <div class="flex flex-row space-x-6">
            <button
              @click="handleContact"
              data-aos="fade-up"
              data-aos-delay="650"
              class="text-whiteLight text-sm md:text-sm lg:text-lg px-4 md:px-8 lg:px-10 py-2 md:py-3 lg:py-3 bg-primary rounded-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl active:scale-95 active:bg-white focus:outline-none focus:ring-1 focus:ring- focus:ring-opacity-50"
            >
              Contact Me
            </button>

            <a class="relative rounded-lg" href="/resume/Heng_RatanakVisoth_CV.pdf" download>
              <button
                data-aos="fade-up"
                data-aos-delay="650"
                class="relative px-4 md:px-8 lg:px-10 py-2 md:py-3 lg:py-3 border-2 rounded-lg font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95 active:bg-orange-600 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:ring-opacity-50 group breathing-effect"
              >
                <span class="relative z-10 group-hover:text-main">Download CV</span>
                <span
                  class="absolute inset-0 bg-primary w-0 group-hover:w-full h-full transition-all duration-500 ease-in-out"
                ></span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-auto mx-auto w-full flex items-center justify-center">
      <div class="bg-primary h-[1px] rounded-md w-[60%] md:w-[40%] lg:w-[40%]"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { motionCover } from '../../config/motions/custom'
import { VueWriter } from 'vue-writer'
import { ref } from 'vue'
import { socail } from '../../data/socail'

const socailData = ref(socail)
const handleContact = () => {
  const mailtoLink = `https://mail.google.com/mail/u/0/?source=mailto&to=hengsoth68@gmail.com&fs=1&tf=cm`
  window.open(mailtoLink, '_blank')
}
</script>

<style>
@keyframes textColorChange {
  0% {
    color: rgb(183, 75, 75); /* Dark red-orange */
  }
  10% {
    color: rgb(255, 99, 71); /* Tomato Red */
  }
  20% {
    color: rgb(255, 69, 0); /* Orange Red */
  }
  30% {
    color: rgb(255, 120, 30); /* Bright orange-ish red */
  }
  40% {
    color: rgb(255, 200, 0); /* Yellowish-orange */
  }
  50% {
    color: rgb(255, 165, 0); /* Standard Orange */
  }
  60% {
    color: rgb(255, 140, 0); /* Deep orange */
  }
  70% {
    color: rgb(255, 80, 0); /* Lighter red-orange */
  }
  80% {
    color: rgb(255, 50, 0); /* Darker red-orange */
  }
  90% {
    color: rgb(255, 200, 100); /* Light yellow-orange */
  }
  100% {
    color: white; /* White */
  }
}

.animate-text-color {
  animation: textColorChange 20s infinite; /* 4s cycle, infinite repeat */
}
</style>
