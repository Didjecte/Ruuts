<template>
  <section
    :id="sectionId"
    ref="sectionRef"
    class="bg-background pt-[90px] md:pt-[100px] pb-0"
  >
    <div
      :class="[
        'max-w-[1200px] mx-auto px-6 w-full page-header flex flex-col gap-6',
        {
          'text-center items-center':
            catalogType === 'b2b' || activeExperiences.length === 2,
        },
      ]"
    >
      <h1 class="text-5xl font-heading font-semibold text-primary">
        {{ resolvedTitle }}
      </h1>

      <p
        v-if="resolvedDescription"
        :class="[
          'text-foreground/80 max-w-[600px] leading-[1.8]',
          {
            'mx-auto': catalogType === 'b2b' || activeExperiences.length === 2,
          },
        ]"
      >
        {{ resolvedDescription }}
      </p>

      <!-- Language Flags -->
      <div class="flex items-center gap-2 -mt-4">
        <span
          class="inline-flex items-center gap-1 font-medium text-[11px] text-foreground/70 uppercase tracking-wider"
        >
          <span
            class="fi fi-gb rounded-[2px] shadow-sm opacity-80 text-sm"
          ></span>
          <span>EN</span>
        </span>
        <span class="text-secondary/40 text-[10px]">|</span>
        <span
          class="inline-flex items-center gap-1 font-medium text-[11px] text-foreground/70 uppercase tracking-wider"
        >
          <span
            class="fi fi-fr rounded-[2px] shadow-sm opacity-80 text-sm"
          ></span>
          <span>FR</span>
        </span>
        <span class="text-secondary/40 text-[10px]">|</span>
        <span
          class="inline-flex items-center gap-1 font-medium text-[11px] text-foreground/70 uppercase tracking-wider"
        >
          <span
            class="fi fi-cn rounded-[2px] shadow-sm opacity-80 text-sm"
          ></span>
          <span>CN</span>
        </span>
      </div>
    </div>

    <!-- Experiences -->
    <div
      class="max-w-[1200px] mx-auto px-6 w-full mt-10 md:mt-12 mb-24 relative"
    >
      <!-- Grid Layout -->
      <div
        v-if="!useCarousel"
        :class="[
          'grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8',
          activeExperiences.length === 2 || catalogType === 'b2b'
            ? 'lg:grid-cols-2 max-w-[900px] mx-auto'
            : 'lg:grid-cols-3',
        ]"
      >
        <div
          v-for="exp in activeExperiences"
          :key="exp.id"
          class="grid-item-animate h-full"
        >
          <ExperienceCard :experience="exp" :is-b2b="catalogType === 'b2b'" />
        </div>
      </div>

      <!-- Carousel Layout -->
      <div v-else class="relative">
        <!-- Navigation Arrows (Desktop Only) -->
        <button
          v-if="activeExperiences.length > 3"
          @click="scrollCarousel('left')"
          :class="[
            'absolute -left-6 xl:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface border border-secondary/20 shadow-md items-center justify-center text-primary z-10 hidden lg:flex transition-transform',
            isBeginning ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:scale-105'
          ]"
          aria-label="Previous experiences"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>

        <ClientOnly>
          <Swiper
            :modules="[SwiperMousewheel]"
            :mousewheel="{
              forceToAxis: true,
              thresholdDelta: 30,
              thresholdTime: 200,
            }"
            :slides-per-view="1.15"
            :space-between="24"
            :grab-cursor="true"
            :breakpoints="{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            @resize="onSwiperResize"
            class="w-full !overflow-visible [clip-path:inset(-100px_0_-100px_0)]"
          >
            <SwiperSlide
              v-for="exp in activeExperiences"
              :key="exp.id"
              class="!h-auto flex px-1"
            >
              <ExperienceCard
                :experience="exp"
                :is-b2b="catalogType === 'b2b'"
                class="w-full"
              />
            </SwiperSlide>
          </Swiper>
        </ClientOnly>

        <button
          v-if="activeExperiences.length > 3"
          @click="scrollCarousel('right')"
          :class="[
            'absolute -right-6 xl:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface border border-secondary/20 shadow-md items-center justify-center text-primary z-10 hidden lg:flex transition-transform',
            isEnd ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:scale-105'
          ]"
          aria-label="Next experiences"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>

      <!-- Dots Navigation -->
      <div
        v-if="useCarousel && totalSnapPoints > 1"
        class="flex items-center justify-center gap-2 mt-6 lg:mt-8"
      >
        <button
          v-for="index in totalSnapPoints"
          :key="index"
          @click="scrollToDot(index - 1)"
          :class="[
            'h-1.5 rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]',
            activeIndex === index - 1
              ? 'w-6 bg-primary'
              : 'w-1.5 bg-primary/20 hover:bg-primary/40',
          ]"
          :aria-label="`Scroll to page ${index}`"
        ></button>
      </div>
    </div>

    <!-- Booking Policy Details (from Ruuts.pdf) -->
    <div
      v-if="showPolicies !== null ? showPolicies : catalogType === 'b2c'"
      class="bg-primary/[0.03] border-t border-secondary/20 py-24 text-foreground"
    >
      <div class="max-w-[1200px] mx-auto px-6 w-full">
        <div class="text-center reveal-item">
          <h2 class="font-heading text-5xl mb-4 font-semibold text-primary">
            {{ resolvedBookingPolicy.title }}
          </h2>
          <p
            class="text-base md:text-xl text-foreground/75 max-w-[650px] mx-auto mb-8 leading-[1.7]"
          >
            {{ resolvedBookingPolicy.description }}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Session Confirmation -->
          <div
            class="bg-surface border border-secondary/20 rounded-2xl p-[2.5rem_2rem] reveal-item"
          >
            <h3
              class="font-body text-sm uppercase text-primary border-b border-secondary/20 pb-[0.8rem] mb-[1.5rem]"
            >
              1. Session Confirmation
            </h3>
            <ul class="flex flex-col gap-[0.8rem]">
              <li
                v-for="(item, idx) in resolvedBookingPolicy.confirmation"
                :key="idx"
                class="text-sm leading-[1.5] text-foreground/80 relative pl-[1.2rem] before:content-['•'] before:text-primary before:text-lg before:absolute before:left-0 before:-top-[2px]"
              >
                {{ item }}
              </li>
            </ul>
          </div>

          <!-- Modification Policy -->
          <div
            class="bg-surface border border-secondary/20 rounded-2xl p-[2.5rem_2rem] reveal-item"
          >
            <h3
              class="font-body text-sm uppercase text-primary border-b border-secondary/20 pb-[0.8rem] mb-[1.5rem]"
            >
              2. Modification Policy
            </h3>
            <ul class="flex flex-col gap-[0.8rem]">
              <li
                v-for="(item, idx) in resolvedBookingPolicy.modification"
                :key="idx"
                class="text-sm leading-[1.5] text-foreground/80 relative pl-[1.2rem] before:content-['•'] before:text-primary before:text-lg before:absolute before:left-0 before:-top-[2px]"
              >
                {{ item }}
              </li>
            </ul>
          </div>

          <!-- Cancellation Policy -->
          <div
            class="bg-surface border border-secondary/20 rounded-2xl p-[2.5rem_2rem] reveal-item"
          >
            <h3
              class="font-body text-sm uppercase text-primary border-b border-secondary/20 pb-[0.8rem] mb-[1.5rem]"
            >
              3. Cancellation Policy
            </h3>
            <div class="flex flex-col gap-[0.8rem]">
              <div
                v-for="(sched, idx) in resolvedBookingPolicy.cancellation"
                :key="idx"
                class="flex justify-between border-b border-dashed border-secondary/20 pb-[0.6rem] text-sm gap-4"
              >
                <span class="text-foreground/85">{{ sched.range }}</span>
                <span class="font-semibold text-accent shrink-0">{{
                  sched.refund
                }}</span>
              </div>
            </div>
          </div>

          <!-- Force Majeure -->
          <div
            class="bg-surface border border-secondary/20 rounded-2xl p-[2.5rem_2rem] lg:col-span-3 reveal-item"
          >
            <h3
              class="font-body text-sm uppercase text-primary border-b border-secondary/20 pb-[0.8rem] mb-[1.5rem]"
            >
              4. Force Majeure
            </h3>
            <p class="text-sm leading-[1.7] text-foreground/80">
              {{ resolvedBookingPolicy.forceMajeure }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from "vue";
import { bookingPolicy } from "~/data/experiences";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const props = defineProps({
  sectionId: {
    type: String,
    default: "experiences",
  },
  title: {
    type: String,
    default: "Private Experiences",
  },
  description: {
    type: String,
    default: "",
  },
  catalogType: {
    type: String,
    default: "b2c",
  },
  showPolicies: {
    type: Boolean,
    default: null,
  },
  useCarousel: {
    type: Boolean,
    default: false,
  },
});

const sectionRef = ref(null);
const swiperInstance = ref(null);
const activeIndex = ref(0);
const totalSnapPoints = ref(0);
const isBeginning = ref(true);
const isEnd = ref(false);

const updateSnapState = (swiper) => {
  if (!swiper) return;
  totalSnapPoints.value = swiper.snapGrid ? swiper.snapGrid.length : 0;
  activeIndex.value =
    swiper.snapIndex !== undefined ? swiper.snapIndex : swiper.activeIndex;
  isBeginning.value = swiper.isBeginning;
  isEnd.value = swiper.isEnd;
};

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
  updateSnapState(swiper);
};

