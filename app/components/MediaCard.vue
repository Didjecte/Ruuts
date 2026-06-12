<template>
  <article class="group block cursor-pointer bg-white rounded-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(136,169,91,0.15)]">
    <NuxtLink :to="`/insights/${post.slug}`" class="block text-inherit">
      <div class="relative w-full overflow-hidden">
        <img :src="post.mediaUrl" :alt="post.title" class="w-full h-auto block transition-transform duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" />
        
        <!-- Hover overlay icon based on post type -->
        <div class="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div class="w-[45px] h-[45px] rounded-full bg-light/95 text-primary flex items-center justify-center transform scale-90 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-100 backdrop-blur-sm shadow-sm">
            <svg v-if="post.type === 'video'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <svg v-else-if="post.type === 'photo'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
              <circle cx="12" cy="13" r="4"></circle>
            </svg>
            <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
          </div>
        </div>
        
        <span class="absolute top-3 left-3 bg-light/95 text-primary font-body text-[0.6rem] font-semibold uppercase tracking-[0.1em] px-[0.6rem] py-[0.3rem] rounded-[50px] backdrop-blur-sm shadow-sm">{{ post.type }}</span>
      </div>
      
      <div class="p-[1.1rem]">
        <h3 class="font-body text-[0.95rem] font-medium leading-[1.5] text-dark group-hover:text-primary transition-colors duration-200 line-clamp-2">{{ post.title }}</h3>
      </div>
    </NuxtLink>
  </article>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})
</script>
