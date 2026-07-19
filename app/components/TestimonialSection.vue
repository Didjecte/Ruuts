<template>
  <section
    id="testimonials"
    class="dark bg-background pt-[90px] md:pt-[100px] pb-16 md:pb-24"
  >
    <div class="max-w-[1200px] mx-auto px-6 w-full page-header flex flex-col gap-6">
      <h1 class="font-heading text-5xl font-semibold">
        {{ pageContent?.testimonialsTitle || 'Testimonials' }}
      </h1>
      <p v-if="pageContent?.testimonialsSubtext" class="text-foreground/80 max-w-[600px] leading-[1.8]">
        {{ pageContent.testimonialsSubtext }}
      </p>
    </div>

    <!-- Testimonials Grid / Carousel -->
    <div class="max-w-[1200px] mx-auto px-6 w-full mt-10 md:mt-12 mb-0">
      <!-- Grid Layout -->
      <div v-if="!useCarousel" class="columns-2 lg:columns-3 gap-3 sm:gap-[2.2rem]">
        <div
          v-for="post in posts"
          :key="post.id"
          class="testimonial-item-animate break-inside-avoid mb-3 sm:mb-[2.2rem]"
        >
          <MediaCard :post="post" @select="onPostSelect" />
        </div>
      </div>

      <!-- Carousel Layout -->
      <div v-else class="relative">
        <!-- Navigation Arrows (Desktop Only) -->
        <button
          v-if="posts.length > 3"
          @click="scrollCarousel('left')"
          :class="[
            'absolute -left-6 xl:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary text-primary shadow-lg items-center justify-center z-10 hidden lg:flex transition-all duration-300',
            isBeginning ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:scale-105'
          ]"
          aria-label="Previous testimonials"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <ClientOnly>
          <Swiper
            :modules="[SwiperMousewheel]"
            :mousewheel="{ forceToAxis: true, thresholdDelta: 50, thresholdTime: 500 }"
            :slides-per-view="1.15"
            :space-between="24"
            :grab-cursor="true"
            :breakpoints="{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 }
            }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            @resize="onSwiperResize"
            class="w-full !overflow-visible [clip-path:inset(-100px_0_-100px_0)]"
          >
            <SwiperSlide
              v-for="post in posts"
              :key="post.id"
              class="!h-auto flex items-start px-1"
            >
              <MediaCard :post="post" @select="onPostSelect" class="w-full" />
            </SwiperSlide>
          </Swiper>
        </ClientOnly>

        <button
          v-if="posts.length > 3"
          @click="scrollCarousel('right')"
          :class="[
            'absolute -right-6 xl:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary text-primary shadow-lg items-center justify-center z-10 hidden lg:flex transition-all duration-300',
            isEnd ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:scale-105'
          ]"
          aria-label="Next testimonials"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
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
            activeIndex === index - 1 ? 'w-6 bg-secondary' : 'w-1.5 bg-secondary/30 hover:bg-secondary/60'
          ]"
          :aria-label="`Scroll to page ${index}`"
        ></button>
      </div>
    </div>

    <!-- Modals & Drawers -->
    <PhotoLightboxModal
      v-if="activePost?.type === 'photo'"
      :post="activePost"
      @close="activePost = null"
    />

    <VideoTheaterModal
      v-if="activePost?.type === 'video'"
      :post="activePost"
      @close="activePost = null"
    />

    <ArticleDrawer
      v-if="activePost?.type === 'article'"
      :post="activePost"
      @close="activePost = null"
    />
  </section>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const props = defineProps({
  useCarousel: {
    type: Boolean,
    default: false
  }
});

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

const { data: sanityTestimonials } = useSanityTestimonials();
const { data: pageContent } = useSanityHomepageContent();

const posts = computed(() => {
  if (sanityTestimonials.value && sanityTestimonials.value.length > 0) {
    return sanityTestimonials.value;
  }
  return [];
});

const activePost = ref(null);

const onPostSelect = (post) => {
  activePost.value = post;
};

// Swiper State & Controls
const swiperInstance = ref(null);
const activeIndex = ref(0);
const totalSnapPoints = ref(0);
const isBeginning = ref(true);
const isEnd = ref(false);

const updateSnapState = (swiper) => {
  if (!swiper) return;
  totalSnapPoints.value = swiper.snapGrid ? swiper.snapGrid.length : 0;
  activeIndex.value = swiper.snapIndex !== undefined ? swiper.snapIndex : swiper.activeIndex;
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

onMounted(() => {
  // Page header entry animation
  gsap.from("#testimonials .page-header > *", {
    scrollTrigger: {
      trigger: "#testimonials .page-header",
      start: "top 85%",
    },
    duration: 0.8,
    y: 20,
    opacity: 0,
    stagger: 0.1,
    ease: "power3.out",
  });
});

let testimonialsAnimated = false;

watch(posts, () => {
  if (!process.client) return;
  nextTick(() => {
    if (swiperInstance.value) {
      swiperInstance.value.update();
      updateSnapState(swiperInstance.value);
    }
    ScrollTrigger.refresh();
    
    if (!testimonialsAnimated && document.querySelectorAll("#testimonials .testimonial-item-animate").length > 0) {
      testimonialsAnimated = true;
      gsap.from("#testimonials .testimonial-item-animate", {
        scrollTrigger: {
          trigger: "#testimonials .page-header",
          start: "top 75%",
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.08,
        ease: "power3.out",
      });
    }
  });
}, { immediate: true });
</script>
