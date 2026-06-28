<template>
  <section id="solutions" class="solutions">
    <div class="container">
      <div class="section-header">
        <div class="section-badge">⚙️ MediaSurf Solutions</div>
        <h2 class="section-title">Custom LMS Development &amp; Corporate Learning Services</h2>
        <p class="section-description">
          Beyond our products, we build custom learning platforms, design curriculum, and deliver end-to-end corporate training solutions tailored to your organization.
        </p>
      </div>

      <div class="tool-spotlight">
        <div class="spotlight-content">
          <p class="spotlight-label">AI + Human Expertise</p>
          <h3>Custom Learning Platforms, Powered by AI</h3>
          <p>
            Combine our AI course generator with custom LMS development, instructional design, and learning analytics. We build the platform, you own the results.
          </p>
          <div class="spotlight-points">
            <span>Custom LMS Engineering</span>
            <span>AI Course Generation Integration</span>
            <span>Instructional Design Consulting</span>
          </div>
        </div>
        <div class="spotlight-cta-group">
          <router-link
            to="/services/custom-lms-development"
            class="spotlight-cta"
            data-track-event="cta_click"
            data-track-category="solutions"
            data-track-label="custom_lms_development"
          >
            Custom LMS Development
          </router-link>
          <router-link
            to="/contact#contact-form"
            class="spotlight-cta secondary"
            data-track-event="cta_click"
            data-track-category="solutions"
            data-track-label="book_consultation"
          >
            Book a Consultation
          </router-link>
        </div>
      </div>

      <div class="solutions-grid">
        <div class="solution-card" v-for="(solution, index) in solutions" :key="index">
          <div class="solution-image" :style="{ background: solution.gradient }">
            <div class="solution-hero">
              <div class="solution-hero-icon">{{ solution.icon }}</div>
              <div class="solution-hero-label">{{ solution.category }}</div>
            </div>
            <div class="solution-badge">{{ solution.level }}</div>
          </div>
          <div class="solution-content">
            <div class="solution-meta">
              <span class="solution-category">{{ solution.category }}</span>
              <span class="solution-rating">⭐ {{ solution.rating }}</span>
            </div>
            <h3 class="solution-title">{{ solution.title }}</h3>
            <p class="solution-description">{{ solution.description }}</p>
            <div class="solution-stats">
              <div class="stat-item">
                <span class="stat-icon">👥</span>
                <span>{{ solution.students }}</span>
              </div>
              <div class="stat-item">
                <span class="stat-icon">⏱️</span>
                <span>{{ solution.duration }}</span>
              </div>
              <div class="stat-item">
                <span class="stat-icon">📹</span>
                <span>{{ solution.lessons }} lessons</span>
              </div>
            </div>
            <div class="solution-footer">
              <div class="solution-price">
                <span class="price-current">${{ solution.price }}</span>
                <span class="price-original" v-if="solution.originalPrice">${{ solution.originalPrice }}</span>
              </div>
              <router-link
                :to="solution.link"
                class="btn-enroll"
              >
                {{ solution.link ? 'View Service' : 'Get Quote' }}
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="solutions-cta">
        <router-link to="/contact#contact-form" class="btn-view-all">Discuss Your Project →</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CoursesSection',
  data() {
    return {
      solutions: [
        {
          title: 'Custom LMS Development',
          description: 'Enterprise LMS platform design with AI integration, secure access controls, learner analytics, and scalable architecture for corporate training.',
          category: 'LMS Engineering',
          icon: '🧩',
          level: 'Enterprise',
          rating: '5.0',
          students: '50+ Clients',
          duration: '8-12 weeks',
          lessons: 'Custom Scope',
          price: 'Custom',
          originalPrice: null,
          link: '/services/custom-lms-development',
          gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
          title: 'Employee Onboarding Program',
          description: 'Structured onboarding with role-based pathways, AI-generated content, progress milestones, and manager dashboards to reduce ramp-up time.',
          category: 'Corporate Training',
          icon: '👋',
          level: 'All Levels',
          rating: '4.9',
          students: '80+ Clients',
          duration: '4-6 weeks',
          lessons: '20-40 modules',
          price: 'Custom',
          originalPrice: null,
          link: '/services/employee-onboarding',
          gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
        {
          title: 'Interactive E-Learning Modules',
          description: 'Engaging modules with multimedia, scenario-based interactions, AI-generated content, and hands-on activities for any domain.',
          category: 'Content Development',
          icon: '🎓',
          level: 'Custom',
          rating: '4.8',
          students: '120+ Clients',
          duration: '2-8 weeks',
          lessons: 'Per module',
          price: 'Custom',
          originalPrice: null,
          link: '/contact#contact-form',
          gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
        },
        {
          title: 'Technical Skills Training',
          description: 'Technical capability programs for developers, operations teams, and customer-facing roles. Hands-on labs and real-world scenarios.',
          category: 'Technical Training',
          icon: '💻',
          level: 'Intermediate',
          rating: '4.9',
          students: '65+ Clients',
          duration: '6-10 weeks',
          lessons: '30-50 modules',
          price: 'Custom',
          originalPrice: null,
          link: '/contact#contact-form',
          gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
        },
        {
          title: 'Compliance & Safety Training',
          description: 'Industry-specific compliance with certification tracking, automated regulatory updates, audit-ready reporting, and expiry management.',
          category: 'Compliance',
          icon: '✅',
          level: 'Required',
          rating: '4.7',
          students: '95+ Clients',
          duration: '3-6 weeks',
          lessons: '15-25 modules',
          price: 'Custom',
          originalPrice: null,
          link: '/contact#contact-form',
          gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
        },
        {
          title: 'Quiz & Assessment Platform',
          description: 'Advanced assessments with adaptive testing, AI-generated question banks, instant feedback, and detailed learner analytics dashboards.',
          category: 'Assessment',
          icon: '📝',
          level: 'All Levels',
          rating: '5.0',
          students: '70+ Clients',
          duration: '3-5 weeks',
          lessons: 'Custom Banks',
          price: 'Custom',
          originalPrice: null,
          link: '/contact#contact-form',
          gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
        },
        {
          title: 'AI-Enabled Learning Analytics',
          description: 'Analytics dashboards with AI-powered skills gap detection, engagement metrics, and predictive progress insights across all training tracks.',
          category: 'AI & Analytics',
          icon: '🤖',
          level: 'Enterprise',
          rating: '4.9',
          students: '40+ Clients',
          duration: '6-8 weeks',
          lessons: 'Custom Scope',
          price: 'Custom',
          originalPrice: null,
          link: '/contact#contact-form',
          gradient: 'linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)'
        },
        {
          title: 'Instructional Design Consulting',
          description: 'Research-backed learning strategy, curriculum architecture, and assessment validity consulting for complex training initiatives.',
          category: 'Consulting',
          icon: '🧠',
          level: 'Strategic',
          rating: '4.8',
          students: '30+ Clients',
          duration: '4-6 weeks',
          lessons: 'Custom Scope',
          price: 'Custom',
          originalPrice: null,
          link: '/contact#contact-form',
          gradient: 'linear-gradient(135deg, #0ea5e9 0%, var(--primary) 100%)'
        }
      ]
    }
  }
}
</script>

