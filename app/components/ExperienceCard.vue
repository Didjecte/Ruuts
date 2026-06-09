<template>
  <div :class="['experience-card', { 'is-b2b': isB2b }]">
    <div class="card-image-wrapper">
      <img :src="experience.image" :alt="experience.title" class="card-image" />
      <span class="card-tag">{{ tag }}</span>
    </div>
    
    <div class="card-body">
      <div class="card-header">
        <span class="card-subtitle">{{ experience.subtitle }}</span>
        <h3 class="card-title">{{ experience.title }}</h3>
      </div>
      
      <p class="card-description">{{ experience.description }}</p>
      
      <!-- Specific B2C Details -->
      <div v-if="!isB2b" class="card-meta">
        <div class="meta-item">
          <span class="meta-label">Duration</span>
          <span class="meta-val">{{ experience.duration }}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Capacity</span>
          <span class="meta-val">Up to {{ experience.maxGuests }} guests</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Price / Guest</span>
          <span class="meta-val">¥{{ experience.pricePerGuest }}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Min Booking</span>
          <span class="meta-val">¥{{ experience.minBookingValue }}</span>
        </div>
      </div>

      <!-- Specific B2B Details -->
      <div v-else class="card-meta-b2b">
        <span class="b2b-focus-label">Strategic Focus</span>
        <span class="b2b-focus-val">{{ experience.focus }}</span>
      </div>

      <div class="card-divider"></div>
      
      <div class="card-bullets">
        <h4 class="bullets-title">Highlights</h4>
        <ul>
          <li v-for="(bullet, index) in bullets" :key="index">
            <svg class="bullet-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>{{ bullet }}</span>
          </li>
        </ul>
      </div>

      <div class="card-action">
        <NuxtLink to="/#contact" class="btn-card">Book Session</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  experience: {
    type: Object,
    required: true
  },
  isB2b: {
    type: Boolean,
    default: false
  }
})

const tag = computed(() => {
  return props.isB2b ? 'Corporate B2B' : props.experience.category
})

const bullets = computed(() => {
  return props.isB2b ? props.experience.highlights : props.experience.bullets
})
</script>

<style scoped>
.experience-card {
  display: flex;
  flex-direction: column;
  background-color: rgba(250, 246, 240, 0.6);
  border: 1px solid rgba(197, 160, 89, 0.15);
  transition: var(--transition-smooth);
  height: 100%;
}

.experience-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent-antique-gold);
  box-shadow: 0 15px 40px rgba(10, 60, 50, 0.06);
}

.card-image-wrapper {
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
}

.experience-card:hover .card-image {
  transform: scale(1.05);
}

.card-tag {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: var(--brand-deep-jade);
  color: var(--bg-xuan-paper);
  font-family: var(--font-body);
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.4rem 0.8rem;
  border: 1px solid rgba(197, 160, 89, 0.3);
}

.card-body {
  padding: 2.2rem 2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card-header {
  margin-bottom: 1.2rem;
}

.card-subtitle {
  font-family: var(--font-body);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--accent-antique-gold);
  display: block;
  margin-bottom: 0.4rem;
}

.card-title {
  font-size: 1.6rem;
  color: var(--brand-deep-jade);
}

.card-description {
  font-size: 0.88rem;
  line-height: 1.65;
  color: rgba(36, 30, 26, 0.8);
  margin-bottom: 1.8rem;
  flex-grow: 1;
}

/* B2C Meta Grid */
.card-meta {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
  margin-bottom: 1.5rem;
  background-color: rgba(10, 60, 50, 0.02);
  padding: 1rem;
  border: 1px solid rgba(197, 160, 89, 0.1);
}

.meta-item {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.meta-label {
  font-family: var(--font-body);
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgba(36, 30, 26, 0.5);
}

.meta-val {
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--brand-deep-jade);
}

/* B2B Meta */
.card-meta-b2b {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-bottom: 1.5rem;
  background-color: rgba(197, 160, 89, 0.05);
  padding: 1rem;
  border-left: 3px solid var(--accent-antique-gold);
}

.b2b-focus-label {
  font-family: var(--font-body);
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--accent-antique-gold);
}

.b2b-focus-val {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--brand-deep-jade);
}

.card-divider {
  height: 1px;
  background-color: rgba(197, 160, 89, 0.15);
  margin-bottom: 1.5rem;
}

/* Bullets */
.bullets-title {
  font-family: var(--font-body);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent-antique-gold);
  margin-bottom: 0.8rem;
}

.card-bullets ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.card-bullets li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.85rem;
  color: rgba(36, 30, 26, 0.85);
  line-height: 1.4;
}

.bullet-icon {
  width: 14px;
  height: 14px;
  color: var(--accent-antique-gold);
  margin-top: 2px;
  flex-shrink: 0;
}

/* Button action */
.btn-card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.8rem;
  border: 1px solid var(--brand-deep-jade);
  font-family: var(--font-body);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;
  transition: var(--transition-smooth);
}

.experience-card:hover .btn-card {
  background-color: var(--brand-deep-jade);
  color: var(--bg-xuan-paper);
}

.btn-card:hover {
  background-color: var(--accent-antique-gold) !important;
  border-color: var(--accent-antique-gold) !important;
  color: var(--brand-deep-jade) !important;
}
</style>
