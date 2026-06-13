<template>
  <div>
    <!-- Hero Section -->
    <section
      class="dark h-screen min-h-[650px] relative flex items-center hero-bg text-dark dark:text-light"
    >
      <div
        class="absolute inset-0 bg-gradient-to-br from-primary/80 to-dark/80 z-[1]"
      ></div>
      <div class="relative z-[2] mt-[40px] max-w-[1200px] mx-auto px-6 w-full">
        <div class="max-w-[650px]">
          <h1
            class="hero-title font-heading text-5xl md:text-6xl font-semibold text-dark dark:text-secondary tracking-[0.03em] leading-[1.15] mb-6"
          >
            Tea anywhere
          </h1>
          <p
            class="hero-description text-xl text-dark/85 dark:text-light font-medium mb-10"
          >
            An experience crafted only for you.
          </p>
          <div class="hero-actions flex flex-col sm:flex-row gap-4 sm:gap-6">
            <NuxtLink to="/experiences" class="btn-primary"
              >Explore Sessions</NuxtLink
            >
            <NuxtLink
              to="/#about"
              class="btn-secondary !border-dark/50 !text-dark hover:!bg-dark hover:!text-primary hover:!border-dark dark:!border-light/50 dark:!text-light dark:hover:!bg-light dark:hover:!text-primary dark:hover:!border-light"
              >Our Story</NuxtLink
            >
          </div>
        </div>
      </div>

      <div
        class="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2"
      >
        <span
          class="scroll-dot w-[6px] h-[10px] bg-secondary rounded-[3px]"
        ></span>
        <span
          class="font-body text-xs uppercase text-dark/60 dark:text-light/60"
          >Scroll to explore</span
        >
      </div>
    </section>

    <!-- About Section (Our Story, Founder, Mission) -->
    <AboutSection />

    <!-- Contact Section (Details, QRs, Form) -->
    <ContactSection />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

definePageMeta({
  transparentHeader: true,
});

// Register ScrollTrigger plugin
if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

useSeoMeta({
  title: "Ruuts - Premium Group Experiences & Tea Rituals",
  description:
    "Reconnect with your roots through Chinese tea culture. We design signature tea ceremonies, body rituals, and premium group experiences.",
});

onMounted(() => {
  // Page load animations
  gsap.from(".hero-tagline", {
    duration: 0.8,
    y: 20,
    opacity: 0,
    ease: "power3.out",
    delay: 0.2,
  });

  gsap.from(".hero-title", {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power4.out",
    delay: 0.4,
  });

  gsap.from(".hero-description", {
    duration: 0.8,
    y: 20,
    opacity: 0,
    ease: "power3.out",
    delay: 0.6,
  });

  gsap.from(".hero-actions", {
    duration: 0.8,
    y: 20,
    opacity: 0,
    ease: "power3.out",
    delay: 0.8,
  });

  gsap.from(".scroll-indicator", {
    duration: 0.6,
    opacity: 0,
    ease: "power2.out",
    delay: 1.2,
  });

  // Scroll reveal animations for sections
  const revealItems = document.querySelectorAll(".reveal-item");

  revealItems.forEach((item) => {
    gsap.fromTo(
      item,
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
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

<style scoped>
.hero-bg {
  position: relative;
  overflow: hidden;
}

.hero-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("~/assets/images/home.jpg");
  background-size: cover;
  background-position: center;
  z-index: 0;
}

@media (min-width: 1024px) {
  .hero-bg::before {
    transform: scale(1.35);
    transform-origin: 0% 40%;
  }
}

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
