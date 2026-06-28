<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="container">
      <div class="nav-content">
        <router-link to="/" class="logo" @click="closeMenu">
          <img src="/logo.svg" alt="MediaSurf Technologies logo for Corporate E-Learning and LMS Development" class="logo-image" />
        </router-link>
        
        <div class="nav-links" :class="{ active: menuOpen }">
          <router-link
            to="/"
            active-class=""
            exact-active-class=""
            :class="{ active: isHomeActive }"
            @click="closeMenu"
          >
            Home
          </router-link>
          <router-link
            to="/#products"
            active-class=""
            exact-active-class=""
            :class="{ active: isProductsActive }"
            @click="closeMenu"
          >
            Products
          </router-link>
          <router-link
            to="/#solutions"
            active-class=""
            exact-active-class=""
            :class="{ active: isServicesActive }"
            @click="closeMenu"
          >
            Services
          </router-link>
          <router-link to="/about" active-class="active" @click="closeMenu">About</router-link>
          <router-link to="/blog" active-class="active" @click="closeMenu">Blog</router-link>
          <router-link to="/contact" active-class="active" @click="closeMenu">Contact</router-link>
        </div>
        
        <div class="nav-actions">
          <a
            href="https://learncraft.mediasurf.ca"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-learncraft btn-learncraft-ai"
            data-track-event="cta_click"
            data-track-category="navigation"
            data-track-label="nav_learncraft_ai"
          >
            <span class="btn-learncraft-star">✨</span> LearnCraft AI
            <span class="btn-glow-pulse" aria-hidden="true"></span>
          </a>
          <router-link
            to="/contact#contact-form"
            class="btn-primary"
            data-track-event="cta_click"
            data-track-category="navigation"
            data-track-label="nav_get_quote"
          >
            Get Quote
          </router-link>
        </div>
        
        <button class="menu-toggle" @click="toggleMenu" :class="{ open: menuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      menuOpen: false,
      activeSection: '',
      isScrolled: false,
      observer: null,
      scrollSections: ['home', 'products', 'learncraft-ai', 'learncraft-editor', 'pitstop', 'solutions', 'features']
    }
  },
  computed: {
    currentPath() {
      return this.$route.path
    },
    currentHash() {
      return this.$route.hash
    },
    isHomeActive() {
      if (this.currentPath !== '/') return false
      // On homepage: highlight Home when hero is visible or nothing else is active
      if (this.activeSection === 'home' || this.activeSection === '') return true
      // Also active when scrolling past hero but before courses
      return !this.activeSection
    },
    isProductsActive() {
      if (this.currentPath !== '/') return false
      return this.activeSection === 'products' || this.activeSection === 'learncraft-ai' || this.activeSection === 'learncraft-editor' || this.activeSection === 'pitstop'
    },
    isServicesActive() {
      if (this.currentPath !== '/') return false
      return this.activeSection === 'solutions' || this.activeSection === 'features'
    }
  },
  watch: {
    $route(to) {
      this.closeMenu()
      // Re-setup scroll spy when navigating to homepage
      this.$nextTick(() => {
        this.teardownScrollSpy()
        if (to.path === '/') {
          this.setupScrollSpy()
        }
      })
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    if (this.$route.path === '/') {
      this.$nextTick(() => this.setupScrollSpy())
    }
  },
  beforeUnmount() {
    this.teardownScrollSpy()
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    closeMenu() {
      this.menuOpen = false
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    setupScrollSpy() {
      if (this.observer) return
      this.observer = new IntersectionObserver(
        (entries) => {
          // Sort visible entries by how much of the section is in view
          const visible = entries
            .filter(e => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
          
          if (visible.length > 0) {
            this.activeSection = visible[0].target.id
          }
        },
        {
          threshold: [0, 0.15, 0.3, 0.5, 0.7],
          rootMargin: '-80px 0px -40% 0px'
        }
      )

      this.scrollSections.forEach(id => {
        const el = document.getElementById(id)
        if (el) this.observer.observe(el)
      })
    },
    teardownScrollSpy() {
      if (this.observer) {
        this.observer.disconnect()
        this.observer = null
      }
      this.activeSection = ''
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(248, 250, 252, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04);
  border-bottom: 1px solid rgba(148, 163, 184, 0.15);
  z-index: 1000;
  padding: 0.75rem 0;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar-scrolled {
  background: rgba(248, 250, 252, 0.95);
  box-shadow: 0 4px 24px rgba(15, 23, 42, 0.1);
  border-bottom: 1px solid rgba(148, 163, 184, 0.25);
  padding: 0.45rem 0;
}

:root[data-theme="black"] .navbar {
  background: rgba(0, 0, 0, 0.85);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

:root[data-theme="black"] .navbar-scrolled {
  background: rgba(0, 0, 0, 0.95);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 0;
  gap: 0.75rem;
}

.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-image {
  height: clamp(48px, 5.6vw, 64px);
  width: auto;
  transition: height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar-scrolled .logo-image {
  height: clamp(40px, 4.8vw, 54px);
}

:root[data-theme="black"] .logo-image {
  filter: brightness(0) invert(1);
}

.nav-links {
  display: flex;
  gap: clamp(0.55rem, 1.5vw, 1.2rem);
  align-items: center;
  font-family: 'Space Grotesk', 'Trebuchet MS', 'Segoe UI', sans-serif;
  flex-wrap: nowrap;
  justify-content: center;
  white-space: nowrap;
  min-width: 0;
}

.nav-links a {
  color: #334155;
  text-decoration: none;
  font-weight: 600;
  font-size: clamp(0.82rem, 0.95vw, 0.92rem);
  letter-spacing: 0.3px;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  transition: color 0.25s, background 0.25s, box-shadow 0.25s;
  position: relative;
}

:root[data-theme="black"] .nav-links a {
  color: #cccccc;
}

.nav-links a:hover {
  color: var(--primary-dark);
  background: rgba(var(--primary-rgb), 0.08);
}

:root[data-theme="black"] .nav-links a:hover {
  color: white;
  background: rgba(255, 255, 255, 0.1);
}

.nav-links a.active {
  color: var(--primary-dark);
  background: rgba(var(--primary-rgb), 0.14);
  box-shadow: inset 0 0 0 1px rgba(var(--primary-rgb), 0.25);
}

:root[data-theme="black"] .nav-links a.active {
  color: black;
  background: white;
  box-shadow: none;
}

.nav-actions {
  display: flex;
  gap: 0.65rem;
  align-items: center;
  flex-shrink: 0;
}

.btn-secondary {
  padding: 0.58rem 1.15rem;
  border: 2px solid var(--primary);
  background: rgba(255, 255, 255, 0.75);
  color: var(--primary);
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.btn-learncraft {
  padding: 0.58rem 1.15rem;
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #8b5cf6 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.btn-learncraft::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
  pointer-events: none;
}

.btn-learncraft-star {
  font-size: 0.85rem;
  animation: starPulse 2s ease-in-out infinite;
}

@keyframes starPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

.btn-learncraft:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(245, 158, 11, 0.45);
}

.btn-learncraft-ai {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 35%, #06b6d4 70%, #22d3ee 100%);
  background-size: 200% 200%;
  animation: btnShimmer 3s ease-in-out infinite, btnPulse 2s ease-in-out infinite;
  box-shadow: 0 0 18px rgba(99, 102, 241, 0.5), 0 4px 12px rgba(99, 102, 241, 0.3);
  padding: 0.68rem 1.35rem;
  font-size: 0.92rem;
  letter-spacing: 0.4px;
  border-radius: 10px;
  position: relative;
  overflow: visible;
}

.btn-learncraft-ai:hover {
  box-shadow: 0 0 30px rgba(99, 102, 241, 0.7), 0 0 50px rgba(34, 211, 238, 0.4), 0 6px 20px rgba(99, 102, 241, 0.45);
  transform: translateY(-2px) scale(1.04);
}

@keyframes btnShimmer {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes btnPulse {
  0%, 100% { box-shadow: 0 0 18px rgba(99, 102, 241, 0.5), 0 4px 12px rgba(99, 102, 241, 0.3); }
  50% { box-shadow: 0 0 28px rgba(99, 102, 241, 0.7), 0 4px 16px rgba(34, 211, 238, 0.5); }
}

.btn-glow-pulse {
  position: absolute;
  inset: -3px;
  border-radius: 12px;
  background: linear-gradient(135deg, #6366f1, #22d3ee, #8b5cf6, #6366f1);
  background-size: 300% 300%;
  animation: glowRotate 2s linear infinite;
  z-index: -1;
  opacity: 0.6;
  filter: blur(6px);
}

@keyframes glowRotate {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

:root[data-theme="black"] .btn-learncraft {
  box-shadow: 0 2px 12px rgba(245, 158, 11, 0.3);
}

:root[data-theme="black"] .btn-learncraft:hover {
  box-shadow: 0 6px 24px rgba(245, 158, 11, 0.55);
}

:root[data-theme="black"] .btn-secondary {
    background: transparent;
    color: white;
    border-color: white;
}

:root[data-theme="black"] .btn-secondary:hover {
    background: white;
    color: black;
}

.btn-secondary:hover {
  background: var(--primary);
  color: white;
}

.btn-primary {
  padding: 0.58rem 1.15rem;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
}

:root[data-theme="black"] .btn-primary {
    background: white;
    color: black;
}

:root[data-theme="black"] .btn-primary:hover {
    background: #e0e0e0;
    color: black;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.4);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
}

.menu-toggle span {
  width: 26px;
  height: 2.5px;
  background: #1a1a1a;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;
  transform-origin: center;
}

:root[data-theme="black"] .menu-toggle span {
  background: #e0e0e0;
}

.menu-toggle.open span:nth-child(1) {
  transform: translateY(7.5px) rotate(45deg);
}

.menu-toggle.open span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.menu-toggle.open span:nth-child(3) {
  transform: translateY(-7.5px) rotate(-45deg);
}

@media (max-width: 1140px) {
  .nav-links a {
    font-size: 0.84rem;
    padding: 0.35rem 0.62rem;
  }

  .btn-learncraft {
    padding: 0.5rem 0.85rem;
    font-size: 0.82rem;
  }
}

@media (max-width: 980px) {
  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.98);
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.12);
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
    border-radius: 0 0 24px 24px;
    gap: 1rem;
  }

  .nav-links.active {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  .nav-actions {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }
}

@media (max-width: 768px) {
  .nav-content {
    padding: 0.55rem 0.8rem;
  }

  .nav-actions {
    gap: 0.6rem;
  }

  .btn-secondary,
  .btn-primary {
    padding: 0.5rem 1.1rem;
  }
}
</style>
