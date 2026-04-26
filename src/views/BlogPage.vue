<template>
  <div class="blog-page">
    <section class="blog-hero">
      <div class="container">
        <p class="eyebrow">MediaSurf Blog</p>
        <h1>Corporate E-Learning and LMS Development Insights</h1>
        <p class="lead">
          Practical guides, implementation patterns, and strategy notes for training leaders,
          HR teams, and L&D professionals across Ontario.
        </p>
      </div>
    </section>

    <section class="blog-listing">
      <div class="container">
        <article class="post-card" v-for="post in placeholderPosts" :key="post.slug">
          <p class="post-tag">{{ post.tag }}</p>
          <h2>{{ post.title }}</h2>
          <p>{{ post.excerpt }}</p>
          <span class="coming-soon">Coming soon</span>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
const placeholderPosts = [
  {
    slug: 'how-to-plan-custom-lms-development',
    tag: 'LMS Development',
    title: 'How to Plan a Custom LMS Development Project in 2026',
    excerpt: 'A framework for discovery, integrations, content migration, and phased rollout.'
  },
  {
    slug: 'employee-onboarding-playbook',
    tag: 'Onboarding',
    title: 'Employee Onboarding Program Playbook for Distributed Teams',
    excerpt: 'A practical model for building onboarding paths that reduce ramp-up time.'
  },
  {
    slug: 'measuring-corporate-elearning-roi',
    tag: 'Analytics',
    title: 'Measuring Corporate E-Learning ROI Without Vanity Metrics',
    excerpt: 'How to track business outcomes that executives and managers actually trust.'
  }
];
</script>

<style scoped>
.blog-page {
  width: 100%;
  padding-top: 80px;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;
}

.blog-hero {
  background: var(--gradient-hero);
  color: white;
  padding: 5rem 0 4rem;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.8rem;
}

h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.2;
  margin-bottom: 1rem;
}

.lead {
  font-size: 1.05rem;
  max-width: 760px;
  line-height: 1.7;
}

.blog-listing {
  padding: 3.5rem 0;
  background: var(--bg-light);
}

.post-card {
  background: var(--bg-white);
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.post-tag {
  display: inline-block;
  border-radius: 999px;
  padding: 0.25rem 0.7rem;
  background: rgba(var(--primary-rgb), 0.12);
  color: var(--primary-dark);
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
}

h2 {
  font-size: 1.25rem;
  margin-bottom: 0.6rem;
}

.coming-soon {
  display: inline-block;
  margin-top: 0.8rem;
  font-size: 0.85rem;
  color: var(--text-secondary);
}
</style>
