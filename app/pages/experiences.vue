<template>
  <div class="bg-xuan-paper pt-[150px] section-padding">
    <div class="max-w-[1200px] mx-auto px-6 w-full page-header reveal-item">
      <span class="font-body text-[0.75rem] uppercase tracking-[0.2em] text-tea-gold block mb-2">Offerings</span>
      <h1 class="text-[3rem] tracking-[0.05em] mb-6 font-heading font-semibold text-sage-green">Our Experiences</h1>
      <p class="text-[1.05rem] text-oolong/80 max-w-[600px] leading-[1.8] mb-12">Carefully composed private encounters where Chinese tea culture, sound, breath, and presence meet. Find the perfect session for your group.</p>
      
      <!-- Premium Tab Switcher -->
      <div class="inline-flex border border-tea-gold/30 rounded-[50px] p-1 bg-sage-green/[0.03]">
        <button 
          :class="['bg-transparent border-none rounded-[50px] font-body text-[0.8rem] font-medium uppercase tracking-[0.1em] text-oolong py-[0.8rem] px-[1.8rem] cursor-pointer transition-colors duration-500', { '!bg-sage-green !text-xuan-paper': activeTab === 'b2c' }]" 
          @click="setTab('b2c')"
        >
          For Individuals (B2C)
        </button>
        <button 
          :class="['bg-transparent border-none rounded-[50px] font-body text-[0.8rem] font-medium uppercase tracking-[0.1em] text-oolong py-[0.8rem] px-[1.8rem] cursor-pointer transition-colors duration-500', { '!bg-sage-green !text-xuan-paper': activeTab === 'b2b' }]" 
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
    <div class="bg-sage-green/[0.03] border-t border-tea-gold/15 py-24">
      <div class="max-w-[1200px] mx-auto px-6 w-full">
        <div class="text-center reveal-item">
          <span class="font-body text-[0.75rem] uppercase tracking-[0.2em] text-tea-gold block mb-2">Terms</span>
          <h2 class="font-heading text-[2.4rem] tracking-[0.05em] mb-4 font-semibold text-sage-green">Private Session Policies</h2>
          <p class="text-[0.95rem] text-oolong/75 max-w-[550px] mx-auto mb-16 leading-[1.7]">To preserve the quality of each experience and the integrity of the hosting space, the following guidelines govern all bookings.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Session Confirmation -->
          <div class="bg-xuan-paper border border-tea-gold/15 rounded-2xl p-[2.5rem_2rem] reveal-item">
            <h3 class="font-body text-[0.95rem] uppercase tracking-[0.05em] text-sage-green border-b border-tea-gold pb-[0.8rem] mb-[1.5rem]">1. Session Confirmation</h3>
            <ul class="flex flex-col gap-[0.8rem]">
              <li v-for="(item, idx) in bookingPolicy.confirmation" :key="idx" class="text-[0.85rem] leading-[1.5] text-oolong/80 relative pl-[1.2rem] before:content-['•'] before:text-tea-gold before:text-[1.2rem] before:absolute before:left-0 before:-top-[2px]">{{ item }}</li>
            </ul>
          </div>

          <!-- Modification Policy -->
          <div class="bg-xuan-paper border border-tea-gold/15 rounded-2xl p-[2.5rem_2rem] reveal-item">
            <h3 class="font-body text-[0.95rem] uppercase tracking-[0.05em] text-sage-green border-b border-tea-gold pb-[0.8rem] mb-[1.5rem]">2. Modification Policy</h3>
            <ul class="flex flex-col gap-[0.8rem]">
              <li v-for="(item, idx) in bookingPolicy.modification" :key="idx" class="text-[0.85rem] leading-[1.5] text-oolong/80 relative pl-[1.2rem] before:content-['•'] before:text-tea-gold before:text-[1.2rem] before:absolute before:left-0 before:-top-[2px]">{{ item }}</li>
            </ul>
          </div>

          <!-- Cancellation Policy -->
          <div class="bg-xuan-paper border border-tea-gold/15 rounded-2xl p-[2.5rem_2rem] reveal-item">
            <h3 class="font-body text-[0.95rem] uppercase tracking-[0.05em] text-sage-green border-b border-tea-gold pb-[0.8rem] mb-[1.5rem]">3. Cancellation Policy</h3>
            <div class="flex flex-col gap-[0.8rem]">
              <div 
                v-for="(sched, idx) in bookingPolicy.cancellation" 
                :key="idx"
                class="flex justify-between border-b border-dashed border-tea-gold/15 pb-[0.6rem] text-[0.82rem] gap-4"
              >
                <span class="text-oolong/85">{{ sched.range }}</span>
                <span class="font-semibold text-cinnabar shrink-0">{{ sched.refund }}</span>
              </div>
            </div>
          </div>

          <!-- Force Majeure -->
          <div class="bg-xuan-paper border border-tea-gold/15 rounded-2xl p-[2.5rem_2rem] lg:col-span-3 reveal-item">
            <h3 class="font-body text-[0.95rem] uppercase tracking-[0.05em] text-sage-green border-b border-tea-gold pb-[0.8rem] mb-[1.5rem]">4. Force Majeure</h3>
            <p class="text-[0.88rem] leading-[1.7] text-oolong/80">{{ bookingPolicy.forceMajeure }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import { experiencesB2C, experiencesB2B, bookingPolicy } from '~/data/experiences'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

useSeoMeta({
  title: 'Ruuts - Tea Experiences, Fees & Booking Policies',
  description: 'Browse our signature collections of tea rituals, Pipa collaborations, and Taichi meditations in Shanghai, with booking structures and pricelists.'
})

const activeTab = ref('b2c')

const activeExperiences = computed(() => {
  return activeTab.value === 'b2c' ? experiencesB2C : experiencesB2B
})

const setTab = (tab) => {
  if (activeTab.value === tab) return
  activeTab.value = tab
  
  // Animate grid switch
  nextTick(() => {
    gsap.fromTo('.grid-item-animate', 
      { y: 30, opacity: 0 },
      { duration: 0.5, y: 0, opacity: 1, stagger: 0.1, ease: 'power3.out' }
    )
  })
}

onMounted(() => {
  // Page header entry animation
  gsap.from('.page-header > *', {
    duration: 0.8,
    y: 20,
    opacity: 0,
    stagger: 0.1,
    ease: 'power3.out'
  })

  // Grid entry animation
  gsap.from('.grid-item-animate', {
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.1,
    ease: 'power3.out',
    delay: 0.3
  })

  // Reveal policy cards
  const policyItems = document.querySelectorAll('.reveal-item')
  policyItems.forEach((item) => {
    gsap.fromTo(item,
      { y: 35, opacity: 0 },
      {
        scrollTrigger: {
          trigger: item,
          start: 'top 88%',
          toggleActions: 'play none none none'
        },
        duration: 0.8,
        y: 0,
        opacity: 1,
        ease: 'power3.out'
      }
    )
  })
})
</script>
