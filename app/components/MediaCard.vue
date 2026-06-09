<template>
  <article class="bg-xuan-paper border border-tea-gold/15 rounded-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.02] hover:border-tea-gold hover:shadow-[0_15px_35px_rgba(133,159,130,0.15)] group block">
    <NuxtLink :to="`/insights/${post.slug}`" class="block text-inherit">
      <div class="relative w-full h-[240px] overflow-hidden">
        <img :src="post.mediaUrl" :alt="post.title" class="w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" />
        
        <!-- Hover overlay icon based on post type -->
        <div class="absolute inset-0 bg-sage-green/40 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div class="w-[50px] h-[50px] rounded-full border border-tea-gold bg-sage-green text-xuan-paper flex items-center justify-center transform scale-90 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-100">
            <svg v-if="post.type === 'video'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <svg v-else-if="post.type === 'photo'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
              <circle cx="12" cy="13" r="4"></circle>
            </svg>
            <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
          </div>
        </div>
        
        <span class="absolute top-4 left-4 bg-xuan-paper/90 text-sage-green font-body text-[0.65rem] font-semibold uppercase tracking-[0.1em] px-[0.6rem] py-[0.3rem] rounded-[50px] border border-tea-gold/20">{{ post.type }}</span>
      </div>
      
      <div class="p-[1.8rem_1.5rem]">
        <div class="font-body text-[0.75rem] text-oolong/50 mb-[0.6rem]">
          <span>{{ formattedDate }}</span>
          <span v-if="post.readTime">&bull; {{ post.readTime }}</span>
        </div>
        <h3 class="font-heading text-[1.25rem] leading-[1.4] text-sage-green mb-3 transition-colors duration-200 line-clamp-2 group-hover:text-tea-gold">{{ post.title }}</h3>
        <p class="text-[0.85rem] leading-[1.6] text-oolong/75 mb-6 line-clamp-3">{{ post.description }}</p>
        
        <div class="font-body text-[0.75rem] uppercase tracking-[0.1em] font-semibold text-sage-green flex items-center">
          <span class="flex items-center gap-2">
            {{ actionText }}
            <svg class="w-[14px] h-[14px] transform translate-x-0 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

const formattedDate = computed(() => {
  const date = new Date(props.post.publishedAt)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
})

const actionText = computed(() => {
  switch (props.post.type) {
    case 'video':
      return 'Watch Video'
    case 'photo':
      return 'View Gallery'
    default:
      return 'Read Article'
  }
})
</script>
