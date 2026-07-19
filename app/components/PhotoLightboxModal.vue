<template>
  <Teleport to="body">
    <!-- Fullscreen Modal Container -->
    <div
      class="fixed inset-0 z-[200] flex flex-col justify-between select-none"
      role="dialog"
      aria-modal="true"
      @keydown.esc="close"
      @touchmove.prevent
    >
      <!-- Backdrop: Only Opacity Transition -->
      <Transition name="backdrop-fade" appear>
        <div
          v-if="isOpen"
          class="absolute inset-0 bg-black/95 backdrop-blur-md"
          @click="close"
        ></div>
      </Transition>

      <!-- Content Container: Scale/Fade Transition -->
      <Transition name="modal-scale" appear @after-leave="onAfterLeave">
        <div v-if="isOpen" class="relative z-10 flex-grow flex flex-col justify-between h-full pointer-events-none">
          <!-- Top Bar (Header) -->
          <div class="w-full flex items-center justify-between px-6 py-4 pointer-events-auto" @click.self="close">
            <!-- Photo index counter -->
            <span class="font-body text-xs md:text-sm font-medium text-light/70 tracking-wider pointer-events-none">
              {{ currentIndex + 1 }} / {{ totalImages }}
            </span>

            <!-- Standalone link & Close Button Container -->
            <div class="flex items-center gap-3">
              <NuxtLink
                :to="`/testimonials/${post.slug}`"
                @click.prevent="closeAndNavigate"
                class="text-xs font-medium uppercase text-light/70 hover:text-[#88A95B] flex items-center gap-1.5 transition-colors duration-200"
                title="Open as full page"
              >
                <span>Full Page</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </NuxtLink>

              <!-- Divider -->
              <span class="w-[1px] h-4 bg-white/20"></span>

              <!-- Close Button -->
              <button
                class="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 active:bg-white/25 text-white flex items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-sm border border-white/10"
                @click="close"
                aria-label="Close gallery"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>

          <!-- Main Photo Area -->
          <div
            class="flex-grow flex items-center justify-center relative px-4 md:px-16 overflow-hidden pointer-events-auto"
            @click.self="close"
            @touchstart="handleTouchStart"
            @touchend="handleTouchEnd"
          >
            <!-- Desktop Left Arrow -->
            <button
              v-if="totalImages > 1"
              class="hidden md:flex absolute left-6 w-12 h-12 rounded-full bg-white/5 hover:bg-white/15 active:bg-white/20 text-white items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-sm border border-white/10 z-10"
              @click="prevImage"
              aria-label="Previous image"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <!-- Active Image -->
            <div class="max-w-full max-h-[70vh] md:max-h-[78vh] flex items-center justify-center" @click.self="close">
              <Transition name="fade-scale" mode="out-in">
                <NuxtImg
                  provider="sanity"
                  :key="currentIndex"
                  :src="gallery[currentIndex]"
                  alt="Gallery image"
                  class="max-w-full max-h-full object-contain rounded-lg shadow-[0_0_40px_rgba(0,0,0,0.5)]"
                  sizes="sm:100vw md:100vw lg:1200px"
                  loading="lazy"
                />
              </Transition>
            </div>

            <!-- Desktop Right Arrow -->
            <button
              v-if="totalImages > 1"
              class="hidden md:flex absolute right-6 w-12 h-12 rounded-full bg-white/5 hover:bg-white/15 active:bg-white/20 text-white items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-sm border border-white/10 z-10"
              @click="nextImage"
              aria-label="Next image"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          <!-- Bottom Thumbnail Strip / Indicators -->
          <div class="w-full flex flex-col items-center justify-center gap-4 py-6 px-6 pointer-events-auto" @click.self="close">
            <!-- Thumbnail Strip (Desktop/Tablet) -->
            <div
              v-if="totalImages > 1"
              class="hidden sm:flex items-center gap-3 overflow-x-auto max-w-[90vw] pb-2 custom-scrollbar"
              @click.self="close"
            >
              <button
                v-for="(img, idx) in gallery"
                :key="idx"
                class="w-16 h-12 rounded-md overflow-hidden border-2 cursor-pointer transition-all duration-300 flex-shrink-0"
                :class="idx === currentIndex ? 'border-[#88A95B] scale-105 shadow-md shadow-[#88A95B]/20' : 'border-transparent opacity-50 hover:opacity-100'"
                @click="selectImage(idx)"
              >
                <NuxtImg provider="sanity" :src="img" class="w-full h-full object-cover pointer-events-none" sizes="100px" loading="lazy" />
              </button>
            </div>

            <!-- Pagination dots (Mobile) -->
            <div v-if="totalImages > 1" class="flex sm:hidden items-center justify-center gap-2" @click.self="close">
              <span
                v-for="(_, idx) in gallery"
                :key="idx"
                class="w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer"
                :class="idx === currentIndex ? 'bg-[#88A95B] w-3' : 'bg-white/30'"
                @click="selectImage(idx)"
              ></span>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['close']);

