<template>
  <section
    id="contact"
    class="bg-background border-t border-secondary/20 relative overflow-hidden"
  >
    <div
      class="max-w-[1200px] mx-auto px-6 w-full section-padding flex flex-col gap-10"
    >
      <!-- Top Section: Image (40%) & Right Details (60%) -->
      <div class="grid grid-cols-[2fr_3fr] gap-4 sm:gap-10 items-stretch">
        <!-- Left Side: Image (40%) -->
        <div class="reveal-item relative w-full h-full rounded-2xl overflow-hidden shadow-sm group">
          <img
            src="~/assets/images/founder.jpg"
            alt="Ophélie - Founder of RUUTS"
            class="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <!-- Right Side: Details (60%) -->
        <div class="reveal-item text-foreground flex flex-col gap-4 sm:gap-6">
          <div>
            <h2 class="font-heading text-3xl sm:text-5xl font-semibold text-primary dark:text-foreground leading-[1.1] sm:leading-tight">
              Let's craft your event together
            </h2>
          </div>
          
          <p class="text-sm sm:text-base text-foreground/80 leading-relaxed font-medium">
            We organize private sessions for tea lovers and corporate events. Contact us to learn more about our partner rates and custom packages.
          </p>

          <!-- Contact details (Inline row) -->
          <div class="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 text-xs sm:text-sm font-semibold">
            <div class="flex items-center gap-2 border-b border-secondary/20 pb-2 w-full sm:w-auto">
              <span class="uppercase tracking-[0.1em] text-secondary">Email:</span>
              <a href="mailto:contact@theruuts.com" class="text-foreground transition-colors duration-200 hover:text-primary">contact@theruuts.com</a>
            </div>
            <div class="flex items-center gap-2 border-b border-secondary/20 pb-2 w-full sm:w-auto">
              <span class="uppercase tracking-[0.1em] text-secondary">Phone:</span>
              <a href="tel:+8618217180655" class="text-foreground transition-colors duration-200 hover:text-primary">+86 18217180655</a>
            </div>
          </div>

          <!-- QR Codes Grid (Desktop/Tablet only: visible on sm, hidden on mobile) -->
          <div class="hidden sm:grid grid-cols-2 gap-4 mt-2 max-w-xs">
            <!-- WeChat -->
            <div
              class="aspect-square flex flex-col items-center justify-center gap-2 bg-surface/40 border border-secondary/15 rounded-xl p-3 text-center transition-all duration-300 hover:shadow-sm hover:border-secondary/30"
            >
              <div
                class="w-[44px] h-[44px] sm:w-[54px] sm:h-[54px] bg-background border border-secondary/20 rounded-lg flex items-center justify-center text-secondary shrink-0"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  class="w-6 h-6 sm:w-7 sm:h-7"
                >
                  <path
                    d="M3 9V3h6v6H3zm0 12v-6h6v6H3zm12 0v-6h6v6h-6zm0-12V3h6v6h-6zm-4 4h2v2h-2v-2zm0 4h2v2h-2v-2zm-4-8h2v2H7V5zm0 12h2v2H7v-2zm8-12h2v2h-2V5zm0 8h2v2h-2v-2z"
                  />
                </svg>
              </div>
              <div class="flex flex-col min-w-0">
                <span class="font-body text-[10px] sm:text-xs font-semibold text-foreground truncate"
                  >WeChat</span
                >
                <span class="text-[8px] sm:text-[10px] text-foreground/60 font-medium truncate">RUUTS 丝络嘉木</span>
              </div>
            </div>

            <!-- WhatsApp -->
            <div
              class="aspect-square flex flex-col items-center justify-center gap-2 bg-surface/40 border border-secondary/15 rounded-xl p-3 text-center transition-all duration-300 hover:shadow-sm hover:border-secondary/30"
            >
              <div
                class="w-[44px] h-[44px] sm:w-[54px] sm:h-[54px] bg-background border border-secondary/20 rounded-lg flex items-center justify-center text-secondary shrink-0"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-6 h-6 sm:w-7 sm:h-7"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </div>
              <div class="flex flex-col min-w-0">
                <span class="font-body text-[10px] sm:text-xs font-semibold text-foreground truncate"
                  >WhatsApp</span
                >
                <span class="text-[8px] sm:text-[10px] text-foreground/60 font-medium truncate">Scan to chat</span>
              </div>
            </div>

            <!-- Rednote -->
            <div
              class="aspect-square flex flex-col items-center justify-center gap-2 bg-surface/40 border border-secondary/15 rounded-xl p-3 text-center transition-all duration-300 hover:shadow-sm hover:border-secondary/30"
            >
              <div
                class="w-[44px] h-[44px] sm:w-[54px] sm:h-[54px] bg-background border border-secondary/20 rounded-lg flex items-center justify-center text-secondary shrink-0"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  class="w-6 h-6 sm:w-7 sm:h-7"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                  />
                </svg>
              </div>
              <div class="flex flex-col min-w-0">
                <span class="font-body text-[10px] sm:text-xs font-semibold text-foreground truncate"
                  >Rednote</span
                >
                <span class="text-[8px] sm:text-[10px] text-foreground/60 font-medium truncate">Feifei ou le thé</span>
              </div>
            </div>

            <!-- Instagram -->
            <div
              class="aspect-square flex flex-col items-center justify-center gap-2 bg-surface/40 border border-secondary/15 rounded-xl p-3 text-center transition-all duration-300 hover:shadow-sm hover:border-secondary/30"
            >
              <div
                class="w-[44px] h-[44px] sm:w-[54px] sm:h-[54px] bg-background border border-secondary/20 rounded-lg flex items-center justify-center text-secondary shrink-0"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-6 h-6 sm:w-7 sm:h-7"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </div>
              <div class="flex flex-col min-w-0">
                <span class="font-body text-[10px] sm:text-xs font-semibold text-foreground truncate"
                  >Instagram</span
                >
                <span class="text-[8px] sm:text-[10px] text-foreground/60 font-medium truncate">@ruuts_tea</span>
              </div>
            </div>
          </div>

          <!-- Contact Form (Desktop/Tablet only: visible on sm, hidden on mobile) -->
          <div class="hidden sm:block mt-2">
            <form @submit.prevent="handleSubmit" class="flex flex-col gap-5 bg-primary/[0.03] border border-secondary/20 rounded-2xl p-6 sm:p-8">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="flex flex-col gap-2">
                  <label
                    for="name-desktop"
                    class="font-body text-xs font-semibold uppercase tracking-[0.05em] text-foreground/80"
                    >Your Name</label
                  >
                  <input
                    type="text"
                    id="name-desktop"
                    v-model="form.name"
                    required
                    placeholder="E.g., Julianne Mercier"
                    class="font-body text-sm px-4 py-2.5 bg-background border border-secondary/30 text-foreground rounded-lg transition-colors w-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
                  />
                </div>

                <div class="flex flex-col gap-2">
                  <label
                    for="email-desktop"
                    class="font-body text-xs font-semibold uppercase tracking-[0.05em] text-foreground/80"
                    >Email Address</label
                  >
                  <input
                    type="email"
                    id="email-desktop"
                    v-model="form.email"
                    required
                    placeholder="E.g., name@domain.com"
                    class="font-body text-sm px-4 py-2.5 bg-background border border-secondary/30 text-foreground rounded-lg transition-colors w-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div class="flex flex-col gap-2">
                <label
                  for="message-desktop"
                  class="font-body text-xs font-semibold uppercase tracking-[0.05em] text-foreground/80"
                  >Message</label
                >
                <textarea
                  id="message-desktop"
                  v-model="form.message"
                  rows="4"
                  required
                  placeholder="Tell us about your event, preferred date, and number of guests..."
                  class="font-body text-sm px-4 py-2.5 bg-background border border-secondary/30 text-foreground rounded-lg transition-colors w-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
                ></textarea>
              </div>

              <button type="submit" class="btn-primary w-full !py-3.5 mt-2">
                Send Request
              </button>

              <p
                v-if="submitted"
                class="text-sm text-primary font-medium text-center bg-primary/[0.06] p-3 border-l-[3px] border-secondary mt-2"
              >
                Thank you for your message. Ophélie will get in touch with you shortly.
              </p>
            </form>
          </div>
        </div>
      </div>

      <!-- Middle Section: QR Codes Grid (Mobile only: visible on mobile, hidden on sm) -->
      <div class="reveal-item grid sm:hidden grid-cols-2 gap-4">
        <!-- WeChat -->
        <div
          class="aspect-square flex flex-col items-center justify-center gap-2 bg-surface/40 border border-secondary/15 rounded-xl p-3 text-center transition-all duration-300 hover:shadow-sm hover:border-secondary/30"
        >
          <div
            class="w-[44px] h-[44px] sm:w-[54px] sm:h-[54px] bg-background border border-secondary/20 rounded-lg flex items-center justify-center text-secondary shrink-0"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              class="w-6 h-6 sm:w-7 sm:h-7"
            >
              <path
                d="M3 9V3h6v6H3zm0 12v-6h6v6H3zm12 0v-6h6v6h-6zm0-12V3h6v6h-6zm-4 4h2v2h-2v-2zm0 4h2v2h-2v-2zm-4-8h2v2H7V5zm0 12h2v2H7v-2zm8-12h2v2h-2V5zm0 8h2v2h-2v-2z"
              />
            </svg>
          </div>
          <div class="flex flex-col min-w-0">
            <span class="font-body text-[10px] sm:text-xs font-semibold text-foreground truncate"
              >WeChat</span
            >
            <span class="text-[8px] sm:text-[10px] text-foreground/60 font-medium truncate">RUUTS 丝络嘉木</span>
          </div>
        </div>

        <!-- WhatsApp -->
        <div
          class="aspect-square flex flex-col items-center justify-center gap-2 bg-surface/40 border border-secondary/15 rounded-xl p-3 text-center transition-all duration-300 hover:shadow-sm hover:border-secondary/30"
        >
          <div
            class="w-[44px] h-[44px] sm:w-[54px] sm:h-[54px] bg-background border border-secondary/20 rounded-lg flex items-center justify-center text-secondary shrink-0"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-6 h-6 sm:w-7 sm:h-7"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
          </div>
          <div class="flex flex-col min-w-0">
            <span class="font-body text-[10px] sm:text-xs font-semibold text-foreground truncate"
              >WhatsApp</span
            >
            <span class="text-[8px] sm:text-[10px] text-foreground/60 font-medium truncate">Scan to chat</span>
          </div>
        </div>

        <!-- Rednote -->
        <div
          class="aspect-square flex flex-col items-center justify-center gap-2 bg-surface/40 border border-secondary/15 rounded-xl p-3 text-center transition-all duration-300 hover:shadow-sm hover:border-secondary/30"
        >
          <div
            class="w-[44px] h-[44px] sm:w-[54px] sm:h-[54px] bg-background border border-secondary/20 rounded-lg flex items-center justify-center text-secondary shrink-0"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              class="w-6 h-6 sm:w-7 sm:h-7"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
              />
            </svg>
          </div>
          <div class="flex flex-col min-w-0">
            <span class="font-body text-[10px] sm:text-xs font-semibold text-foreground truncate"
              >Rednote</span
            >
            <span class="text-[8px] sm:text-[10px] text-foreground/60 font-medium truncate">Feifei ou le thé</span>
          </div>
        </div>

        <!-- Instagram -->
        <div
          class="aspect-square flex flex-col items-center justify-center gap-2 bg-surface/40 border border-secondary/15 rounded-xl p-3 text-center transition-all duration-300 hover:shadow-sm hover:border-secondary/30"
        >
          <div
            class="w-[44px] h-[44px] sm:w-[54px] sm:h-[54px] bg-background border border-secondary/20 rounded-lg flex items-center justify-center text-secondary shrink-0"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-6 h-6 sm:w-7 sm:h-7"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </div>
          <div class="flex flex-col min-w-0">
            <span class="font-body text-[10px] sm:text-xs font-semibold text-foreground truncate"
              >Instagram</span
            >
            <span class="text-[8px] sm:text-[10px] text-foreground/60 font-medium truncate">@ruuts_tea</span>
          </div>
        </div>
      </div>

      <!-- Bottom Section: Form (Mobile only: visible on mobile, hidden on sm) -->
      <div
        class="reveal-item block sm:hidden bg-primary/[0.03] border border-secondary/20 rounded-2xl p-6 w-full"
      >
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
          <div class="flex flex-col gap-2">
            <label
              for="name-mobile"
              class="font-body text-xs font-semibold uppercase tracking-[0.05em] text-foreground/80"
              >Your Name</label
            >
            <input
              type="text"
              id="name-mobile"
              v-model="form.name"
              required
              placeholder="E.g., Julianne Mercier"
              class="font-body text-sm px-4 py-3 bg-background border border-secondary/30 text-foreground rounded-lg transition-colors w-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
            />
          </div>

          <div class="flex flex-col gap-2">
            <label
              for="email-mobile"
              class="font-body text-xs font-semibold uppercase tracking-[0.05em] text-foreground/80"
              >Email Address</label
            >
            <input
              type="email"
              id="email-mobile"
              v-model="form.email"
              required
              placeholder="E.g., name@domain.com"
              class="font-body text-sm px-4 py-3 bg-background border border-secondary/30 text-foreground rounded-lg transition-colors w-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
            />
          </div>

          <div class="flex flex-col gap-2">
            <label
              for="message-mobile"
              class="font-body text-xs font-semibold uppercase tracking-[0.05em] text-foreground/80"
              >Message</label
            >
            <textarea
              id="message-mobile"
              v-model="form.message"
              rows="4"
              required
              placeholder="Tell us about your event, preferred date, and number of guests..."
              class="font-body text-sm px-4 py-3 bg-background border border-secondary/30 text-foreground rounded-lg transition-colors w-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
            ></textarea>
          </div>

          <button type="submit" class="btn-primary w-full !py-4 mt-2">
            Send Request
          </button>

          <p
            v-if="submitted"
            class="text-sm text-primary font-medium text-center bg-primary/[0.06] p-3 border-l-[3px] border-secondary mt-2"
          >
            Thank you for your message. Ophélie will get in touch with you
            shortly.
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const submitted = ref(false);

const handleSubmit = () => {
  // Mock form submission
  console.log("Form data:", form);
  submitted.value = true;

  // Reset fields
  form.name = "";
  form.email = "";
  form.message = "";

  setTimeout(() => {
    submitted.value = false;
  }, 5000);
};

onMounted(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger);
  }
  const revealItems = document.querySelectorAll("#contact .reveal-item");
  revealItems.forEach((item) => {
    gsap.fromTo(
      item,
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        duration: 0.8,
        y: 0,
        opacity: 1,
        ease: "power3.out",
      }
    );
  });
});
</script>

