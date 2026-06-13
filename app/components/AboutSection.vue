<template>
  <section id="about" class="bg-light overflow-hidden">
    <!-- Our Story -->
    <div class="max-w-[1200px] mx-auto px-6 w-full section-padding">
      <div
        class="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center"
      >
        <div class="reveal-item">
          <h2
            class="text-5xl relative font-heading font-semibold text-dark mb-2"
          >
            Our Story
          </h2>
          <div class="space-y-4">
            <p
              class="font-body text-xl tracking-[0.01em] text-secondary leading-relaxed"
            >
              <span class="font-logo">RUUTS</span> was born from a simple wish:
              to reconnect with ones' roots.
            </p>
            <p>
              Through exploring the world of Chinese tea, our Franco-Chinese
              founder rediscovered the true <b>meaning of roots</b>.
            </p>
            <p>
              Invisible yet essential, roots are what all beings share. They
              hold our stories, our strength, our sense of belonging. The deeper
              we understand them, the more grounded we become. RUUTS is
              <b>a journey back to the origin</b>.
            </p>
            <p>
              From Guangdong to Yunnan, from Fujian to Anhui, from Zhejiang to
              Jiangsu, Chinese tea culture shifts from one province to another,
              from one village to the next — yet everywhere, the same spirit
              endures:
              <b
                >passion, patience, and the quiet belief that mastery is born of
                time and dedication</b
              >.
            </p>
          </div>
        </div>
        <div
          class="relative w-full reveal-item rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(133,159,130,0.15)] parallax-container"
        >
          <img
            src="~/assets/images/origin.jpg"
            alt="Terraced tea fields in China"
            class="w-full h-[350px] lg:h-[480px] object-cover relative z-10 parallax-img scale-[1.2]"
          />
        </div>
      </div>
    </div>

    <!-- Founder -->
    <div class="bg-light-darker border-y border-dark/10">
      <div class="max-w-[1200px] mx-auto px-6 w-full section-padding">
        <div
          class="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center"
        >
          <div
            class="relative w-full order-2 lg:order-1 reveal-item rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(136,169,91,0.15)] parallax-container"
          >
            <img
              src="~/assets/images/founder.jpg"
              alt="Ophélie Hu - Founder of RUUTS"
              class="w-full h-[350px] lg:h-[580px] object-cover relative z-10 parallax-img scale-[1.2]"
            />
          </div>
          <div class="order-1 lg:order-2 reveal-item">
            <h2
              class="text-5xl relative font-heading font-semibold text-dark mb-2"
            >
              The Founder
            </h2>
            <div class="space-y-4">
              <p
                class="font-body text-xl tracking-[0.01em] text-secondary leading-relaxed"
              >
                Ophélie Hu
              </p>
              <p>
                Franco-Chinese and driven by her curiosity for China and her own
                roots, Ophélie earned a Master’s degree in Supply Chain
                Management from a French business school before moving to
                Shanghai in 2018. She began her professional journey in supply
                chain project management, procurement, and business development
                — yet her heart was quietly drawn to tea.
              </p>
              <p>
                By 2021, she began splitting her time between the bustling city
                and China’s tea-growing regions, learning from master artisans
                and uncovering the rituals, aromas, and stories behind every
                leaf. In 2022, she created <em>Chabutu 茶不土</em>, a WeChat
                page devoted to sharing these discoveries with a wider audience.
                Her journey of mastery continued in 2024, when she earned her
                first Chinese tea tasting certification in Hangzhou.
              </p>
              <p>
                Today, Ophélie blends her cross-cultural expertise with her
                creative spirit to craft tea experiences that go beyond
                delighting the senses — experiences that tell stories, connect
                people, and transform corporate events into genuine cultural
                journeys.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Our Mission -->
    <div class="bg-primary">
      <div class="max-w-[1200px] mx-auto px-6 w-full section-padding">
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          <!-- Left Side: Image and Quote -->
          <div class="flex flex-col gap-10 reveal-item">
            <div
              class="w-full rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(136,169,91,0.15)] parallax-container"
            >
              <img
                src="~/assets/images/mission.jpg"
                alt="Ruuts Mission"
                class="w-full h-[300px] md:h-[350px] object-cover parallax-img scale-[1.2]"
              />
            </div>

            <!-- Quote Callout -->
            <div class="text-center relative px-4 py-6">
              <div
                class="absolute -top-6 left-1/2 -translate-x-1/2 font-heading text-8xl text-secondary/20 z-0 leading-none"
              >
                “
              </div>
              <p
                class="font-heading text-xl md:text-[1.7em] italic text-dark relative z-10 mb-4"
              >
                "Taking one’s time is the best way for not wasting it."
              </p>
              <p
                class="font-body uppercase tracking-[0.1em] text-secondary relative z-10"
              >
                &mdash; Nicolas Bouvier
              </p>
            </div>
          </div>

          <!-- Right Side: Accordion -->
          <div class="reveal-item">
            <div class="mb-10">
              <h2
                class="text-5xl mb-8 relative font-heading font-semibold text-dark"
              >
                Our Mission
              </h2>
            </div>
            <div class="flex flex-col border-t border-dark/10">
              <div
                v-for="(mission, index) in missions"
                :key="index"
                class="border-b border-dark/10 group cursor-pointer"
                @click="activeMission = activeMission === index ? null : index"
                @mouseenter="activeMission = index"
              >
                <!-- Accordion Header -->
                <div
                  class="py-3 lg:py-6 flex items-center justify-between transition-colors duration-300"
                >
                  <h3
                    class="font-body text-xl sm:text-xl lg:text-xl text-dark group-hover:text-primary transition-colors duration-300"
                  >
                    {{ mission.title }}
                  </h3>
                  <div
                    class="relative w-4 h-4 sm:w-6 sm:h-6 flex items-center justify-center shrink-0 ml-6"
                  >
                    <span
                      class="absolute w-full h-[1px] bg-dark/40 group-hover:bg-primary transition-colors duration-300"
                    ></span>
                    <span
                      class="absolute w-[1px] h-full bg-dark/40 group-hover:bg-primary transition-all duration-300"
                      :class="
                        activeMission === index
                          ? 'rotate-90 opacity-0'
                          : 'rotate-0 opacity-100'
                      "
                    ></span>
                  </div>
                </div>

                <!-- Accordion Content -->
                <div
                  class="grid transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  :style="{
                    gridTemplateRows: activeMission === index ? '1fr' : '0fr',
                    opacity: activeMission === index ? 1 : 0,
                  }"
                >
                  <div class="overflow-hidden min-h-0">
                    <div class="pb-6 max-w-[600px] pr-8">
                      <p
                        class="text-dark/85 text-sm sm:text-base leading-relaxed"
                      >
                        {{ mission.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const activeMission = ref(0);

let ctx;

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  ctx = gsap.context(() => {
    const parallaxContainers = gsap.utils.toArray(".parallax-container");

    parallaxContainers.forEach((container) => {
      const img = container.querySelector(".parallax-img");

      gsap.fromTo(
        img,
        { yPercent: 8, xPercent: -14 },
        {
          yPercent: -8,
          xPercent: 6,
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
  });
});

onUnmounted(() => {
  if (ctx) ctx.revert();
});

const missions = [
  {
    title: "Create Community",
    description:
      "Where we can exchange, share, and explore the world of tea through a fun and thoughtful perspective.",
  },
  {
    title: "Celebrate Intercultural Connections",
    description:
      "Celebrating the fusion of Eastern and Western heritage to unlock a unique dimension of Chinese culture.",
  },
  {
    title: "Collect Emotions",
    description:
      "Gathering laughter, presence, and crafting unforgettable moments together.",
  },
  {
    title: "Connect with Farmers",
    description:
      "Bridging the gap between guests and the tea farmers, honoring the soil and land they cultivate.",
  },
];
</script>
