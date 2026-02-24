<script setup>
import NavigationBar from './components/NavigationBar.vue'
import FooterSection from './components/FooterSection.vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'
</script>

<template>
  <div class="app">
    <NavigationBar />
    <main>
      <router-view />
    </main>
    <FooterSection />
    <ThemeSwitcher />
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
