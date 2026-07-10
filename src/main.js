import './style.css'
import App from './App.vue'
import routes from './router'
import { ViteSSG } from 'vite-ssg'

const setupGlobalClickTracking = () => {
  if (typeof window === 'undefined') return
  document.addEventListener('click', (event) => {
    const trackEl = event.target.closest('[data-track-event]')
    if (!trackEl || !window.gtag) return
    const eventName = trackEl.getAttribute('data-track-event')
    const eventCategory = trackEl.getAttribute('data-track-category') || 'engagement'
    const eventLabel =
      trackEl.getAttribute('data-track-label') ||
      trackEl.textContent?.trim() ||
      'unknown'
    window.gtag('event', eventName, {
      event_category: eventCategory,
      event_label: eventLabel,
    })
  })
}

export const createApp = ViteSSG(
  App,
  { 
    routes,
    scrollBehavior(to, from, savedPosition) {
      // If there's a saved scroll position (browser back/forward), use it
      if (savedPosition) {
        return savedPosition
      }
      
      // If navigating to a hash, scroll to that element
      if (to.hash) {
        const element = document.querySelector(to.hash)
        if (element) {
          // Wait a tick for the DOM to settle before scrolling
          return new Promise((resolve) => {
            setTimeout(() => {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' })
              resolve()
            }, 0)
          })
        }
      }
      
      // Default: scroll to top
      return { top: 0 }
    }
  },
  ({ app, router, routes, isClient, initialState }) => {
    if (isClient) {
      setupGlobalClickTracking()
    }

    router.beforeEach((to, from, next) => {
      if (isClient && window.gtag) {
        window.gtag('config', 'G-310ZB3F2R7', {
          page_path: to.path,
          page_title: to.meta?.title || document.title,
        })
      }
      next()
    })
  },
)