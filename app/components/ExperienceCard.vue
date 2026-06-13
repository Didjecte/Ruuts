<template>
  <div
    :class="[
      'flex flex-col bg-light/60 border border-secondary/20 rounded-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] h-full group hover:scale-[1.02] hover:border-primary hover:shadow-[0_15px_35px_rgba(136,169,91,0.15)]',
      { 'is-b2b': isB2b },
    ]"
  >
    <div class="relative w-full h-[280px] overflow-hidden">
      <img
        :src="experience.image"
        :alt="experience.title"
        class="w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
      />
      <span
        class="absolute top-4 left-4 bg-primary text-light font-body text-xs font-medium uppercase px-3 py-1.5 rounded-full border border-secondary/30"
        >{{ tag }}</span
      >
    </div>

    <div class="p-[2.2rem_2rem] flex flex-col grow">
      <div class="mb-5">
        <h3 class="text-2xl text-dark font-heading font-semibold">
          {{ experience.title }}
        </h3>
      </div>

      <p class="text-sm leading-[1.65] text-dark/80 mb-[1.8rem] grow">
        {{ experience.description }}
      </p>

      <!-- Specific B2C Details -->
      <div
        v-if="!isB2b"
        class="grid grid-cols-2 gap-[1.2rem] mb-6 bg-primary/[0.02] p-4 rounded-lg border border-secondary/20"
      >
        <div class="flex flex-col gap-[0.2rem]">
          <span class="font-body text-xs uppercase text-dark/50">Duration</span>
          <span class="font-body text-sm font-semibold text-dark">{{
            experience.duration
          }}</span>
        </div>
        <div class="flex flex-col gap-[0.2rem]">
          <span class="font-body text-xs uppercase text-dark/50">Capacity</span>
          <span class="font-body text-sm font-semibold text-dark"
            >Up to {{ experience.maxGuests }} guests</span
          >
        </div>
        <div class="flex flex-col gap-[0.2rem]">
          <span class="font-body text-xs uppercase text-dark/50"
            >Price / Guest</span
          >
          <span class="font-body text-sm font-semibold text-dark"
            >¥{{ experience.pricePerGuest }}</span
          >
        </div>
        <div class="flex flex-col gap-[0.2rem]">
          <span class="font-body text-xs uppercase text-dark/50"
            >Min Booking</span
          >
          <span class="font-body text-sm font-semibold text-dark"
            >¥{{ experience.minBookingValue }}</span
          >
        </div>
      </div>

      <!-- Specific B2B Details -->
      <div
        v-else
        class="flex flex-col gap-[0.2rem] mb-6 bg-primary/[0.05] p-4 rounded-lg border-l-[3px] border-primary"
      >
        <span
          class="font-body text-xs uppercase tracking-[0.05em] text-secondary"
          >Strategic Focus</span
        >
        <span class="font-heading text-lg font-medium text-dark">{{
          experience.focus
        }}</span>
      </div>

      <div class="h-[1px] bg-secondary/20 mb-6"></div>

      <div class="mb-8">
        <h4 class="font-body text-xs uppercase text-dark mb-3">Highlights</h4>
        <ul class="flex flex-col gap-2">
          <li
            v-for="(bullet, index) in bullets"
            :key="index"
            class="flex items-start gap-[0.6rem] text-sm text-dark/85 leading-[1.4]"
          >
            <svg
              class="w-[14px] h-[14px] text-primary mt-[2px] shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>{{ bullet }}</span>
          </li>
        </ul>
      </div>

      <div>
        <NuxtLink
          to="/#contact"
          class="flex items-center justify-center w-full p-[0.8rem] border border-primary rounded-[50px] font-body text-xs uppercase font-medium transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:bg-primary group-hover:text-light hover:!bg-secondary hover:!border-secondary hover:!text-dark"
          >Book Session</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  experience: {
    type: Object,
    required: true,
  },
  isB2b: {
    type: Boolean,
    default: false,
  },
});

const tag = computed(() => {
  return props.isB2b ? "Corporate B2B" : props.experience.category;
});

const bullets = computed(() => {
  return props.isB2b ? props.experience.highlights : props.experience.bullets;
});
</script>
