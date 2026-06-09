<template>
  <div class="experiences-page section-padding">
    <div class="container page-header reveal-item">
      <span class="page-tag">Offerings</span>
      <h1 class="page-title">Our Experiences</h1>
      <p class="page-description">Carefully composed private encounters where Chinese tea culture, sound, breath, and presence meet. Find the perfect session for your group.</p>
      
      <!-- Premium Tab Switcher -->
      <div class="switcher-container">
        <button 
          :class="['switch-btn', { 'is-active': activeTab === 'b2c' }]" 
          @click="setTab('b2c')"
        >
          For Individuals (B2C)
        </button>
        <button 
          :class="['switch-btn', { 'is-active': activeTab === 'b2b' }]" 
          @click="setTab('b2b')"
        >
          For Professionals (B2B)
        </button>
      </div>
    </div>

    <!-- Experiences Grid -->
    <div class="container grid-container">
      <div class="experiences-grid">
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
    <div class="booking-policy-section">
      <div class="container">
        <div class="policy-header reveal-item text-center">
          <span class="policy-tag">Terms</span>
          <h2 class="policy-title">Private Session Policies</h2>
          <p class="policy-intro-p">To preserve the quality of each experience and the integrity of the hosting space, the following guidelines govern all bookings.</p>
        </div>

        <div class="policy-grid">
          <!-- Session Confirmation -->
          <div class="policy-card reveal-item">
            <h3>1. Session Confirmation</h3>
            <ul>
              <li v-for="(item, idx) in bookingPolicy.confirmation" :key="idx">{{ item }}</li>
            </ul>
          </div>

          <!-- Modification Policy -->
          <div class="policy-card reveal-item">
            <h3>2. Modification Policy</h3>
            <ul>
              <li v-for="(item, idx) in bookingPolicy.modification" :key="idx">{{ item }}</li>
            </ul>
          </div>

          <!-- Cancellation Policy -->
          <div class="policy-card reveal-item">
            <h3>3. Cancellation Policy</h3>
            <div class="cancellation-schedule">
              <div 
                v-for="(sched, idx) in bookingPolicy.cancellation" 
                :key="idx"
                class="cancellation-row"
              >
                <span class="cancel-range">{{ sched.range }}</span>
                <span class="cancel-refund">{{ sched.refund }}</span>
              </div>
            </div>
          </div>

          <!-- Force Majeure -->
          <div class="policy-card reveal-item full-width-card">
            <h3>4. Force Majeure</h3>
            <p class="force-majeure-text">{{ bookingPolicy.forceMajeure }}</p>
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
  const policyItems = document.querySelectorAll('.policy-card, .policy-header')
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

<style scoped>
.experiences-page {
  background-color: var(--bg-xuan-paper);
  padding-top: 150px;
}

.page-tag {
  font-family: var(--font-body);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--accent-antique-gold);
  display: block;
  margin-bottom: 0.5rem;
}

.page-title {
  font-size: 3rem;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
}

.page-description {
  font-size: 1.05rem;
  color: rgba(36, 30, 26, 0.8);
  max-width: 600px;
  line-height: 1.8;
  margin-bottom: 3rem;
}

/* Premium Tab Switcher */
.switcher-container {
  display: inline-flex;
  border: 1px solid rgba(197, 160, 89, 0.3);
  padding: 4px;
  background-color: rgba(10, 60, 50, 0.02);
}

.switch-btn {
  background: none;
  border: none;
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-oolong);
  padding: 0.8rem 1.8rem;
  cursor: pointer;
  transition: var(--transition-smooth);
}

.switch-btn.is-active {
  background-color: var(--brand-deep-jade);
  color: var(--bg-xuan-paper);
}

/* Grid layout */
.grid-container {
  margin-top: 4rem;
  margin-bottom: 6rem;
}

.experiences-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
}

@media (max-width: 992px) {
  .experiences-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 650px) {
  .experiences-grid {
    grid-template-columns: 1fr;
  }
}

/* Booking policies section */
.booking-policy-section {
  background-color: rgba(10, 60, 50, 0.02);
  border-top: 1px solid rgba(197, 160, 89, 0.15);
  padding: 6rem 0;
}

.policy-tag {
  font-family: var(--font-body);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--accent-antique-gold);
  display: block;
  margin-bottom: 0.5rem;
}

.policy-title {
  font-size: 2.4rem;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.policy-intro-p {
  font-size: 0.95rem;
  color: rgba(36, 30, 26, 0.75);
  max-width: 550px;
  margin: 0 auto 4rem auto;
  line-height: 1.7;
}

.policy-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

@media (max-width: 992px) {
  .policy-grid {
    grid-template-columns: 1fr;
  }
}

.policy-card {
  background-color: var(--bg-xuan-paper);
  border: 1px solid rgba(197, 160, 89, 0.15);
  padding: 2.5rem 2rem;
}

.policy-card h3 {
  font-family: var(--font-body);
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--brand-deep-jade);
  border-bottom: 1px solid var(--accent-antique-gold);
  padding-bottom: 0.8rem;
  margin-bottom: 1.5rem;
}

.policy-card ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.policy-card li {
  font-size: 0.85rem;
  line-height: 1.5;
  color: rgba(36, 30, 26, 0.8);
  position: relative;
  padding-left: 1.2rem;
}

.policy-card li::before {
  content: '•';
  color: var(--accent-antique-gold);
  font-size: 1.2rem;
  position: absolute;
  left: 0;
  top: -2px;
}

/* Cancellation list */
.cancellation-schedule {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.cancellation-row {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed rgba(197, 160, 89, 0.15);
  padding-bottom: 0.6rem;
  font-size: 0.82rem;
  gap: 1rem;
}

.cancel-range {
  color: rgba(36, 30, 26, 0.85);
}

.cancel-refund {
  font-weight: 600;
  color: var(--accent-cinnabar);
  flex-shrink: 0;
}

/* Full width card */
.full-width-card {
  grid-column: span 3;
}

@media (max-width: 992px) {
  .full-width-card {
    grid-column: span 1;
  }
}

.force-majeure-text {
  font-size: 0.88rem;
  line-height: 1.7;
  color: rgba(36, 30, 26, 0.8);
}
</style>
