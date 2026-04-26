<template>
  <div class="service-page">
    <ServiceSeoSchema
      schema-id="custom-lms-development"
      service-name="Custom LMS Development"
      service-type="LMS Development"
      service-url="https://mediasurf.ca/services/custom-lms-development"
      service-description="Custom LMS Development services in Ontario for enterprise training, onboarding, analytics, and scalable corporate e-learning programs."
    />
    <section class="hero-section">
      <div class="container">
        <p class="eyebrow">Service</p>
        <h1>Custom LMS Development for Corporate E-Learning</h1>
        <p class="lead">
          We design and build secure, scalable LMS platforms for Ontario organizations that
          need measurable corporate training outcomes, onboarding workflows, and compliance visibility.
        </p>
        <router-link to="/contact#contact-form" class="cta-btn">Request a Custom LMS Quote</router-link>
      </div>
    </section>

    <section class="content-section">
      <div class="container grid">
        <article class="card">
          <h2>What You Get</h2>
          <ul>
            <li>Role-based access, teams, and learner groups</li>
            <li>Progress tracking, reporting, and learning analytics dashboards</li>
            <li>SCORM/xAPI-ready course delivery for enterprise training libraries</li>
            <li>Single sign-on integrations with your existing systems</li>
            <li>Mobile-responsive learner experience for hybrid teams</li>
          </ul>
        </article>

        <article class="card">
          <h2>Typical Delivery Scope</h2>
          <p>
            Most Custom LMS Development engagements run in phased milestones over 8 to 12 weeks,
            with discovery, UX architecture, core build, QA, and launch support.
          </p>
          <h3>Best Fit</h3>
          <p>
            Organizations replacing fragmented tools or launching a centralized Corporate E-Learning platform.
          </p>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import ServiceSeoSchema from '../components/ServiceSeoSchema.vue';
</script>

<style scoped>
.service-page {
  width: 100%;
  padding-top: 80px;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-section {
  background: var(--gradient-hero);
  padding: 5rem 0 4rem;
  color: white;
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
  margin-bottom: 1.8rem;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1.5rem;
  border-radius: 10px;
  background: white;
  color: var(--primary);
  text-decoration: none;
  font-weight: 700;
}

.content-section {
  padding: 3.5rem 0;
  background: var(--bg-light);
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
}

.card {
  background: var(--bg-white);
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 1.5rem;
}

h2 {
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
}

h3 {
  font-size: 1.1rem;
  margin: 1rem 0 0.4rem;
}

ul {
  margin: 0;
  padding-left: 1.25rem;
  line-height: 1.8;
}

@media (max-width: 860px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
