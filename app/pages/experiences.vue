<template>
  <ExperienceSection :title="pageContent?.b2cTitle || 'Private Experiences'" catalog-type="b2c" />
</template>

<script setup>
import { computed } from "vue";
const { data: pageContent } = useSanityHomepageContent();

useSanitySeo(computed(() => ({
  seoTitle: pageContent.value?.privateExperiencesMetaTitle || "Private Experiences & Booking Policies",
  seoDescription: pageContent.value?.privateExperiencesMetaDescription || "Browse our signature collections of tea rituals, Pipa collaborations, and Taichi meditations in Shanghai, with booking structures and guidelines."
})));
</script>
