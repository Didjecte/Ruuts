<template>
  <section
    id="insights"
    class="bg-background pt-[90px] md:pt-[100px] pb-16 md:pb-24"
  >
    <div class="max-w-[1200px] mx-auto px-6 w-full page-header">
      <h1 class="font-heading text-5xl mb-6 font-semibold text-primary">
        Testimonials
      </h1>
      <p class="text-foreground/80 max-w-[600px] leading-[1.8] mb-8">
        Deep dives into tea ceremonies, photographic journals of mountain
        harvests, and auditory experiences of traditional instruments.
      </p>

      <!-- Top filter navbar -->
      <nav
        class="flex gap-2 sm:gap-4 border-b border-secondary/20 pb-[0.6rem] sm:pb-4 w-full overflow-x-auto scrollbar-hide"
      >
        <button
          v-for="filter in filterOptions"
          :key="filter.value"
          :class="[
            'bg-transparent border-none font-body text-xs font-medium uppercase text-foreground/60 py-2 px-[1.2rem] cursor-pointer transition-colors duration-200 relative shrink-0 hover:text-primary',
            {
              '!text-primary font-semibold after:content-[\'\'] after:absolute after:-bottom-[0.6rem] sm:after:-bottom-4 after:left-0 after:w-full after:h-[2px] after:bg-primary':
                activeFilter === filter.value,
            },
          ]"
          @click="setFilter(filter.value)"
        >
          {{ filter.label }}
        </button>
      </nav>
    </div>

    <!-- Insights Grid -->
    <div class="max-w-[1200px] mx-auto px-6 w-full mt-6 mb-0">
      <div class="columns-2 lg:columns-3 gap-3 sm:gap-[2.2rem]">
        <div
          v-for="post in filteredPosts"
          :key="post.id"
          class="insight-item-animate break-inside-avoid mb-3 sm:mb-[2.2rem]"
        >
          <MediaCard :post="post" />
        </div>
      </div>

      <div
        v-if="filteredPosts.length === 0"
        class="py-16 text-foreground/50 text-sm text-center"
      >
        <p>No posts found matching the selected filter.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from "vue";
import { insightsMockData } from "~/data/insights";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

const activeFilter = ref("all");

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Articles", value: "article" },
  { label: "Photo", value: "photo" },
  { label: "Video", value: "video" },
];

const filteredPosts = computed(() => {
  if (activeFilter.value === "all") {
    return insightsMockData;
  }
  return insightsMockData.filter((post) => post.type === activeFilter.value);
});

const setFilter = (filter) => {
  if (activeFilter.value === filter) return;
  activeFilter.value = filter;

  // Stagger reveal on filter switch
  nextTick(() => {
    gsap.fromTo(
      "#insights .insight-item-animate",
      { y: 20, opacity: 0 },
      { duration: 0.4, y: 0, opacity: 1, stagger: 0.08, ease: "power3.out" },
    );
  });
};

onMounted(() => {
  // Page header entry animation
  gsap.from("#insights .page-header > *", {
    scrollTrigger: {
      trigger: "#insights .page-header",
      start: "top 85%",
    },
    duration: 0.8,
    y: 20,
    opacity: 0,
    stagger: 0.1,
    ease: "power3.out",
  });

  // Grid entry animation
  gsap.from("#insights .insight-item-animate", {
    scrollTrigger: {
      trigger: "#insights .page-header",
      start: "top 75%",
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.08,
    ease: "power3.out",
    delay: 0.2,
  });
});
</script>
