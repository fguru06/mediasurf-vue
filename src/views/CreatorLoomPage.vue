<template>
  <div class="creatorloom-page">
    <section class="hero-section">
      <div class="container">
        <div class="hero-layout">
          <div class="hero-copy">
            <p class="eyebrow">
              <span class="eyebrow-star">★</span> MediaSurf Product
            </p>
            <h1>{{ heroCopy.title }}</h1>
            <p class="lead">{{ heroCopy.description }}</p>

            <div class="hero-actions">
              <a
                href="https://creatorloom.mediasurf.ca"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-primary"
                data-track-event="tool_cta_click"
                data-track-category="tools"
                data-track-label="open_creatorloom"
              >
                Open CreatorLoom Studio
              </a>
              <a
                href="https://creatorloom.mediasurf.ca"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-secondary"
                data-track-event="tool_cta_click"
                data-track-category="tools"
                data-track-label="try_creatorloom"
              >
                Try It Free
              </a>
              <router-link
                to="/contact#contact-form"
                class="btn-outline"
                data-track-event="tool_cta_click"
                data-track-category="tools"
                data-track-label="book_creatorloom_demo"
              >
                Book a Demo
              </router-link>
            </div>

            <div class="variant-note">
              Active copy variant: <strong>{{ activeVariant.toUpperCase() }}</strong>
              <span>Switch with <code>?variant=a</code> or <code>?variant=b</code></span>
            </div>
          </div>

          <div class="hero-product" aria-label="CreatorLoom product preview">
            <div class="cl-hero-visual">
              <div class="cl-hero-frame">
                <div class="cl-hero-label">🎬 AI Video Course Generator</div>
                <div class="cl-hero-mock">
                  <div class="cl-hero-prompt">
                    <span class="cl-prompt-icon">✨</span>
                    <span class="cl-prompt-text">Create a video course on "Digital Marketing Fundamentals"...</span>
                  </div>
                  <div class="cl-hero-progress">
                    <div class="cl-progress-bar"></div>
                    <span>Generating scenes, scripts &amp; visuals...</span>
                  </div>
                  <div class="cl-hero-scenes">
                    <div class="cl-scene" v-for="i in 3" :key="i">
                      <div class="cl-scene-thumb"></div>
                      <div class="cl-scene-info">
                        <span class="cl-scene-title">Scene {{ i }}</span>
                        <span class="cl-scene-dur">{{ i * 1.5 }}s</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="workflow-section">
      <div class="container">
        <h2>How CreatorLoom Works</h2>
        <div class="workflow-grid">
          <article class="workflow-card">
            <p class="step">Step 1</p>
            <h3>Describe Your Course</h3>
            <p>
              Enter your course topic, target audience, and learning objectives. Our AI engine instantly maps out a complete course structure with modules, lessons, and learning paths.
            </p>
          </article>
          <article class="workflow-card">
            <p class="step">Step 2</p>
            <h3>AI Generates Video Content</h3>
            <p>
              CreatorLoom auto-generates video scripts, AI voiceovers, on-screen visuals, animations, and captions — producing a fully polished video course without filming.
            </p>
          </article>
          <article class="workflow-card">
            <p class="step">Step 3</p>
            <h3>Publish &amp; Share Anywhere</h3>
            <p>
              Export your course to any LMS, YouTube, or embed directly on your site. Track learner progress and engagement with built-in analytics.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="features-section">
      <div class="container">
        <h2>Everything You Need to Create Video Courses</h2>
        <div class="features-grid">
          <div class="feature-card">
            <span class="feature-icon">🤖</span>
            <h3>AI Script Generator</h3>
            <p>Auto-generate professional video scripts from your course outline. Our AI writes engaging, instructional narratives tailored to your audience.</p>
          </div>
          <div class="feature-card">
            <span class="feature-icon">🎙️</span>
            <h3>AI Voiceover Engine</h3>
            <p>Choose from dozens of natural-sounding AI voices across multiple languages. Every scene gets a perfectly synced voiceover track.</p>
          </div>
          <div class="feature-card">
            <span class="feature-icon">🎨</span>
            <h3>Visual &amp; Animation Studio</h3>
            <p>Auto-generated on-screen visuals, animated text overlays, transitions, and branded templates — all created by AI to match your content.</p>
          </div>
          <div class="feature-card">
            <span class="feature-icon">📝</span>
            <h3>Scene-by-Scene Editor</h3>
            <p>Fine-tune every scene with a powerful editor. Adjust scripts, swap visuals, re-record voiceovers, and preview in real time.</p>
          </div>
          <div class="feature-card">
            <span class="feature-icon">🌐</span>
            <h3>Multi-Format Export</h3>
            <p>Export as MP4, SCORM, xAPI, or embed directly. Compatible with any LMS, YouTube, Vimeo, or your own platform.</p>
          </div>
          <div class="feature-card">
            <span class="feature-icon">📊</span>
            <h3>Learner Analytics</h3>
            <p>Track video completion rates, quiz scores, and engagement metrics. Know exactly how your audience interacts with your content.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const activeVariant = computed(() => {
  const raw = String(route.query.variant || 'a').toLowerCase();
  return raw === 'b' ? 'b' : 'a';
});

