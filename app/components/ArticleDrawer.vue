<template>
  <Teleport to="body">
    <!-- Backdrop -->
    <Transition name="drawer-backdrop" appear>
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[200] bg-black/40 backdrop-blur-sm"
        @click="close"
        @touchmove.prevent
      ></div>
    </Transition>

    <!-- Drawer Panel Container -->
    <Transition name="drawer-slide" appear @after-leave="onAfterLeave">
      <div
        v-if="isOpen"
        class="fixed z-[200] bg-[#FBFBFA] dark:bg-background border-secondary/20 shadow-2xl flex flex-col"
        :class="[
          /* Responsive layout classes: Desktop right slide-over, Mobile bottom sheet */
          'inset-y-0 right-0 w-full sm:max-w-2xl border-l',
          'bottom-0 top-auto sm:top-0 h-[88vh] sm:h-full rounded-t-3xl sm:rounded-t-none',
        ]"
        role="dialog"
        aria-modal="true"
      >
        <!-- Mobile Drag Handle -->
        <div
          class="sm:hidden w-12 h-1.5 bg-dark/20 dark:bg-light/20 rounded-full mx-auto my-3 flex-shrink-0"
          @click="close"
        ></div>

        <!-- Header (Sticky top) -->
        <div
          class="px-6 sm:px-10 py-5 border-b border-secondary/10 flex items-center justify-between flex-shrink-0"
        >
          <div>
            <span class="font-body text-xs text-dark/60 dark:text-light/60">
              {{ formattedDate }} &bull; {{ post.readTime || "3 min read" }}
            </span>
          </div>

          <div class="flex items-center gap-3">
            <!-- Standalone link -->
            <NuxtLink
              :to="`/testimonials/${post.slug}`"
              @click.prevent="closeAndNavigate"
              class="text-xs font-medium uppercase text-dark/70 dark:text-light/70 hover:text-[#88A95B] flex items-center gap-1.5 transition-colors duration-200"
              title="Open as full page"
            >
              <span>Full Page</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                ></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </NuxtLink>

            <!-- Divider -->
            <span class="w-[1px] h-4 bg-secondary/20"></span>

            <!-- Close Button -->
            <button
              class="w-9 h-9 rounded-full bg-secondary/5 hover:bg-secondary/15 active:bg-secondary/25 text-dark dark:text-light flex items-center justify-center cursor-pointer transition-colors duration-200"
              @click="close"
              aria-label="Close drawer"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        <!-- Scrollable Article Content -->
        <div
          class="flex-grow overflow-y-auto px-6 sm:px-10 py-8 custom-scrollbar overscroll-contain"
        >
          <h1
            class="text-2xl sm:text-4xl leading-[1.3] mb-6 text-primary font-heading"
          >
            {{ post.title }}
          </h1>

          <!-- Featured Image -->
          <div
            class="w-full h-[240px] sm:h-[320px] mb-8 rounded-xl border border-secondary/20 overflow-hidden"
          >
            <img
              :src="post.mediaUrl"
              :alt="post.title"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <!-- Article Body -->
          <div
            class="[&>p]:text-base [&>p]:leading-[1.85] [&>p]:text-dark [&>p]:mb-[1.8rem] [&>h3]:text-xl sm:&>h3]:text-2xl [&>h3]:mt-8 [&>h3]:mb-4 [&>h3]:text-dark [&>h3]:font-heading [&>ul]:ml-6 [&>ul]:mb-[1.8rem] [&>ol]:ml-6 [&>ol]:mb-[1.8rem] [&>ul>li]:text-base [&>ul>li]:leading-[1.7] [&>ul>li]:text-dark [&>ul>li]:mb-2 [&>blockquote]:font-heading [&>blockquote]:text-lg sm:[&>blockquote]:text-xl [&>blockquote]:italic [&>blockquote]:text-dark [&>blockquote]:border-l-[3px] [&>blockquote]:border-[#88A95B] [&>blockquote]:pl-6 [&>blockquote]:my-8"
            v-html="post.body"
          ></div>
        </div>
      </div>
    </Transition>
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
  isOpen.value = false;
};

const closeAndNavigate = () => {
  if (!props.post?.slug) return;
  pendingNavigationPath = `/testimonials/${props.post.slug}`;
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

const formattedDate = computed(() => {
  if (!props.post) return "";
  const date = new Date(props.post.publishedAt);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
});

const handleKeyDown = (e) => {
  if (e.key === "Escape") close();
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
/* Backdrop Transition */
.drawer-backdrop-enter-active,
.drawer-backdrop-leave-active {
  transition: opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}
.drawer-backdrop-enter-from,
.drawer-backdrop-leave-to {
  opacity: 0;
}

/* Slide Transition (Responsive directions) */
.drawer-slide-enter-active,
.drawer-slide-leave-active {
  transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}

/* Mobile: slide up/down from bottom */
@media (max-width: 639px) {
  .drawer-slide-enter-from,
  .drawer-slide-leave-to {
    transform: translateY(100%);
  }
}

/* Desktop: slide in/out from right */
@media (min-width: 640px) {
  .drawer-slide-enter-from,
  .drawer-slide-leave-to {
    transform: translateX(100%);
  }
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(136, 169, 91, 0.2);
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(136, 169, 91, 0.4);
}
</style>
