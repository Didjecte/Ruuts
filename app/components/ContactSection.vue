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
        <div class="reveal-item relative w-full h-[350px] sm:h-full min-h-[350px] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] parallax-container">
          <NuxtImg
            v-if="pageContent?.contactImage"
            provider="sanity"
            :src="pageContent.contactImage"
            alt="Ophélie - Founder of RUUTS"
            class="w-full h-full object-cover relative z-10 parallax-img"
            loading="lazy"
            sizes="sm:100vw md:40vw lg:600px"
          />
          <NuxtImg
            v-else
            :src="defaultFounderImg"
            alt="Ophélie - Founder of RUUTS"
            class="w-full h-full object-cover relative z-10 parallax-img"
            loading="lazy"
            sizes="sm:100vw md:40vw lg:600px"
          />
        </div>

        <!-- Right Side: Details (60%) -->
        <div class="reveal-item text-foreground flex flex-col gap-4 sm:gap-6">
          <div>
            <h2 class="font-heading text-3xl sm:text-5xl font-semibold text-primary dark:text-foreground leading-[1.1] sm:leading-tight">
              {{ pageContent?.contactTitle || "Let's craft your event together" }}
            </h2>
          </div>
          
          <p class="text-sm sm:text-base text-foreground/80 leading-relaxed font-medium">
            {{ pageContent?.contactDescription || "We organize private sessions for tea lovers and corporate events. Contact us to learn more about our partner rates and custom packages." }}
          </p>

          <!-- Contact details (Inline row) -->
          <div class="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 text-xs sm:text-sm font-semibold">
            <div class="flex items-center gap-2 border-b border-secondary/20 pb-2 w-full sm:w-auto">
              <span class="uppercase tracking-[0.1em] text-secondary">Email:</span>
              <a :href="`mailto:${pageContent?.contactEmail || 'contact@theruuts.com'}`" class="text-foreground transition-colors duration-200 hover:text-primary">{{ pageContent?.contactEmail || 'contact@theruuts.com' }}</a>
            </div>
            <div class="flex items-center gap-2 border-b border-secondary/20 pb-2 w-full sm:w-auto">
              <span class="uppercase tracking-[0.1em] text-secondary">Phone:</span>
              <a :href="`tel:${pageContent?.contactPhone || '+8618217180655'}`" class="text-foreground transition-colors duration-200 hover:text-primary">{{ pageContent?.contactPhone || '+86 18217180655' }}</a>
            </div>
          </div>

          <!-- QR Codes Grid (Desktop/Tablet only: visible on sm, hidden on mobile) -->
          <div class="hidden sm:grid grid-cols-2 gap-4 mt-2 max-w-xs">
            <!-- WhatsApp -->
            <a
              :href="pageContent?.contactWhatsappLink || 'javascript:void(0)'"
              :target="pageContent?.contactWhatsappLink ? '_blank' : '_self'"
              rel="noopener noreferrer"
              class="aspect-square bg-white border border-secondary/20 rounded-xl p-2 overflow-hidden shadow-sm transition-transform duration-300 hover:scale-105 flex items-center justify-center cursor-pointer"
            >
              <NuxtImg
                v-if="pageContent?.contactWhatsappQR"
                provider="sanity"
                :src="pageContent.contactWhatsappQR"
                alt="WhatsApp QR Code"
                title="WhatsApp"
                class="w-full h-full object-contain"
                loading="lazy"
                width="150"
                height="150"
              />
              <NuxtImg
                v-else
                :src="defaultQrImg"
                alt="WhatsApp QR Code"
                title="WhatsApp"
                class="w-full h-full object-contain"
                loading="lazy"
                width="150"
                height="150"
              />
            </a>

            <!-- WeChat -->
            <a
              :href="pageContent?.contactWechatLink || 'javascript:void(0)'"
              :target="pageContent?.contactWechatLink ? '_blank' : '_self'"
              rel="noopener noreferrer"
              class="aspect-square bg-white border border-secondary/20 rounded-xl p-2 overflow-hidden shadow-sm transition-transform duration-300 hover:scale-105 flex items-center justify-center cursor-pointer"
            >
              <NuxtImg
                v-if="pageContent?.contactWechatQR"
                provider="sanity"
                :src="pageContent.contactWechatQR"
                alt="WeChat QR Code"
                title="WeChat"
                class="w-full h-full object-contain"
                loading="lazy"
                width="150"
                height="150"
              />
              <NuxtImg
                v-else
                :src="defaultQrImg"
                alt="WeChat QR Code"
                title="WeChat"
                class="w-full h-full object-contain"
                loading="lazy"
                width="150"
                height="150"
              />
            </a>
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

              <button type="submit" :disabled="isSubmitting" class="btn-primary w-full !py-3.5 mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2">
                <span v-if="isSubmitting" class="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin"></span>
                {{ isSubmitting ? 'Sending...' : 'Send Request' }}
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- Middle Section: QR Codes Grid (Mobile only: visible on mobile, hidden on sm) -->
      <div class="reveal-item grid sm:hidden grid-cols-2 gap-4 max-w-xs mx-auto">
        <!-- WhatsApp -->
        <a
          :href="pageContent?.contactWhatsappLink || 'javascript:void(0)'"
          :target="pageContent?.contactWhatsappLink ? '_blank' : '_self'"
          rel="noopener noreferrer"
          class="aspect-square bg-white border border-secondary/20 rounded-xl p-2 overflow-hidden shadow-sm transition-transform duration-300 hover:scale-105 flex items-center justify-center cursor-pointer"
        >
          <NuxtImg
            v-if="pageContent?.contactWhatsappQR"
            provider="sanity"
            :src="pageContent.contactWhatsappQR"
            alt="WhatsApp QR Code"
            title="WhatsApp"
            class="w-full h-full object-contain"
            loading="lazy"
            width="150"
            height="150"
          />
          <NuxtImg
            v-else
            :src="defaultQrImg"
            alt="WhatsApp QR Code"
            title="WhatsApp"
            class="w-full h-full object-contain"
            loading="lazy"
            width="150"
            height="150"
          />
        </a>

        <!-- WeChat -->
        <a
          :href="pageContent?.contactWechatLink || 'javascript:void(0)'"
          :target="pageContent?.contactWechatLink ? '_blank' : '_self'"
          rel="noopener noreferrer"
          class="aspect-square bg-white border border-secondary/20 rounded-xl p-2 overflow-hidden shadow-sm transition-transform duration-300 hover:scale-105 flex items-center justify-center cursor-pointer"
        >
          <NuxtImg
            v-if="pageContent?.contactWechatQR"
            provider="sanity"
            :src="pageContent.contactWechatQR"
            alt="WeChat QR Code"
            title="WeChat"
            class="w-full h-full object-contain"
            loading="lazy"
            width="150"
            height="150"
          />
          <NuxtImg
            v-else
            :src="defaultQrImg"
            alt="WeChat QR Code"
            title="WeChat"
            class="w-full h-full object-contain"
            loading="lazy"
            width="150"
            height="150"
          />
        </a>
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

          <button type="submit" :disabled="isSubmitting" class="btn-primary w-full !py-4 mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2">
            <span v-if="isSubmitting" class="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin"></span>
            {{ isSubmitting ? 'Sending...' : 'Send Request' }}
          </button>

        </form>
      </div>
    </div>

    <ToastAlert :show="toast.show" :message="toast.message" :type="toast.type" />
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import defaultFounderImg from "~/assets/images/founder.jpg";
import defaultQrImg from "~/assets/images/qr-placeholder.svg";

