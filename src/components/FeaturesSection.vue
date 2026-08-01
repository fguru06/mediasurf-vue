<template>
  <section id="features" class="features">
    <div class="container">
      <div class="section-header">
        <div class="section-badge">💪 MediaSurf Capabilities</div>
        <h2 class="section-title">Full-Stack Digital Solutions &amp; AI Learning Technology</h2>
        <p class="section-description">
          From custom web applications and front-end engineering to AI course generation and LMS platforms — we deliver end-to-end digital products.
        </p>
      </div>

      <div class="features-grid">
        <div class="feature-card" v-for="(feature, index) in features" :key="index">
          <div class="feature-icon" :style="{ background: feature.color }">
            {{ feature.icon }}
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesSection',
  data() {
    return {
      features: [
        {
          icon: '⚡',
          title: 'Front-End Engineering',
          description: 'Vue.js (Composition API), React, Next.js, and Tailwind CSS — production-grade apps with clean, maintainable code.',
          color: 'linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)'
        },
        {
          icon: '🔄',
          title: 'Agency Sub-Contracting',
          description: 'White-label development capacity integrated into your workflow. We deliver on time, on spec, every time.',
          color: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)'
        },
        {
          icon: '🤖',
          title: 'AI Course Generation',
          description: 'Auto-generate complete courses with modules, lessons, quizzes, and images using LearnCraft AI.',
          color: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
        },
        {
          icon: '✏️',
          title: 'Instructor Authoring',
          description: 'Inline WYSIWYG editing with live preview, slide templates, and instructor review workflows.',
          color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
          icon: '🖥️',
          title: 'Custom Web Applications',
          description: 'SaaS dashboards, client portals, and internal tools built with modern front-end frameworks.',
          color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
        {
          icon: '🧩',
          title: 'Custom LMS Development',
          description: 'Enterprise LMS platforms with AI integration, secure roles, and scalable learner delivery.',
          color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
        },
        {
          icon: '🚀',
          title: 'Performance & Modernization',
          description: 'Core Web Vitals optimization, framework migrations, and legacy app modernization for faster, leaner products.',
          color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
        },
        {
          icon: '📱',
          title: 'Mobile-First Design',
          description: 'Responsive, accessible experiences that work seamlessly across all devices and screen sizes.',
          color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
        },
        {
          icon: '🎨',
          title: 'Branded Experiences',
          description: 'Custom-designed platforms aligned with your company\'s visual identity and design system.',
          color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
        }
      ]
    }
  }
}
</script>

<style scoped>
.features {
  padding: var(--section-spacing) 0;
  background: var(--bg-light);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}


/* Typography styles inherited from global section-title and section-description */

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: var(--bg-white);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--text-light);
  transition: all 0.3s;
  cursor: pointer;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: transparent;
}

:root[data-theme="black"] .feature-card {
  border-color: #333;
}

:root[data-theme="black"] .feature-card:hover {
  box-shadow: 0 20px 40px rgba(255, 255, 255, 0.05);
}

.feature-icon {
  width: 70px;
  height: 70px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.feature-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.8rem;
}

.feature-description {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
