<template>
  <div>
    <!-- Hero Section -->
    <section class="h-screen min-h-[650px] relative flex items-center bg-[url('https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center text-light">
      <div class="absolute inset-0 bg-gradient-to-br from-primary/80 to-dark/80 z-[1]"></div>
      <div class="relative z-[2] mt-[40px] max-w-[1200px] mx-auto px-6 w-full">
        <div class="max-w-[650px]">
          <span class="hero-tagline font-body text-[0.8rem] font-medium uppercase tracking-[0.3em] text-secondary block mb-4">Ruuts &bull; Tea & Presence</span>
          <h1 class="hero-title font-heading text-[2.8rem] md:text-[3.8rem] font-semibold text-light leading-[1.15] tracking-[-0.02em] mb-6">Reconnecting With Origin</h1>
          <p class="hero-description text-[1.05rem] leading-[1.8] text-light/85 mb-10">Premium group tea experiences and tea rituals designed to foster presence, connection, and intercultural discovery in an intimate setting.</p>
          <div class="hero-actions flex flex-col sm:flex-row gap-4 sm:gap-6">
            <NuxtLink to="/experiences" class="btn-primary">Explore Sessions</NuxtLink>
            <NuxtLink to="/#about" class="btn-secondary !border-light/50 !text-light hover:!bg-light hover:!text-primary hover:!border-light">Our Story</NuxtLink>
          </div>
        </div>
      </div>
      
      <div class="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2">
        <span class="scroll-dot w-[6px] h-[10px] bg-secondary rounded-[3px]"></span>
        <span class="font-body text-[0.65rem] uppercase tracking-[0.15em] text-light/60">Scroll to explore</span>
      </div>
    </section>

    <!-- About Section (Our Story, Founder, Mission) -->
    <AboutSection />

    <!-- Divider Decor -->
    <div class="max-w-[1200px] mx-auto px-6 w-full">
      <div class="gold-divider"></div>
    </div>

    <!-- Contact Section (Details, QRs, Form) -->
    <ContactSection />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

useSeoMeta({
  title: 'Ruuts - Premium Group Experiences & Tea Rituals',
  description: 'Reconnect with your roots through Chinese tea culture. We design signature tea ceremonies, body rituals, and premium group experiences.'
})

onMounted(() => {
  // Page load animations
  gsap.from('.hero-tagline', {
    duration: 0.8,
    y: 20,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.2
  })
  
  gsap.from('.hero-title', {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: 'power4.out',
    delay: 0.4
  })

  gsap.from('.hero-description', {
    duration: 0.8,
    y: 20,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.6
  })

  gsap.from('.hero-actions', {
    duration: 0.8,
    y: 20,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.8
  })

  gsap.from('.scroll-indicator', {
    duration: 0.6,
    opacity: 0,
    ease: 'power2.out',
    delay: 1.2
  })

  // Scroll reveal animations for sections
  const revealItems = document.querySelectorAll('.reveal-item')
  
  revealItems.forEach((item) => {
    gsap.fromTo(item, 
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
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
.scroll-dot {
  animation: scrollPulse 2s infinite ease-in-out;
}

@keyframes scrollPulse {
  0% {
    transform: translateY(0);
    opacity: 0.3;
  }
  50% {
    transform: translateY(6px);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 0.3;
  }
}
</style>
