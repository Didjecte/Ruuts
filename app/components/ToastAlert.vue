<template>
  <Teleport to="body">
    <Transition name="toast">
      <div
        v-if="show"
        class="fixed bottom-8 left-0 right-0 mx-auto sm:left-auto sm:right-8 z-50 flex items-center justify-center gap-3 px-6 py-3.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] max-w-[90vw] sm:max-w-max w-max bg-[#1a1a1a] text-white"
      >
        <!-- Success Icon -->
        <svg v-if="type === 'success'" class="w-5 h-5 text-[#86efac] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
        </svg>
        
        <!-- Error Icon -->
        <svg v-if="type === 'error'" class="w-5 h-5 text-red-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
        </svg>

        <p class="font-body text-[13px] sm:text-sm font-semibold tracking-wide leading-tight">
          {{ message }}
        </p>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false
  },
  message: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'success' // 'success' or 'error'
  }
});
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.toast-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.9);
}
.toast-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.9);
}
</style>
