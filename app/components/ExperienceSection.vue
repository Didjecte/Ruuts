<template>
  <section :id="sectionId" ref="sectionRef" class="bg-background pt-[90px] md:pt-[100px] pb-0">
    <div
      :class="[
        'max-w-[1200px] mx-auto px-6 w-full page-header',
        { 'text-center flex flex-col items-center': catalogType === 'b2b' || activeExperiences.length === 2 }
      ]"
    >
      <h1 class="text-5xl mb-6 font-heading font-semibold text-primary">
        {{ title }}
      </h1>
      <p
        :class="[
          'text-foreground/80 max-w-[600px] leading-[1.8] mb-8',
          { 'mx-auto': catalogType === 'b2b' || activeExperiences.length === 2 }
        ]"
      >
        {{ description || (catalogType === 'b2b' ? 'Bespoke tea experiences for hotels, corporate events, and wellness venues. Bring the art of Chinese tea culture to your space.' : 'Carefully composed private encounters where Chinese tea culture, sound, breath, and presence meet. Find the perfect session for your group.') }}
      </p>
    </div>

    <!-- Experiences Grid -->
    <div class="max-w-[1200px] mx-auto px-6 w-full mt-6 mb-24">
      <div
        :class="[
          'grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8',
          activeExperiences.length === 2 || catalogType === 'b2b'
            ? 'lg:grid-cols-2 max-w-[900px] mx-auto'
            : 'lg:grid-cols-3'
        ]"
      >
        <div
          v-for="exp in activeExperiences"
          :key="exp.id"
          class="grid-item-animate h-full"
        >
          <ExperienceCard :experience="exp" :is-b2b="catalogType === 'b2b'" />
        </div>
      </div>
    </div>

    <!-- Booking Policy Details (from Ruuts.pdf) -->
    <div
      v-if="showPolicies !== null ? showPolicies : catalogType === 'b2c'"
      class="bg-primary/[0.03] border-t border-secondary/20 py-24 text-foreground"
    >
      <div class="max-w-[1200px] mx-auto px-6 w-full">
        <div class="text-center reveal-item">
          <h2 class="font-heading text-5xl mb-4 font-semibold text-primary">
            Private Session Policies
          </h2>
          <p
            class="text-base md:text-xl text-foreground/75 max-w-[650px] mx-auto mb-8 leading-[1.7]"
          >
            To preserve the quality of each experience and the integrity of the
            hosting space, the following guidelines govern all bookings.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Session Confirmation -->
          <div
            class="bg-surface border border-secondary/20 rounded-2xl p-[2.5rem_2rem] reveal-item"
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
                class="text-sm leading-[1.5] text-foreground/80 relative pl-[1.2rem] before:content-['•'] before:text-primary before:text-lg before:absolute before:left-0 before:-top-[2px]"
              >
                {{ item }}
              </li>
            </ul>
          </div>

          <!-- Modification Policy -->
          <div
            class="bg-surface border border-secondary/20 rounded-2xl p-[2.5rem_2rem] reveal-item"
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
                class="text-sm leading-[1.5] text-foreground/80 relative pl-[1.2rem] before:content-['•'] before:text-primary before:text-lg before:absolute before:left-0 before:-top-[2px]"
              >
                {{ item }}
              </li>
            </ul>
          </div>

          <!-- Cancellation Policy -->
          <div
            class="bg-surface border border-secondary/20 rounded-2xl p-[2.5rem_2rem] reveal-item"
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
                <span class="text-foreground/85">{{ sched.range }}</span>
                <span class="font-semibold text-accent shrink-0">{{
                  sched.refund
                }}</span>
              </div>
            </div>
          </div>

          <!-- Force Majeure -->
          <div
            class="bg-surface border border-secondary/20 rounded-2xl p-[2.5rem_2rem] lg:col-span-3 reveal-item"
          >
            <h3
              class="font-body text-sm uppercase text-primary border-b border-secondary/20 pb-[0.8rem] mb-[1.5rem]"
            >
              4. Force Majeure
            </h3>
            <p class="text-sm leading-[1.7] text-foreground/80">
              {{ bookingPolicy.forceMajeure }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import {
  experiencesB2C,
  experiencesB2B,
  bookingPolicy,
} from "~/data/experiences";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const props = defineProps({
  sectionId: {
    type: String,
    default: "experiences"
  },
  title: {
    type: String,
    default: "Private Experiences"
  },
  description: {
    type: String,
    default: ""
  },
  catalogType: {
    type: String,
    default: "b2c"
  },
  showPolicies: {
    type: Boolean,
    default: null
  }
});

const sectionRef = ref(null);

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

const { data: sanityExperiences } = await useSanityExperiences(props.catalogType);

const activeExperiences = computed(() => {
  if (sanityExperiences.value && sanityExperiences.value.length > 0) {
    return sanityExperiences.value;
  }
  return props.catalogType === "b2b" ? experiencesB2B : experiencesB2C;
});

onMounted(() => {
  if (!sectionRef.value) return;

  const pageHeader = sectionRef.value.querySelector(".page-header");
  if (pageHeader) {
    gsap.from(pageHeader.children, {
      scrollTrigger: {
        trigger: pageHeader,
        start: "top 85%",
      },
      duration: 0.8,
      y: 20,
      opacity: 0,
      stagger: 0.1,
      ease: "power3.out",
    });
  }

  const gridItems = sectionRef.value.querySelectorAll(".grid-item-animate");
  if (gridItems.length > 0) {
    gsap.from(gridItems, {
      scrollTrigger: {
        trigger: pageHeader || sectionRef.value,
        start: "top 75%",
      },
      duration: 0.8,
      y: 30,
      opacity: 0,
      stagger: 0.1,
      ease: "power3.out",
      delay: 0.2,
    });
  }

  const policyItems = sectionRef.value.querySelectorAll(".reveal-item");
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
