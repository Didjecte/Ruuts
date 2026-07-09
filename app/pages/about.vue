<template>
  <div>
    <AboutSection class="pt-[90px] md:pt-[100px]" />
    <ContactSection />
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Ruuts - About Us",
  description: "Our Story, Founder, and Mission.",
});
</script>

<style scoped>
:deep(#about > .section-padding) {
  padding-top: 0 !important;
}
</style>
