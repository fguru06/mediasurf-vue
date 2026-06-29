<template>
  <div class="service-page">
    <ServiceSeoSchema
      schema-id="employee-onboarding"
      service-name="Employee Onboarding"
      service-type="Corporate Employee Onboarding"
      service-url="https://mediasurf.ca/services/employee-onboarding"
      service-description="Employee onboarding solutions for Ontario organizations with role-based pathways, assessments, and measurable ramp-up performance."
    />
    <section class="hero-section">
      <div class="container">
        <p class="eyebrow">Service</p>
        <h1>Employee Onboarding Programs for Corporate Teams</h1>
        <p class="lead">
          Build a structured onboarding experience that helps new hires become productive faster
          with clear role-based learning paths, assessments, and manager visibility.
        </p>
        <router-link to="/contact#contact-form" class="cta-btn">Plan an Onboarding Program</router-link>
      </div>
    </section>

    <section class="content-section">
      <div class="container grid">
        <article class="card">
          <h2>Program Components</h2>
          <ul>
            <li>Welcome modules and culture orientation pathways</li>
            <li>Role-specific content, checklists, and milestone tracking</li>
            <li>Knowledge checks, quizzes, and completion dashboards</li>
            <li>Manager reporting to monitor progress by cohort</li>
            <li>Continuous onboarding updates as teams and policies evolve</li>
          </ul>
        </article>

        <article class="card">
          <h2>Business Outcomes</h2>
          <p>
            Employee Onboarding programs typically improve time-to-productivity, reduce early attrition,
            and standardize learning quality across locations and departments.
          </p>
          <h3>Best Fit</h3>
          <p>
            Ontario companies scaling quickly, managing distributed teams, or standardizing onboarding quality.
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
  border: 1px solid var(--text-light);
  border-radius: 14px;
  padding: 1.5rem;
}

:root[data-theme="black"] .card {
  border-color: #333;
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
