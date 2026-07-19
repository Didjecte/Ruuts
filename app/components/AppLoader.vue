<template>
  <Teleport to="body">
    <div
      v-if="isLoading"
      ref="loaderRef"
      class="fixed inset-0 z-[9999] bg-[#FBFBFA] dark:bg-background pointer-events-auto"
    ></div>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import gsap from 'gsap';

const isLoading = ref(true);
const loaderRef = ref(null);

onMounted(() => {
  nextTick(() => {
    if (!loaderRef.value) return;

    // Fast, minimalist fade-out of the solid curtain
    gsap.to(loaderRef.value, {
      opacity: 0,
      duration: 0.4,
      ease: 'power2.out',
      onComplete: () => {
        isLoading.value = false;
        if (typeof document !== 'undefined') {
          document.documentElement.classList.add('js-ready');
        }
      },
    });
  });
});
</script>
