<template>
  <section id="about" class="about-section">
    <!-- Our Story -->
    <div class="story-container container section-padding">
      <div class="story-content reveal-item">
        <span class="section-tag">Origin</span>
        <h2 class="section-title">Our Story</h2>
        <div class="story-text">
          <p class="lead">RUUTS was born from a simple wish: to reconnect with ones' roots.</p>
          <p>Through exploring the world of Chinese tea, our Franco-Chinese founder rediscovered the true meaning of roots. Invisible yet essential, roots are what all beings share. They hold our stories, our strength, our sense of belonging. The deeper we understand them, the more grounded we become. RUUTS is a journey back to the origin.</p>
          <p>From Guangdong to Yunnan, from Fujian to Anhui, from Zhejiang to Jiangsu, Chinese tea culture shifts from one province to another, from one village to the next — yet everywhere, the same spirit endures: passion, patience, and the quiet belief that mastery is born of time and dedication.</p>
        </div>
      </div>
      <div class="story-image-wrapper reveal-item">
        <img 
          src="https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=1000&auto=format&fit=crop" 
          alt="Terraced tea fields in China" 
          class="story-image"
        />
        <div class="image-frame-decor"></div>
      </div>
    </div>

    <!-- Founder -->
    <div class="founder-bg-wrapper">
      <div class="founder-container container section-padding">
        <div class="founder-image-wrapper reveal-item">
          <img 
            src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1000&auto=format&fit=crop" 
            alt="Ophélie Hu - Founder of RUUTS" 
            class="founder-image"
          />
          <div class="image-frame-decor-left"></div>
        </div>
        <div class="founder-content reveal-item">
          <span class="section-tag">Craftmanship</span>
          <h2 class="section-title">The Founder</h2>
          <div class="founder-text">
            <p class="lead">Ophélie Hu</p>
            <p>Franco-Chinese and driven by her curiosity for China and her own roots, Ophélie earned a Master’s degree in Supply Chain Management from a French business school before moving to Shanghai in 2018. She began her professional journey in supply chain project management, procurement, and business development — yet her heart was quietly drawn to tea.</p>
            <p>By 2021, she began splitting her time between the bustling city and China’s tea-growing regions, learning from master artisans and uncovering the rituals, aromas, and stories behind every leaf. In 2022, she created <em>Chabutu 茶不土</em>, a WeChat page devoted to sharing these discoveries with a wider audience. Her journey of mastery continued in 2024, when she earned her first Chinese tea tasting certification in Hangzhou.</p>
            <p>Today, Ophélie blends her cross-cultural expertise with her creative spirit to craft tea experiences that go beyond delighting the senses — experiences that tell stories, connect people, and transform corporate events into genuine cultural journeys.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Our Mission -->
    <div class="mission-container container section-padding">
      <div class="mission-header reveal-item text-center">
        <span class="section-tag">Purpose</span>
        <h2 class="section-title">Our Mission</h2>
      </div>
      
      <div class="mission-grid">
        <div class="mission-card reveal-item">
          <div class="mission-num">01</div>
          <h3>Create Community</h3>
          <p>Where we can exchange, share, and explore the world of tea through a fun and thoughtful perspective.</p>
        </div>
        <div class="mission-card reveal-item">
          <div class="mission-num">02</div>
          <h3>Intercultural Connections</h3>
          <p>Celebrating the fusion of Eastern and Western heritage to unlock a unique dimension of Chinese culture.</p>
        </div>
        <div class="mission-card reveal-item">
          <div class="mission-num">03</div>
          <h3>Collect Emotions</h3>
          <p>Gathering laughter, presence, and crafting unforgettable moments with our community.</p>
        </div>
        <div class="mission-card reveal-item">
          <div class="mission-num">04</div>
          <h3>Connect with Farmers</h3>
          <p>Bridging the gap between guests and the tea farmers, honoring the soil and land they cultivate.</p>
        </div>
      </div>

      <!-- Quote Callout -->
      <div class="quote-callout reveal-item">
        <p class="quote-text">"Taking one’s time is the best way for not wasting it."</p>
        <p class="quote-author">&mdash; Nicolas Bouvier</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background-color: var(--bg-xuan-paper);
}

.section-tag {
  font-family: var(--font-body);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--accent-antique-gold);
  display: block;
  margin-bottom: 0.5rem;
}

.section-title {
  font-size: 2.5rem;
  letter-spacing: 0.05em;
  margin-bottom: 2rem;
  position: relative;
}

.lead {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  line-height: 1.5;
  color: var(--accent-antique-gold);
  margin-bottom: 1.5rem;
}

.text-center {
  text-align: center;
}

/* Our Story Grid */
.story-container {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: center;
}

.story-text p {
  margin-bottom: 1rem;
}

.story-image-wrapper {
  position: relative;
  width: 100%;
}

.story-image {
  width: 100%;
  height: 480px;
  object-fit: cover;
  border: 1px solid var(--accent-antique-gold);
  z-index: 2;
  position: relative;
}

.image-frame-decor {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  width: 100%;
  height: 100%;
  border: 1px solid var(--brand-deep-jade);
  z-index: 1;
}

@media (max-width: 992px) {
  .story-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .story-image {
    height: 350px;
  }
}

/* Founder Styling */
.founder-bg-wrapper {
  background-color: rgba(10, 60, 50, 0.03);
  border-top: 1px solid rgba(197, 160, 89, 0.1);
  border-bottom: 1px solid rgba(197, 160, 89, 0.1);
}

.founder-container {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: center;
}

.founder-text p {
  margin-bottom: 1rem;
}

.founder-image-wrapper {
  position: relative;
  width: 100%;
}

.founder-image {
  width: 100%;
  height: 480px;
  object-fit: cover;
  border: 1px solid var(--accent-antique-gold);
  z-index: 2;
  position: relative;
}

.image-frame-decor-left {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 100%;
  height: 100%;
  border: 1px solid var(--brand-deep-jade);
  z-index: 1;
}

@media (max-width: 992px) {
  .founder-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .founder-container .founder-image-wrapper {
    order: 2;
  }
  
  .founder-image {
    height: 350px;
  }
}

/* Mission Styling */
.mission-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 3rem;
}

@media (max-width: 992px) {
  .mission-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .mission-grid {
    grid-template-columns: 1fr;
  }
}

.mission-card {
  background-color: rgba(250, 246, 240, 0.8);
  border: 1px solid rgba(197, 160, 89, 0.15);
  padding: 2.5rem 1.8rem;
  transition: var(--transition-smooth);
}

.mission-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent-antique-gold);
  box-shadow: 0 10px 30px rgba(10, 60, 50, 0.05);
}

.mission-num {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  color: var(--accent-antique-gold);
  font-weight: 300;
  margin-bottom: 1rem;
}

.mission-card h3 {
  font-family: var(--font-body);
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--brand-deep-jade);
  margin-bottom: 0.8rem;
}

.mission-card p {
  font-size: 0.85rem;
  color: rgba(36, 30, 26, 0.85);
}

/* Quote Callout */
.quote-callout {
  max-width: 700px;
  margin: 5rem auto 0 auto;
  text-align: center;
  position: relative;
  padding: 2.5rem 2rem;
}

.quote-callout::before {
  content: '“';
  font-family: var(--font-heading);
  font-size: 6rem;
  color: rgba(197, 160, 89, 0.15);
  position: absolute;
  top: -2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.quote-text {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-style: italic;
  color: var(--brand-deep-jade);
  z-index: 2;
  position: relative;
  margin-bottom: 1rem;
}

.quote-author {
  font-family: var(--font-body);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent-antique-gold);
}
</style>
