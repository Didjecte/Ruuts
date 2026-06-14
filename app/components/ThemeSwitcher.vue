<template>
  <div class="fixed bottom-6 right-6 z-[999] font-body">
    <!-- Trigger Button -->
    <button
      @click="isOpen = !isOpen"
      class="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
      :class="[
        isOpen 
          ? 'bg-primary text-primary-foreground rotate-90' 
          : 'bg-background/90 text-foreground border border-secondary/20 hover:border-primary backdrop-blur-md'
      ]"
      title="Switch Theme"
      aria-label="Theme Selector"
    >
      <!-- Palette Icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 transition-transform duration-300"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9.53 16.122l.18-.18a3.75 3.75 0 00-1.06-5.304l-1.071-1.071a3.75 3.75 0 00-5.304 1.06l-.18.18a3.75 3.75 0 001.06 5.304l1.07 1.071a3.75 3.75 0 005.305-1.06z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.89 12.577l1.35-1.352a.75.75 0 000-1.06L9.624 7.55a.75.75 0 00-1.06 0l-1.35 1.351a4.873 4.873 0 00-.77 6.136l1.385 1.386a4.873 4.873 0 006.137-.77c.306-.307.59-.646.852-1.015L15.3 13.95a.75.75 0 00-1.06 0l-1.35 1.351a1.873 1.873 0 01-2.072.392 1.873 1.873 0 01-1.072-2.185l1.144-1.93z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.46 8.353l.18-.18a3.75 3.75 0 00-1.06-5.304l-1.07-1.071a3.75 3.75 0 00-5.305 1.06l-.18.18a3.75 3.75 0 001.06 5.304l1.07 1.071a3.75 3.75 0 005.305-1.06z"
        />
      </svg>
    </button>

    <!-- Theme Selection Card -->
    <Transition
      enter-active-class="transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
      enter-from-class="opacity-0 translate-y-10 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-6 scale-95"
    >
      <div
        v-if="isOpen"
        class="absolute bottom-20 right-0 w-72 rounded-2xl glass-panel p-5 shadow-2xl border border-secondary/20 flex flex-col gap-4 text-foreground"
      >
        <div class="flex flex-col gap-1">
          <h4 class="font-semibold text-sm tracking-wide uppercase text-foreground">
            Palette Tester
          </h4>
          <p class="text-[11px] opacity-75">
            Test the Ruuts design with different backgrounds & color balances.
          </p>
        </div>

        <div class="flex flex-col gap-2.5">
          <!-- Cream Theme Button -->
          <button
            @click="setTheme('cream')"
            class="flex items-center justify-between p-3 rounded-xl border transition-all duration-300 text-left w-full hover:scale-[1.02]"
            :class="[
              activeTheme === 'cream'
                ? 'bg-primary/10 border-primary shadow-sm'
                : 'bg-background/40 border-foreground/5 hover:border-primary/30'
            ]"
          >
            <div class="flex flex-col gap-0.5">
              <span class="text-xs font-semibold">Cream White</span>
              <span class="text-[10px] opacity-65">Warm & organic</span>
            </div>
            <!-- Colors Preview -->
            <div class="flex items-center gap-1.5 bg-foreground/5 p-1 rounded-lg">
              <span class="w-3.5 h-3.5 rounded-full border border-foreground/10" style="background-color: #F9F6F0" title="Background"></span>
              <span class="w-3.5 h-3.5 rounded-full" style="background-color: #2C302E" title="Text"></span>
              <span class="w-3.5 h-3.5 rounded-full" style="background-color: #88A95B" title="Primary"></span>
              <span class="w-3.5 h-3.5 rounded-full" style="background-color: #dbb124" title="Secondary"></span>
            </div>
          </button>

          <!-- Pure White Theme Button -->
          <button
            @click="setTheme('white')"
            class="flex items-center justify-between p-3 rounded-xl border transition-all duration-300 text-left w-full hover:scale-[1.02]"
            :class="[
              activeTheme === 'white'
                ? 'bg-primary/10 border-primary shadow-sm'
                : 'bg-background/40 border-foreground/5 hover:border-primary/30'
            ]"
          >
            <div class="flex flex-col gap-0.5">
              <span class="text-xs font-semibold">Pure White</span>
              <span class="text-[10px] opacity-65">Minimalist & clean</span>
            </div>
            <!-- Colors Preview -->
            <div class="flex items-center gap-1.5 bg-foreground/5 p-1 rounded-lg">
              <span class="w-3.5 h-3.5 rounded-full border border-foreground/10" style="background-color: #FFFFFF" title="Background"></span>
              <span class="w-3.5 h-3.5 rounded-full" style="background-color: #121212" title="Text"></span>
              <span class="w-3.5 h-3.5 rounded-full" style="background-color: #222222" title="Primary"></span>
              <span class="w-3.5 h-3.5 rounded-full" style="background-color: #c5a059" title="Secondary"></span>
            </div>
          </button>

          <!-- Pure Black Theme Button -->
          <button
            @click="setTheme('black')"
            class="flex items-center justify-between p-3 rounded-xl border transition-all duration-300 text-left w-full hover:scale-[1.02]"
            :class="[
              activeTheme === 'black'
                ? 'bg-primary/10 border-primary shadow-sm'
                : 'bg-background/40 border-foreground/5 hover:border-primary/30'
            ]"
          >
            <div class="flex flex-col gap-0.5">
              <span class="text-xs font-semibold">Pure Black</span>
              <span class="text-[10px] opacity-65">Modern dark ritual</span>
            </div>
            <!-- Colors Preview -->
            <div class="flex items-center gap-1.5 bg-foreground/5 p-1 rounded-lg">
              <span class="w-3.5 h-3.5 rounded-full border border-foreground/20" style="background-color: #0a0a0a" title="Background"></span>
              <span class="w-3.5 h-3.5 rounded-full" style="background-color: #F9F6F0" title="Text"></span>
              <span class="w-3.5 h-3.5 rounded-full" style="background-color: #CCCCCC" title="Primary"></span>
              <span class="w-3.5 h-3.5 rounded-full" style="background-color: #dbb124" title="Secondary"></span>
            </div>
          </button>

          <!-- Forest Gold Theme Button -->
          <button
            @click="setTheme('forest')"
            class="flex items-center justify-between p-3 rounded-xl border transition-all duration-300 text-left w-full hover:scale-[1.02]"
            :class="[
              activeTheme === 'forest'
                ? 'bg-primary/10 border-primary shadow-sm'
                : 'bg-background/40 border-foreground/5 hover:border-primary/30'
            ]"
          >
            <div class="flex flex-col gap-0.5">
              <span class="text-xs font-semibold">Forest Gold</span>
              <span class="text-[10px] opacity-65">Jade & Ebony</span>
            </div>
            <!-- Colors Preview -->
            <div class="flex items-center gap-1.5 bg-foreground/5 p-1 rounded-lg">
              <span class="w-3.5 h-3.5 rounded-full border border-foreground/10" style="background-color: #F9F6F0" title="Background"></span>
              <span class="w-3.5 h-3.5 rounded-full" style="background-color: #241e1a" title="Text"></span>
              <span class="w-3.5 h-3.5 rounded-full" style="background-color: #0a3c32" title="Primary"></span>
              <span class="w-3.5 h-3.5 rounded-full" style="background-color: #c5a059" title="Secondary"></span>
            </div>
          </button>

          <!-- Ceremonial Matcha Theme Button -->
          <button
            @click="setTheme('matcha')"
            class="flex items-center justify-between p-3 rounded-xl border transition-all duration-300 text-left w-full hover:scale-[1.02]"
            :class="[
              activeTheme === 'matcha'
                ? 'bg-primary/10 border-primary shadow-sm'
                : 'bg-background/40 border-foreground/5 hover:border-primary/30'
            ]"
          >
            <div class="flex flex-col gap-0.5">
              <span class="text-xs font-semibold">Ceremonial Matcha</span>
              <span class="text-[10px] opacity-65">Matcha & Brass/Oolong</span>
            </div>
            <!-- Colors Preview -->
            <div class="flex items-center gap-1.5 bg-foreground/5 p-1 rounded-lg">
              <span class="w-3.5 h-3.5 rounded-full border border-foreground/10" style="background-color: #1a1c1a" title="Background"></span>
              <span class="w-3.5 h-3.5 rounded-full" style="background-color: #f0eee9" title="Text"></span>
              <span class="w-3.5 h-3.5 rounded-full" style="background-color: #7a9f5d" title="Primary"></span>
              <span class="w-3.5 h-3.5 rounded-full" style="background-color: #cda67b" title="Secondary"></span>
            </div>
          </button>

          <!-- Elegant Modern Theme Button -->
          <button
            @click="setTheme('elegant')"
            class="flex items-center justify-between p-3 rounded-xl border transition-all duration-300 text-left w-full hover:scale-[1.02]"
            :class="[
              activeTheme === 'elegant'
                ? 'bg-primary/10 border-primary shadow-sm'
                : 'bg-background/40 border-foreground/5 hover:border-primary/30'
            ]"
          >
            <div class="flex flex-col gap-0.5">
              <span class="text-xs font-semibold">Elegant Modern</span>
              <span class="text-[10px] opacity-65">Midnight & Champagne</span>
            </div>
            <!-- Colors Preview -->
            <div class="flex items-center gap-1.5 bg-foreground/5 p-1 rounded-lg">
              <span class="w-3.5 h-3.5 rounded-full border border-foreground/10" style="background-color: #0a0c10" title="Background"></span>
              <span class="w-3.5 h-3.5 rounded-full" style="background-color: #f8fafc" title="Text"></span>
              <span class="w-3.5 h-3.5 rounded-full" style="background-color: #d4b88c" title="Primary"></span>
              <span class="w-3.5 h-3.5 rounded-full" style="background-color: #b4aaa0" title="Secondary"></span>
            </div>
          </button>

          <!-- Tea Gathering Theme Button -->
          <button
            @click="setTheme('gathering')"
            class="flex items-center justify-between p-3 rounded-xl border transition-all duration-300 text-left w-full hover:scale-[1.02]"
            :class="[
              activeTheme === 'gathering'
                ? 'bg-primary/10 border-primary shadow-sm'
                : 'bg-background/40 border-foreground/5 hover:border-primary/30'
            ]"
          >
            <div class="flex flex-col gap-0.5">
              <span class="text-xs font-semibold">Tea Gathering</span>
              <span class="text-[10px] opacity-65">Amber & Sencha Sage</span>
            </div>
            <!-- Colors Preview -->
            <div class="flex items-center gap-1.5 bg-foreground/5 p-1 rounded-lg">
              <span class="w-3.5 h-3.5 rounded-full border border-foreground/10" style="background-color: #1c1816" title="Background"></span>
              <span class="w-3.5 h-3.5 rounded-full" style="background-color: #f2eee9" title="Text"></span>
              <span class="w-3.5 h-3.5 rounded-full" style="background-color: #c66a3f" title="Primary"></span>
              <span class="w-3.5 h-3.5 rounded-full" style="background-color: #8f9e8b" title="Secondary"></span>
            </div>
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isOpen = ref(false);
const activeTheme = ref('cream');

const setTheme = (theme) => {
  if (!process.client) return;

  activeTheme.value = theme;
  localStorage.setItem('ruuts-theme', theme);

  const html = document.documentElement;
  html.classList.remove('theme-white', 'theme-black', 'theme-forest', 'theme-matcha', 'theme-elegant', 'theme-gathering');

  if (theme === 'white') {
    html.classList.add('theme-white');
  } else if (theme === 'black') {
    html.classList.add('theme-black');
  } else if (theme === 'forest') {
    html.classList.add('theme-forest');
  } else if (theme === 'matcha') {
    html.classList.add('theme-matcha');
  } else if (theme === 'elegant') {
    html.classList.add('theme-elegant');
  } else if (theme === 'gathering') {
    html.classList.add('theme-gathering');
  }
};

onMounted(() => {
  if (process.client) {
    const savedTheme = localStorage.getItem('ruuts-theme') || 'cream';
    setTheme(savedTheme);
  }
});
</script>
