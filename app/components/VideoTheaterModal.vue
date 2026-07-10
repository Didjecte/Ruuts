<template>
  <Teleport to="body">
    <!-- Fullscreen Modal Container -->
    <div
      class="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8 select-none"
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
        <div
          v-if="isOpen"
          class="relative z-10 w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] border border-white/10 group aspect-video pointer-events-auto"
        >
          <!-- HTML5 Video Player -->
          <video
            ref="videoRef"
            :src="post.videoUrl"
            class="w-full h-full object-contain cursor-pointer"
            autoplay
            playsinline
            @click="togglePlay"
            @timeupdate="onTimeUpdate"
            @loadedmetadata="onLoadedMetadata"
            @ended="onVideoEnded"
          ></video>

          <!-- Top Header & Close Button (hidden/shown on hover) -->
          <div
            class="absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between transition-opacity duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 z-10"
          >
            <div class="text-white">
              <h3 class="font-heading text-sm md:text-base font-medium">
                {{ post.title }}
              </h3>
            </div>

            <!-- Standalone link & Close Button Container -->
            <div class="flex items-center gap-3">
              <NuxtLink
                :to="`/testimonials/${post.slug}`"
                @click.prevent="closeAndNavigate"
                class="text-xs font-medium uppercase text-white/80 hover:text-[#88A95B] flex items-center gap-1.5 transition-colors duration-200"
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
                class="w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 active:bg-black/80 text-white flex items-center justify-center cursor-pointer transition-all duration-300 border border-white/15"
                @click="close"
                aria-label="Close video player"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>

          <!-- Custom Glassmorphic Controls -->
          <div
            class="absolute bottom-4 inset-x-4 px-4 py-3 bg-white/10 dark:bg-black/60 backdrop-blur-md rounded-full flex items-center gap-4 transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 border border-white/10 z-10"
          >
            <!-- Play/Pause Button -->
            <button
              class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors duration-200"
              @click="togglePlay"
              :aria-label="isPlaying ? 'Pause' : 'Play'"
            >
              <svg
                v-if="isPlaying"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
              </svg>
              <svg
                v-else
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="ml-0.5"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>

            <!-- Timeline Slider -->
            <div class="flex-grow flex items-center relative">
              <input
                type="range"
                min="0"
                :max="duration"
                step="0.1"
                :value="currentTime"
                @input="onSeek"
                class="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#88A95B] outline-none"
              />
              <!-- Visual fill bar -->
              <div
                class="absolute left-0 top-[calc(50%-2px)] h-1 bg-[#88A95B] rounded-l-lg pointer-events-none"
                :style="{ width: `${progressPercentage}%` }"
              ></div>
            </div>

            <!-- Time Display -->
            <span
              class="font-body text-xs text-white/90 whitespace-nowrap min-w-[70px] text-center"
            >
              {{ formatTime(currentTime) }} / {{ formatTime(duration) }}
            </span>

            <!-- Volume / Mute Toggle -->
            <button
              class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors duration-200"
              @click="toggleMute"
              :aria-label="isMuted ? 'Unmute' : 'Mute'"
            >
              <svg
                v-if="isMuted || volume === 0"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <line x1="23" y1="9" x2="17" y2="15"></line>
                <line x1="17" y1="9" x2="23" y2="15"></line>
              </svg>
              <svg
                v-else
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path
                  d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
                ></path>
              </svg>
            </button>

            <!-- Fullscreen Toggle -->
            <button
              class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors duration-200"
              @click="toggleFullscreen"
              aria-label="Toggle Fullscreen"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const router = useRouter();
const isOpen = ref(true);
let pendingNavigationPath = null;

const close = () => {
  if (videoRef.value) {
    videoRef.value.pause();
  }
  isOpen.value = false;
};

const closeAndNavigate = () => {
  if (!props.post?.slug) return;
  pendingNavigationPath = `/testimonials/${props.post.slug}`;
  if (videoRef.value) {
    videoRef.value.pause();
  }
  isOpen.value = false;
};

const onAfterLeave = () => {
  emit("close");
  if (pendingNavigationPath) {
    nextTick(() => {
      router.push(pendingNavigationPath);
    });
  }
};

const videoRef = ref(null);
const isPlaying = ref(true);
const isMuted = ref(false);
const volume = ref(1);
const currentTime = ref(0);
const duration = ref(0);

const progressPercentage = computed(() => {
  if (duration.value === 0) return 0;
  return (currentTime.value / duration.value) * 100;
});

const togglePlay = () => {
  if (!videoRef.value) return;
  if (videoRef.value.paused) {
    videoRef.value.play();
    isPlaying.value = true;
  } else {
    videoRef.value.pause();
    isPlaying.value = false;
  }
};

const toggleMute = () => {
  if (!videoRef.value) return;
  videoRef.value.muted = !videoRef.value.muted;
  isMuted.value = videoRef.value.muted;
};

const onTimeUpdate = () => {
  if (videoRef.value) {
    currentTime.value = videoRef.value.currentTime;
  }
};

const onLoadedMetadata = () => {
  if (videoRef.value) {
    duration.value = videoRef.value.duration;
  }
};

const onVideoEnded = () => {
  isPlaying.value = false;
  currentTime.value = 0;
};

const onSeek = (e) => {
  if (videoRef.value) {
    const time = parseFloat(e.target.value);
    videoRef.value.currentTime = time;
    currentTime.value = time;
  }
};

const toggleFullscreen = () => {
  if (!videoRef.value) return;
  if (videoRef.value.requestFullscreen) {
    videoRef.value.requestFullscreen();
  } else if (videoRef.value.webkitRequestFullscreen) {
    videoRef.value.webkitRequestFullscreen();
  } else if (videoRef.value.msRequestFullscreen) {
    videoRef.value.msRequestFullscreen();
  }
};

const formatTime = (time) => {
  if (isNaN(time)) return "0:00";
  const mins = Math.floor(time / 60);
  const secs = Math.floor(time % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

const handleKeyDown = (e) => {
  if (e.key === "Escape") close();
  if (e.key === " ") {
    e.preventDefault();
    togglePlay();
  }
};

useScrollLock();

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
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

/* Remove default styling for range input */
input[type="range"]::-webkit-slider-runnable-track {
  background: transparent;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ffffff;
  cursor: pointer;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  transition: transform 0.15s ease;
}
input[type="range"]::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}
</style>
