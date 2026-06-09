<template>
  <div class="insights-page section-padding">
    <div class="container page-header reveal-item">
      <span class="page-tag">Journal</span>
      <h1 class="page-title">Insights & Media</h1>
      <p class="page-description">Deep dives into tea ceremonies, photographic journals of mountain harvests, and auditory experiences of traditional instruments.</p>
      
      <!-- Top filter navbar -->
      <nav class="filter-navbar">
        <button 
          v-for="filter in filterOptions" 
          :key="filter.value"
          :class="['filter-btn', { 'is-active': activeFilter === filter.value }]"
          @click="setFilter(filter.value)"
        >
          {{ filter.label }}
        </button>
      </nav>
    </div>

    <!-- Insights Grid -->
    <div class="container grid-container">
      <div class="insights-grid">
        <div 
          v-for="post in filteredPosts" 
          :key="post.id"
          class="insight-item-animate"
        >
          <MediaCard :post="post" />
        </div>
      </div>
      
      <div v-if="filteredPosts.length === 0" class="empty-state text-center">
        <p>No posts found matching the selected filter.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import { insightsMockData } from '~/data/insights'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

useSeoMeta({
  title: 'Ruuts - Tea Culture Insights & Media Journal',
  description: 'Read articles about tea ceremonies, watch Guzheng sessions, and view photo diaries of Zhejiang tea harvests in our media repository.'
})

const activeFilter = ref('all')

const filterOptions = [
  { label: 'All', value: 'all' },
  { label: 'Articles', value: 'article' },
  { label: 'Photo', value: 'photo' },
  { label: 'Video', value: 'video' }
]

const filteredPosts = computed(() => {
  if (activeFilter.value === 'all') {
    return insightsMockData
  }
  return insightsMockData.filter(post => post.type === activeFilter.value)
})

const setFilter = (filter) => {
  if (activeFilter.value === filter) return
  activeFilter.value = filter
  
  // Stagger reveal on filter switch
  nextTick(() => {
    gsap.fromTo('.insight-item-animate',
      { y: 20, opacity: 0 },
      { duration: 0.4, y: 0, opacity: 1, stagger: 0.08, ease: 'power3.out' }
    )
  })
}

onMounted(() => {
  // Page header entry animation
  gsap.from('.page-header > *', {
    duration: 0.8,
    y: 20,
    opacity: 0,
    stagger: 0.1,
    ease: 'power3.out'
  })

  // Grid entry animation
  gsap.from('.insight-item-animate', {
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.08,
    ease: 'power3.out',
    delay: 0.3
  })
})
</script>

<style scoped>
.insights-page {
  background-color: var(--bg-xuan-paper);
  padding-top: 150px;
}

.page-tag {
  font-family: var(--font-body);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--accent-antique-gold);
  display: block;
  margin-bottom: 0.5rem;
}

.page-title {
  font-size: 3rem;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
}

.page-description {
  font-size: 1.05rem;
  color: rgba(36, 30, 26, 0.8);
  max-width: 600px;
  line-height: 1.8;
  margin-bottom: 3rem;
}

/* Top Filter Navbar */
.filter-navbar {
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid rgba(197, 160, 89, 0.2);
  padding-bottom: 1rem;
  width: 100%;
}

@media (max-width: 480px) {
  .filter-navbar {
    overflow-x: auto;
    padding-bottom: 0.6rem;
    gap: 0.5rem;
  }
}

.filter-btn {
  background: none;
  border: none;
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(36, 30, 26, 0.6);
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  transition: var(--transition-fast);
  position: relative;
  flex-shrink: 0;
}

.filter-btn:hover {
  color: var(--brand-deep-jade);
}

.filter-btn.is-active {
  color: var(--brand-deep-jade);
  font-weight: 600;
}

.filter-btn.is-active::after {
  content: '';
  position: absolute;
  bottom: -1rem;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--brand-deep-jade);
}

@media (max-width: 480px) {
  .filter-btn.is-active::after {
    bottom: -0.6rem;
  }
}

/* Grid layout */
.grid-container {
  margin-top: 3.5rem;
  margin-bottom: 6rem;
}

.insights-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.2rem;
}

@media (max-width: 992px) {
  .insights-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 650px) {
  .insights-grid {
    grid-template-columns: 1fr;
  }
}

.empty-state {
  padding: 4rem 0;
  color: rgba(36, 30, 26, 0.5);
  font-size: 0.95rem;
}

.text-center {
  text-align: center;
}
</style>
