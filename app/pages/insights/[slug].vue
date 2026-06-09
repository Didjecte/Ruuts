<template>
  <div v-if="post" class="bg-xuan-paper pt-[150px] section-padding">
    <div class="max-w-[900px] mx-auto">
      
      <!-- Back Link -->
      <div class="mb-10 reveal-item-detail">
        <NuxtLink to="/insights" class="font-body text-[0.8rem] font-medium uppercase tracking-[0.1em] text-sage-green inline-flex items-center gap-2 transition-colors duration-200 group hover:text-tea-gold">
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
          <span class="font-body text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-tea-gold block mb-3">{{ post.type }}</span>
          <h1 class="text-[2rem] md:text-[2.8rem] leading-[1.25] tracking-[-0.01em] mb-[1.2rem] text-sage-green font-heading">{{ post.title }}</h1>
          <div class="font-body text-[0.8rem] text-oolong/60 tracking-[0.05em]">
            <span>{{ formattedDate }}</span>
            <span v-if="post.readTime">&bull; {{ post.readTime }}</span>
          </div>
        </header>

        <div class="w-full h-[300px] md:h-[480px] mb-14 rounded-2xl border border-tea-gold overflow-hidden reveal-item-detail">
          <img :src="post.mediaUrl" :alt="post.title" class="w-full h-full object-cover" />
        </div>

        <div class="reveal-item-detail [&>p]:text-[1.05rem] [&>p]:leading-[1.85] [&>p]:text-oolong [&>p]:mb-[1.8rem] [&>h3]:text-[1.6rem] [&>h3]:mt-10 [&>h3]:mb-4 [&>h3]:text-sage-green [&>h3]:font-heading [&>ul]:ml-6 [&>ul]:mb-[1.8rem] [&>ol]:ml-6 [&>ol]:mb-[1.8rem] [&>ul>li]:text-[1rem] [&>ul>li]:leading-[1.7] [&>ul>li]:text-oolong [&>ul>li]:mb-2 [&>blockquote]:font-heading [&>blockquote]:text-[1.3rem] [&>blockquote]:italic [&>blockquote]:text-sage-green [&>blockquote]:border-l-[3px] [&>blockquote]:border-tea-gold [&>blockquote]:pl-6 [&>blockquote]:my-10" v-html="post.body"></div>
      </article>

      <!-- Photo Post Layout -->
      <article v-else-if="post.type === 'photo'">
        <header class="mb-12 reveal-item-detail text-center">
          <span class="font-body text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-tea-gold block mb-3">{{ post.type }}</span>
          <h1 class="text-[2rem] md:text-[2.8rem] leading-[1.25] tracking-[-0.01em] mb-[1.2rem] text-sage-green font-heading">{{ post.title }}</h1>
          <div class="font-body text-[0.8rem] text-oolong/60 tracking-[0.05em]">
            <span>Published on {{ formattedDate }}</span>
          </div>
        </header>

        <div class="w-full rounded-2xl border border-tea-gold overflow-hidden mb-12 reveal-item-detail">
          <img :src="post.mediaUrl" :alt="post.title" class="w-full block" />
        </div>

        <div class="reveal-item-detail">
          <p class="text-[1.1rem] leading-[1.8] text-oolong mb-12">{{ post.description }}</p>
          
          <div class="h-[1px] bg-gradient-to-r from-transparent via-tea-gold to-transparent mb-12"></div>
          
          <h3 class="font-heading text-[1.5rem] text-sage-green mb-6">Visual Journal Gallery</h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div class="rounded-lg border border-tea-gold/20 overflow-hidden h-[180px]">
              <img src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=500&auto=format&fit=crop" alt="Pouring tea" class="w-full h-full object-cover" />
            </div>
            <div class="rounded-lg border border-tea-gold/20 overflow-hidden h-[180px]">
              <img src="https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?q=80&w=500&auto=format&fit=crop" alt="Tea tray detail" class="w-full h-full object-cover" />
            </div>
            <div class="rounded-lg border border-tea-gold/20 overflow-hidden h-[180px]">
              <img src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=500&auto=format&fit=crop" alt="Guzheng wood details" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </article>

      <!-- Video Post Layout -->
      <article v-else-if="post.type === 'video'">
        <header class="mb-12 reveal-item-detail text-center">
          <span class="font-body text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-tea-gold block mb-3">{{ post.type }}</span>
          <h1 class="text-[2rem] md:text-[2.8rem] leading-[1.25] tracking-[-0.01em] mb-[1.2rem] text-sage-green font-heading">{{ post.title }}</h1>
          <div class="font-body text-[0.8rem] text-oolong/60 tracking-[0.05em]">
            <span>Published on {{ formattedDate }}</span>
          </div>
        </header>

        <!-- Video Player Mock -->
        <div class="w-full mb-12 reveal-item-detail">
          <div class="w-full h-[300px] md:h-[480px] relative rounded-2xl border border-tea-gold overflow-hidden bg-oolong">
            <img :src="post.mediaUrl" :alt="post.title" class="w-full h-full object-cover opacity-75" />
            <div class="absolute inset-0 flex items-center justify-center">
              <button class="w-[70px] h-[70px] rounded-full border border-tea-gold bg-sage-green/85 text-xuan-paper flex items-center justify-center cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-110 hover:bg-sage-green" aria-label="Play video">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none" class="ml-1">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </button>
            </div>
            <!-- Glassmorphism player controls -->
            <div class="absolute bottom-4 left-[5%] w-[90%] px-[1.2rem] py-[0.8rem] flex items-center gap-[1.2rem] z-[2] rounded-[50px] glass-panel">
              <button class="bg-transparent border-none text-sage-green cursor-pointer flex items-center" aria-label="Play">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </button>
              <div class="flex-grow h-[3px] bg-sage-green/15 relative">
                <div class="absolute top-0 left-0 w-[30%] h-full bg-sage-green"></div>
              </div>
              <span class="font-body text-[0.7rem] text-oolong">0:00 / 2:45</span>
            </div>
          </div>
        </div>

        <div class="reveal-item-detail">
          <p class="text-[1.05rem] leading-[1.75] text-oolong mb-8">{{ post.description }}</p>
          <div class="bg-sage-green/[0.03] border border-tea-gold/15 rounded-2xl p-6 font-body text-[0.85rem] flex flex-col gap-2">
            <p><strong>Producer:</strong> Ruuts Production</p>
            <p><strong>Acoustics:</strong> Guzheng & Pipa recorded live</p>
          </div>
        </div>
      </article>

    </div>
  </div>
  
  <div v-else class="pt-[180px] text-center max-w-[1200px] mx-auto px-6 w-full section-padding">
    <h2 class="font-heading text-[2rem] text-sage-green mb-4">Post Not Found</h2>
    <p class="text-[1rem] text-oolong mb-6">The requested journal entry could not be located.</p>
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
