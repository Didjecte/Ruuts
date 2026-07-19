<template>
  <div v-if="post" class="bg-background pt-[150px] section-padding">
    <div class="max-w-[900px] mx-auto px-6 sm:px-8 md:px-0">
      
      <!-- Back Link -->
      <div class="mb-10 reveal-item-detail">
        <NuxtLink to="/testimonials" class="font-body text-xs font-medium uppercase text-foreground inline-flex items-center gap-2 transition-colors duration-200 group hover:text-primary">
          <svg class="w-4 h-4 transform translate-x-0 transition-transform duration-200 group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Testimonials
        </NuxtLink>
      </div>

      <!-- Article Post Layout -->
      <article v-if="post.type === 'article'">
        <header class="mb-12 reveal-item-detail">
          <span class="font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary block mb-3">{{ post.type }}</span>
          <h1 class="text-3xl md:text-5xl leading-[1.25] mb-[1.2rem] text-primary font-heading">{{ post.title }}</h1>
          <div class="font-body text-xs text-foreground/60">
            <span>{{ formattedDate }}</span>
            <span v-if="post.readTime">&bull; {{ post.readTime }}</span>
          </div>
        </header>

        <div class="w-full h-[300px] md:h-[480px] mb-14 rounded-2xl border border-secondary/20 overflow-hidden reveal-item-detail">
          <NuxtImg provider="sanity" :src="post.mediaUrl" :alt="post.title" class="w-full h-full object-cover" loading="lazy" sizes="sm:100vw md:100vw lg:1000px" />
        </div>

        <div v-if="post.description" class="reveal-item-detail text-lg leading-[1.8] text-foreground/90 font-medium mb-10 [&>p]:mb-4 [&>ul]:ml-6 [&>ul>li]:mb-2 [&>ol]:ml-6 [&>ol>li]:mb-2" v-html="post.description"></div>
        <div class="reveal-item-detail [&>p]:text-base [&>p]:leading-[1.85] [&>p]:text-foreground [&>p]:mb-[1.8rem] [&>h3]:text-2xl [&>h3]:mt-10 [&>h3]:mb-4 [&>h3]:text-foreground [&>h3]:font-heading [&>ul]:ml-6 [&>ul]:mb-[1.8rem] [&>ol]:ml-6 [&>ol]:mb-[1.8rem] [&>ul>li]:text-base [&>ul>li]:leading-[1.7] [&>ul>li]:text-foreground [&>ul>li]:mb-2 [&>blockquote]:font-heading [&>blockquote]:text-xl [&>blockquote]:italic [&>blockquote]:text-foreground [&>blockquote]:border-l-[3px] [&>blockquote]:border-secondary [&>blockquote]:pl-6 [&>blockquote]:my-10" v-html="post.body"></div>
      </article>

      <!-- Photo Post Layout -->
      <article v-else-if="post.type === 'photo'">
        <header class="mb-12 reveal-item-detail text-center">
          <span class="font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary block mb-3">{{ post.type }}</span>
          <h1 class="text-3xl md:text-5xl leading-[1.25] mb-[1.2rem] text-primary font-heading">{{ post.title }}</h1>
          <div class="font-body text-xs text-foreground/60">
            <span>Published on {{ formattedDate }}</span>
          </div>
        </header>

        <div class="w-full rounded-2xl border border-secondary/20 overflow-hidden mb-12 reveal-item-detail">
          <NuxtImg provider="sanity" :src="post.mediaUrl" :alt="post.title" class="w-full block" loading="lazy" sizes="sm:100vw md:100vw lg:1000px" />
        </div>

        <div class="reveal-item-detail">
          <div class="text-lg leading-[1.8] text-foreground mb-12 [&>p]:mb-4 [&>ul]:ml-6 [&>ul>li]:mb-2 [&>ol]:ml-6 [&>ol>li]:mb-2" v-html="post.description"></div>

          
          <div class="h-[1px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent mb-12"></div>
          
          <h3 class="font-heading text-2xl text-primary mb-6">Visual Journal Gallery</h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div
              v-for="(img, idx) in post.gallery || [post.mediaUrl]"
              :key="idx"
              class="rounded-lg border border-secondary/20 overflow-hidden h-[180px] cursor-pointer group relative"
              @click="openLightbox(idx)"
            >
              <NuxtImg provider="sanity" :src="img" :alt="`${post.title} gallery ${idx + 1}`" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" sizes="sm:100vw md:33vw lg:33vw" />
              <div class="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-white">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </article>

      <!-- Video Post Layout -->
      <article v-else-if="post.type === 'video'">
        <header class="mb-12 reveal-item-detail text-center">
          <span class="font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary block mb-3">{{ post.type }}</span>
          <h1 class="text-3xl md:text-5xl leading-[1.25] mb-[1.2rem] text-primary font-heading">{{ post.title }}</h1>
          <div class="font-body text-xs text-foreground/60">
            <span>Published on {{ formattedDate }}</span>
          </div>
        </header>

        <!-- Video Player -->
        <div class="w-full mb-12 reveal-item-detail">
          <div class="w-full h-[300px] md:h-[480px] relative rounded-2xl border border-secondary/20 overflow-hidden bg-black group shadow-lg">
            
            <video
              ref="videoRef"
              :src="post.videoUrl"
              class="w-full h-full object-cover"
              :playsinline="true"
              @timeupdate="onVideoTimeUpdate"
              @loadedmetadata="onVideoLoadedMetadata"
              @ended="onVideoEnded"
              @click="toggleVideoPlay"
            ></video>

            <!-- Poster overlay when not playing and hasn't started -->
            <div
              v-if="!videoHasStarted"
              class="absolute inset-0 cursor-pointer"
              @click="toggleVideoPlay"
            >
              <NuxtImg provider="sanity" :src="post.mediaUrl" :alt="post.title" class="w-full h-full object-cover opacity-80" loading="lazy" sizes="sm:100vw md:100vw lg:1000px" />
              <div class="absolute inset-0 flex items-center justify-center bg-black/15">
                <button
                  class="w-[70px] h-[70px] rounded-full border border-[#88A95B] bg-[#88A95B]/85 text-background flex items-center justify-center cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-110 hover:bg-secondary hover:text-foreground hover:border-secondary shadow-2xl"
                  aria-label="Play video"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none" class="ml-1">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Big hover pause/play state button overlay -->
            <div
              v-else-if="!isVideoPlaying"
              class="absolute inset-0 flex items-center justify-center bg-black/25 cursor-pointer transition-opacity duration-300"
              @click="toggleVideoPlay"
            >
              <button
                class="w-[70px] h-[70px] rounded-full bg-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-transform duration-300 hover:scale-105"
                aria-label="Play video"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" class="ml-1">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </button>
            </div>

            <!-- Glassmorphism player controls -->
            <div
              class="absolute bottom-4 inset-x-4 px-4 py-3 bg-black/50 backdrop-blur-md rounded-full flex items-center gap-4 transition-opacity duration-300 border border-white/10 z-10"
              :class="isVideoPlaying ? 'opacity-0 hover:opacity-100 focus-within:opacity-100' : 'opacity-100'"
            >
              <!-- Play/Pause -->
              <button
                class="bg-transparent border-none text-[#88A95B] hover:text-secondary cursor-pointer flex items-center"
                @click="toggleVideoPlay"
                :aria-label="isVideoPlaying ? 'Pause' : 'Play'"
              >
                <svg v-if="isVideoPlaying" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16"></rect>
                  <rect x="14" y="4" width="4" height="16"></rect>
                </svg>
                <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="currentColor" class="ml-0.5">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </button>

              <!-- Progress bar scrubber -->
              <div class="flex-grow flex items-center relative">
                <input
                  type="range"
                  min="0"
                  :max="videoDuration"
                  step="0.1"
                  :value="videoCurrentTime"
                  @input="onVideoSeek"
                  class="w-full h-1 bg-white/25 rounded-lg appearance-none cursor-pointer accent-[#88A95B] outline-none"
                />
                <div
                  class="absolute left-0 top-[calc(50%-2px)] h-1 bg-[#88A95B] rounded-l-lg pointer-events-none"
                  :style="{ width: `${videoProgressPercentage}%` }"
                ></div>
              </div>

              <!-- Time display -->
              <span class="font-body text-xs text-white/95 whitespace-nowrap min-w-[70px] text-center">
                {{ formatVideoTime(videoCurrentTime) }} / {{ formatVideoTime(videoDuration) }}
              </span>

              <!-- Mute / Unmute -->
              <button
                class="bg-transparent border-none text-white hover:text-[#88A95B] cursor-pointer flex items-center"
                @click="toggleVideoMute"
                :aria-label="isVideoMuted ? 'Unmute' : 'Mute'"
              >
                <svg v-if="isVideoMuted" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <line x1="23" y1="9" x2="17" y2="15"></line>
                  <line x1="17" y1="9" x2="23" y2="15"></line>
                </svg>
                <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
              </button>

              <!-- Fullscreen -->
              <button
                class="bg-transparent border-none text-white hover:text-[#88A95B] cursor-pointer flex items-center"
                @click="toggleVideoFullscreen"
                aria-label="Toggle Fullscreen"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="reveal-item-detail">
          <div class="text-base leading-[1.75] text-foreground mb-8 [&>p]:mb-4 [&>ul]:ml-6 [&>ul>li]:mb-2 [&>ol]:ml-6 [&>ol>li]:mb-2" v-html="post.description"></div>
          <div class="bg-primary/[0.03] border border-secondary/20 rounded-2xl p-6 font-body text-sm flex flex-col gap-2">

            <p><strong>Producer:</strong> Ruuts Production</p>
            <p><strong>Acoustics:</strong> Guzheng & Pipa recorded live</p>
          </div>
        </div>
      </article>

      <!-- Continue Exploring Navigation Footer -->
      <div v-if="prevPost || nextPost" class="mt-20 border-t border-secondary/20 pt-12 reveal-item-detail">
        <h3 class="font-heading text-2xl text-primary mb-8 text-center">Continue Exploring</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <!-- Previous Card -->
          <div v-if="prevPost">
            <NuxtLink
              :to="`/testimonials/${prevPost.slug}`"
              class="group flex flex-col justify-between h-full p-6 rounded-2xl border border-secondary/15 hover:border-[#88A95B] bg-white/5 hover:bg-[#88A95B]/5 transition-all duration-300 shadow-sm"
            >
              <div class="flex flex-col gap-2">
                <span class="font-body text-xs font-semibold uppercase tracking-[0.25em] text-[#88A95B]">Previous</span>
                <h4 class="font-heading text-lg text-primary leading-snug group-hover:text-[#88A95B] transition-colors">{{ prevPost.title }}</h4>
              </div>
              <span class="font-body text-xs text-foreground/50 mt-4 flex items-center gap-1.5 group-hover:text-[#88A95B] transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Read story
              </span>
            </NuxtLink>
          </div>
          <div v-else></div>

          <!-- Next Card -->
          <div v-if="nextPost">
            <NuxtLink
              :to="`/testimonials/${nextPost.slug}`"
              class="group flex flex-col justify-between h-full p-6 rounded-2xl border border-secondary/15 hover:border-[#88A95B] bg-white/5 hover:bg-[#88A95B]/5 transition-all duration-300 shadow-sm"
            >
              <div class="flex flex-col gap-2">
                <span class="font-body text-xs font-semibold uppercase tracking-[0.25em] text-[#88A95B] text-right">Next</span>
                <h4 class="font-heading text-lg text-primary leading-snug text-right group-hover:text-[#88A95B] transition-colors">{{ nextPost.title }}</h4>
              </div>
              <span class="font-body text-xs text-foreground/50 mt-4 flex items-center gap-1.5 self-end group-hover:text-[#88A95B] transition-colors">
                Read story
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>

    </div>
  </div>
  
  <div v-else class="pt-[180px] text-center max-w-[1200px] mx-auto px-6 w-full section-padding">
    <h2 class="font-heading text-3xl text-primary mb-4">Post Not Found</h2>
    <p class="text-base text-foreground mb-6">The requested testimonial entry could not be located.</p>
    <NuxtLink to="/testimonials" class="btn-primary mt-4 inline-block">Return to Testimonials</NuxtLink>
  </div>

  <!-- Interactive Lightbox Modal (Photo layout only) -->
  <Teleport to="body">
    <Transition name="lightbox-fade">
      <div
        v-if="activeLightboxIndex !== null && post && post.gallery"
        class="fixed inset-0 z-[300] bg-black/95 backdrop-blur-md flex flex-col justify-between select-none"
        role="dialog"
        aria-modal="true"
        @click.self="closeLightbox"
      >
        <!-- Top Bar -->
        <div class="w-full flex items-center justify-between px-6 py-4 z-10" @click.self="closeLightbox">
          <span class="font-body text-xs md:text-sm font-medium text-background/70 tracking-wider pointer-events-none">
            {{ activeLightboxIndex + 1 }} / {{ post.gallery.length }}
          </span>

          <button
            class="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 active:bg-white/25 text-white flex items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-sm border border-white/10"
            @click="closeLightbox"
            aria-label="Close lightbox"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- Main Photo -->
        <div
          class="flex-grow flex items-center justify-center relative px-4 md:px-16 overflow-hidden"
          @click.self="closeLightbox"
        >
          <!-- Left Arrow -->
          <button
            v-if="post.gallery.length > 1"
            class="absolute left-6 w-12 h-12 rounded-full bg-white/5 hover:bg-white/15 active:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-sm border border-white/10 z-10"
            @click="prevLightboxImage"
            aria-label="Previous image"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div class="max-w-full max-h-[75vh] flex items-center justify-center" @click.self="closeLightbox">
            <Transition name="fade-scale" mode="out-in">
              <NuxtImg
                provider="sanity"
                :key="activeLightboxIndex"
                :src="post.gallery[activeLightboxIndex]"
                alt="Testimonial Gallery Detail"
                class="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
                sizes="sm:100vw md:100vw lg:1200px"
              />
            </Transition>
          </div>

          <!-- Right Arrow -->
          <button
            v-if="post.gallery.length > 1"
            class="absolute right-6 w-12 h-12 rounded-full bg-white/5 hover:bg-white/15 active:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-sm border border-white/10 z-10"
            @click="nextLightboxImage"
            aria-label="Next image"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <!-- Thumbnails bottom bar -->
        <div class="w-full flex items-center justify-center py-6 px-6 z-10" @click.self="closeLightbox">
          <div class="flex items-center gap-3 overflow-x-auto max-w-[90vw] pb-2">
            <button
              v-for="(img, idx) in post.gallery"
              :key="idx"
              class="w-16 h-12 rounded-md overflow-hidden border-2 cursor-pointer transition-all duration-300 flex-shrink-0"
              :class="idx === activeLightboxIndex ? 'border-[#88A95B] scale-105' : 'border-transparent opacity-50 hover:opacity-100'"
              @click="openLightbox(idx)"
            >
              <NuxtImg provider="sanity" :src="img" class="w-full h-full object-cover pointer-events-none" sizes="100px" />
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { testimonialsMockData } from '~/data/testimonials'
import { gsap } from 'gsap'

