<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    
    <main class="flex-[1_0_auto]">
      <slot />
    </main>

    <footer class="bg-dark text-light pt-16 pb-8 border-t border-secondary">
      <div class="max-w-[1200px] mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8 md:gap-12 mb-12">
        <div>
          <h2 class="text-secondary text-[2rem] font-logo tracking-[0.15em] mb-4">RUUTS</h2>
          <p class="text-[0.9rem] text-light/90 max-w-[380px]">Reconnecting with origin through Chinese tea ceremonies and premium group experiences.</p>
        </div>
        <div>
          <h3 class="font-body text-[0.8rem] uppercase tracking-[0.1em] text-secondary mb-[1.2rem]">Explore</h3>
          <ul class="list-none">
            <li class="mb-[0.6rem]">
              <NuxtLink to="/" class="text-[0.9rem] text-light/75 transition-all duration-200 hover:text-primary hover:pl-1 block w-fit">About & Story</NuxtLink>
            </li>
            <li class="mb-[0.6rem]">
              <NuxtLink to="/experiences" class="text-[0.9rem] text-light/75 transition-all duration-200 hover:text-primary hover:pl-1 block w-fit">Experiences</NuxtLink>
            </li>
            <li class="mb-[0.6rem]">
              <NuxtLink to="/insights" class="text-[0.9rem] text-light/75 transition-all duration-200 hover:text-primary hover:pl-1 block w-fit">Insights</NuxtLink>
            </li>
            <li class="mb-[0.6rem]">
              <NuxtLink to="/#contact" class="text-[0.9rem] text-light/75 transition-all duration-200 hover:text-primary hover:pl-1 block w-fit">Contact</NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="font-body text-[0.8rem] uppercase tracking-[0.1em] text-secondary mb-[1.2rem]">Inquiries</h3>
          <p class="text-[0.9rem] text-light/75 mb-2">contact@theruuts.com</p>
          <p class="text-[0.9rem] text-light/75 mb-2">+86 18217180655</p>
        </div>
      </div>
      <div class="border-t border-light/10 pt-8">
        <div class="max-w-[1200px] mx-auto px-6 w-full flex flex-col md:flex-row justify-between items-center text-[0.8rem] text-light/50 gap-4 md:gap-0 text-center md:text-left">
          <p>&copy; {{ new Date().getFullYear() }} Ruuts. All rights reserved.</p>
          <p>Designed for Premium Experiences</p>
        </div>
      </div>
    </footer>
  </div>
</template>
