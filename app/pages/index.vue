<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-bg-overlay"></div>
      <div class="hero-container container">
        <div class="hero-content">
          <span class="hero-tagline">Ruuts &bull; Tea & Presence</span>
          <h1 class="hero-title">Reconnecting With Origin</h1>
          <p class="hero-description">Premium group tea experiences and tea rituals designed to foster presence, connection, and intercultural discovery in an intimate setting.</p>
          <div class="hero-actions">
            <NuxtLink to="/experiences" class="btn-primary">Explore Sessions</NuxtLink>
            <NuxtLink to="/#about" class="btn-secondary btn-hero-sec">Our Story</NuxtLink>
          </div>
        </div>
      </div>
      
      <div class="scroll-indicator">
        <span class="scroll-dot"></span>
        <span class="scroll-text">Scroll to explore</span>
      </div>
    </section>

    <!-- About Section (Our Story, Founder, Mission) -->
    <AboutSection />

    <!-- Divider Decor -->
    <div class="container">
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
.hero-section {
  height: 100vh;
  min-height: 650px;
  position: relative;
  display: flex;
  align-items: center;
  background-image: url('https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1600&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  color: var(--bg-xuan-paper);
}

.hero-bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(10, 60, 50, 0.9) 0%, rgba(36, 30, 26, 0.8) 100%);
  z-index: 1;
}

.hero-container {
  position: relative;
  z-index: 2;
  margin-top: 40px;
}

.hero-content {
  max-width: 650px;
}

.hero-tagline {
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: var(--accent-antique-gold);
  display: block;
  margin-bottom: 1rem;
}

.hero-title {
  font-size: 3.8rem;
  font-weight: 600;
  color: var(--bg-xuan-paper);
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.8rem;
  }
}

.hero-description {
  font-size: 1.05rem;
  line-height: 1.8;
  color: rgba(250, 246, 240, 0.85);
  margin-bottom: 2.5rem;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
}

@media (max-width: 480px) {
  .hero-actions {
    flex-direction: column;
    gap: 1rem;
  }
}

.btn-hero-sec {
  border-color: rgba(250, 246, 240, 0.5);
  color: var(--bg-xuan-paper);
}

.btn-hero-sec:hover {
  background-color: var(--bg-xuan-paper);
  color: var(--brand-deep-jade);
  border-color: var(--bg-xuan-paper);
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.scroll-dot {
  width: 6px;
  height: 10px;
  background-color: var(--accent-antique-gold);
  border-radius: 3px;
  animation: scrollPulse 2s infinite ease-in-out;
}

.scroll-text {
  font-family: var(--font-body);
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: rgba(250, 246, 240, 0.6);
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
