<template>
  <section id="b2b-services" class="b2b-section">
    <div class="container">
      <div class="section-header">
        <div class="section-badge">🤝 B2B Agency Services</div>
        <h2 class="section-title">Front-End Engineering &amp; Digital Solutions for Agencies</h2>
        <p class="section-description">
          We partner with agencies and enterprises as a white-label development arm — delivering high-performance web applications, component libraries, and full-stack digital products on time and on spec.
        </p>
      </div>

      <div class="b2b-grid">
        <!-- Front-End Engineering -->
        <article class="b2b-card">
          <div class="b2b-card-icon" style="background: linear-gradient(135deg, #6366f1 0%, #22d3ee 100%);">
            <span>⚡</span>
          </div>
          <h3 class="b2b-card-title">Front-End Engineering</h3>
          <p class="b2b-card-desc">
            Production-grade Vue.js (Composition API), React, and Next.js applications. Pixel-perfect UI implementation, state management, and responsive design — built to your design system and component library.
          </p>
          <ul class="b2b-tech-pills">
            <li>Vue.js / Composition API</li>
            <li>React · Next.js</li>
            <li>Tailwind CSS</li>
            <li>TypeScript</li>
          </ul>
        </article>

        <!-- Agency Sub-Contracting -->
        <article class="b2b-card">
          <div class="b2b-card-icon" style="background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);">
            <span>🔄</span>
          </div>
          <h3 class="b2b-card-title">Agency Sub-Contracting</h3>
          <p class="b2b-card-desc">
            White-label overflow development capacity for digital agencies. We integrate into your workflow — Jira, Slack, Figma, GitHub — and deliver clean, documented code that feels like it came from your own team.
          </p>
          <ul class="b2b-tech-pills">
            <li>Overflow Capacity</li>
            <li>White-Label Delivery</li>
            <li>Figma-to-Code</li>
            <li>Code Reviews &amp; QA</li>
          </ul>
        </article>

        <!-- Custom Web Applications -->
        <article class="b2b-card">
          <div class="b2b-card-icon" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%);">
            <span>🖥️</span>
          </div>
          <h3 class="b2b-card-title">Custom Web Applications</h3>
          <p class="b2b-card-desc">
            Full-stack web applications with modern front-ends and scalable backends. SaaS dashboards, client portals, content platforms, and internal tools — built with the right tech stack for your specific requirements.
          </p>
          <ul class="b2b-tech-pills">
            <li>SaaS Dashboards</li>
            <li>Client Portals</li>
            <li>API Integration</li>
            <li>Headless CMS</li>
          </ul>
        </article>

        <!-- Performance & Modernization -->
        <article class="b2b-card">
          <div class="b2b-card-icon" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
            <span>🚀</span>
          </div>
          <h3 class="b2b-card-title">Performance &amp; Modernization</h3>
          <p class="b2b-card-desc">
            Legacy app modernization, performance audits, Core Web Vitals optimization, and framework migrations. Turn slow, dated applications into fast, maintainable modern web experiences.
          </p>
          <ul class="b2b-tech-pills">
            <li>Core Web Vitals</li>
            <li>Framework Migration</li>
            <li>Bundle Optimization</li>
            <li>Accessibility (a11y)</li>
          </ul>
        </article>
      </div>

      <div class="b2b-cta">
        <p class="b2b-cta-text">
          Looking for a reliable development partner to scale your agency's delivery capacity?
        </p>
        <div class="b2b-cta-actions">
          <router-link
            to="/contact#contact-form"
            class="btn-b2b-primary"
            data-track-event="cta_click"
            data-track-category="b2b_services"
            data-track-label="partner_with_us"
          >
            Partner With Us &rarr;
          </router-link>
          <a
            href="#products"
            class="btn-b2b-secondary"
            data-track-event="cta_click"
            data-track-category="b2b_services"
            data-track-label="view_our_products"
          >
            View Our Products
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'B2BAgencySection'
}
</script>

<style scoped>
.b2b-section {
  padding: var(--section-spacing) 0;
  background: var(--bg-white);
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-badge {
  display: inline-block;
  padding: 0.4rem 1.25rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  color: #6366f1;
  background: rgba(99, 102, 241, 0.08);
  border: 1px solid rgba(99, 102, 241, 0.15);
  margin-bottom: 1rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 1rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.section-description {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 640px;
  margin: 0 auto;
}

/* Grid */
.b2b-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto 3rem;
}

/* Cards */
.b2b-card {
  background: var(--bg-light);
  border-radius: 16px;
  padding: 2rem 1.75rem;
  border: 1px solid var(--text-light);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

:root[data-theme="black"] .b2b-card {
  border-color: #333;
}

.b2b-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
  border-color: rgba(99, 102, 241, 0.25);
}

.b2b-card-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  margin-bottom: 1.25rem;
  flex-shrink: 0;
}

.b2b-card-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.65rem;
}

.b2b-card-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.65;
  margin-bottom: 1.25rem;
  flex-grow: 1;
}

/* Tech Pills */
.b2b-tech-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.b2b-tech-pills li {
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  background: rgba(99, 102, 241, 0.08);
  color: #6366f1;
  border: 1px solid rgba(99, 102, 241, 0.12);
}

/* CTA */
.b2b-cta {
  text-align: center;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid rgba(99, 102, 241, 0.1);
}

.b2b-cta-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
}

.b2b-cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-b2b-primary {
  padding: 0.85rem 2rem;
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.3s;
  cursor: pointer;
}

.btn-b2b-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
}

.btn-b2b-secondary {
  padding: 0.85rem 2rem;
  background: transparent;
  color: #6366f1;
  border: 2px solid rgba(99, 102, 241, 0.25);
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s;
  cursor: pointer;
}

.btn-b2b-secondary:hover {
  background: rgba(99, 102, 241, 0.05);
  border-color: rgba(99, 102, 241, 0.5);
}

@media (max-width: 768px) {
  .b2b-grid {
    grid-template-columns: 1fr;
  }

  .b2b-cta {
    padding: 1.5rem 1.25rem;
  }

  .b2b-cta-actions {
    flex-direction: column;
  }
}
</style>