<style scoped>
.solutions {
  padding: var(--section-spacing) 0;
  background: var(--bg-white);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.tool-spotlight {
  background: linear-gradient(140deg, #0b122a 0%, #101c44 60%, #0f766e 100%);
  color: #f8fbff;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  align-items: center;
  padding: 1.6rem;
  margin-bottom: 2.2rem;
  box-shadow: 0 20px 44px rgba(11, 18, 42, 0.22);
}

.spotlight-label {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.72rem;
  opacity: 0.82;
  margin-bottom: 0.45rem;
}

.spotlight-content h3 {
  font-size: 1.55rem;
  line-height: 1.2;
  margin-bottom: 0.6rem;
}

.spotlight-content p {
  color: rgba(232, 243, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 0.8rem;
  max-width: 720px;
}

.spotlight-points {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.spotlight-points span {
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-size: 0.78rem;
}

.spotlight-cta {
  text-decoration: none;
  color: #0f2d5c;
  font-weight: 700;
  background: #f8fbff;
  padding: 0.78rem 1.2rem;
  border-radius: 10px;
  white-space: nowrap;
  flex-shrink: 0;
}

.spotlight-cta-group {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.spotlight-cta.secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #f8fbff;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.spotlight-cta:hover {
  transform: translateY(-2px);
}


/* Typography styles inherited from global section-title and section-description */

.solutions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.solution-card {
  background: var(--bg-white);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  cursor: pointer;
  border: 1px solid #e5e7eb;
}

.solution-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.solution-image {
  height: 200px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.solution-image::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.22'%3E%3Cpath d='M60 0v120M0 60h120'/%3E%3C/g%3E%3Ccircle cx='60' cy='60' r='16' stroke='%23ffffff' stroke-opacity='0.25' fill='none'/%3E%3C/svg%3E");
  background-size: 120px 120px;
  opacity: 0.35;
  pointer-events: none;
}

.solution-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  color: white;
  text-align: center;
  padding: 1.5rem;
  position: relative;
  z-index: 1;
}

.solution-hero-icon {
  width: 64px;
  height: 64px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  backdrop-filter: blur(8px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.solution-hero-label {
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.solution-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.95);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.85rem;
  color: #1a1a1a;
}

.solution-content {
  padding: 1.5rem;
}

.solution-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.solution-category {
  background: var(--bg-light);
  color: var(--primary);
  padding: 0.3rem 0.8rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
}

.solution-rating {
  font-weight: 600;
  color: var(--text-primary);
}

.solution-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.8rem;
  line-height: 1.3;
}

.solution-description {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
  margin-bottom: 1.2rem;
}

.solution-stats {
  display: flex;
  gap: 1.5rem;
  padding: 1rem 0;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 1.2rem;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.stat-icon {
  font-size: 1rem;
}

.solution-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.solution-price {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}

.price-current {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--primary);
}

.price-original {
  font-size: 1.1rem;
  color: #9ca3af;
  text-decoration: line-through;
}

.btn-enroll {
  padding: 0.7rem 1.5rem;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: var(--text-on-primary);
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.btn-enroll:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.4);
}

.solutions-cta {
  text-align: center;
  margin-top: 3rem;
}

.btn-view-all {
  padding: 1rem 2.5rem;
  background: white;
  color: var(--primary);
  border: 2px solid var(--primary);
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

:root[data-theme="black"] .btn-view-all {
  background: transparent;
  color: white;
  border: 2px solid white;
}

:root[data-theme="black"] .btn-view-all:hover {
  background: white;
  color: black;
}

.btn-view-all:hover {
  background: var(--primary);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(var(--primary-rgb), 0.3);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .tool-spotlight {
    flex-direction: column;
    align-items: flex-start;
  }

  .spotlight-content h3 {
    font-size: 1.25rem;
  }

  .courses-grid {
    grid-template-columns: 1fr;
  }
}
</style>