definePageMeta({
  headerTheme: 'light'
})

const route = useRoute()

const { data: sanityTestimonials } = useSanityTestimonials();

const activePostsList = computed(() => {
  if (sanityTestimonials.value && sanityTestimonials.value.length > 0) {
    return sanityTestimonials.value;
  }
  return [];
});

const post = computed(() => {
  return activePostsList.value.find(p => p.slug === route.params.slug)
});

const formattedDate = computed(() => {
  if (!post.value) return ''
  const date = new Date(post.value.publishedAt)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
})

// Previous / Next story navigation
const currentIndex = computed(() => {
  if (!post.value) return -1
  return activePostsList.value.findIndex(p => p.slug === post.value.slug)
})

const prevPost = computed(() => {
  if (currentIndex.value <= 0) return null
  return activePostsList.value[currentIndex.value - 1]
})

const nextPost = computed(() => {
  if (currentIndex.value === -1 || currentIndex.value >= activePostsList.value.length - 1) return null
  return activePostsList.value[currentIndex.value + 1]
})

// Video Player State & Logic
const videoRef = ref(null)
const isVideoPlaying = ref(false)
const isVideoMuted = ref(false)
const videoCurrentTime = ref(0)
const videoDuration = ref(0)
const videoHasStarted = ref(false)

