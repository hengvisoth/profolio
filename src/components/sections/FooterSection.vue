<template>
  <section class="mx-auto w-full max-w-[1440px] px-6 py-12 md:px-16 lg:px-24">
    <div class="glass-panel overflow-hidden px-6 py-10 md:px-12 md:py-12 lg:px-16 lg:py-14">
      <span class="pointer-events-none absolute -right-16 top-[-45%] h-64 w-64 rounded-full bg-gradient-to-b from-main/20 via-transparent to-primary/20 blur-3xl"></span>
      <span class="pointer-events-none absolute -left-24 bottom-[-35%] h-72 w-72 rounded-full bg-gradient-to-tr from-primary/20 via-transparent to-main/20 blur-3xl"></span>

      <div class="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr]">
        <!-- Left: Intro + Message -->
        <div class="glass-card flex flex-col gap-6 p-6 md:p-8">
          <div class="glass-chip w-max text-xs uppercase tracking-[0.35em] text-softwhite/70">
            Let’s build
          </div>
          <p class="text-lg font-semibold leading-relaxed text-softwhite md:text-xl">
            Turn your ideas into reality with efficient and scalable web development solutions.
            Let’s create something impactful together.
          </p>
          <div class="glass-divider"></div>
          <div class="flex flex-wrap gap-4">
            <a
              href="mailto:hengsoth68@gmail.com"
              class="glass-chip text-[0.75rem] font-semibold uppercase tracking-[0.3em] text-softwhite/80"
            >
              Email Me
            </a>
            <a
              href="tel:+855966815223"
              class="glass-chip text-[0.75rem] font-semibold uppercase tracking-[0.3em] text-softwhite/80"
            >
              Call Now
            </a>
          </div>
        </div>

        <!-- Right: Contact + Location + Language -->
        <div class="glass-card grid gap-y-6 p-6 md:p-8">
          <!-- Contact Info -->
          <div>
            <h4 class="text-lg font-semibold uppercase text-softwhite md:text-2xl">Contact Me</h4>
            <div class="mt-3 space-y-2 text-sm text-softwhite/80 md:text-base">
              <p>
                <a href="tel:+855966815223" class="hover:text-main">+855 (0) 96 681 5223</a>
              </p>
              <p>
                <a href="mailto:hengsoth68@gmail.com" class="hover:text-main"
                  >hengsoth68@gmail.com</a
                >
              </p>
            </div>
          </div>

          <!-- Location and Language -->
          <div class="grid gap-6 md:grid-cols-2">
            <!-- Location -->
            <div>
              <h4 class="text-lg font-semibold uppercase text-softwhite md:text-2xl">Location</h4>
              <p class="mt-2 text-sm text-softwhite/80 md:text-base">Phnom Penh, Cambodia</p>
            </div>

            <!-- Languages -->
            <div class="text-left md:text-right">
              <h4 class="text-lg font-semibold uppercase text-softwhite md:text-2xl">Languages</h4>
              <div class="mt-2 flex justify-start gap-4 text-sm md:justify-end md:text-base">
                <p class="text-main font-medium">EN</p>
                <p class="text-softwhite/80 font-medium">KH</p>
                <p class="text-softwhite/60 font-medium">JP</p>
                <p class="text-softwhite/60 font-medium">CH</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
