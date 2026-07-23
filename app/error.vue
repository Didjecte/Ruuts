<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  error: Object
})

const { data: siteSettings } = useSanitySiteSettings()

const errorMessage = computed(() => {
  if (siteSettings.value?.errorPageMessage) {
    return siteSettings.value.errorPageMessage
  }
  return "The page you're looking for seems to have drifted away like tea leaves."
})

const handleError = () => {
  clearError({ redirect: '/' })
}

useHead({
  title: 'Page Not Found - RUUTS'
})
</script>

<template>
  <NuxtLayout name="default">
    <div class="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24 bg-background">
      <div class="max-w-[600px] mx-auto flex flex-col items-center">
        <!-- 404 Large Display -->
        <span class="font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-4">
          Error 404
        </span>
        
        <h1 class="font-heading text-6xl md:text-8xl text-primary font-medium tracking-tight mb-6">
          404
        </h1>

        <!-- Subtitle message from Sanity or default -->
        <p class="font-body text-lg md:text-xl text-foreground/80 leading-relaxed mb-10 max-w-[480px]">
          {{ errorMessage }}
        </p>

        <!-- CTA Button -->
        <button
          @click="handleError"
          class="px-8 py-3.5 rounded-full bg-primary text-background font-body text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 hover:bg-secondary hover:text-foreground shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
        >
          Return to Home
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>
