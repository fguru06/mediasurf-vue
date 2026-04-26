<template>
  <section id="features" class="features">
    <div class="container">
      <div class="section-header">
        <div class="section-badge">✨ Our Expertise</div>
        <h2 class="section-title">End-to-End Course Development Capabilities</h2>
        <p class="section-description">
          We design learning experiences across technical training, onboarding, compliance, product enablement, and instructor-led programs.
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
          icon: '💻',
          title: 'LMS Platform Engineering',
          description: 'Custom learning platforms with secure roles, integrations, and scalable learner delivery.',
          color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
          icon: '📚',
          title: 'Course Development',
          description: 'Interactive modules, multimedia lessons, and structured learning paths for any subject area.',
          color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
        {
          icon: '🎓',
          title: 'Technical and Product Training',
          description: 'Hands-on skill development programs for software, tools, operations, and product adoption.',
          color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
        },
        {
          icon: '🚀',
          title: 'Employee Onboarding',
          description: 'Streamlined onboarding experiences that get new hires productive faster.',
          color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
        },
        {
          icon: '❓',
          title: 'Assessment and Evaluation',
          description: 'Question banks, adaptive assessments, and rubric-driven evaluation for measurable outcomes.',
          color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
        },
        {
          icon: '📱',
          title: 'Mobile Learning',
          description: 'Responsive design ensuring your training works seamlessly across all devices.',
          color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
        },
        {
          icon: '🤖',
          title: 'Instructor Authoring with Learncraft',
          description: 'Create and edit course content in Learncraft and use live preview to validate learner experience before launch.',
          color: 'linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)'
        },
        {
          icon: '🧠',
          title: 'Learning Strategy and Analytics',
          description: 'Evidence-based planning, learner behavior insights, and performance analytics for continuous improvement.',
          color: 'linear-gradient(135deg, #0ea5e9 0%, var(--primary) 100%)'
        },
        {
          icon: '🎨',
          title: 'Custom Design',
          description: 'Branded learning experiences that align with your company\'s visual identity.',
          color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
        },
        {
          icon: '🔎',
          title: 'Authoring Workflow Automation',
          description: 'Structured publishing workflows and reusable templates that speed up instructor production cycles.',
          color: 'linear-gradient(135deg, #93c5fd 0%, #60a5fa 100%)'
        },
        {
          icon: '📊',
          title: 'Analytics & Reporting',
          description: 'Comprehensive tracking and reporting tools to measure training effectiveness.',
          color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
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
  border: 1px solid #e5e7eb;
  transition: all 0.3s;
  cursor: pointer;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: transparent;
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
