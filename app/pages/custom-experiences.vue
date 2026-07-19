<template>
  <ExperienceSection :title="pageContent?.b2bTitle || 'Tea anywhere'" catalog-type="b2b" />
</template>

<script setup>
import { computed } from "vue";
const { data: pageContent } = useSanityHomepageContent();

useSanitySeo(computed(() => ({
  seoTitle: pageContent.value?.teaAnywhereMetaTitle || "Custom Experiences | Tea anywhere",
  seoDescription: pageContent.value?.teaAnywhereMetaDescription || "Bespoke tea experiences for hotels, corporate events, and wellness venues. Bring the art of Chinese tea culture to your space."
})));
</script>
