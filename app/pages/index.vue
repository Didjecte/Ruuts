<template>
  <div>
    <!-- Hero Section -->
    <section
      class="dark h-screen min-h-[650px] relative flex items-center hero-bg text-foreground"
    >
      <div
        class="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/80 z-[1]"
      ></div>
      <div
        class="relative z-[2] mt-[40px] max-w-[1200px] mx-auto px-6 w-full hero-content-container"
      >
        <div class="max-w-[650px] hero-inner-container">
          <div class="hero-text-group">
            <h1
              class="hero-title font-heading text-5xl md:text-6xl font-semibold text-primary dark:text-secondary tracking-[0.03em] leading-[1.15] mb-6"
            >
              Bespoke Tea experiences for your venue
            </h1>
            <p
              class="hero-description text-xl text-foreground font-medium mb-10"
            >
              An experience crafted only for you.
            </p>
          </div>
          <!-- <div class="hero-actions flex flex-col sm:flex-row gap-4 sm:gap-6">
            <NuxtLink to="/experiences" class="btn-gold"
              >Explore Sessions</NuxtLink
            >
            <NuxtLink
              to="/#about"
              class="btn-secondary !border-foreground/50 !text-foreground hover:!bg-foreground hover:!text-primary hover:!border-foreground"
              >Our Story</NuxtLink
            >
          </div> -->
        </div>
      </div>

      <div
        class="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2"
      >
        <span
          class="scroll-dot w-[6px] h-[10px] bg-secondary rounded-[3px]"
        ></span>
        <span class="font-body text-xs uppercase text-foreground/60"
          >Scroll to explore</span
        >
      </div>
    </section>

    <!-- Intro Section -->
    <IntroSection />

    <!-- Tea Anywhere Section -->
    <ExperienceSection
      section-id="tea-anywhere"
      title="Tea Anywhere"
      catalog-type="b2b"
    />

    <!-- Testimonials Section -->
    <TestimonialSection />

    <!-- Private Experiences Section -->
    <ExperienceSection
      section-id="experiences"
      title="Private Experiences"
      catalog-type="b2c"
    />

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

@media (max-width: 639px) {
  .hero-content-container {
    position: absolute;
    inset: 0;
    margin-top: 0 !important;
    max-width: 100% !important;
  }

  .hero-inner-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 24px;
    padding-top: 20vh;
  }

  .hero-actions {
    margin-top: auto;
    margin-bottom: 40vh;
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
