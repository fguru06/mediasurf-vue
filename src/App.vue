<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import NavigationBar from './components/NavigationBar.vue'
import FooterSection from './components/FooterSection.vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'
import CookieConsent from './components/CookieConsent.vue'

const route = useRoute()

// Apply per-route head (title, meta, canonical) from router/index.js head definitions
useHead(computed(() => route.meta?.head ?? {}))
</script>

<template>
  <div class="app">
    <NavigationBar />
    <main>
      <router-view />
    </main>
    <FooterSection />
    <ThemeSwitcher />
    <CookieConsent />
  </div>
</template>

<style scoped>
.app {
  width: 100%;
}

main {
  width: 100%;
}
</style>