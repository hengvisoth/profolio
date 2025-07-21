<template>
  <section
    id="contact"
    class="max-w-[1440px] mx-auto px-6 md:px-24 lg:px-24 pt-20 pb-10 md:pb-10 lg:pb-20"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
      <!-- Left side -->
      <div class="w-full leading-relaxed">
        <h2
          class="font-bold text-3xl md:text-4xl text-center md:text-left mb-8 md:mb-8 lg:mb-14 text-main"
        >
          Let’s Work Together
        </h2>
        <p
          class="text-base md:text-xl mb-4 md:mb-8 lg:mb-10 pr-0 md:pr-8 lg:pr-10 font-medium leading-normal"
        >
          Have a project in mind or just want to say hi? Drop a message below and I’ll get
          back to you as soon as I can.
        </p>
      </div>

      <!-- Form -->
      <div class="rounded-lg">
        <form @submit.prevent="sendEmail"  class="space-y-5">
          <!-- Email -->
          <div
            class="flex items-center border border-dashed border-gray-400 py-2 rounded-md"
          >
            <input
              class="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
              v-model="email"
              type="email"
              id="email"
              placeholder="your@email.com"
              aria-label="Email Address"
              required
            />
          </div>

          <!-- Subject -->
          <div
            class="flex items-center border border-dashed border-gray-400 py-2 rounded-md"
          >
            <input
              class="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
              v-model="subject"
              type="text"
              id="subject"
              required
              placeholder="Subject"
            />
          </div>

          <!-- Message -->
          <div class="flex border border-dashed border-gray-400 py-2 rounded-md">
            <textarea
              placeholder="Your message..."
              rows="6"
              class="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
              v-model="message"
              id="message"
              required
            ></textarea>
          </div>

          <!-- Submit Button -->
          <div class="text-center flex justify-end items-end">
            <button
              type="submit"
              class="text-sm-btn md:text-md-btn lg:text-lg-btn uppercase bg-primary hover:bg-orange-600 flex justify-center items-center rounded-sm py-2 px-5 md:py-3 md:px-7 lg:py-3 transition-all duration-500 transform hover:scale-105 shadow-lg text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const email = ref("");
const subject = ref("");
const message = ref("");

const sendEmail = () => {
  const to = "hengsoth68@gmail.com";
  const encodedSubject = encodeURIComponent(subject.value);
  const encodedMessage = encodeURIComponent(message.value);
  const mailtoLink = `https://mail.google.com/mail/u/0/?source=mailto&to=${to}&subject=${encodedSubject}&body=${encodedMessage}&fs=1&tf=cm`;
  window.open(mailtoLink, "_blank");
};
</script>
