<template>
  <header :class="['fixed top-0 left-0 w-full h-[80px] flex items-center z-[100] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] border-b border-transparent bg-transparent', { 'h-[70px] !bg-xuan-paper/85 backdrop-blur-[12px] !border-tea-gold/15': isScrolled }]">
    <div class="flex justify-between items-center w-full max-w-[1200px] mx-auto px-6">
      <NuxtLink to="/" class="font-heading text-[1.6rem] font-bold tracking-[0.15em] text-sage-green">RUUTS</NuxtLink>
      
      <!-- Desktop Menu -->
      <nav class="hidden md:flex items-center gap-10">
        <NuxtLink to="/" class="font-body text-[0.85rem] font-medium uppercase tracking-[0.1em] text-oolong relative py-[0.2rem] group hover:text-sage-green transition-colors duration-200">
          About
          <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-tea-gold transition-all duration-200 group-hover:w-full"></span>
        </NuxtLink>
        <NuxtLink to="/experiences" class="font-body text-[0.85rem] font-medium uppercase tracking-[0.1em] text-oolong relative py-[0.2rem] group hover:text-sage-green transition-colors duration-200">
          Experiences
          <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-tea-gold transition-all duration-200 group-hover:w-full"></span>
        </NuxtLink>
        <NuxtLink to="/insights" class="font-body text-[0.85rem] font-medium uppercase tracking-[0.1em] text-oolong relative py-[0.2rem] group hover:text-sage-green transition-colors duration-200">
          Insights
          <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-tea-gold transition-all duration-200 group-hover:w-full"></span>
        </NuxtLink>
        <NuxtLink to="/#contact" class="font-body text-[0.85rem] font-medium uppercase tracking-[0.1em] text-oolong border border-sage-green px-[1.2rem] py-[0.5rem] rounded-[50px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-sage-green hover:text-xuan-paper">
          Contact
        </NuxtLink>
      </nav>

      <!-- Burger Button (Mobile) -->
      <button 
        class="flex md:hidden flex-col justify-between w-[30px] h-[20px] bg-transparent border-none cursor-pointer relative z-[101]" 
        :aria-expanded="isMenuOpen" 
        aria-label="Toggle menu"
        @click="toggleMenu"
      >
        <span class="burger-line line-1 block w-full h-[2px] bg-sage-green transition-colors duration-300"></span>
        <span class="burger-line line-2 block w-full h-[2px] bg-sage-green transition-colors duration-300"></span>
        <span class="burger-line line-3 block w-full h-[2px] bg-sage-green transition-colors duration-300"></span>
      </button>
    </div>

    <!-- Mobile Fullscreen Overlay -->
    <div ref="mobileOverlay" class="fixed top-0 left-0 w-screen h-screen bg-sage-green z-[99] flex justify-center items-center pointer-events-none [clip-path:circle(0px_at_90%_5%)]">
      <div class="flex flex-col items-center justify-between h-[60%] w-full">
        <nav class="flex flex-col items-center gap-8">
          <NuxtLink to="/" class="mobile-nav-link font-heading text-[2.2rem] text-xuan-paper tracking-[0.05em] opacity-0 hover:text-tea-gold transition-colors duration-200" @click="closeMenu">About & Story</NuxtLink>
          <NuxtLink to="/experiences" class="mobile-nav-link font-heading text-[2.2rem] text-xuan-paper tracking-[0.05em] opacity-0 hover:text-tea-gold transition-colors duration-200" @click="closeMenu">Experiences</NuxtLink>
          <NuxtLink to="/insights" class="mobile-nav-link font-heading text-[2.2rem] text-xuan-paper tracking-[0.05em] opacity-0 hover:text-tea-gold transition-colors duration-200" @click="closeMenu">Insights</NuxtLink>
          <NuxtLink to="/#contact" class="mobile-nav-link font-heading text-[2.2rem] text-xuan-paper tracking-[0.05em] opacity-0 hover:text-tea-gold transition-colors duration-200" @click="closeMenu">Contact</NuxtLink>
        </nav>
        
        <div class="mobile-menu-footer text-center text-xuan-paper/70 text-[0.85rem] flex flex-col gap-2 opacity-0">
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
