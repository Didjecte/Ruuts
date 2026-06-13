<template>
  <div class="bg-light pt-[90px] md:pt-[100px] pb-16 md:pb-24">
    <div class="max-w-[1200px] mx-auto px-6 w-full page-header reveal-item">
      <h1 class="text-5xl mb-6 font-heading font-semibold text-dark">
        Our Experiences
      </h1>
      <p class="text-dark/80 max-w-[600px] leading-[1.8] mb-12">
        Carefully composed private encounters where Chinese tea culture, sound,
        breath, and presence meet. Find the perfect session for your group.
      </p>

      <!-- Premium Tab Switcher -->
      <div
        class="inline-flex border border-secondary/30 rounded-[50px] p-1 bg-primary/[0.03]"
      >
        <button
          :class="[
            'bg-transparent border-none rounded-[50px] font-body text-xs font-medium uppercase text-dark py-[0.8rem] px-[1.8rem] cursor-pointer transition-colors duration-500',
            { '!bg-primary !text-light': activeTab === 'b2c' },
          ]"
          @click="setTab('b2c')"
        >
          For Individuals (B2C)
        </button>
        <button
          :class="[
            'bg-transparent border-none rounded-[50px] font-body text-xs font-medium uppercase text-dark py-[0.8rem] px-[1.8rem] cursor-pointer transition-colors duration-500',
            { '!bg-primary !text-light': activeTab === 'b2b' },
          ]"
          @click="setTab('b2b')"
        >
          For Professionals (B2B)
        </button>
      </div>
    </div>

    <!-- Experiences Grid -->
    <div class="max-w-[1200px] mx-auto px-6 w-full mt-16 mb-24">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="exp in activeExperiences"
          :key="exp.id"
          class="grid-item-animate"
        >
          <ExperienceCard :experience="exp" :is-b2b="activeTab === 'b2b'" />
        </div>
      </div>
    </div>

    <!-- Booking Policy Details (from Ruuts.pdf) -->
    <div class="bg-primary/[0.03] border-t border-secondary/20 py-24">
      <div class="max-w-[1200px] mx-auto px-6 w-full">
        <div class="text-center reveal-item">
          <span
            class="font-body text-xs uppercase tracking-[0.2em] text-secondary block mb-2"
            >Terms</span
          >
          <h2 class="font-heading text-5xl mb-4 font-semibold text-dark">
            Private Session Policies
          </h2>
          <p
            class="text-xl text-dark/75 max-w-[550px] mx-auto mb-16 leading-[1.7]"
          >
            To preserve the quality of each experience and the integrity of the
            hosting space, the following guidelines govern all bookings.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Session Confirmation -->
          <div
            class="bg-light border border-secondary/20 rounded-2xl p-[2.5rem_2rem] reveal-item"
          >
            <h3
              class="font-body text-sm uppercase text-primary border-b border-secondary/20 pb-[0.8rem] mb-[1.5rem]"
            >
              1. Session Confirmation
            </h3>
            <ul class="flex flex-col gap-[0.8rem]">
              <li
                v-for="(item, idx) in bookingPolicy.confirmation"
                :key="idx"
                class="text-sm leading-[1.5] text-dark/80 relative pl-[1.2rem] before:content-['•'] before:text-primary before:text-lg before:absolute before:left-0 before:-top-[2px]"
              >
                {{ item }}
              </li>
            </ul>
          </div>

          <!-- Modification Policy -->
          <div
            class="bg-light border border-secondary/20 rounded-2xl p-[2.5rem_2rem] reveal-item"
          >
            <h3
              class="font-body text-sm uppercase text-primary border-b border-secondary/20 pb-[0.8rem] mb-[1.5rem]"
            >
              2. Modification Policy
            </h3>
            <ul class="flex flex-col gap-[0.8rem]">
              <li
                v-for="(item, idx) in bookingPolicy.modification"
                :key="idx"
                class="text-sm leading-[1.5] text-dark/80 relative pl-[1.2rem] before:content-['•'] before:text-primary before:text-lg before:absolute before:left-0 before:-top-[2px]"
              >
                {{ item }}
              </li>
            </ul>
          </div>

          <!-- Cancellation Policy -->
          <div
            class="bg-light border border-secondary/20 rounded-2xl p-[2.5rem_2rem] reveal-item"
          >
            <h3
              class="font-body text-sm uppercase text-primary border-b border-secondary/20 pb-[0.8rem] mb-[1.5rem]"
            >
              3. Cancellation Policy
            </h3>
            <div class="flex flex-col gap-[0.8rem]">
              <div
                v-for="(sched, idx) in bookingPolicy.cancellation"
                :key="idx"
                class="flex justify-between border-b border-dashed border-secondary/20 pb-[0.6rem] text-sm gap-4"
              >
                <span class="text-dark/85">{{ sched.range }}</span>
                <span class="font-semibold text-accent shrink-0">{{
                  sched.refund
                }}</span>
              </div>
            </div>
          </div>

          <!-- Force Majeure -->
          <div
            class="bg-light border border-secondary/20 rounded-2xl p-[2.5rem_2rem] lg:col-span-3 reveal-item"
          >
            <h3
              class="font-body text-sm uppercase text-primary border-b border-secondary/20 pb-[0.8rem] mb-[1.5rem]"
            >
              4. Force Majeure
            </h3>
            <p class="text-sm leading-[1.7] text-dark/80">
              {{ bookingPolicy.forceMajeure }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from "vue";
import {
  experiencesB2C,
  experiencesB2B,
  bookingPolicy,
} from "~/data/experiences";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

useSeoMeta({
  title: "Ruuts - Tea Experiences, Fees & Booking Policies",
  description:
    "Browse our signature collections of tea rituals, Pipa collaborations, and Taichi meditations in Shanghai, with booking structures and pricelists.",
});

const activeTab = ref("b2c");

const activeExperiences = computed(() => {
  return activeTab.value === "b2c" ? experiencesB2C : experiencesB2B;
});

const setTab = (tab) => {
  if (activeTab.value === tab) return;
  activeTab.value = tab;

  // Animate grid switch
  nextTick(() => {
    gsap.fromTo(
      ".grid-item-animate",
      { y: 30, opacity: 0 },
      { duration: 0.5, y: 0, opacity: 1, stagger: 0.1, ease: "power3.out" },
    );
  });
};

onMounted(() => {
  // Page header entry animation
  gsap.from(".page-header > *", {
    duration: 0.8,
    y: 20,
    opacity: 0,
    stagger: 0.1,
    ease: "power3.out",
  });

  // Grid entry animation
  gsap.from(".grid-item-animate", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.1,
    ease: "power3.out",
    delay: 0.3,
  });

  // Reveal policy cards
  const policyItems = document.querySelectorAll(".reveal-item");
  policyItems.forEach((item) => {
    gsap.fromTo(
      item,
      { y: 35, opacity: 0 },
      {
        scrollTrigger: {
          trigger: item,
          start: "top 88%",
          toggleActions: "play none none none",
        },
        duration: 0.8,
        y: 0,
        opacity: 1,
        ease: "power3.out",
      },
    );
  });
});
</script>
