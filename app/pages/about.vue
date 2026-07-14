<template>
  <div>
    <AboutSection class="pt-[90px] md:pt-[100px]" />
    <ContactSection />
  </div>
</template>

<script setup>
useSanitySeo({
  seoTitle: "About Us | Founder Ophélie Hu & Chinese Tea Culture",
  seoDescription: "Reconnecting with roots through authentic Chinese tea exploration across 6 provinces. Learn about our founder Ophélie Hu, our heritage, and our mission in Shanghai."
});
</script>

<style scoped>
:deep(#about > .section-padding) {
  padding-top: 0 !important;
}
</style>
