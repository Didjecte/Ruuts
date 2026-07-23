<script setup>
// Prefetch all major Sanity queries on the layout level.
// During SSR or initial load, Nuxt waits for these queries.
// On subsequent client navigations, they instantly return the payload cache.
useSanitySiteSettings();
const { data: pageContent } = useSanityHomepageContent();
useSanityExperiences("b2c");
useSanityExperiences("b2b");
useSanityTestimonials();
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />

    <main class="flex-[1_0_auto]">
      <slot />
    </main>

    <footer
      class="dark bg-background text-foreground pt-16 pb-8 border-t border-secondary"
    >
      <div
        class="max-w-[1200px] mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] items-start gap-8 md:gap-12 mb-12"
      >
        <!-- Column 1: Brand & Contact -->
        <div>
          <h2 class="text-secondary text-3xl font-logo font-medium mb-[1.2rem]">
            RUUTS
          </h2>
          <div class="flex flex-col gap-[0.6rem] text-sm text-foreground/75">
            <a
              href="mailto:contact@theruuts.com"
              class="transition-all duration-200 hover:text-secondary hover:pl-1 block w-fit"
              >contact@theruuts.com</a
            >
            <a
              href="tel:+8618217180655"
              class="transition-all duration-200 hover:text-secondary hover:pl-1 block w-fit"
              >+86 18217180655</a
            >
            <a
              href="https://wa.me/8618217180655"
              target="_blank"
              rel="noopener noreferrer"
              class="transition-all duration-200 hover:text-secondary hover:pl-1 block w-fit"
              >Whatsapp</a
            >
          </div>
        </div>

        <!-- Column 2: Services Overview -->
        <div>
          <h3
            class="font-body text-xs uppercase tracking-[0.1em] text-secondary mb-[1.2rem] md:pt-[5px]"
          >
            {{ pageContent?.footerServicesTitle || "Services Overview" }}
          </h3>
          <ul class="list-none flex flex-col gap-[0.6rem]">
            <li>
              <NuxtLink
                to="/custom-experiences"
                class="text-sm text-foreground/75 transition-all duration-200 hover:text-secondary hover:pl-1 block w-fit"
                >{{
                  pageContent?.footerServicesItem1 || "Blind tea tasting"
                }}</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/custom-experiences"
                class="text-sm text-foreground/75 transition-all duration-200 hover:text-secondary hover:pl-1 block w-fit"
                >{{
                  pageContent?.footerServicesItem2 ||
                  "Curated Cultural tea experiences"
                }}</NuxtLink
              >
            </li>
          </ul>
        </div>

        <!-- Column 3: Explorer -->
        <div>
          <h3
            class="font-body text-xs uppercase tracking-[0.1em] text-secondary mb-[1.2rem] md:pt-[5px]"
          >
            {{ pageContent?.footerExplorerTitle || "EXPLORER" }}
          </h3>
          <ul class="list-none flex flex-col gap-[0.6rem]">
            <li>
              <NuxtLink
                to="/custom-experiences"
                class="text-sm text-foreground/75 transition-all duration-200 hover:text-secondary hover:pl-1 block w-fit"
                >{{ pageContent?.b2bTitle || "Tea Anywhere" }}</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/experiences"
                class="text-sm text-foreground/75 transition-all duration-200 hover:text-secondary hover:pl-1 block w-fit"
                >{{ pageContent?.b2cTitle || "Private Experiences" }}</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/testimonials"
                class="text-sm text-foreground/75 transition-all duration-200 hover:text-secondary hover:pl-1 block w-fit"
                >{{
                  pageContent?.testimonialsTitle || "Testimonials"
                }}</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/about"
                class="text-sm text-foreground/75 transition-all duration-200 hover:text-secondary hover:pl-1 block w-fit"
                >{{ pageContent?.aboutStoryTitle || "About us" }}</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/contact"
                class="text-sm text-foreground/75 transition-all duration-200 hover:text-secondary hover:pl-1 block w-fit"
                >{{ pageContent?.contactTitle || "Contact" }}</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="border-t border-foreground/10 pt-8">
        <div
          class="max-w-[1200px] mx-auto px-6 w-full flex flex-col md:flex-row justify-between items-center text-xs text-foreground/50 gap-4 md:gap-0 text-center md:text-left"
        >
          <p>
            &copy; {{ new Date().getFullYear() }} Ruuts. All rights reserved.
          </p>
          <p>Designed for premium experiences</p>
        </div>
      </div>
    </footer>
  </div>
</template>
