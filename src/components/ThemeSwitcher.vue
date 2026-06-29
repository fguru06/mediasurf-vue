<script setup>
import { ref, onMounted } from 'vue';

const currentTheme = ref('default');

const toggleTheme = () => {
  const next = currentTheme.value === 'black' ? 'default' : 'black';
  setTheme(next);
};

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
  if (savedTheme === 'black') {
    setTheme('black');
  }
});
</script>

<template>
  <button
    @click="toggleTheme"
    class="theme-toggle"
    :class="{ dark: currentTheme === 'black' }"
    :title="currentTheme === 'black' ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
    :aria-label="currentTheme === 'black' ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
  >
    <span class="toggle-icon">{{ currentTheme === 'black' ? '☀️' : '🌙' }}</span>
  </button>
</template>

<style scoped>
.theme-toggle {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #e5e7eb;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
  z-index: 9999;
  transition: all 0.25s ease;
}

.theme-toggle:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 18px rgba(0,0,0,0.18);
}

.theme-toggle.dark {
  background: #1a1a1a;
  border-color: #333;
  box-shadow: 0 4px 12px rgba(255,255,255,0.06);
}

.theme-toggle.dark:hover {
  box-shadow: 0 6px 18px rgba(255,255,255,0.1);
}

.toggle-icon {
  line-height: 1;
  transition: transform 0.3s ease;
}

.theme-toggle:hover .toggle-icon {
  transform: rotate(15deg);
}
</style>
