<template>
  <div
    :class="[
      'flex flex-col bg-background/60 border border-secondary/20 rounded-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] h-full group hover:scale-[1.02] hover:border-primary hover:shadow-[0_15px_35px_rgba(136,169,91,0.15)]',
      { 'is-b2b': isB2b },
    ]"
  >
    <div class="relative w-full h-[180px] sm:h-[200px] shrink-0 overflow-hidden">
      <NuxtImg
        v-if="experience.image"
        provider="sanity"
        :src="experience.image"
        :alt="experience.title"
        class="w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
        loading="lazy"
        sizes="sm:100vw md:50vw lg:600px"
      />
      <!-- Floating Badges for Duration & Capacity -->
      <div
        v-if="!isB2b"
        class="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none"
      >
        <span
          class="pointer-events-auto bg-background/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-foreground border border-secondary/30 shadow-sm"
        >
          ⏱️ {{ experience.duration }}
        </span>
        <span
          class="pointer-events-auto bg-background/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-foreground border border-secondary/30 shadow-sm"
        >
          👥 Up to {{ experience.maxGuests }} guests
        </span>
      </div>
    </div>

    <div class="p-5 sm:p-6 flex flex-col grow">
      <div class="mb-2.5">
        <h3 class="text-xl sm:text-2xl text-primary font-heading font-semibold leading-tight">
          {{ experience.title }}
        </h3>
      </div>

      <p class="text-xs sm:text-sm leading-[1.65] text-foreground/80 mb-5 grow whitespace-pre-line">
        {{ experience.description }}
      </p>

      <div v-if="!isB2b && bullets && bullets.length > 0" class="mb-6">
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-2">
          <li
            v-for="(bullet, index) in bullets"
            :key="index"
            class="flex items-start gap-1.5 text-xs text-foreground/85 leading-[1.4]"
          >
            <template v-if="isLanguageBullet(bullet)">
              <svg
                class="w-[13px] h-[13px] text-primary mt-[2px] shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <div class="flex items-center gap-2 flex-wrap">
                <span class="inline-flex items-center gap-1 font-medium">
                  <span class="fi fi-gb rounded-sm shadow-sm"></span>
                  <span>EN</span>
                </span>
                <span class="inline-flex items-center gap-1 font-medium">
                  <span class="fi fi-fr rounded-sm shadow-sm"></span>
                  <span>FR</span>
                </span>
                <span class="inline-flex items-center gap-1 font-medium">
                  <span class="fi fi-cn rounded-sm shadow-sm"></span>
                  <span>CN</span>
                </span>
              </div>
            </template>
            <template v-else>
              <svg
                class="w-[13px] h-[13px] text-primary mt-[2px] shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>{{ bullet }}</span>
            </template>
          </li>
        </ul>
      </div>

      <div class="mt-auto">
        <NuxtLink
          :to="contactLink"
          class="flex items-center justify-center w-full py-2.5 px-4 border border-primary rounded-[50px] font-body text-xs uppercase font-medium transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:bg-primary group-hover:text-primary-foreground hover:!bg-secondary hover:!border-secondary hover:!text-secondary-foreground"
          >Book Session</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const route = useRoute();

const contactLink = computed(() => {
  return (route.path === "/" || route.path === "/index") ? "/#contact" : "/contact";
});

const props = defineProps({
  experience: {
    type: Object,
    required: true,
  },
  isB2b: {
    type: Boolean,
    default: false,
  },
});

const bullets = computed(() => {
  return props.isB2b ? props.experience.highlights : props.experience.bullets;
});

const isLanguageBullet = (bullet) => {
  const lower = bullet.toLowerCase();
  return lower.includes("available in english") || lower.includes("bilingual execution");
};
</script>
