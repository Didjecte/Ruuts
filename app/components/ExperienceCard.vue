<template>
  <div :class="['flex flex-col bg-xuan-paper/60 border border-tea-gold/15 rounded-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] h-full group hover:scale-[1.02] hover:border-tea-gold hover:shadow-[0_15px_35px_rgba(133,159,130,0.15)]', { 'is-b2b': isB2b }]">
    <div class="relative w-full h-[280px] overflow-hidden">
      <img :src="experience.image" :alt="experience.title" class="w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" />
      <span class="absolute top-4 left-4 bg-sage-green text-xuan-paper font-body text-[0.7rem] font-medium uppercase tracking-[0.1em] px-3 py-1.5 rounded-full border border-tea-gold/30">{{ tag }}</span>
    </div>
    
    <div class="p-[2.2rem_2rem] flex flex-col grow">
      <div class="mb-5">
        <span class="font-body text-[0.75rem] uppercase tracking-[0.15em] text-tea-gold block mb-[0.4rem]">{{ experience.subtitle }}</span>
        <h3 class="text-[1.6rem] text-sage-green font-heading font-semibold">{{ experience.title }}</h3>
      </div>
      
      <p class="text-[0.88rem] leading-[1.65] text-oolong/80 mb-[1.8rem] grow">{{ experience.description }}</p>
      
      <!-- Specific B2C Details -->
      <div v-if="!isB2b" class="grid grid-cols-2 gap-[1.2rem] mb-6 bg-sage-green/[0.03] p-4 rounded-lg border border-tea-gold/15">
        <div class="flex flex-col gap-[0.2rem]">
          <span class="font-body text-[0.65rem] uppercase tracking-[0.05em] text-oolong/50">Duration</span>
          <span class="font-body text-[0.85rem] font-semibold text-sage-green">{{ experience.duration }}</span>
        </div>
        <div class="flex flex-col gap-[0.2rem]">
          <span class="font-body text-[0.65rem] uppercase tracking-[0.05em] text-oolong/50">Capacity</span>
          <span class="font-body text-[0.85rem] font-semibold text-sage-green">Up to {{ experience.maxGuests }} guests</span>
        </div>
        <div class="flex flex-col gap-[0.2rem]">
          <span class="font-body text-[0.65rem] uppercase tracking-[0.05em] text-oolong/50">Price / Guest</span>
          <span class="font-body text-[0.85rem] font-semibold text-sage-green">¥{{ experience.pricePerGuest }}</span>
        </div>
        <div class="flex flex-col gap-[0.2rem]">
          <span class="font-body text-[0.65rem] uppercase tracking-[0.05em] text-oolong/50">Min Booking</span>
          <span class="font-body text-[0.85rem] font-semibold text-sage-green">¥{{ experience.minBookingValue }}</span>
        </div>
      </div>

      <!-- Specific B2B Details -->
      <div v-else class="flex flex-col gap-[0.2rem] mb-6 bg-tea-gold/[0.05] p-4 rounded-lg border-l-[3px] border-tea-gold">
        <span class="font-body text-[0.65rem] uppercase tracking-[0.05em] text-tea-gold">Strategic Focus</span>
        <span class="font-heading text-[1.1rem] font-medium text-sage-green">{{ experience.focus }}</span>
      </div>

      <div class="h-[1px] bg-tea-gold/15 mb-6"></div>
      
      <div class="mb-8">
        <h4 class="font-body text-[0.75rem] uppercase tracking-[0.08em] text-tea-gold mb-3">Highlights</h4>
        <ul class="flex flex-col gap-2">
          <li v-for="(bullet, index) in bullets" :key="index" class="flex items-start gap-[0.6rem] text-[0.85rem] text-oolong/85 leading-[1.4]">
            <svg class="w-[14px] h-[14px] text-tea-gold mt-[2px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>{{ bullet }}</span>
          </li>
        </ul>
      </div>

      <div>
        <NuxtLink to="/#contact" class="flex items-center justify-center w-full p-[0.8rem] border border-sage-green rounded-[50px] font-body text-[0.8rem] uppercase tracking-[0.1em] font-medium transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:bg-sage-green group-hover:text-xuan-paper hover:!bg-tea-gold hover:!border-tea-gold hover:!text-xuan-paper">Book Session</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  experience: {
    type: Object,
    required: true
  },
  isB2b: {
    type: Boolean,
    default: false
  }
})

const tag = computed(() => {
  return props.isB2b ? 'Corporate B2B' : props.experience.category
})

const bullets = computed(() => {
  return props.isB2b ? props.experience.highlights : props.experience.bullets
})
</script>