const videoProgressPercentage = computed(() => {
  if (videoDuration.value === 0) return 0
  return (videoCurrentTime.value / videoDuration.value) * 100
})

const toggleVideoPlay = () => {
  if (!videoRef.value) return
  if (!videoHasStarted.value) {
    videoHasStarted.value = true
  }
  if (videoRef.value.paused) {
    videoRef.value.play().then(() => {
      isVideoPlaying.value = true
    }).catch(err => console.error("Error playing video:", err))
  } else {
    videoRef.value.pause()
    isVideoPlaying.value = false
  }
}

const toggleVideoMute = () => {
  if (!videoRef.value) return
  videoRef.value.muted = !videoRef.value.muted
  isVideoMuted.value = videoRef.value.muted
}

const onVideoTimeUpdate = () => {
  if (videoRef.value) {
    videoCurrentTime.value = videoRef.value.currentTime
  }
}

const onVideoLoadedMetadata = () => {
  if (videoRef.value) {
    videoDuration.value = videoRef.value.duration
  }
}

const onVideoEnded = () => {
  isVideoPlaying.value = false
  videoCurrentTime.value = 0
}

const onVideoSeek = (e) => {
  if (videoRef.value) {
    const time = parseFloat(e.target.value)
    videoRef.value.currentTime = time
    videoCurrentTime.value = time
  }
}

