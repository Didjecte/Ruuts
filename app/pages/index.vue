<template>
  <div>
    <!-- Hero Section -->
    <section
      class="dark h-screen min-h-[650px] relative flex items-center hero-bg text-foreground"
      :style="
        pageContent?.heroImage
          ? { '--hero-bg-url': `url(${pageContent.heroImage})` }
          : {}
      "
    >
      <div
        class="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/80 z-[1]"
      ></div>
      <div
        class="relative z-[2] mt-[40px] max-w-[1200px] mx-auto px-6 w-full hero-content-container"
      >
        <div class="max-w-[650px] hero-inner-container">
          <div class="hero-text-group">
            <h1
              class="hero-title font-heading text-5xl md:text-6xl font-semibold text-primary dark:text-secondary tracking-[0.03em] leading-[1.15] mb-6"
            >
              {{
                pageContent?.heroTitle ||
                "Bespoke Tea experiences for your venue"
              }}
            </h1>
            <p
              class="hero-description text-xl text-foreground font-medium mb-10"
            >
              {{
                pageContent?.heroSubtext ||
                "An experience crafted only for you."
              }}
            </p>
          </div>
          <!-- <div class="hero-actions flex flex-col sm:flex-row gap-4 sm:gap-6">
            <NuxtLink to="/experiences" class="btn-gold"
              >Explore Sessions</NuxtLink
            >
            <NuxtLink
              to="/#about"
              class="btn-secondary !border-foreground/50 !text-foreground hover:!bg-foreground hover:!text-primary hover:!border-foreground"
              >Our Story</NuxtLink
            >
          </div> -->
        </div>
      </div>

      <!-- Modern Horizontal Social Dock (Top Right, just under Navbar) -->
      <div
        class="absolute top-[75px] sm:top-[80px] left-0 w-full z-[10] pointer-events-none"
      >
        <div class="max-w-[1200px] mx-auto px-4 w-full flex justify-end">
          <div
            class="hero-social-dock pointer-events-auto flex flex-row items-center gap-3 p-2 rounded-full"
          >
            <!-- Instagram -->
            <a
              :href="pageContent?.contactInstagramLink || 'javascript:void(0)'"
              :target="pageContent?.contactInstagramLink ? '_blank' : '_self'"
              rel="noopener noreferrer"
              aria-label="Instagram"
              class="w-9 h-9 rounded-full bg-[#E1306C]/10 border border-[#E1306C]/25 flex items-center justify-center transition-all duration-300 hover:bg-[#E1306C]/25 hover:scale-110 shadow-sm"
            >
              <svg class="w-6 h-6" viewBox="0 0 24 24">
                <defs>
                  <linearGradient
                    id="instaGrad"
                    x1="0%"
                    y1="100%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#C13584" />
                    <stop offset="50%" stop-color="#E1306C" />
                    <stop offset="100%" stop-color="#FCAF45" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#instaGrad)"
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>

            <!-- WhatsApp -->
            <a
              :href="pageContent?.contactWhatsappLink || 'javascript:void(0)'"
              :target="pageContent?.contactWhatsappLink ? '_blank' : '_self'"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              class="w-9 h-9 rounded-full bg-[#25D366]/10 border border-[#25D366]/25 flex items-center justify-center transition-all duration-300 hover:bg-[#25D366]/25 hover:scale-110 shadow-sm"
            >
              <svg class="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#25D366"
                  d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.289.072.39-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.601.723 4.913 2.034 1.312 1.311 2.034 3.056 2.034 4.913-.001 3.825-3.113 6.933-6.947 6.933z"
                />
              </svg>
            </a>

            <!-- LinkedIn -->
            <a
              :href="pageContent?.contactLinkedinLink || 'javascript:void(0)'"
              :target="pageContent?.contactLinkedinLink ? '_blank' : '_self'"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              class="w-9 h-9 rounded-full bg-[#0077B5]/10 border border-[#0077B5]/25 flex items-center justify-center transition-all duration-300 hover:bg-[#0077B5]/25 hover:scale-110 shadow-sm"
            >
              <svg class="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#0077B5"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                />
              </svg>
            </a>

            <!-- WeChat with QR Dropdown -->
            <a
              :href="pageContent?.contactWechatLink || '#contact'"
              :target="pageContent?.contactWechatLink ? '_blank' : '_self'"
              rel="noopener noreferrer"
              aria-label="WeChat"
              class="w-9 h-9 rounded-full bg-[#07C160]/10 border border-[#07C160]/25 flex items-center justify-center transition-all duration-300 hover:bg-[#07C160]/25 hover:scale-110 shadow-sm relative group"
            >
              <svg class="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#07C160"
                  d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.336.336 0 0 0 .178-.052l1.764-.993a.855.855 0 0 1 .465-.138c.414 0 .807.076 1.201.127.653.084 1.321.128 2.016.128a10.66 10.66 0 0 0 1.299-.078c-.62-1.144-.98-2.441-.98-3.825 0-4.526 4.047-8.196 9.04-8.196.48 0 .949.037 1.408.106-.991-1.57-2.827-2.624-4.768-2.624zm-2.433 3.19c.563 0 1.018.455 1.018 1.017 0 .563-.455 1.018-1.018 1.018-.563 0-1.018-.455-1.018-1.018 0-.562.455-1.017 1.018-1.017zm4.962 0c.563 0 1.018.455 1.018 1.017 0 .563-.455 1.018-1.018 1.018-.563 0-1.018-.455-1.018-1.018 0-.562.455-1.017 1.018-1.017zm6.732 3.633c-4.444 0-8.046 3.262-8.046 7.285 0 4.024 3.602 7.286 8.046 7.286.91 0 1.787-.132 2.613-.369a.78.78 0 0 1 .414-.029l1.545.871c.046.026.096.041.156.041.141 0 .256-.115.256-.258 0-.063-.025-.126-.042-.187l-.341-1.296a.526.526 0 0 1 .187-.582c1.609-1.18 2.63-2.923 2.63-4.863 0-4.023-3.603-7.285-8.046-7.285zm-2.348 3.308c.493 0 .892.399.892.892 0 .493-.399.892-.892.892-.493 0-.892-.399-.892-.892 0-.493.399-.892.892-.892zm4.697 0c.493 0 .892.399.892.892 0 .493-.399.892-.892.892-.493 0-.892-.399-.892-.892 0-.493.399-.892.892-.892z"
                />
              </svg>

              <!-- Hover QR Dropdown (Aligned cleanly below WeChat) -->
              <div
                v-if="pageContent?.contactWechatQR"
                class="absolute top-full right-0 mt-3 hidden group-hover:flex flex-col items-center bg-white p-2.5 rounded-xl shadow-2xl border border-secondary/30 z-50 w-32 h-32 pointer-events-none transition-opacity duration-200"
              >
                <NuxtImg
                  provider="sanity"
                  :src="pageContent.contactWechatQR"
                  alt="WeChat QR"
                  class="w-full h-full object-contain"
                  width="128"
                  height="128"
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div
        class="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2"
      >
        <span
          class="scroll-dot w-[6px] h-[10px] bg-secondary rounded-[3px]"
        ></span>
        <span class="font-body text-xs uppercase text-foreground/60"
          >Scroll to explore</span
        >
      </div>
    </section>

    <!-- Intro Section -->
    <IntroSection />

    <!-- Testimonials Section -->
    <TestimonialSection />

    <!-- Tea Anywhere Section -->
    <ExperienceSection
      section-id="tea-anywhere"
      title="Tea Anywhere"
      catalog-type="b2b"
    />

    <!-- Private Experiences Section -->
    <ExperienceSection
      section-id="experiences"
      title="Private Experiences"
      catalog-type="b2c"
      :show-policies="false"
    />

    <!-- Contact Section (Details, QRs, Form) -->
    <ContactSection />
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

