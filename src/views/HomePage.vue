<template>
  <div class="home-page">
    <HeroSection />
    <FeaturesSection />
    <CoursesSection />
    <WhyChooseSection />
    <ProcessSection />
    <TestimonialsSection />
    <StatsSection />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue';
import FeaturesSection from '../components/FeaturesSection.vue';
import CoursesSection from '../components/CoursesSection.vue';
import WhyChooseSection from '../components/WhyChooseSection.vue';
import ProcessSection from '../components/ProcessSection.vue';
import TestimonialsSection from '../components/TestimonialsSection.vue';
import StatsSection from '../components/StatsSection.vue';
</script>

<style scoped>
.home-page {
  width: 100%;
}
</style>
