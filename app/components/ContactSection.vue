<template>
  <section id="contact" class="bg-light border-t border-secondary/20 relative overflow-hidden">
    <div class="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start max-w-[1200px] mx-auto px-6 w-full section-padding">
      <!-- Contact details & QR Codes (2nd part of the page) -->
      <div class="reveal-item">
        <span class="font-body text-[0.75rem] uppercase tracking-[0.2em] text-secondary block mb-2">Connect</span>
        <h2 class="font-heading text-[2.5rem] font-semibold text-dark tracking-[0.05em] mb-6">Get In Touch</h2>
        <p class="text-[0.95rem] text-dark/85 leading-[1.8] mb-10">We host private sessions for individual tea enthusiasts and corporate events. Contact us to learn more about partner rates and custom bookings.</p>
        
        <div class="flex flex-col gap-6 mb-12">
          <div class="flex flex-col gap-1 border-b border-secondary/20 pb-4">
            <span class="font-body text-[0.75rem] uppercase tracking-[0.1em] text-secondary">Host</span>
            <span class="font-heading text-[1.2rem] text-dark">Mrs. OPHELIE HU</span>
          </div>
          <div class="flex flex-col gap-1 border-b border-secondary/20 pb-4">
            <span class="font-body text-[0.75rem] uppercase tracking-[0.1em] text-secondary">Email</span>
            <a href="mailto:contact@theruuts.com" class="font-heading text-[1.2rem] text-dark transition-colors duration-200 inline-block w-fit hover:text-primary">contact@theruuts.com</a>
          </div>
          <div class="flex flex-col gap-1 border-b border-secondary/20 pb-4">
            <span class="font-body text-[0.75rem] uppercase tracking-[0.1em] text-secondary">Phone</span>
            <a href="tel:+8618217180655" class="font-heading text-[1.2rem] text-dark transition-colors duration-200 inline-block w-fit hover:text-primary">+86 18217180655</a>
          </div>
        </div>

        <div class="flex flex-col md:flex-row gap-6 md:gap-8">
          <div class="flex items-center gap-4 bg-primary/[0.03] border border-dashed border-secondary/30 rounded-2xl p-4 w-full">
            <div class="w-[80px] h-[80px] bg-light border border-secondary/20 rounded-lg flex flex-col items-center justify-center text-secondary shrink-0">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M3 9V3h6v6H3zm0 12v-6h6v6H3zm12 0v-6h6v6h-6zm0-12V3h6v6h-6zm-4 4h2v2h-2v-2zm0 4h2v2h-2v-2zm-4-8h2v2H7V5zm0 12h2v2H7v-2zm8-12h2v2h-2V5zm0 8h2v2h-2v-2z" />
              </svg>
              <span class="text-[0.55rem] uppercase tracking-[0.05em] mt-1">Scan QR</span>
            </div>
            <div class="flex flex-col gap-1">
              <span class="font-body text-[0.75rem] font-medium text-dark">WeChat Official</span>
              <span class="text-[0.75rem] text-dark/60">RUUTS 丝络嘉木</span>
            </div>
          </div>
          <div class="flex items-center gap-4 bg-primary/[0.03] border border-dashed border-secondary/30 rounded-2xl p-4 w-full">
            <div class="w-[80px] h-[80px] bg-light border border-secondary/20 rounded-lg flex flex-col items-center justify-center text-secondary shrink-0">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              <span class="text-[0.55rem] uppercase tracking-[0.05em] mt-1">Scan QR</span>
            </div>
            <div class="flex flex-col gap-1">
              <span class="font-body text-[0.75rem] font-medium text-dark">Rednote (小红书)</span>
              <span class="text-[0.75rem] text-dark/60">Feifei ou thé</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="bg-primary/[0.03] border border-secondary/20 rounded-2xl p-6 sm:p-12 reveal-item">
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-7">
          <div class="flex flex-col gap-2">
            <label for="name" class="font-body text-[0.8rem] font-medium uppercase tracking-[0.05em] text-dark">Your Name</label>
            <input type="text" id="name" v-model="form.name" required placeholder="E.g., Julianne Mercier" class="font-body text-[0.9rem] px-4 py-3 bg-light border border-secondary/30 text-dark rounded-lg transition-colors w-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20" />
          </div>
          
          <div class="flex flex-col gap-2">
            <label for="email" class="font-body text-[0.8rem] font-medium uppercase tracking-[0.05em] text-dark">Email Address</label>
            <input type="email" id="email" v-model="form.email" required placeholder="E.g., name@domain.com" class="font-body text-[0.9rem] px-4 py-3 bg-light border border-secondary/30 text-dark rounded-lg transition-colors w-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20" />
          </div>

          <div class="flex flex-col gap-2">
            <label for="type" class="font-body text-[0.8rem] font-medium uppercase tracking-[0.05em] text-dark">Inquiry Type</label>
            <select id="type" v-model="form.type" required class="font-body text-[0.9rem] px-4 py-3 bg-light border border-secondary/30 text-dark rounded-lg transition-colors w-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20">
              <option value="" disabled selected>Select an option...</option>
              <option value="b2c">B2C / Private Group Session</option>
              <option value="b2b">B2B / Corporate Event</option>
              <option value="general">General Inquiry</option>
            </select>
          </div>

          <div class="flex flex-col gap-2">
            <label for="message" class="font-body text-[0.8rem] font-medium uppercase tracking-[0.05em] text-dark">Message</label>
            <textarea id="message" v-model="form.message" rows="5" required placeholder="Tell us about your event, preferred date, and number of guests..." class="font-body text-[0.9rem] px-4 py-3 bg-light border border-secondary/30 text-dark rounded-lg transition-colors w-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"></textarea>
          </div>

          <button type="submit" class="btn-primary w-full !py-4 mt-4">
            Send Inquiry
          </button>
          
          <p v-if="submitted" class="text-[0.85rem] text-primary font-medium text-center bg-primary/[0.06] p-3 border-l-[3px] border-secondary mt-2">Thank you for your message. Ophélie will get in touch with you shortly.</p>
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
