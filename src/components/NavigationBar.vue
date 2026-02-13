<template>
  <nav class="navbar">
    <div class="container">
      <div class="nav-content">
        <div class="logo">
          <img src="/logo.svg" alt="MediaSurf Technologies" class="logo-image" />
        </div>
        
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
            to="/#courses"
            active-class=""
            exact-active-class=""
            :class="{ active: isHashActive('courses') }"
            @click="closeMenu"
          >
            Services
          </router-link>
          <router-link to="/about" active-class="active" @click="closeMenu">About</router-link>
          <router-link
            to="/#features"
            active-class=""
            exact-active-class=""
            :class="{ active: isHashActive('features') }"
            @click="closeMenu"
          >
            Solutions
          </router-link>
          <router-link to="/contact" active-class="active" @click="closeMenu">Contact</router-link>
        </div>
        
        <div class="nav-actions">
          <button class="btn-secondary">Client Portal</button>
          <button class="btn-primary">Get Quote</button>
        </div>
        
        <button class="menu-toggle" @click="toggleMenu">
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
      menuOpen: false
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
      return this.currentPath === '/' && !this.currentHash
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    closeMenu() {
      this.menuOpen = false
    },
    isHashActive(sectionId) {
      return this.currentPath === '/' && this.currentHash === `#${sectionId}`
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
  background: rgba(248, 250, 252, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
  border-bottom: 1px solid rgba(148, 163, 184, 0.2);
  z-index: 1000;
  padding: 0.75rem 0;
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
  gap: 1rem;
}

.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.logo-image {
  height: clamp(42px, 5vw, 55px);
  width: auto;
}

.nav-links {
  display: flex;
  gap: clamp(0.75rem, 2.4vw, 2rem);
  align-items: center;
  font-family: 'Space Grotesk', 'Trebuchet MS', 'Segoe UI', sans-serif;
  flex-wrap: wrap;
  justify-content: center;
}

.nav-links a {
  color: #334155;
  text-decoration: none;
  font-weight: 600;
  font-size: clamp(0.85rem, 1.2vw, 0.98rem);
  letter-spacing: 0.3px;
  padding: clamp(0.35rem, 0.9vw, 0.45rem) clamp(0.7rem, 1.8vw, 0.95rem);
  border-radius: 999px;
  transition: color 0.3s, background 0.3s, box-shadow 0.3s;
  position: relative;
}

.nav-links a:hover,
.nav-links a.active {
  color: #1d4ed8;
  background: rgba(37, 99, 235, 0.12);
  box-shadow: inset 0 0 0 1px rgba(37, 99, 235, 0.2);
}

.nav-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.btn-secondary {
  padding: 0.6rem 1.5rem;
  border: 2px solid #2563eb;
  background: rgba(255, 255, 255, 0.75);
  color: #2563eb;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-secondary:hover {
  background: #2563eb;
  color: white;
}

.btn-primary {
  padding: 0.6rem 1.5rem;
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background: #1a1a1a;
  transition: all 0.3s;
  border-radius: 2px;
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

@media (max-width: 860px) {
  .nav-content {
    flex-wrap: wrap;
  }
}

@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.98);
    flex-direction: column;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.12);
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
    border-radius: 0 0 24px 24px;
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
</style>
