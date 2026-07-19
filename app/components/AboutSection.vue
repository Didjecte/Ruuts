<template>
  <section id="about" class="bg-background overflow-hidden">
    <!-- Our Story -->
    <div
      v-if="showStoryAndFounder"
      class="max-w-[1200px] mx-auto px-6 w-full section-padding"
    >
      <div
        class="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center"
      >
        <!-- Image block first in HTML so it is on top on mobile, but ordered to be on the right on desktop -->
        <div
          class="relative w-full order-1 lg:order-2 reveal-item rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] parallax-container mt-6 lg:mt-0"
        >
          <NuxtImg
            v-if="pageContent?.aboutStoryImage"
            provider="sanity"
            :src="pageContent.aboutStoryImage"
            alt="Terraced tea fields in China"
            class="w-full h-[350px] lg:h-[480px] object-cover relative z-10 parallax-img"
            loading="lazy"
            sizes="sm:100vw md:50vw lg:800px"
          />
          <NuxtImg
            v-else
            :src="defaultOriginImg"
            alt="Terraced tea fields in China"
            class="w-full h-[350px] lg:h-[480px] object-cover relative z-10 parallax-img"
            loading="lazy"
            sizes="sm:100vw md:50vw lg:800px"
          />
        </div>
        <!-- Text block second in HTML, ordered to be on the left on desktop -->
        <div class="order-2 lg:order-1 reveal-item">
          <h2
            class="text-5xl relative font-heading font-semibold text-primary mb-2"
          >
            {{ pageContent?.aboutStoryTitle || 'Our Story' }}
          </h2>
          <p
            class="font-body text-xl tracking-[0.01em] text-secondary leading-relaxed mb-4"
          >
            <template v-if="storySubtitle.startsWith('RUUTS')">
              <span class="font-logo">RUUTS</span>{{ storySubtitle.slice(5) }}
            </template>
            <template v-else>
              {{ storySubtitle }}
            </template>
          </p>
          <div v-if="pageContent?.aboutStoryHtml" class="space-y-4 text-foreground" v-html="pageContent.aboutStoryHtml"></div>
        </div>
      </div>
    </div>

    <!-- Founder -->
    <div
      v-if="showStoryAndFounder"
      class="bg-surface border-y border-border/10"
    >
      <div class="max-w-[1200px] mx-auto px-6 w-full section-padding">
        <div
          class="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center"
        >
          <div
            class="relative w-full reveal-item rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] parallax-container"
          >
            <NuxtImg
              v-if="pageContent?.aboutFounderImage"
              provider="sanity"
              :src="pageContent.aboutFounderImage"
              alt="Ophélie Hu - Founder of RUUTS"
              class="w-full h-[350px] lg:h-[580px] object-cover relative z-10 parallax-img"
              loading="lazy"
              sizes="sm:100vw md:50vw lg:800px"
            />
            <NuxtImg
              v-else
              :src="defaultFounderImg"
              alt="Ophélie Hu - Founder of RUUTS"
              class="w-full h-[350px] lg:h-[580px] object-cover relative z-10 parallax-img"
              loading="lazy"
              sizes="sm:100vw md:50vw lg:800px"
            />
          </div>
          <div class="reveal-item">
            <h2
              class="text-5xl relative font-heading font-semibold text-primary mb-2"
            >
              {{ pageContent?.aboutFounderTitle || 'The Founder' }}
            </h2>
            <p
              class="font-body text-xl tracking-[0.01em] text-secondary leading-relaxed mb-4"
            >
              {{ founderSubtitle }}
            </p>
            <div v-if="pageContent?.aboutFounderHtml" class="space-y-4 text-foreground" v-html="pageContent.aboutFounderHtml"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Our Mission -->
    <div class="dark bg-background text-foreground">
      <div class="max-w-[1200px] mx-auto px-6 w-full section-padding">
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          <!-- Left Side: Image and Quote -->
          <div class="flex flex-col gap-10 reveal-item">
              <div
                class="w-full rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(136,169,91,0.15)] parallax-container"
              >
                <NuxtImg
                  v-if="pageContent?.aboutMissionImage"
                  provider="sanity"
                  :src="pageContent.aboutMissionImage"
                  alt="Ruuts Mission"
                  class="w-full h-[300px] md:h-[350px] object-cover parallax-img"
                  loading="lazy"
                  sizes="sm:100vw md:50vw lg:600px"
                />
                <NuxtImg
                  v-else
                  :src="defaultMissionImg"
                  alt="Ruuts Mission"
                  class="w-full h-[300px] md:h-[350px] object-cover parallax-img"
                  loading="lazy"
                  sizes="sm:100vw md:50vw lg:600px"
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
                  class="font-heading text-xl md:text-[1.7em] italic relative z-10 mb-4"
                >
                  "{{ pageContent?.aboutMissionQuote || 'Taking one’s time is the best way for not wasting it.' }}"
                </p>
                <p
                  class="font-body uppercase tracking-[0.1em] text-secondary relative z-10"
                >
                  &mdash; {{ pageContent?.aboutMissionQuoteAuthor || 'Nicolas Bouvier' }}
                </p>
              </div>
            </div>

            <!-- Right Side: Accordion -->
            <div class="reveal-item">
              <div class="mb-10">
                <h2 class="text-5xl mb-8 relative font-heading font-semibold">
                  {{ pageContent?.aboutMissionTitle || 'Our Mission' }}
                </h2>
              </div>
              <div class="flex flex-col border-t border-foreground/10">
                <div
                  v-for="(mission, index) in activeMissions"
                  :key="index"
                  class="border-b border-foreground/10 group cursor-pointer"
                  @click="activeMission = activeMission === index ? null : index"
                  @mouseenter="handleMouseEnter(index)"
                >
                <!-- Accordion Header -->
                <div
                  class="py-3 lg:py-6 flex items-center justify-between transition-colors duration-300"
                >
                  <h3
                    class="font-body text-xl sm:text-xl lg:text-xl group-hover:text-secondary transition-colors duration-300"
                  >
                    {{ mission.title }}
                  </h3>
                  <div
                    class="relative w-4 h-4 sm:w-6 sm:h-6 flex items-center justify-center shrink-0 ml-6"
                  >
                    <span
                      class="absolute w-full h-[1px] bg-foreground/40 group-hover:bg-secondary transition-colors duration-300"
                    ></span>
                    <span
                      class="absolute w-[1px] h-full bg-foreground/40 group-hover:bg-secondary transition-all duration-300"
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
                        class="text-foreground/85 text-sm sm:text-base leading-relaxed"
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
import { ref, computed, onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import defaultOriginImg from "~/assets/images/origin.jpg";
import defaultFounderImg from "~/assets/images/founder.jpg";
import defaultMissionImg from "~/assets/images/mission.jpg";

const { data: pageContent } = useSanityHomepageContent();

const storySubtitle = computed(() => pageContent.value?.aboutStorySubtitle || "RUUTS was born from a simple wish: to reconnect with ones' roots.");
const founderSubtitle = computed(() => pageContent.value?.aboutFounderSubtitle || "Ophélie Hu");

const props = defineProps({
  showStoryAndFounder: {
    type: Boolean,
    default: true,
  },
});

const activeMission = ref(0);

const handleMouseEnter = (index) => {
  if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
    activeMission.value = index;
  }
};

let ctx;

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  ctx = gsap.context(() => {
    const parallaxContainers = gsap.utils.toArray("#about .parallax-container");

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

    const revealItems = gsap.utils.toArray("#about .reveal-item");
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
  });
});

onUnmounted(() => {
  if (ctx) ctx.revert();
});

const activeMissions = computed(() => {
  if (pageContent.value && pageContent.value.aboutMissions && pageContent.value.aboutMissions.length > 0) {
    return pageContent.value.aboutMissions;
  }
  return [];
});
</script>
