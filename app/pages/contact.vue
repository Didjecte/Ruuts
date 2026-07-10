<template>
  <div class="bg-background min-h-screen">
    <ContactSection class="pt-[90px] md:pt-[100px] !border-t-0" />
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Ruuts - Contact Us",
  description: "Get in touch for private sessions and events.",
});
</script>

<style scoped>
:deep(#contact > .section-padding) {
  padding-top: 0 !important;
}
</style>
