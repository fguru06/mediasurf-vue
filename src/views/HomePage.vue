<template>
  <div class="home-page">
    <div class="reveal-on-scroll">
      <HeroSection />
    </div>
    <div class="reveal-on-scroll">
      <FeaturesSection />
    </div>
    <div class="reveal-on-scroll">
      <CoursesSection />
    </div>
    <div class="reveal-on-scroll">
      <WhyChooseSection />
    </div>
    <div class="reveal-on-scroll">
      <ProcessSection />
    </div>
    <div class="reveal-on-scroll">
      <TestimonialsSection />
    </div>
    <div class="reveal-on-scroll">
      <StatsSection />
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted } from 'vue';
import HeroSection from '../components/HeroSection.vue';
import FeaturesSection from '../components/FeaturesSection.vue';
import CoursesSection from '../components/CoursesSection.vue';
import WhyChooseSection from '../components/WhyChooseSection.vue';
import ProcessSection from '../components/ProcessSection.vue';
import TestimonialsSection from '../components/TestimonialsSection.vue';
import StatsSection from '../components/StatsSection.vue';

let observer;

onMounted(() => {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) {
    return;
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
  );

  elements.forEach((el) => observer.observe(el));
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.home-page {
  width: 100%;
}
</style>