const onSlideChange = (swiper) => {
  updateSnapState(swiper);
};

const onSwiperResize = (swiper) => {
  updateSnapState(swiper);
};

const scrollToDot = (index) => {
  if (!swiperInstance.value) return;
  swiperInstance.value.slideTo(index);
};

const scrollCarousel = (direction) => {
  if (!swiperInstance.value) return;
  if (direction === "left") {
    swiperInstance.value.slidePrev();
  } else {
    swiperInstance.value.slideNext();
  }
};

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

const { data: sanityExperiences } = useSanityExperiences(props.catalogType);
const { data: pageContent } = useSanityHomepageContent();

const resolvedTitle = computed(() => {
  if (props.title !== "Private Experiences" && props.title !== "Tea Anywhere")
    return props.title;
  if (props.catalogType === "b2b")
    return pageContent.value?.b2bTitle || props.title;
  return pageContent.value?.b2cTitle || props.title;
});

const resolvedDescription = computed(() => {
  if (props.description) return props.description;
  if (props.catalogType === "b2b") {
    return pageContent.value?.b2bDescription || "";
  }
  return pageContent.value?.b2cDescription || "";
});

const resolvedBookingPolicy = computed(() => {
  const pc = pageContent.value;
  return {
    title: pc?.b2cPolicyTitle || "Private Session Policies",
    description:
      pc?.b2cPolicyDescription ||
      "To preserve the quality of each experience and the integrity of the hosting space, the following guidelines govern all bookings.",
    confirmation:
      pc?.b2cPolicyConfirmation && pc.b2cPolicyConfirmation.length > 0
        ? pc.b2cPolicyConfirmation
        : bookingPolicy.confirmation,
    modification:
      pc?.b2cPolicyModification && pc.b2cPolicyModification.length > 0
        ? pc.b2cPolicyModification
        : bookingPolicy.modification,
    cancellation:
      pc?.b2cPolicyCancellation && pc.b2cPolicyCancellation.length > 0
        ? pc.b2cPolicyCancellation
        : bookingPolicy.cancellation,
    forceMajeure: pc?.b2cPolicyForceMajeure || bookingPolicy.forceMajeure,
  };
});

