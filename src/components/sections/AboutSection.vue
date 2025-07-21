<template>
  <section class="mb-10 md:mb-20 lg:mb-32">
    <div
      id="about"
      class="max-w-[1440px] mx-auto px-6 md:px-24 lg:px-24 large:px-0 w-screen pt-10 pb-10 md:pb-10 lg:pb-20"
    >
      <!-- Header -->
      <div
        class="flex justify-center col-span-full md:col-span-3 lg:col-span-2 inline-block mx-auto mb-10 md:mb-10 lg:mb-10"
      >
        <div>
          <h1 class="text-sm-title md:text-md-title lg:text-lg-title font-bold">
            Who <span class="font-semibold text-main">I Am</span>
          </h1>
          <div class="space-y-1 md:space-y-1 lg:space-y-1.5">
            <div class="h-[2px] md:h-[3px] lg:h-[3px] rounded-md bg-main w-full" />
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-12">
        <!-- Image -->
        <div
          class="col-span-full md:col-span-1 lg:col-span-1 row-span-full lg:row-span-7 flex justify-center mt-6"
        >
          <img
            src="../../../public/pf.jpeg"
            alt="About Me"
            class="shadow-lg rounded-full w-[420px] h-[420px] object-cover border-2 border-dashed border-primary"
          />
        </div>

        <!-- Paragraph -->
        <div class="col-span-full md:col-span-2 lg:col-span-2">
          <div>
            <h6 class="text-h3-sm md:text-h3-md lg:text-h3-lg font-semibold text-primary">
              Passionate About Front-End Craft
            </h6>
            <div class="whitespace-normal mt-2 text-wrap w-full text-left">
              <p class="leading-relaxed md:leading-relaxed lg:leading-relaxed">
                I am deeply enthusiastic about crafting engaging, dynamic, and responsive web
                interfaces. I enjoy translating design concepts into functional front-end
                applications that elevate user experience. My passion lies in blending creativity
                with clean, efficient code to bring digital products to life. Constantly exploring
                modern frameworks and technologies, I aim to push boundaries and grow with every
                project I take on. For me, development isn’t just about code—it’s about creating
                meaningful, intuitive digital experiences.
              </p>
            </div>
          </div>
        </div>

        <!-- Details -->
        <div
          class="col-span-full md:col-span-2 lg:col-span-2 md:row-start-1 lg:row-start-auto pl-0 md:pl-10 lg:pl-0"
        >
          <div
            class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 flex-col text-xs md:text-base lg:text-lg gap-4 md:gap-6 lg:gap-8"
          >
            <div
              class="flex items-center gap-3 p-3 rounded-lg shadow-md border-[1px] border-primary"
            >
              <Icon icon="hugeicons:student" class="text-main w-7 h-7" />
              <p class="  ">
                <span class="font-medium">Degree:</span>
                <span class="ml-2">Software Engineering</span>
              </p>
            </div>

            <div
              class="flex items-center gap-3 p-3 rounded-lg shadow-md border-[1px] border-primary"
            >
              <Icon icon="mdi:location" class="text-main w-7 h-7" />
              <p class="  ">
                <span class="font-semibold">Location:</span>
                <span class="ml-2">Phnom Penh, Cambodia</span>
              </p>
            </div>

            <div
              class="flex items-center gap-3 p-3 rounded-lg shadow-md border-[1px] border-primary"
            >
              <Icon icon="ic:outline-email" class="text-main w-7 h-7" />
              <p class="  ">
                <span class="font-semibold">Email:</span>
                <span class="ml-2">
                  <a href="mailto:hengsoth68@gmail.com" class="hover:underline">
                    hengsoth68@gmail.com
                  </a>
                </span>
              </p>
            </div>

            <div
              class="flex items-center gap-3 p-3 rounded-lg shadow-md border-[1px] border-primary"
            >
              <Icon icon="majesticons:phone-dial-line" class="text-main w-7 h-7" />
              <p class="  ">
                <span class="font-semibold">Phone:</span>
                <span>
                  <a href="tel:+855966815223" class="hover:underline"> +855 (0) 96 681 5223 </a>
                </span>
              </p>
            </div>

            <div
              class="flex items-center gap-3 p-3 rounded-lg shadow-md border-[1px] border-primary"
            >
              <Icon icon="mdi:spoken-language" class="text-main w-7 h-7" />
              <p class="  ">
                <span class="font-semibold">Languages:</span>
                <span class="ml-2">Khmer, English</span>
              </p>
            </div>

            <div
              class="flex items-center gap-3 p-3 rounded-lg shadow-md border-[1px] border-primary"
            >
              <Icon icon="basil:telegram-solid" class="text-main w-7 h-7" />
              <p class="  ">
                <span class="font-semibold">Telegram:</span>
                <a
                  href="https://t.me/@visothhh"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="ml-2"
                  >@visothhh</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Separator -->
    <div class="mt-auto mx-auto w-full flex items-center justify-center">
      <div class="bg-primary h-[1px] rounded-md w-[60%] md:w-[40%] lg:w-[40%]"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
