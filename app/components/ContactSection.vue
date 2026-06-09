<template>
  <section id="contact" class="contact-section">
    <div class="container contact-grid section-padding">
      <!-- Contact details & QR Codes (2nd part of the page) -->
      <div class="contact-info reveal-item">
        <span class="section-tag">Connect</span>
        <h2 class="section-title">Get In Touch</h2>
        <p class="contact-intro">We host private sessions for individual tea enthusiasts and corporate events. Contact us to learn more about partner rates and custom bookings.</p>
        
        <div class="contact-details-list">
          <div class="contact-item">
            <span class="contact-label">Host</span>
            <span class="contact-value">Mrs. OPHELIE HU</span>
          </div>
          <div class="contact-item">
            <span class="contact-label">Email</span>
            <a href="mailto:contact@theruuts.com" class="contact-value highlight-link">contact@theruuts.com</a>
          </div>
          <div class="contact-item">
            <span class="contact-label">Phone</span>
            <a href="tel:+8618217180655" class="contact-value highlight-link">+86 18217180655</a>
          </div>
        </div>

        <div class="qr-codes-container">
          <div class="qr-box">
            <div class="qr-placeholder">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M3 9V3h6v6H3zm0 12v-6h6v6H3zm12 0v-6h6v6h-6zm0-12V3h6v6h-6zm-4 4h2v2h-2v-2zm0 4h2v2h-2v-2zm-4-8h2v2H7V5zm0 12h2v2H7v-2zm8-12h2v2h-2V5zm0 8h2v2h-2v-2z" />
              </svg>
              <span class="qr-text">Scan QR</span>
            </div>
            <div class="qr-meta">
              <span class="qr-platform">WeChat Official</span>
              <span class="qr-handle">RUUTS 丝络嘉木</span>
            </div>
          </div>
          <div class="qr-box">
            <div class="qr-placeholder">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              <span class="qr-text">Scan QR</span>
            </div>
            <div class="qr-meta">
              <span class="qr-platform">Rednote (小红书)</span>
              <span class="qr-handle">Feifei ou thé</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="contact-form-wrapper reveal-item">
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <label for="name">Your Name</label>
            <input type="text" id="name" v-model="form.name" required placeholder="E.g., Julianne Mercier" />
          </div>
          
          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" v-model="form.email" required placeholder="E.g., name@domain.com" />
          </div>

          <div class="form-group">
            <label for="type">Inquiry Type</label>
            <select id="type" v-model="form.type" required>
              <option value="" disabled selected>Select an option...</option>
              <option value="b2c">B2C / Private Group Session</option>
              <option value="b2b">B2B / Corporate Event</option>
              <option value="general">General Inquiry</option>
            </select>
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="form.message" rows="5" required placeholder="Tell us about your event, preferred date, and number of guests..."></textarea>
          </div>

          <button type="submit" class="btn-primary form-submit-btn">
            Send Inquiry
          </button>
          
          <p v-if="submitted" class="success-message">Thank you for your message. Ophélie will get in touch with you shortly.</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  type: '',
  message: ''
})

const submitted = ref(false)

const handleSubmit = () => {
  // Mock form submission
  console.log('Form data:', form)
  submitted.value = true
  
  // Reset fields
  form.name = ''
  form.email = ''
  form.type = ''
  form.message = ''
  
  setTimeout(() => {
    submitted.value = false
  }, 5000)
}
</script>

<style scoped>
.contact-section {
  background-color: var(--bg-xuan-paper);
  border-top: 1px solid rgba(197, 160, 89, 0.15);
  position: relative;
  overflow: hidden;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 5rem;
  align-items: start;
}

@media (max-width: 992px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
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
  margin-bottom: 1.5rem;
}

.contact-intro {
  font-size: 0.95rem;
  color: rgba(36, 30, 26, 0.85);
  line-height: 1.8;
  margin-bottom: 2.5rem;
}

/* Info Details */
.contact-details-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.contact-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  border-bottom: 1px solid rgba(197, 160, 89, 0.15);
  padding-bottom: 1rem;
}

.contact-label {
  font-family: var(--font-body);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent-antique-gold);
}

.contact-value {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  color: var(--brand-deep-jade);
}

.highlight-link {
  transition: var(--transition-fast);
  display: inline-block;
  width: fit-content;
}

.highlight-link:hover {
  color: var(--accent-antique-gold);
}

/* QR Code containers */
.qr-codes-container {
  display: flex;
  gap: 2rem;
}

@media (max-width: 768px) {
  .qr-codes-container {
    flex-direction: column;
    gap: 1.5rem;
  }
}

.qr-box {
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: rgba(10, 60, 50, 0.02);
  border: 1px dashed var(--accent-antique-gold);
  padding: 1rem;
  width: 100%;
}

.qr-placeholder {
  width: 80px;
  height: 80px;
  background-color: var(--bg-xuan-paper);
  border: 1px solid rgba(197, 160, 89, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--accent-antique-gold);
  flex-shrink: 0;
}

.qr-text {
  font-size: 0.55rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 4px;
}

.qr-meta {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.qr-platform {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--brand-deep-jade);
}

.qr-handle {
  font-size: 0.75rem;
  color: rgba(36, 30, 26, 0.6);
}

/* Form Styles */
.contact-form-wrapper {
  background-color: rgba(10, 60, 50, 0.02);
  border: 1px solid rgba(197, 160, 89, 0.15);
  padding: 3rem;
}

@media (max-width: 576px) {
  .contact-form-wrapper {
    padding: 1.5rem;
  }
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--brand-deep-jade);
}

.form-group input,
.form-group select,
.form-group textarea {
  font-family: var(--font-body);
  font-size: 0.9rem;
  padding: 0.8rem 1rem;
  background-color: var(--bg-xuan-paper);
  border: 1px solid rgba(10, 60, 50, 0.15);
  color: var(--text-oolong);
  border-radius: 0;
  transition: var(--transition-fast);
  width: 100%;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--brand-deep-jade);
  box-shadow: 0 0 0 1px rgba(10, 60, 50, 0.1);
}

.form-submit-btn {
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
}

.success-message {
  font-size: 0.85rem;
  color: var(--brand-deep-jade);
  font-weight: 500;
  text-align: center;
  background-color: rgba(10, 60, 50, 0.05);
  padding: 0.8rem;
  border-left: 3px solid var(--accent-antique-gold);
}
</style>
