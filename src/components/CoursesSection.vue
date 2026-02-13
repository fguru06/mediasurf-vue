<template>
  <section id="courses" class="courses">
    <div class="container">
      <div class="section-header">
        <div class="section-badge">🧭 Our Services</div>
        <h2 class="section-title">Tailored Solutions for Your Business</h2>
        <p class="section-description">
          Comprehensive training development services designed to elevate your team
        </p>
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
              <button class="btn-enroll">Get Quote</button>
            </div>
          </div>
        </div>
      </div>

      <div class="courses-cta">
        <button class="btn-view-all">View All Services →</button>
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
          description: 'Full-featured learning management system tailored to your organization with user management, progress tracking, and analytics.',
          category: 'Web Development',
          icon: '🧩',
          level: 'Enterprise',
          rating: '5.0',
          students: '50+ Clients',
          duration: '8-12 weeks',
          lessons: 'Custom Scope',
          price: 'Custom',
          originalPrice: null,
          gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
          title: 'Employee Onboarding Program',
          description: 'Complete onboarding solution including welcome modules, company culture training, role-specific content, and interactive quizzes.',
          category: 'Corporate Training',
          icon: '👋',
          level: 'All Levels',
          rating: '4.9',
          students: '80+ Clients',
          duration: '4-6 weeks',
          lessons: '20-40 modules',
          price: 'Custom',
          originalPrice: null,
          gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
        {
          title: 'Interactive E-Learning Modules',
          description: 'Engaging multimedia content with videos, animations, simulations, and gamification elements for any topic.',
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
          description: 'Comprehensive training programs for software development, web technologies, and IT skills customized for your team.',
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
          description: 'Predictive insights, skills gap detection, and automated coaching recommendations for teams.',
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
          gradient: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)'
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


/* Typography styles inherited from global section-title and section-description */

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.course-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  cursor: pointer;
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
  background: #eff6ff;
  color: #2563eb;
  padding: 0.3rem 0.8rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
}

.course-rating {
  font-weight: 600;
  color: #1a1a1a;
}

.course-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.8rem;
  line-height: 1.3;
}

.course-description {
  color: #6b7280;
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
  color: #6b7280;
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
  color: #2563eb;
}

.price-original {
  font-size: 1.1rem;
  color: #9ca3af;
  text-decoration: line-through;
}

.btn-enroll {
  padding: 0.7rem 1.5rem;
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-enroll:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
}

.courses-cta {
  text-align: center;
  margin-top: 3rem;
}

.btn-view-all {
  padding: 1rem 2.5rem;
  background: white;
  color: #2563eb;
  border: 2px solid #2563eb;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-view-all:hover {
  background: #2563eb;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .courses-grid {
    grid-template-columns: 1fr;
  }
}
</style>
