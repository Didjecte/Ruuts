<template>
  <section
    id="testimonials"
    class="dark bg-background pt-[90px] md:pt-[100px] pb-16 md:pb-24"
  >
    <div class="max-w-[1200px] mx-auto px-6 w-full page-header">
      <h1 class="font-heading text-5xl mb-6 font-semibold">
        {{ pageContent?.testimonialsTitle || 'Testimonials' }}
      </h1>
      <p class="text-foreground/80 max-w-[600px] leading-[1.8] mb-8">
        {{ pageContent?.testimonialsSubtext || 'Deep dives into tea ceremonies, photographic journals of mountain harvests, and auditory experiences of traditional instruments.' }}
      </p>
    </div>

    <!-- Testimonials Grid -->
    <div class="max-w-[1200px] mx-auto px-6 w-full mt-6 mb-0">
      <div class="columns-2 lg:columns-3 gap-3 sm:gap-[2.2rem]">
        <div
          v-for="post in posts"
          :key="post.id"
          class="testimonial-item-animate break-inside-avoid mb-3 sm:mb-[2.2rem]"
        >
          <MediaCard :post="post" @select="onPostSelect" />
        </div>
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
import { testimonialsMockData } from "~/data/testimonials";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

const { data: sanityTestimonials } = useSanityTestimonials();
const { data: pageContent } = useSanityHomepageContent();

const posts = computed(() => {
  if (sanityTestimonials.value && sanityTestimonials.value.length > 0) {
    return sanityTestimonials.value;
  }
  return testimonialsMockData;
});

const activePost = ref(null);

const onPostSelect = (post) => {
  activePost.value = post;
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

  // Grid entry animation
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
});

watch(posts, () => {
  nextTick(() => {
    ScrollTrigger.refresh();
  });
});
</script>