const heroCopy = computed(() => {
  if (activeVariant.value === 'b') {
    return {
      title: 'CreatorLoom — The Ultimate AI Video Course Generator & Authoring Studio',
      description:
        'Create complete video courses with AI. No cameras, no microphones, no editing skills needed. Describe your topic and CreatorLoom generates scripts, voiceovers, visuals, and animations — producing professional video courses ready to publish.'
    };
  }

  return {
    title: 'CreatorLoom — AI Video Course Generator & Authoring Studio',
    description:
      'Fully AI-powered video course generation and authoring. Generate scripts, voiceovers, visuals, and animations for complete video courses — no filming required. Publish to any LMS or platform.'
  };
});
</script>

<style scoped>
.creatorloom-page {
  width: 100%;
  padding-top: 80px;
  background: var(--bg-white);
}

/* Hero */
.hero-section {
  padding: 5rem 0 4rem;
  background: linear-gradient(180deg, rgba(245, 158, 11, 0.05) 0%, var(--bg-white) 100%);
}

.hero-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero-copy {
  max-width: 560px;
}

.eyebrow {
  font-size: 0.85rem;
  font-weight: 600;
  color: #d97706;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.eyebrow-star {
  color: #f59e0b;
}

h1 {
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 1.15;
  color: var(--text-primary);
  margin-bottom: 1.25rem;
}

.lead {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.65;
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.btn-primary {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 10px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(245, 158, 11, 0.35);
}

.btn-secondary {
  background: rgba(245, 158, 11, 0.1);
  color: #d97706;
  padding: 0.8rem 2rem;
  border-radius: 10px;
  font-weight: 700;
  text-decoration: none;
  border: 1px solid rgba(245, 158, 11, 0.25);
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(245, 158, 11, 0.18);
}

.btn-outline {
  background: transparent;
  color: var(--text-secondary);
  padding: 0.8rem 2rem;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid var(--text-light);
  transition: all 0.3s ease;
}

.btn-outline:hover {
  border-color: #d97706;
  color: #d97706;
}

.variant-note {
  font-size: 0.75rem;
  color: var(--text-secondary);
  opacity: 0.6;
}

.variant-note code {
  background: var(--bg-light);
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  font-size: 0.7rem;
}

/* Hero Visual */
.hero-product {
  display: flex;
  justify-content: center;
}

.cl-hero-visual {
  width: 100%;
  max-width: 480px;
}

.cl-hero-frame {
  background: var(--bg-white);
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
}

.cl-hero-label {
  font-size: 0.8rem;
  font-weight: 700;
  color: #d97706;
  margin-bottom: 1rem;
  text-align: center;
}

.cl-hero-mock {
  background: var(--bg-light);
  border-radius: 12px;
  padding: 1.25rem;
}

.cl-hero-prompt {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--bg-white);
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
}

.cl-prompt-icon {
  font-size: 1.1rem;
}

.cl-prompt-text {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.cl-hero-progress {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  font-size: 0.8rem;
  color: #d97706;
}

.cl-progress-bar {
  flex: 1;
  height: 4px;
  background: #e5e7eb;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
}

.cl-progress-bar::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 65%;
  background: linear-gradient(90deg, #f59e0b, #d97706);
  border-radius: 2px;
  animation: cl-progress 2s ease-in-out infinite;
}

@keyframes cl-progress {
  0%, 100% { width: 55%; }
  50% { width: 75%; }
}

.cl-hero-scenes {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.cl-scene {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--bg-white);
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 0.6rem 0.75rem;
}

.cl-scene-thumb {
  width: 48px;
  height: 32px;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(217, 119, 6, 0.1));
  border-radius: 4px;
  flex-shrink: 0;
}

.cl-scene-info {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cl-scene-title {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-primary);
}

.cl-scene-dur {
  font-size: 0.75rem;
  color: var(--text-secondary);
}

/* Workflow */
.workflow-section {
  padding: 5rem 0;
  background: var(--bg-light);
}

.workflow-section h2 {
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 3rem;
  color: var(--text-primary);
}

.workflow-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.workflow-card {
  background: var(--bg-white);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid #e5e7eb;
  text-align: center;
}

.workflow-card .step {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #d97706;
  margin-bottom: 0.75rem;
}

.workflow-card h3 {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.workflow-card p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Features */
.features-section {
  padding: 5rem 0;
}

.features-section h2 {
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 3rem;
  color: var(--text-primary);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.feature-card {
  background: var(--bg-white);
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 1.75rem;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
  border-color: rgba(245, 158, 11, 0.3);
}

.feature-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.feature-card p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.55;
}

@media (max-width: 768px) {
  .hero-layout {
    grid-template-columns: 1fr;
  }

  h1 {
    font-size: 2rem;
  }

  .workflow-grid,
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