const toggleVideoFullscreen = () => {
  if (!videoRef.value) return
  if (videoRef.value.requestFullscreen) {
    videoRef.value.requestFullscreen()
  } else if (videoRef.value.webkitRequestFullscreen) {
    videoRef.value.webkitRequestFullscreen()
  }
}

const formatVideoTime = (time) => {
  if (isNaN(time)) return "0:00"
  const mins = Math.floor(time / 60)
  const secs = Math.floor(time % 60)
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`
}

// Lightbox Logic for Photo Testimonials
const activeLightboxIndex = ref(null)

const openLightbox = (idx) => {
  activeLightboxIndex.value = idx
}

const closeLightbox = () => {
  activeLightboxIndex.value = null
}

const prevLightboxImage = () => {
  if (activeLightboxIndex.value === null || !post.value?.gallery) return
  const galleryLen = post.value.gallery.length
  activeLightboxIndex.value = (activeLightboxIndex.value - 1 + galleryLen) % galleryLen
}

const nextLightboxImage = () => {
  if (activeLightboxIndex.value === null || !post.value?.gallery) return
  const galleryLen = post.value.gallery.length
  activeLightboxIndex.value = (activeLightboxIndex.value + 1) % galleryLen
}

const handleLightboxKeyDown = (e) => {
  if (activeLightboxIndex.value === null) return
  if (e.key === "Escape") closeLightbox()
  if (e.key === "ArrowLeft") prevLightboxImage()
  if (e.key === "ArrowRight") nextLightboxImage()
}

// Watch lightbox to lock background scroll
watch(activeLightboxIndex, (newVal) => {
  if (typeof window === 'undefined') return
  if (newVal !== null) {
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
  } else {
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
  }
})

useSanitySeo(computed(() => ({
  seoTitle: post.value ? `${post.value.title} - Testimonials` : 'Testimonial Detail',
  seoDescription: post.value ? post.value.description : 'Testimonial entry',
  seoImage: post.value?.mediaImageAsset || post.value?.galleryImageAssets?.[0] || ''
})))

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: computed(() => {
        if (!post.value) return ''
        const imageUrl = post.value.mediaImageAsset || post.value.galleryImageAssets?.[0] || 'https://theruuts.com/logo.png'
        const isVideo = post.value.type === 'Video' || post.value.type === 'video'
        
        if (isVideo) {
          return JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'VideoObject',
            '@id': `https://theruuts.com/testimonials/${post.value.slug}#video`,
            'name': post.value.title || 'Tea Ceremony Video',
            'description': post.value.description || 'Watch live Guzheng and tea ceremony sessions with Ruuts.',
            'thumbnailUrl': [imageUrl],
            'uploadDate': post.value.publishedAt || new Date().toISOString(),
            'contentUrl': post.value.videoUrl || post.value.videoFileAsset || `https://theruuts.com/testimonials/${post.value.slug}`
          })
        }

        return JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          '@id': `https://theruuts.com/testimonials/${post.value.slug}#article`,
          'headline': post.value.title || 'Tea Culture Testimonial',
          'description': post.value.description || 'Testimonial and community story around Chinese tea.',
          'image': [imageUrl],
          'datePublished': post.value.publishedAt || new Date().toISOString(),
          'author': {
            '@type': 'Organization',
            'name': 'Ruuts Community'
          },
          'publisher': {
            '@type': 'Organization',
            'name': 'RUUTS',
            'logo': {
              '@type': 'ImageObject',
              'url': 'https://theruuts.com/logo.png'
            }
          }
        })
      })
    }
  ]
})

onMounted(() => {
  window.addEventListener("keydown", handleLightboxKeyDown)

  if (post.value) {
    // Details entry animation
    gsap.from('.reveal-item-detail', {
      duration: 0.8,
      y: 25,
      opacity: 0,
      stagger: 0.15,
      ease: 'power3.out'
    })
  }
})

onUnmounted(() => {
  window.removeEventListener("keydown", handleLightboxKeyDown)
  // Ensure we unlock the scroll if unmounting
  if (typeof window !== 'undefined') {
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
/* Lightbox Fade Transition */
.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}
.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}

/* Inner Fade Scale Transition */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.35s cubic-bezier(0.25, 1, 0.5, 1);
}
.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.97);
}
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(1.03);
}

/* Range input slider styling for video controls */
input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #88A95B;
  cursor: pointer;
  transition: transform 0.1s;
}
input[type="range"]::-webkit-slider-thumb:hover {
  transform: scale(1.3);
}
</style>