const activeExperiences = computed(() => {
  if (sanityExperiences.value && sanityExperiences.value.length > 0) {
    return sanityExperiences.value;
  }
  return [];
});

let resizeObserver = null;

onMounted(() => {
  if (!sectionRef.value) return;

  const pageHeader = sectionRef.value.querySelector(".page-header");
  if (pageHeader) {
    gsap.from(pageHeader.children, {
      scrollTrigger: {
        trigger: pageHeader,
        start: "top 85%",
      },
      duration: 0.8,
      y: 20,
      opacity: 0,
      stagger: 0.1,
      ease: "power3.out",
    });
  }

  const gridItems = sectionRef.value.querySelectorAll(".grid-item-animate");
  if (gridItems.length > 0) {
    gsap.from(gridItems, {
      scrollTrigger: {
        trigger: pageHeader || sectionRef.value,
        start: "top 75%",
      },
      duration: 0.8,
      y: 30,
      opacity: 0,
      stagger: 0.1,
      ease: "power3.out",
      delay: 0.2,
    });
  }

  const policyItems = sectionRef.value.querySelectorAll(".reveal-item");
  policyItems.forEach((item) => {
    gsap.fromTo(
      item,
      { y: 35, opacity: 0 },
      {
        scrollTrigger: {
          trigger: item,
          start: "top 88%",
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

watch(activeExperiences, () => {
  nextTick(() => {
    ScrollTrigger.refresh();
  });
});
</script>
