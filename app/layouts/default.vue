<template>
  <div class="site-wrapper">
    <Navbar />
    
    <main class="main-content">
      <slot />
    </main>

    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <h2 class="footer-logo">RUUTS</h2>
          <p class="footer-tagline">Reconnecting with origin through Chinese tea ceremonies and premium group experiences.</p>
        </div>
        <div class="footer-links">
          <h3>Explore</h3>
          <ul>
            <li><NuxtLink to="/">About & Story</NuxtLink></li>
            <li><NuxtLink to="/experiences">Experiences</NuxtLink></li>
            <li><NuxtLink to="/insights">Insights</NuxtLink></li>
            <li><NuxtLink to="/#contact">Contact</NuxtLink></li>
          </ul>
        </div>
        <div class="footer-contact-summary">
          <h3>Inquiries</h3>
          <p>contact@theruuts.com</p>
          <p>+86 18217180655</p>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container footer-bottom-flex">
          <p>&copy; {{ new Date().getFullYear() }} Ruuts. All rights reserved.</p>
          <p class="footer-credit">Designed for Premium Experiences</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.site-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1 0 auto;
}

.site-footer {
  background-color: var(--brand-deep-jade);
  color: var(--bg-xuan-paper);
  padding: 4rem 0 2rem 0;
  border-top: 1px solid var(--accent-antique-gold);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.footer-logo {
  color: var(--accent-antique-gold);
  font-size: 2rem;
  letter-spacing: 0.15em;
  margin-bottom: 1rem;
}

.footer-tagline {
  font-size: 0.9rem;
  color: rgba(250, 246, 240, 0.75);
  max-width: 380px;
}

.footer-links h3,
.footer-contact-summary h3 {
  font-family: var(--font-body);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent-antique-gold);
  margin-bottom: 1.2rem;
}

.footer-links ul {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.6rem;
}

.footer-links a {
  font-size: 0.9rem;
  color: rgba(250, 246, 240, 0.75);
}

.footer-links a:hover {
  color: var(--accent-antique-gold);
  padding-left: 4px;
}

.footer-contact-summary p {
  font-size: 0.9rem;
  color: rgba(250, 246, 240, 0.75);
  margin-bottom: 0.5rem;
}

.footer-bottom {
  border-top: 1px solid rgba(197, 160, 89, 0.15);
  padding-top: 2rem;
}

.footer-bottom-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: rgba(250, 246, 240, 0.5);
}

@media (max-width: 480px) {
  .footer-bottom-flex {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>
