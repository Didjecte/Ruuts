<template>
  <div class="bg-light pt-[90px] md:pt-[100px] pb-16 md:pb-24">
    <div class="max-w-[1200px] mx-auto px-6 w-full page-header reveal-item">
      <h1 class="font-heading text-5xl mb-6 font-semibold text-dark">
        Insights & Media
      </h1>
      <p class="text-dark/80 max-w-[600px] leading-[1.8] mb-12">
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
            'bg-transparent border-none font-body text-xs font-medium uppercase text-dark/60 py-2 px-[1.2rem] cursor-pointer transition-colors duration-200 relative shrink-0 hover:text-primary',
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
    <div class="max-w-[1200px] mx-auto px-6 w-full mt-14 mb-24">
      <div class="columns-1 sm:columns-2 lg:columns-3 gap-[2.2rem]">
        <div
          v-for="post in filteredPosts"
          :key="post.id"
          class="insight-item-animate break-inside-avoid mb-[2.2rem]"
        >
          <MediaCard :post="post" />
        </div>
      </div>

      <div
        v-if="filteredPosts.length === 0"
        class="py-16 text-dark/50 text-sm text-center"
      >
        <p>No posts found matching the selected filter.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from "vue";
import { insightsMockData } from "~/data/insights";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

useSeoMeta({
  title: "Ruuts - Tea Culture Insights & Media Journal",
  description:
    "Read articles about tea ceremonies, watch Guzheng sessions, and view photo diaries of Zhejiang tea harvests in our media repository.",
});

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
      ".insight-item-animate",
      { y: 20, opacity: 0 },
      { duration: 0.4, y: 0, opacity: 1, stagger: 0.08, ease: "power3.out" },
    );
  });
};

onMounted(() => {
  // Page header entry animation
  gsap.from(".page-header > *", {
    duration: 0.8,
    y: 20,
    opacity: 0,
    stagger: 0.1,
    ease: "power3.out",
  });

  // Grid entry animation
  gsap.from(".insight-item-animate", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.08,
    ease: "power3.out",
    delay: 0.3,
  });
});
</script>
