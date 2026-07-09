<template>
  <header
    ref="headerRef"
    :class="[
      'fixed top-0 left-0 w-full h-[80px] flex items-center z-[100] border-b border-transparent bg-transparent',
      'transition-[height,background-color,border-color,backdrop-filter] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]',
      {
        'h-[70px] !bg-background/85 backdrop-blur-[12px] !border-secondary/15':
          isScrolled,
      },
    ]"
  >
    <div
      class="flex justify-between items-center w-full max-w-[1200px] mx-auto px-6"
    >
      <NuxtLink
        to="/"
        @click="(e) => handleNavLinkClick(e, '/')"
        :class="[
          'flex flex-col items-center gap-0.5 group transition-colors duration-500',
          isTransparentNavbar
            ? 'text-foreground-inverse hover:text-secondary'
            : 'text-primary',
        ]"
      >
        <div
          class="h-8 w-[25.6px] bg-current transition-colors duration-500"
          style="
            mask-image: url(&quot;/logo.svg&quot;);
            mask-size: contain;
            mask-repeat: no-repeat;
            mask-position: center;
            -webkit-mask-image: url(&quot;/logo.svg&quot;);
            -webkit-mask-size: contain;
            -webkit-mask-repeat: no-repeat;
            -webkit-mask-position: center;
          "
        ></div>
        <span class="font-logo text-xl font-medium tracking-[0.05em]"> RUUTS </span>
      </NuxtLink>

      <!-- Desktop Menu -->
      <nav class="hidden md:flex items-center gap-10">
        <NuxtLink
          to="/custom-experiences"
          @click="(e) => handleNavLinkClick(e, '/custom-experiences')"
          :class="[
            'font-body text-sm font-medium uppercase tracking-[0.1em] relative py-[0.2rem] group transition-colors duration-500',
            isTransparentNavbar
              ? 'text-foreground-inverse hover:text-secondary'
              : 'text-foreground hover:text-primary',
          ]"
        >
          Tea Anywhere
          <span
            :class="[
              'absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-200 group-hover:w-full',
              isTransparentNavbar ? 'bg-secondary' : 'bg-primary',
            ]"
          ></span>
        </NuxtLink>
        <NuxtLink
          to="/testimonials"
          @click="(e) => handleNavLinkClick(e, '/testimonials')"
          :class="[
            'font-body text-sm font-medium uppercase tracking-[0.1em] relative py-[0.2rem] group transition-colors duration-500',
            isTransparentNavbar
              ? 'text-foreground-inverse hover:text-secondary'
              : 'text-foreground hover:text-primary',
          ]"
        >
          Testimonials
          <span
            :class="[
              'absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-200 group-hover:w-full',
              isTransparentNavbar ? 'bg-secondary' : 'bg-primary',
            ]"
          ></span>
        </NuxtLink>
        <NuxtLink
          to="/experiences"
          @click="(e) => handleNavLinkClick(e, '/experiences')"
          :class="[
            'font-body text-sm font-medium uppercase tracking-[0.1em] relative py-[0.2rem] group transition-colors duration-500',
            isTransparentNavbar
              ? 'text-foreground-inverse hover:text-secondary'
              : 'text-foreground hover:text-primary',
          ]"
        >
          Private Experiences
          <span
            :class="[
              'absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-200 group-hover:w-full',
              isTransparentNavbar ? 'bg-secondary' : 'bg-primary',
            ]"
          ></span>
        </NuxtLink>
        <NuxtLink
          to="/about"
          @click="(e) => handleNavLinkClick(e, '/about')"
          :class="[
            'font-body text-sm font-medium uppercase tracking-[0.1em] relative py-[0.2rem] group transition-colors duration-500',
            isTransparentNavbar
              ? 'text-foreground-inverse hover:text-secondary'
              : 'text-foreground hover:text-primary',
          ]"
        >
          About us
          <span
            :class="[
              'absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-200 group-hover:w-full',
              isTransparentNavbar ? 'bg-secondary' : 'bg-primary',
            ]"
          ></span>
        </NuxtLink>
        <NuxtLink
          to="/contact"
          @click="(e) => handleNavLinkClick(e, '/contact')"
          :class="[
            'inline-block font-body text-sm font-medium uppercase tracking-[0.1em] px-[1.2rem] py-[0.5rem] rounded-[50px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]',
            'style-gold',
          ]"
        >
          Talk to us
        </NuxtLink>
      </nav>

      <!-- Burger Button (Mobile) -->
      <button
        class="flex md:hidden flex-col justify-between w-[50px] h-[40px] p-[10px] -mr-[10px] bg-transparent border-none cursor-pointer relative z-[101]"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle menu"
        @click="toggleMenu"
      >
        <span
          :class="[
            'burger-line line-1 block w-full h-[2px] transition-all duration-300',
            isTransparentNavbar || isMenuOpen
              ? 'bg-foreground-inverse'
              : 'bg-primary',
          ]"
        ></span>
        <span
          :class="[
            'burger-line line-2 block w-full h-[2px] transition-all duration-300',
            isTransparentNavbar || isMenuOpen
              ? 'bg-foreground-inverse'
              : 'bg-primary',
          ]"
        ></span>
        <span
          :class="[
            'burger-line line-3 block w-full h-[2px] transition-all duration-300',
            isTransparentNavbar || isMenuOpen
              ? 'bg-foreground-inverse'
              : 'bg-primary',
          ]"
        ></span>
      </button>
    </div>

    <!-- Mobile Fullscreen Overlay -->
    <div
      ref="mobileOverlay"
      class="fixed top-0 left-0 w-screen h-screen dark bg-background z-[99] flex justify-center items-center pointer-events-none [clip-path:circle(0px_at_90%_5%)]"
    >
      <div class="flex flex-col items-center justify-between h-[60%] w-full">
        <nav class="flex flex-col items-center gap-8">
          <NuxtLink
            to="/custom-experiences"
            class="mobile-nav-link font-heading text-4xl text-foreground tracking-[0.05em] opacity-0 hover:text-primary transition-colors duration-200"
            @click="(e) => handleNavLinkClick(e, '/custom-experiences')"
            >Tea anywhere</NuxtLink
          >
          <NuxtLink
            to="/testimonials"
            class="mobile-nav-link font-heading text-4xl text-foreground tracking-[0.05em] opacity-0 hover:text-primary transition-colors duration-200"
            @click="(e) => handleNavLinkClick(e, '/testimonials')"
            >Testimonials</NuxtLink
          >
          <NuxtLink
            to="/experiences"
            class="mobile-nav-link font-heading text-4xl text-foreground tracking-[0.05em] opacity-0 hover:text-primary transition-colors duration-200"
            @click="(e) => handleNavLinkClick(e, '/experiences')"
            >Private Experiences</NuxtLink
          >
          <NuxtLink
            to="/about"
            class="mobile-nav-link font-heading text-4xl text-foreground tracking-[0.05em] opacity-0 hover:text-primary transition-colors duration-200"
            @click="(e) => handleNavLinkClick(e, '/about')"
            >About us</NuxtLink
          >
          <NuxtLink
            to="/contact"
            class="mobile-nav-link font-heading text-4xl text-foreground tracking-[0.05em] opacity-0 hover:text-primary transition-colors duration-200"
            @click="(e) => handleNavLinkClick(e, '/contact')"
            >Talk to us</NuxtLink
          >
        </nav>

        <div
          class="mobile-menu-footer text-center text-foreground/70 text-sm flex flex-col gap-2 opacity-0"
        >
          <p>contact@theruuts.com</p>
          <p>+86 18217180655</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { gsap } from "gsap";

