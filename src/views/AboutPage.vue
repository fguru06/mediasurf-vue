<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            About MediaSurf Technologies
          </h1>
          <p class="hero-description">
            We're a team of passionate developers and learning experts dedicated to 
            transforming corporate education through innovative technology solutions.
          </p>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="mission-vision-section">
      <div class="container">
        <div class="cards-grid">
          <div class="mission-card">
            <div class="card-header">
              <div class="icon-wrapper mission-icon">
                <span class="icon">🎯</span>
              </div>
              <h2 class="card-title">Our Mission</h2>
            </div>
            <div class="card-content">
              <p>
                To empower organizations with world-class e-learning solutions and web 
                technologies that enhance employee development, streamline onboarding, 
                and create engaging educational experiences that drive business success.
              </p>
            </div>
          </div>

          <div class="vision-card">
            <div class="card-header">
              <div class="icon-wrapper vision-icon">
                <span class="icon">👁️</span>
              </div>
              <h2 class="card-title">Our Vision</h2>
            </div>
            <div class="card-content">
              <p>
                To be the leading partner for corporate learning transformation, recognized 
                for innovation, quality, and the measurable impact we create in organizational 
                learning and development across industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Image Section -->
    <section class="team-section">
      <div class="container">
        <div class="team-grid">
          <div class="team-content">
            <h2 class="section-title">Who We Are</h2>
            <p class="text-content">
              MediaSurf Technologies is a specialized consulting firm that bridges the gap 
              between technology and corporate learning. Our team brings together expertise 
              in web development, instructional design, and educational technology.
            </p>
            <p class="text-content">
              We work on a contractual basis with organizations of all sizes, from startups 
              to Fortune 500 companies, delivering customized solutions that meet their 
              unique learning and development challenges.
            </p>
            <div class="stats-grid">
              <div class="stat-card">
                <div class="stat-number">10+</div>
                <div class="stat-label">Years Experience</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">50+</div>
                <div class="stat-label">Expert Team</div>
              </div>
            </div>
          </div>
          <div class="team-image">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1080&h=720&fit=crop" 
              alt="Our team"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Core Values</h2>
          <p class="section-subtitle">The principles that guide everything we do</p>
        </div>

        <div class="values-grid">
          <div v-for="(value, index) in values" :key="index" class="value-card">
            <div class="value-icon-wrapper">
              <span class="value-icon">{{ value.icon }}</span>
            </div>
            <h3 class="value-title">{{ value.title }}</h3>
            <p class="value-description">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Expertise Section -->
    <section class="expertise-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Expertise</h2>
          <p class="section-subtitle">Technologies and solutions we specialize in</p>
        </div>

        <div class="expertise-grid">
          <div v-for="(item, index) in expertise" :key="index" class="expertise-item">
            <div class="bullet"></div>
            <span>{{ item }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Let's Work Together</h2>
          <p class="cta-description">
            Ready to elevate your corporate learning programs? Get in touch with us today.
          </p>
          <a href="#contact" class="cta-button">
            Contact Us
            <span class="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const values = ref([
  {
    icon: '💡',
    title: 'Innovation',
    description: 'We stay ahead of the curve with cutting-edge technologies and creative solutions.',
  },
  {
    icon: '🛡️',
    title: 'Quality',
    description: 'Excellence in every project, ensuring the highest standards of delivery.',
  },
  {
    icon: '👥',
    title: 'Collaboration',
    description: 'Working closely with clients to understand and exceed their expectations.',
  },
  {
    icon: '🏆',
    title: 'Excellence',
    description: 'Committed to delivering outstanding results that drive measurable impact.',
  },
]);

const expertise = ref([
  'Learning Management Systems (LMS)',
  'Interactive Course Development',
  'Custom Web Applications',
  'Mobile-Responsive Design',
  'Assessment & Quiz Platforms',
  'Video-Based Learning',
  'Gamification Solutions',
  'API Integration',
]);
</script>

