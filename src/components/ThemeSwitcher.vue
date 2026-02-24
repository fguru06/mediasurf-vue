<script setup>
import { ref, onMounted } from 'vue';

const currentTheme = ref('default');

const setTheme = (theme) => {
  currentTheme.value = theme;
  if (theme === 'default') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }
  localStorage.setItem('theme', theme);
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  }
});
</script>

<template>
  <div class="theme-switcher">
    <span class="switcher-label">Theme:</span>
    <button 
      @click="setTheme('default')" 
      class="theme-btn new-theme" 
      :class="{ active: currentTheme === 'default' }"
      title="New Theme (#194583)"
    ></button>
    <button 
      @click="setTheme('legacy')" 
      class="theme-btn legacy-theme"
      :class="{ active: currentTheme === 'legacy' }"
      title="Legacy Theme (#2563eb)"
    ></button>
    <button 
      @click="setTheme('black')" 
      class="theme-btn black-theme"
      :class="{ active: currentTheme === 'black' }"
      title="Black Theme (#111111)"
    ></button>
  </div>
</template>

<style scoped>
.theme-switcher {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  background: white;
  border-radius: 50px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  z-index: 9999;
  border: 1px solid #e5e7eb;
}

.switcher-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: #4b5563;
}

.theme-btn {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
}

.theme-btn:hover {
  transform: scale(1.1);
}

.theme-btn.active {
  border-color: #000;
  transform: scale(1.1);
}

.theme-btn.active::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
}

.new-theme {

.black-theme {
  background-color: #111111;
}
  background-color: #194583;
}

.legacy-theme {
  background-color: #2563eb;
}
</style>
