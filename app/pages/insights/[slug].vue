<template>
  <div v-if="post" class="insight-detail-page section-padding">
    <div class="container detail-container">
      
      <!-- Back Link -->
      <div class="back-link-wrapper reveal-item-detail">
        <NuxtLink to="/insights" class="back-link">
          <svg class="back-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Insights
        </NuxtLink>
      </div>

      <!-- Article Post Layout -->
      <article v-if="post.type === 'article'" class="article-detail">
        <header class="detail-header reveal-item-detail">
          <span class="detail-type-badge">{{ post.type }}</span>
          <h1 class="detail-title">{{ post.title }}</h1>
          <div class="detail-meta">
            <span>{{ formattedDate }}</span>
            <span v-if="post.readTime">&bull; {{ post.readTime }}</span>
          </div>
        </header>

        <div class="detail-banner-wrapper reveal-item-detail">
          <img :src="post.mediaUrl" :alt="post.title" class="detail-banner" />
        </div>

        <div class="article-body-content reveal-item-detail" v-html="post.body"></div>
      </article>

      <!-- Photo Post Layout -->
      <article v-else-if="post.type === 'photo'" class="photo-detail">
        <header class="detail-header reveal-item-detail text-center">
          <span class="detail-type-badge">{{ post.type }}</span>
          <h1 class="detail-title">{{ post.title }}</h1>
          <div class="detail-meta">
            <span>Published on {{ formattedDate }}</span>
          </div>
        </header>

        <div class="photo-hero-wrapper reveal-item-detail">
          <img :src="post.mediaUrl" :alt="post.title" class="photo-hero" />
        </div>

        <div class="photo-body reveal-item-detail">
          <p class="photo-description">{{ post.description }}</p>
          
          <div class="photo-decor-divider"></div>
          
          <h3 class="gallery-title">Visual Journal Gallery</h3>
          <div class="photo-gallery-grid">
            <div class="gallery-img-box">
              <img src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=500&auto=format&fit=crop" alt="Pouring tea" />
            </div>
            <div class="gallery-img-box">
              <img src="https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?q=80&w=500&auto=format&fit=crop" alt="Tea tray detail" />
            </div>
            <div class="gallery-img-box">
              <img src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=500&auto=format&fit=crop" alt="Guzheng wood details" />
            </div>
          </div>
        </div>
      </article>

      <!-- Video Post Layout -->
      <article v-else-if="post.type === 'video'" class="video-detail">
        <header class="detail-header reveal-item-detail text-center">
          <span class="detail-type-badge">{{ post.type }}</span>
          <h1 class="detail-title">{{ post.title }}</h1>
          <div class="detail-meta">
            <span>Published on {{ formattedDate }}</span>
          </div>
        </header>

        <!-- Video Player Mock -->
        <div class="video-player-wrapper reveal-item-detail">
          <div class="video-poster-container">
            <img :src="post.mediaUrl" :alt="post.title" class="video-poster" />
            <div class="video-overlay-play">
              <button class="video-play-btn" aria-label="Play video">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </button>
            </div>
            <!-- Glassmorphism player controls -->
            <div class="video-controls-panel glass-panel">
              <button class="play-small" aria-label="Play">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </button>
              <div class="progress-bar">
                <div class="progress-fill"></div>
              </div>
              <span class="video-time">0:00 / 2:45</span>
            </div>
          </div>
        </div>

        <div class="video-body reveal-item-detail">
          <p class="video-description">{{ post.description }}</p>
          <div class="video-credits">
            <p><strong>Producer:</strong> Ruuts Production</p>
            <p><strong>Acoustics:</strong> Guzheng & Pipa recorded live</p>
          </div>
        </div>
      </article>

    </div>
  </div>
  
  <div v-else class="not-found-container container section-padding text-center">
    <h2>Post Not Found</h2>
    <p>The requested journal entry could not be located.</p>
    <NuxtLink to="/insights" class="btn-primary mt-4">Return to Journal</NuxtLink>
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

<style scoped>
.insight-detail-page {
  background-color: var(--bg-xuan-paper);
  padding-top: 150px;
}

.detail-container {
  max-width: 900px;
  margin: 0 auto;
}

/* Back Link */
.back-link-wrapper {
  margin-bottom: 2.5rem;
}

.back-link {
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--brand-deep-jade);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: var(--transition-fast);
}

.back-link:hover {
  color: var(--accent-antique-gold);
}

.back-arrow {
  width: 16px;
  height: 16px;
  transform: translateX(0);
  transition: var(--transition-fast);
}

.back-link:hover .back-arrow {
  transform: translateX(-4px);
}

/* Headers */
.detail-header {
  margin-bottom: 3rem;
}