const router = useRouter();
const isOpen = ref(true);
let pendingNavigationPath = null;

const close = () => {
  if (isSwiping) return;
  isOpen.value = false;
};

const closeAndNavigate = () => {
  if (!props.post?.slug) return;
  pendingNavigationPath = `/testimonials/${props.post.slug}`;
  isOpen.value = false;
};

const onAfterLeave = () => {
  emit('close');
  if (pendingNavigationPath) {
    nextTick(() => {
      router.push(pendingNavigationPath);
    });
  }
};

// Get gallery images, fallback to single mediaUrl if no gallery
const gallery = computed(() => {
  return props.post.gallery && props.post.gallery.length > 0
    ? props.post.gallery
    : [props.post.mediaUrl];
});

const totalImages = computed(() => gallery.value.length);
const currentIndex = ref(0);
const currentImage = computed(() => gallery.value[currentIndex.value]);

let isSwiping = false;

// Navigation functions
const nextImage = () => {
  if (totalImages.value <= 1) return;
  currentIndex.value = (currentIndex.value + 1) % totalImages.value;
};

const prevImage = () => {
  if (totalImages.value <= 1) return;
  currentIndex.value = (currentIndex.value - 1 + totalImages.value) % totalImages.value;
};

const selectImage = (idx) => {
  currentIndex.value = idx;
};

// Keyboard listener
const handleKeyDown = (e) => {
  if (e.key === 'Escape') close();
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft') prevImage();
};

// Touch gestures handling
let touchStartX = 0;
let touchStartY = 0;

const handleTouchStart = (e) => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
};

const handleTouchEnd = (e) => {
  const touchEndX = e.changedTouches[0].clientX;
  const touchEndY = e.changedTouches[0].clientY;
  const diffX = touchEndX - touchStartX;
  const diffY = touchEndY - touchStartY;

  if (Math.abs(diffX) > 15 || Math.abs(diffY) > 15) {
    isSwiping = true;
    setTimeout(() => {
      isSwiping = false;
    }, 350);
  }

  // Horizontal swipe
  if (Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX > 50) {
      prevImage();
    } else if (diffX < -50) {
      nextImage();
    }
  } else {
    // vertical swipe down to close
    if (diffY > 80) {
      isSwiping = false;
      close();
    }
  }
};

useScrollLock();

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<style scoped>
/* Backdrop Fade (No Scale) */
.backdrop-fade-enter-active,
.backdrop-fade-leave-active {
  transition: opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}
.backdrop-fade-enter-from,
.backdrop-fade-leave-to {
  opacity: 0;
}

/* Modal Content Scale */
.modal-scale-enter-active,
.modal-scale-leave-active {
  transition: opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1), transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}
.modal-scale-enter-from,
.modal-scale-leave-to {
  opacity: 0;
  transform: scale(0.96);
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.35s cubic-bezier(0.25, 1, 0.5, 1);
}
.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.96);
}
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(1.04);
}

.custom-scrollbar::-webkit-scrollbar {
  height: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.4);
}
</style>