<style scoped>
.about-page {
  width: 100%;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Hero Section */
.hero-section {
  background: #f5f7fa;
  padding: 6rem 0;
}

.hero-content {
  text-align: center;
  max-width: 768px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-description {
  font-size: 1.15rem;
  color: #6b7280;
  line-height: 1.7;
  max-width: 900px;
  margin: 0 auto;
}

/* Mission & Vision Section */
.mission-vision-section {
  padding: 5rem 0;
  background: white;
}

.cards-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

.mission-card,
.vision-card {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.mission-card {
  border: 2px solid #dbeafe;
}

.vision-card {
  border: 2px solid #cffafe;
}

.card-header {
  margin-bottom: 1.5rem;
}

.icon-wrapper {
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.mission-icon {
  background: #dbeafe;
}

.vision-icon {
  background: #cffafe;
}

.icon {
  font-size: 1.5rem;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
}

.card-content p {
  color: #4b5563;
  line-height: 1.7;
}

/* Team Section */
.team-section {
  padding: 5rem 0;
  background: #f9fafb;
}

.team-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
}

.text-content {
  font-size: 1.125rem;
  color: #4b5563;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 2rem;
}

.stat-card {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.stat-number {
  font-size: 1.875rem;
  font-weight: 700;
  color: #2563eb;
  margin-bottom: 0.25rem;
}

.stat-label {
  color: #4b5563;
  font-size: 0.875rem;
}

.team-image {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.team-image img {
  width: 100%;
  height: auto;
  display: block;
}

/* Values Section */
.values-section {
  padding: 5rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-subtitle {
  font-size: 1.25rem;
  color: #4b5563;
  max-width: 672px;
  margin: 1rem auto 0;
}

.values-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.value-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 2rem;
  text-align: center;
  transition: box-shadow 0.3s;
}

.value-card:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.value-icon-wrapper {
  width: 4rem;
  height: 4rem;
  background: linear-gradient(to bottom right, #dbeafe, #cffafe);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.value-icon {
  font-size: 2rem;
}

.value-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
}

.value-description {
  color: #4b5563;
  line-height: 1.6;
}

/* Expertise Section */
.expertise-section {
  padding: 5rem 0;
  background: #f9fafb;
}

.expertise-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  max-width: 1024px;
  margin: 0 auto;
}

.expertise-item {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: border-color 0.3s;
}

.expertise-item:hover {
  border-color: #93c5fd;
}

.bullet {
  width: 0.5rem;
  height: 0.5rem;
  background: #2563eb;
  border-radius: 50%;
  flex-shrink: 0;
}

.expertise-item span {
  color: #374151;
}

/* CTA Section */
.cta-section {
  padding: 5rem 0;
  background: linear-gradient(to right, #2563eb, #06b6d4);
  color: white;
}

.cta-content {
  text-align: center;
  max-width: 896px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.cta-description {
  font-size: 1.25rem;
  color: #dbeafe;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: white;
  color: #2563eb;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
}

.cta-button:hover {
  background: #f3f4f6;
  transform: translateY(-2px);
}

.arrow {
  font-size: 1rem;
  transition: transform 0.3s;
}

.cta-button:hover .arrow {
  transform: translateX(4px);
}

/* Responsive */
@media (min-width: 640px) {
  .hero-title {
    font-size: 3rem;
  }

  .container {
    padding: 0 1.5rem;
  }
}

@media (min-width: 768px) {
  .cards-grid {
    grid-template-columns: 1fr 1fr;
  }

  .team-grid {
    grid-template-columns: 1fr 1fr;
  }

  .values-grid {
    grid-template-columns: 1fr 1fr;
  }

  .expertise-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 3.5rem;
  }

  .container {
    padding: 0 2rem;
  }

  .values-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .expertise-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .cta-title {
    font-size: 2.5rem;
  }
}
</style>
