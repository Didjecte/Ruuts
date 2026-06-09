<template>
  <article class="media-card">
    <NuxtLink :to="`/insights/${post.slug}`" class="card-link-wrapper">
      <div class="card-media-wrapper">
        <img :src="post.mediaUrl" :alt="post.title" class="card-img" />
        
        <!-- Hover overlay icon based on post type -->
        <div class="media-overlay">
          <div class="type-icon-wrapper">
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
        
        <span class="type-badge">{{ post.type }}</span>
      </div>
      
      <div class="card-content">
        <div class="card-meta">
          <span class="card-date">{{ formattedDate }}</span>
          <span v-if="post.readTime" class="card-read-time">&bull; {{ post.readTime }}</span>
        </div>
        <h3 class="card-title">{{ post.title }}</h3>
        <p class="card-desc">{{ post.description }}</p>
        
        <div class="card-action">
          <span class="action-text">
            {{ actionText }}
            <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
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

<style scoped>
.media-card {
  background-color: var(--bg-xuan-paper);
  border: 1px solid rgba(197, 160, 89, 0.15);
  transition: var(--transition-smooth);
}

.media-card:hover {
  border-color: var(--accent-antique-gold);
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(10, 60, 50, 0.05);
}

.card-link-wrapper {
  display: block;
  color: inherit;
}

.card-media-wrapper {
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

.media-card:hover .card-img {
  transform: scale(1.05);
}

.media-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 60, 50, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: var(--transition-fast);
}

.media-card:hover .media-overlay {
  opacity: 1;
}

.type-icon-wrapper {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid var(--accent-antique-gold);
  background-color: var(--brand-deep-jade);
  color: var(--bg-xuan-paper);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0.9);
  transition: var(--transition-smooth);
}

.media-card:hover .type-icon-wrapper {
  transform: scale(1);
}

.type-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: rgba(250, 246, 240, 0.9);
  color: var(--brand-deep-jade);
  font-family: var(--font-body);
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.3rem 0.6rem;
  border: 1px solid rgba(197, 160, 89, 0.2);
}

/* Content */
.card-content {
  padding: 1.8rem 1.5rem;
}

.card-meta {
  font-family: var(--font-body);
  font-size: 0.75rem;
  color: rgba(36, 30, 26, 0.5);
  margin-bottom: 0.6rem;
}

.card-title {
  font-size: 1.25rem;
  line-height: 1.4;
  color: var(--brand-deep-jade);
  margin-bottom: 0.8rem;
  transition: var(--transition-fast);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.media-card:hover .card-title {
  color: var(--accent-antique-gold);
}

.card-desc {
  font-size: 0.85rem;
  line-height: 1.6;
  color: rgba(36, 30, 26, 0.75);
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Action */
.card-action {
  font-family: var(--font-body);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  color: var(--brand-deep-jade);
  display: flex;
  align-items: center;
}

.action-text {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.arrow-icon {
  width: 14px;
  height: 14px;
  transform: translateX(0);
  transition: var(--transition-fast);
}

.media-card:hover .arrow-icon {
  transform: translateX(4px);
}
</style>