const route = useRoute();
const headerRef = ref(null);
const isScrolled = ref(false);
const isMenuOpen = ref(false);
const mobileOverlay = ref(null);

let navTranslateY = 0;
let lastScrollY = 0;
let ticking = false;

const isTransparentNavbar = computed(() => {
  return (
    (route.meta.transparentHeader || route.meta.headerTheme === "dark") &&
    !isScrolled.value
  );
});

const handleNavLinkClick = (e, path) => {
  if (route.path === path) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  closeMenu();
};

let menuTimeline = null;

const updateNav = () => {
  // If the page is scroll-locked (e.g. modal is open), ignore scroll events
  // to prevent the navbar from flickering or changing state.
  if (typeof document !== "undefined" && document.body && document.body.style.position === "fixed") {
    ticking = false;
    return;
  }

  const currentScrollY = window.scrollY;

  const pastThreshold = currentScrollY > 80;
  if (isScrolled.value !== pastThreshold) {
    isScrolled.value = pastThreshold;
  }

  if (!isMenuOpen.value) {
    const delta = currentScrollY - lastScrollY;

    if (currentScrollY <= 0) {
      navTranslateY = 0;
    } else {
      navTranslateY = Math.max(-80, Math.min(0, navTranslateY - delta));
    }

    if (headerRef.value) {
      headerRef.value.style.transform = `translateY(${navTranslateY}px)`;
    }
  }

  lastScrollY = currentScrollY;
  ticking = false;
};

const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(updateNav);
    ticking = true;
  }
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;

  if (isMenuOpen.value) {
    document.body.style.overflow = "hidden";
    menuTimeline.play();
  } else {
    document.body.style.overflow = "";
    menuTimeline.reverse();
  }
};

const closeMenu = () => {
  if (isMenuOpen.value) {
    toggleMenu();
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // Initialize GSAP timeline for mobile menu
  menuTimeline = gsap.timeline({ paused: true });

  menuTimeline.to(mobileOverlay.value, {
    duration: 0.5,
    clipPath: "circle(150% at 90% 10%)",
    ease: "power3.inOut",
    pointerEvents: "auto",
  });

  menuTimeline.to(
    ".burger-line.line-2",
    {
      duration: 0.2,
      opacity: 0,
      ease: "power2.inOut",
    },
    "<",
  );

  menuTimeline.to(
    ".burger-line.line-1",
    {
      duration: 0.3,
      y: 8,
      rotate: 45,
      ease: "back.out(1.7)",
    },
    "<",
  );

  menuTimeline.to(
    ".burger-line.line-3",
    {
      duration: 0.3,
      y: -8,
      rotate: -45,
      ease: "back.out(1.7)",
    },
    "<",
  );

  menuTimeline.fromTo(
    ".mobile-nav-link",
    { y: 30, opacity: 0 },
    { duration: 0.4, y: 0, opacity: 1, stagger: 0.1, ease: "power3.out" },
    "-=0.2",
  );

  menuTimeline.fromTo(
    ".mobile-menu-footer",
    { opacity: 0 },
    { duration: 0.3, opacity: 1, ease: "power2.out" },
    "-=0.2",
  );
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.body.style.overflow = "";
});
</script>
