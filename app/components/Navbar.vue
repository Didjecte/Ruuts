<template>
  <header :class="['site-header', { 'is-scrolled': isScrolled }]">
    <div class="container nav-container">
      <NuxtLink to="/" class="logo">RUUTS</NuxtLink>
      
      <!-- Desktop Menu -->
      <nav class="desktop-nav">
        <NuxtLink to="/" class="nav-link">About</NuxtLink>
        <NuxtLink to="/experiences" class="nav-link">Experiences</NuxtLink>
        <NuxtLink to="/insights" class="nav-link">Insights</NuxtLink>
        <NuxtLink to="/#contact" class="nav-link contact-btn">Contact</NuxtLink>
      </nav>

      <!-- Burger Button (Mobile) -->
      <button 
        class="burger-btn" 
        :aria-expanded="isMenuOpen" 
        aria-label="Toggle menu"
        @click="toggleMenu"
      >
        <span class="burger-line line-1"></span>
        <span class="burger-line line-2"></span>
        <span class="burger-line line-3"></span>
      </button>
    </div>

    <!-- Mobile Fullscreen Overlay -->
    <div ref="mobileOverlay" class="mobile-menu-overlay">
      <div class="mobile-menu-content">
        <nav class="mobile-nav">
          <NuxtLink to="/" class="mobile-nav-link" @click="closeMenu">About & Story</NuxtLink>
          <NuxtLink to="/experiences" class="mobile-nav-link" @click="closeMenu">Experiences</NuxtLink>
          <NuxtLink to="/insights" class="mobile-nav-link" @click="closeMenu">Insights</NuxtLink>
          <NuxtLink to="/#contact" class="mobile-nav-link" @click="closeMenu">Contact</NuxtLink>
        </nav>
        
        <div class="mobile-menu-footer">
          <p>contact@theruuts.com</p>
          <p>+86 18217180655</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const mobileOverlay = ref(null)

let menuTimeline = null

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
    menuTimeline.play()
  } else {
    document.body.style.overflow = ''
    menuTimeline.reverse()
  }
}

const closeMenu = () => {
  if (isMenuOpen.value) {
    toggleMenu()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()

  // Initialize GSAP timeline for mobile menu
  menuTimeline = gsap.timeline({ paused: true })
  
  menuTimeline.to(mobileOverlay.value, {
    duration: 0.5,
    clipPath: 'circle(150% at 90% 10%)',
    ease: 'power3.inOut',
    pointerEvents: 'auto'
  })
  
  menuTimeline.to('.burger-line.line-2', {
    duration: 0.2,
    opacity: 0,
    ease: 'power2.inOut'
  }, '<')
  
  menuTimeline.to('.burger-line.line-1', {
    duration: 0.3,
    y: 8,
    rotate: 45,
    ease: 'back.out(1.7)'
  }, '<')

  menuTimeline.to('.burger-line.line-3', {
    duration: 0.3,
    y: -8,
    rotate: -45,
    ease: 'back.out(1.7)'
  }, '<')

  menuTimeline.fromTo('.mobile-nav-link', 
    { y: 30, opacity: 0 },
    { duration: 0.4, y: 0, opacity: 1, stagger: 0.1, ease: 'power3.out' },
    '-=0.2'
  )

  menuTimeline.fromTo('.mobile-menu-footer', 
    { opacity: 0 },
    { duration: 0.3, opacity: 1, ease: 'power2.out' },
    '-=0.2'
  )
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  z-index: 100;
  transition: var(--transition-smooth);
  border-bottom: 1px solid transparent;
  background-color: transparent;
}

.site-header.is-scrolled {
  height: 70px;
  background-color: rgba(250, 246, 240, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(197, 160, 89, 0.15);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--brand-deep-jade);
}

/* Desktop Nav Styles */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }
}

.nav-link {
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-oolong);
  position: relative;
  padding: 0.2rem 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background-color: var(--accent-antique-gold);
  transition: var(--transition-fast);
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link:hover {
  color: var(--brand-deep-jade);
}

.contact-btn {
  border: 1px solid var(--brand-deep-jade);
  padding: 0.5rem 1.2rem;
  border-radius: 0;
  transition: var(--transition-smooth);
}

.contact-btn:hover {
  background-color: var(--brand-deep-jade);
  color: var(--bg-xuan-paper) !important;
}

.contact-btn::after {
  display: none;
}

/* Mobile Burger Button */
.burger-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 20px;
  position: relative;
  z-index: 101;
  flex-direction: column;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .burger-btn {
    display: flex;
  }
}

.burger-line {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--brand-deep-jade);
  transition: background-color 0.3s;
}

/* Mobile Fullscreen Overlay */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--brand-deep-jade);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  clip-path: circle(0px at 90% 5%);
  transition: none; /* Controlled by GSAP */
}

.mobile-menu-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 60%;
  width: 100%;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.mobile-nav-link {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  color: var(--bg-xuan-paper);
  letter-spacing: 0.05em;
  opacity: 0;
}

.mobile-nav-link:hover {
  color: var(--accent-antique-gold);
}

.mobile-menu-footer {
  text-align: center;
  color: rgba(250, 246, 240, 0.7);
  font-size: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  opacity: 0;
}
</style>
