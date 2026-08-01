<template>
  <div class="home-page">
    <HomeSeoSchema />
    <div class="reveal-on-scroll">
      <HeroSection @track="trackEvent" />
    </div>
    <div class="reveal-on-scroll">
      <B2BAgencySection />
    </div>
    <div class="reveal-on-scroll">
      <MediaSurfProductsSection />
    </div>
    <div class="reveal-on-scroll">
      <LearnCraftAISection />
    </div>
    <div class="reveal-on-scroll">
      <LearnCraftEditorSection />
    </div>
    <div class="reveal-on-scroll">
      <PitstopLMSSection />
    </div>
    <div class="reveal-on-scroll">
      <CreatorLoomSection />
    </div>
    <div class="reveal-on-scroll">
      <FeaturesSection />
    </div>
    <div class="reveal-on-scroll">
      <CoursesSection />
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
import B2BAgencySection from '../components/B2BAgencySection.vue';
import MediaSurfProductsSection from '../components/MediaSurfProductsSection.vue';
import LearnCraftAISection from '../components/LearnCraftAISection.vue';
import LearnCraftEditorSection from '../components/LearnCraftEditorSection.vue';
import PitstopLMSSection from '../components/PitstopLMSSection.vue';
import CreatorLoomSection from '../components/CreatorLoomSection.vue';
import FeaturesSection from '../components/FeaturesSection.vue';
import CoursesSection from '../components/CoursesSection.vue';
import ProcessSection from '../components/ProcessSection.vue';
import TestimonialsSection from '../components/TestimonialsSection.vue';
import StatsSection from '../components/StatsSection.vue';
import HomeSeoSchema from '../components/HomeSeoSchema.vue';

const trackEvent = (label) => {
  if (window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'home_engagement',
      event_label: label
    });
  }
};

let observer;

onMounted(() => {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) {
    return;
  }

  // Mobile browsers can fail to trigger intersection callbacks consistently,
  // which leaves sections hidden. Reveal immediately on small viewports.
  if (window.matchMedia('(max-width: 900px)').matches) {
    elements.forEach((el) => el.classList.add('is-visible'));
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
    { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
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
