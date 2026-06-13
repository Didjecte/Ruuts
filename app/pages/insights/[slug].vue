<template>
  <div v-if="post" class="bg-light pt-[150px] section-padding">
    <div class="max-w-[900px] mx-auto">
      
      <!-- Back Link -->
      <div class="mb-10 reveal-item-detail">
        <NuxtLink to="/insights" class="font-body text-xs font-medium uppercase text-dark inline-flex items-center gap-2 transition-colors duration-200 group hover:text-primary">
          <svg class="w-4 h-4 transform translate-x-0 transition-transform duration-200 group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Insights
        </NuxtLink>
      </div>

      <!-- Article Post Layout -->
      <article v-if="post.type === 'article'">
        <header class="mb-12 reveal-item-detail">
          <span class="font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary block mb-3">{{ post.type }}</span>
          <h1 class="text-3xl md:text-5xl leading-[1.25] mb-[1.2rem] text-dark font-heading">{{ post.title }}</h1>
          <div class="font-body text-xs text-dark/60">
            <span>{{ formattedDate }}</span>
            <span v-if="post.readTime">&bull; {{ post.readTime }}</span>
          </div>
        </header>

        <div class="w-full h-[300px] md:h-[480px] mb-14 rounded-2xl border border-secondary/20 overflow-hidden reveal-item-detail">
          <img :src="post.mediaUrl" :alt="post.title" class="w-full h-full object-cover" />
        </div>

        <div class="reveal-item-detail [&>p]:text-base [&>p]:leading-[1.85] [&>p]:text-dark [&>p]:mb-[1.8rem] [&>h3]:text-2xl [&>h3]:mt-10 [&>h3]:mb-4 [&>h3]:text-dark [&>h3]:font-heading [&>ul]:ml-6 [&>ul]:mb-[1.8rem] [&>ol]:ml-6 [&>ol]:mb-[1.8rem] [&>ul>li]:text-base [&>ul>li]:leading-[1.7] [&>ul>li]:text-dark [&>ul>li]:mb-2 [&>blockquote]:font-heading [&>blockquote]:text-xl [&>blockquote]:italic [&>blockquote]:text-dark [&>blockquote]:border-l-[3px] [&>blockquote]:border-secondary [&>blockquote]:pl-6 [&>blockquote]:my-10" v-html="post.body"></div>
      </article>

      <!-- Photo Post Layout -->
      <article v-else-if="post.type === 'photo'">
        <header class="mb-12 reveal-item-detail text-center">
          <span class="font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary block mb-3">{{ post.type }}</span>
          <h1 class="text-3xl md:text-5xl leading-[1.25] mb-[1.2rem] text-dark font-heading">{{ post.title }}</h1>
          <div class="font-body text-xs text-dark/60">
            <span>Published on {{ formattedDate }}</span>
          </div>
        </header>

        <div class="w-full rounded-2xl border border-secondary/20 overflow-hidden mb-12 reveal-item-detail">
          <img :src="post.mediaUrl" :alt="post.title" class="w-full block" />
        </div>

        <div class="reveal-item-detail">
          <p class="text-lg leading-[1.8] text-dark mb-12">{{ post.description }}</p>
          
          <div class="h-[1px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent mb-12"></div>
          
          <h3 class="font-heading text-2xl text-dark mb-6">Visual Journal Gallery</h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div class="rounded-lg border border-secondary/20 overflow-hidden h-[180px]">
              <img src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=500&auto=format&fit=crop" alt="Pouring tea" class="w-full h-full object-cover" />
            </div>
            <div class="rounded-lg border border-secondary/20 overflow-hidden h-[180px]">
              <img src="https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?q=80&w=500&auto=format&fit=crop" alt="Tea tray detail" class="w-full h-full object-cover" />
            </div>
            <div class="rounded-lg border border-secondary/20 overflow-hidden h-[180px]">
              <img src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=500&auto=format&fit=crop" alt="Guzheng wood details" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </article>

      <!-- Video Post Layout -->
      <article v-else-if="post.type === 'video'">
        <header class="mb-12 reveal-item-detail text-center">
          <span class="font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary block mb-3">{{ post.type }}</span>
          <h1 class="text-3xl md:text-5xl leading-[1.25] mb-[1.2rem] text-dark font-heading">{{ post.title }}</h1>
          <div class="font-body text-xs text-dark/60">
            <span>Published on {{ formattedDate }}</span>
          </div>
        </header>

        <!-- Video Player Mock -->
        <div class="w-full mb-12 reveal-item-detail">
          <div class="w-full h-[300px] md:h-[480px] relative rounded-2xl border border-secondary/20 overflow-hidden bg-dark">
            <img :src="post.mediaUrl" :alt="post.title" class="w-full h-full object-cover opacity-75" />
            <div class="absolute inset-0 flex items-center justify-center">
              <button class="w-[70px] h-[70px] rounded-full border border-primary bg-primary/85 text-light flex items-center justify-center cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-110 hover:bg-secondary hover:text-dark hover:border-secondary" aria-label="Play video">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none" class="ml-1">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </button>
            </div>
            <!-- Glassmorphism player controls -->
            <div class="absolute bottom-4 left-[5%] w-[90%] px-[1.2rem] py-[0.8rem] flex items-center gap-[1.2rem] z-[2] rounded-[50px] glass-panel">
              <button class="bg-transparent border-none text-primary cursor-pointer flex items-center" aria-label="Play">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </button>
              <div class="flex-grow h-[3px] bg-dark/15 relative">
                <div class="absolute top-0 left-0 w-[30%] h-full bg-primary"></div>
              </div>
              <span class="font-body text-xs text-dark">0:00 / 2:45</span>
            </div>
          </div>
        </div>

        <div class="reveal-item-detail">
          <p class="text-base leading-[1.75] text-dark mb-8">{{ post.description }}</p>
          <div class="bg-primary/[0.03] border border-secondary/20 rounded-2xl p-6 font-body text-sm flex flex-col gap-2">
            <p><strong>Producer:</strong> Ruuts Production</p>
            <p><strong>Acoustics:</strong> Guzheng & Pipa recorded live</p>
          </div>
        </div>
      </article>

    </div>
  </div>
  
  <div v-else class="pt-[180px] text-center max-w-[1200px] mx-auto px-6 w-full section-padding">
    <h2 class="font-heading text-3xl text-dark mb-4">Post Not Found</h2>
    <p class="text-base text-dark mb-6">The requested journal entry could not be located.</p>
    <NuxtLink to="/insights" class="btn-primary mt-4 inline-block">Return to Journal</NuxtLink>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { insightsMockData } from '~/data/insights'
import { gsap } from 'gsap'

const route = useRoute()

const post = computed(() => {
  return insightsMockData.find(p => p.slug === route.params.slug)
})

const formattedDate = computed(() => {
  if (!post.value) return ''
  const date = new Date(post.value.publishedAt)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
})

useSeoMeta({
  title: computed(() => post.value ? `${post.value.title} - Ruuts Insights` : 'Insight Detail'),
  description: computed(() => post.value ? post.value.description : 'Journal entry')
})

onMounted(() => {
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
</script>