.detail-type-badge {
  font-family: var(--font-body);
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: var(--accent-antique-gold);
  display: block;
  margin-bottom: 0.8rem;
}

.detail-title {
  font-size: 2.8rem;
  line-height: 1.25;
  letter-spacing: -0.01em;
  margin-bottom: 1.2rem;
  color: var(--brand-deep-jade);
}

@media (max-width: 768px) {
  .detail-title {
    font-size: 2rem;
  }
}

.detail-meta {
  font-family: var(--font-body);
  font-size: 0.8rem;
  color: rgba(36, 30, 26, 0.6);
  letter-spacing: 0.05em;
}

/* Banner image */
.detail-banner-wrapper {
  width: 100%;
  height: 480px;
  margin-bottom: 3.5rem;
  border: 1px solid var(--accent-antique-gold);
}

@media (max-width: 768px) {
  .detail-banner-wrapper {
    height: 300px;
  }
}

.detail-banner {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Article Body Content */
.article-body-content :deep(p) {
  font-size: 1.05rem;
  line-height: 1.85;
  color: var(--text-oolong);
  margin-bottom: 1.8rem;
}

.article-body-content :deep(h3) {
  font-size: 1.6rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  color: var(--brand-deep-jade);
}

.article-body-content :deep(ul),
.article-body-content :deep(ol) {
  margin-left: 1.5rem;
  margin-bottom: 1.8rem;
}

.article-body-content :deep(li) {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-oolong);
  margin-bottom: 0.6rem;
}

.article-body-content :deep(blockquote) {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  font-style: italic;
  color: var(--brand-deep-jade);
  border-left: 2px solid var(--accent-antique-gold);
  padding-left: 1.5rem;
  margin: 2.5rem 0;
}

/* Photo Detail specific */
.photo-hero-wrapper {
  width: 100%;
  border: 1px solid var(--accent-antique-gold);
  margin-bottom: 3rem;
}

.photo-hero {
  width: 100%;
  display: block;
}

.photo-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-oolong);
  margin-bottom: 3rem;
}

.photo-decor-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent-antique-gold), transparent);
  margin-bottom: 3rem;
}

.gallery-title {
  font-size: 1.5rem;
  color: var(--brand-deep-jade);
  margin-bottom: 1.5rem;
}

.photo-gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

@media (max-width: 600px) {
  .photo-gallery-grid {
    grid-template-columns: 1fr;
  }
}

.gallery-img-box {
  border: 1px solid rgba(197, 160, 89, 0.2);
  height: 180px;
}

.gallery-img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Video Detail specific */
.video-player-wrapper {
  width: 100%;
  margin-bottom: 3rem;
}

.video-poster-container {
  width: 100%;
  height: 480px;
  position: relative;
  border: 1px solid var(--accent-antique-gold);
  overflow: hidden;
  background-color: var(--text-oolong);
}

@media (max-width: 768px) {
  .video-poster-container {
    height: 300px;
  }
}

.video-poster {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.75;
}

.video-overlay-play {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-play-btn {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 1px solid var(--accent-antique-gold);
  background-color: rgba(10, 60, 50, 0.85);
  color: var(--bg-xuan-paper);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition-smooth);
}

.video-play-btn svg {
  margin-left: 4px;
}

.video-play-btn:hover {
  transform: scale(1.1);
  background-color: var(--brand-deep-jade);
  color: var(--accent-antique-gold);
}

.video-controls-panel {
  position: absolute;
  bottom: 1rem;
  left: 5%;
  width: 90%;
  padding: 0.8rem 1.2rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  z-index: 2;
  border-radius: 0;
}

.play-small {
  background: none;
  border: none;
  color: var(--brand-deep-jade);
  cursor: pointer;
  display: flex;
  align-items: center;
}

.progress-bar {
  flex-grow: 1;
  height: 3px;
  background-color: rgba(10, 60, 50, 0.15);
  position: relative;
}

.progress-fill {
  position: absolute;
  top: 0;
  left: 0;
  width: 30%;
  height: 100%;
  background-color: var(--brand-deep-jade);
}

.video-time {
  font-family: var(--font-body);
  font-size: 0.7rem;
  color: var(--text-oolong);
}

.video-description {
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--text-oolong);
  margin-bottom: 2rem;
}

.video-credits {
  background-color: rgba(10, 60, 50, 0.02);
  border: 1px solid rgba(197, 160, 89, 0.15);
  padding: 1.5rem;
  font-family: var(--font-body);
  font-size: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* Not found */
.not-found-container {
  padding-top: 180px;
}

.mt-4 {
  margin-top: 2rem;
}

.text-center {
  text-align: center;
}
</style>