const { data: pageContent } = useSanityHomepageContent();

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const isSubmitting = ref(false);

const toast = reactive({
  show: false,
  message: "",
  type: "success"
});

const showToast = (message, type = "success") => {
  toast.message = message;
  toast.type = type;
  toast.show = true;
  
  setTimeout(() => {
    toast.show = false;
  }, 5000);
};

const handleSubmit = async () => {
  if (isSubmitting.value) return;
  
  isSubmitting.value = true;
  toast.show = false;

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "5a4536f8-8f56-4950-ada3-b0f258b83c32",
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    });

    const result = await response.json();

    if (response.status === 200) {
      showToast(pageContent.value?.contactSuccessMessage || "Thank you for your message. Ophélie will get in touch with you shortly.", "success");
      
      // Reset fields
      form.name = "";
      form.email = "";
      form.message = "";
    } else {
      showToast(pageContent.value?.contactErrorMessage || result.message || "Something went wrong. Please try again.", "error");
    }
  } catch (error) {
    showToast(pageContent.value?.contactErrorMessage || "Network error. Please try again later.", "error");
  } finally {
    isSubmitting.value = false;
  }
};

let ctx;

onMounted(() => {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    ctx = gsap.context(() => {
      const parallaxContainers = gsap.utils.toArray("#contact .parallax-container");

      parallaxContainers.forEach((container) => {
        const img = container.querySelector(".parallax-img");
        if (!img) return;

        gsap.fromTo(
          img,
          { yPercent: 4, xPercent: -7, scale: 1.1 },
          {
            yPercent: -4,
            xPercent: 3,
            scale: 1.1,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });

      const revealItems = gsap.utils.toArray("#contact .reveal-item");
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
  }
});

onUnmounted(() => {
  if (ctx) ctx.revert();
});
</script>

