<template>
  <section id="courses" class="courses">
    <div class="container">
      <div class="section-header">
        <div class="section-badge">🧭 Our Services</div>
        <h2 class="section-title">Course Development and Learning Systems for Every Team</h2>
        <p class="section-description">
          Authoring, course training development, LMS, and analytics for complete learning operations.
        </p>
      </div>

      <div class="tool-spotlight">
        <div class="spotlight-content">
          <p class="spotlight-label">In-House Platform</p>
          <h3>From Slide Authoring to Learncraft Delivery</h3>
          <p>
            Start with our first slide-based presentation authoring tool to create multimedia lessons,
            export the package, then import and preview it in Learncraft LMS before release.
          </p>
          <div class="spotlight-points">
            <span>Slide Authoring and Multimedia Export</span>
            <span>Import into Learncraft LMS</span>
            <span>Instructor Edit and Live Preview</span>
          </div>
        </div>
        <div class="spotlight-cta-group">
          <a
            href="https://pp-ai-tool.mediasurf.ca/"
            target="_blank"
            rel="noopener noreferrer"
            class="spotlight-cta"
            data-track-event="tool_cta_click"
            data-track-category="courses"
            data-track-label="open_presentation_authoring"
          >
            Launch Authoring Tool
          </a>
          <router-link
            to="/learncraft"
            class="spotlight-cta secondary"
            data-track-event="tool_cta_click"
            data-track-category="courses"
            data-track-label="view_learncraft_workflow"
          >
            Learncraft Workflow
          </router-link>
        </div>
      </div>

      <div class="courses-grid">
        <div class="course-card" v-for="(course, index) in courses" :key="index">
          <div class="course-image" :style="{ background: course.gradient }">
            <div class="course-hero">
              <div class="course-hero-icon">{{ course.icon }}</div>
              <div class="course-hero-label">{{ course.category }}</div>
            </div>
            <div class="course-badge">{{ course.level }}</div>
          </div>
          <div class="course-content">
            <div class="course-meta">
              <span class="course-category">{{ course.category }}</span>
              <span class="course-rating">⭐ {{ course.rating }}</span>
            </div>
            <h3 class="course-title">{{ course.title }}</h3>
            <p class="course-description">{{ course.description }}</p>
            <div class="course-stats">
              <div class="stat-item">
                <span class="stat-icon">👥</span>
                <span>{{ course.students }}</span>
              </div>
              <div class="stat-item">
                <span class="stat-icon">⏱️</span>
                <span>{{ course.duration }}</span>
              </div>
              <div class="stat-item">
                <span class="stat-icon">📹</span>
                <span>{{ course.lessons }} lessons</span>
              </div>
            </div>
            <div class="course-footer">
              <div class="course-price">
                <span class="price-current">${{ course.price }}</span>
                <span class="price-original" v-if="course.originalPrice">${{ course.originalPrice }}</span>
              </div>
              <component
                :is="course.link && course.link.startsWith('http') ? 'a' : 'router-link'"
                :href="course.link && course.link.startsWith('http') ? course.link : null"
                :target="course.link && course.link.startsWith('http') ? '_blank' : null"
                :rel="course.link && course.link.startsWith('http') ? 'noopener noreferrer' : null"
                :to="course.link && !course.link.startsWith('http') ? course.link : null"
                class="btn-enroll"
              >
                {{ course.link ? 'View Service' : 'Get Quote' }}
              </component>
            </div>
          </div>
        </div>
      </div>

      <div class="courses-cta">
        <router-link to="/#courses" class="btn-view-all">View All Services →</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CoursesSection',
  data() {
    return {
      courses: [
        {
          title: 'Custom LMS Development',
          description: 'Enterprise LMS platform design with secure access controls, learner analytics, and integration-ready architecture for corporate training.',
          category: 'Web Development',
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
          description: 'Structured onboarding pathways with role-specific modules, progress milestones, and manager reporting to reduce time-to-productivity.',
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
          description: 'Engaging modules with multimedia, scenario-based interactions, and practical activities for any course domain.',
          category: 'E-Learning Content',
          icon: '🎓',
          level: 'Custom',
          rating: '4.8',
          students: '120+ Clients',
          duration: '2-8 weeks',
          lessons: 'Per module',
          price: 'Custom',
          originalPrice: null,
          gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
        },
        {
          title: 'Technical Skills Training',
          description: 'Technical and product capability programs tailored for developers, operations teams, and customer-facing roles.',
          category: 'Technical Training',
          icon: '💻',
          level: 'Intermediate',
          rating: '4.9',
          students: '65+ Clients',
          duration: '6-10 weeks',
          lessons: '30-50 modules',
          price: 'Custom',
          originalPrice: null,
          gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
        },
        {
          title: 'Compliance & Safety Training',
          description: 'Industry-specific compliance training with certification tracking, regulatory updates, and automated reporting.',
          category: 'Compliance',
          icon: '✅',
          level: 'Required',
          rating: '4.7',
          students: '95+ Clients',
          duration: '3-6 weeks',
          lessons: '15-25 modules',
          price: 'Custom',
          originalPrice: null,
          gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
        },
        {
          title: 'Quiz & Assessment Platform',
          description: 'Advanced assessment tools with multiple question types, adaptive testing, instant feedback, and detailed analytics.',
          category: 'Quiz Development',
          icon: '📝',
          level: 'All Levels',
          rating: '5.0',
          students: '70+ Clients',
          duration: '3-5 weeks',
          lessons: 'Custom Banks',
          price: 'Custom',
          originalPrice: null,
          gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
        },
        {
          title: 'AI-Enabled Learning Analytics',
          description: 'Learning analytics dashboards with skills trends, engagement metrics, and progress insights across all course tracks.',
          category: 'AI & Analytics',
          icon: '🤖',
          level: 'Enterprise',
          rating: '4.9',
          students: '40+ Clients',
          duration: '6-8 weeks',
          lessons: 'Custom Scope',
          price: 'Custom',
          originalPrice: null,
          gradient: 'linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)'
        },
        {
          title: 'Learncraft Course Authoring Tool',
          description: 'Our in-house authoring tool where instructors can create, edit, and live preview course content before release.',
          category: 'Authoring Platform',
          icon: '🛠️',
          level: 'Live',
          rating: 'Featured',
          students: 'Instructor Teams',
          duration: 'Immediate Access',
          lessons: 'Create and Edit',
          price: 'Access',
          originalPrice: null,
          link: '/learncraft',
          gradient: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)'
        },
        {
          title: 'Learning Research & Decision Support',
          description: 'Program evaluation, assessment validity, and research-backed strategy for complex learning decisions.',
          category: 'Research',
          icon: '🧠',
          level: 'Strategic',
          rating: '4.8',
          students: '30+ Clients',
          duration: '4-6 weeks',
          lessons: 'Custom Scope',
          price: 'Custom',
          originalPrice: null,
          gradient: 'linear-gradient(135deg, #0ea5e9 0%, var(--primary) 100%)'
        }
      ]
    }
  }
}
</script>

<style scoped>
.courses {
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

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.course-card {
  background: var(--bg-white);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  cursor: pointer;
  border: 1px solid #e5e7eb;
}

.course-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.course-image {
  height: 200px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.course-image::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.22'%3E%3Cpath d='M60 0v120M0 60h120'/%3E%3C/g%3E%3Ccircle cx='60' cy='60' r='16' stroke='%23ffffff' stroke-opacity='0.25' fill='none'/%3E%3C/svg%3E");
  background-size: 120px 120px;
  opacity: 0.35;
  pointer-events: none;
}

.course-hero {
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

.course-hero-icon {
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

.course-hero-label {
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

.course-badge {
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

.course-content {
  padding: 1.5rem;
}

.course-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.course-category {
  background: var(--bg-light);
  color: var(--primary);
  padding: 0.3rem 0.8rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
}

.course-rating {
  font-weight: 600;
  color: var(--text-primary);
}

.course-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.8rem;
  line-height: 1.3;
}

.course-description {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
  margin-bottom: 1.2rem;
}

.course-stats {
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

.course-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.course-price {
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

.courses-cta {
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