definePageMeta({
  transparentHeader: true,
});

// Register ScrollTrigger plugin
if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

const { data: pageContent } = useSanityHomepageContent();
useSanitySeo(computed(() => pageContent.value));

onMounted(() => {
  // Page load animations
  gsap.from(".hero-title", {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power4.out",
    delay: 0.4,
  });

  gsap.from(".hero-description", {
    duration: 0.8,
    y: 20,
    opacity: 0,
    ease: "power3.out",
    delay: 0.6,
  });

  gsap.from(".hero-actions", {
    duration: 0.8,
    y: 20,
    opacity: 0,
    ease: "power3.out",
    delay: 0.8,
  });

  gsap.from(".hero-social-dock", {
    duration: 1,
    y: -20,
    opacity: 0,
    ease: "power3.out",
    delay: 1.0,
  });

  gsap.from(".scroll-indicator", {
    duration: 0.6,
    opacity: 0,
    ease: "power2.out",
    delay: 1.2,
  });
});
</script>

<style scoped>
.hero-bg {
  position: relative;
  overflow: hidden;
}

.hero-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: var(--hero-bg-url, url("~/assets/images/home.jpg"));
  background-size: cover;
  background-position: center;
  z-index: 0;
}

@media (min-width: 1024px) {
  .hero-bg::before {
    transform: scale(1.35);
    transform-origin: 0% 40%;
  }
}

@media (max-width: 639px) {
  .hero-content-container {
    position: absolute;
    inset: 0;
    margin-top: 0 !important;
    max-width: 100% !important;
  }

  .hero-inner-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 24px;
    padding-top: 20vh;
  }

  .hero-actions {
    margin-top: auto;
    margin-bottom: 40vh;
  }
}

.scroll-dot {
  animation: scrollPulse 2s infinite ease-in-out;
}

@keyframes scrollPulse {
  0% {
    transform: translateY(0);
    opacity: 0.3;
  }
  50% {
    transform: translateY(6px);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 0.3;
  }
}
</style>
