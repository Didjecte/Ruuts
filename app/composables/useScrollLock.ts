import { onMounted, onUnmounted } from 'vue'

let lockCount = 0
let savedScrollTop = 0

export function useScrollLock() {
  onMounted(() => {
    if (typeof window === 'undefined') return
    if (lockCount === 0) {
      // 1. Force scroll behavior to auto (instant) to prevent smooth scrolling when locking/unlocking
      document.documentElement.style.scrollBehavior = 'auto'
      
      savedScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${savedScrollTop}px`
      document.body.style.width = '100%'
    }
    lockCount++
  })

  onUnmounted(() => {
    if (typeof window === 'undefined') return
    lockCount--
    if (lockCount <= 0) {
      lockCount = 0
      
      // Keep scroll behavior auto during restoration
      document.documentElement.style.scrollBehavior = 'auto'
      
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      
      // Instantly restore scroll position without animation
      window.scrollTo({
        top: savedScrollTop,
        left: 0,
        behavior: 'instant'
      })
      
      // Restore CSS smooth scrolling after the instant jump has rendered
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.documentElement.style.scrollBehavior = ''
        })
      })
    }
  })
}
