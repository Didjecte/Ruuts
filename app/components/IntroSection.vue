<template>
  <section id="intro" class="bg-background overflow-hidden">
    <div class="max-w-[1200px] mx-auto px-6 w-full section-padding">
      <div
        class="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center"
      >
        <!-- Text block second in HTML, ordered to be on the left on desktop -->
        <div class="order-2 lg:order-1 reveal-item">
          <h2 class="text-5xl font-heading font-semibold text-primary mb-6">
            {{ pageContent?.introTitle || 'Build unforgettable moments' }}
          </h2>
          <div v-if="pageContent?.introHtml" class="space-y-4 text-foreground" v-html="pageContent.introHtml"></div>
          <div v-else class="space-y-4 text-foreground">
            <p>
              Based in Shanghai for the past eight years, Ophélie creates bespoke tea experiences for hotels, brands and events seeking more than entertainment — meaningful cultural encounters that leave a lasting impression.
            </p>
            <p>
              Fluent in French, English and Mandarin, she combines an international project management background with years spent travelling across China’s tea regions, learning directly from artisans and deepening her understanding of tea culture.
            </p>
            <p>
              Today, she brings brands’ visions to life by designing immersive experiences that blend tea, storytelling and human connection — creating moments that are elegant, interactive and deeply memorable.
            </p>
          </div>
        </div>

        <!-- Image block first in HTML so it is on top on mobile, but ordered to be on the right on desktop -->
        <div
          class="relative w-full order-1 lg:order-2 reveal-item rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] parallax-container mt-6 lg:mt-0"
        >
          <img
            :src="pageContent?.introImage || defaultFounderImg"
            alt="Ophélie Hu - Founder of RUUTS"
            class="w-full h-[350px] lg:h-[480px] object-cover relative z-10 parallax-img"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import defaultFounderImg from "~/assets/images/founder.jpg";

const { data: pageContent } = useSanityHomepageContent();

let ctx;

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  ctx = gsap.context(() => {
    const parallaxContainers = gsap.utils.toArray("#intro .parallax-container");

    parallaxContainers.forEach((container) => {
      const img = container.querySelector(".parallax-img");
      if (!img) return;

      gsap.fromTo(
        img,
        { yPercent: 4, xPercent: -7, scale: 1.1 },
        {
          yPercent: -4,
          xPercent: 3,
          scale: 1.1,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    });

    const revealItems = gsap.utils.toArray("#intro .reveal-item");
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
        }
      );
    });

    // Refresh ScrollTrigger to recalculate offsets once images load
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);
  });
});

onUnmounted(() => {
  if (ctx) ctx.revert();
});
</script>
