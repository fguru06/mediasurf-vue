<template>
  <section id="creatorloom" class="cl-section">
    <div class="container">
      <div class="cl-layout">
        <div class="cl-copy">
          <div class="section-badge">🎬 CreatorLoom</div>
          <h2 class="section-title cl-title">
            AI Video Course<br>
            Generator — Script to<br>
            Screen in Minutes
          </h2>
          <p class="cl-description">
            CreatorLoom is our AI-powered video course generation and authoring platform. Describe your topic, and our engine auto-generates complete video courses — scripts, AI voiceovers, on-screen visuals, and animations — all without filming a single frame.
          </p>

          <div class="cl-capabilities">
            <div class="capability-item">
              <span class="cap-icon">📝</span>
              <div>
                <h4>AI Script &amp; Storyboard Generator</h4>
                <p>Generate professional video scripts and scene-by-scene storyboards from a simple topic description. No writing or instructional design experience needed.</p>
              </div>
            </div>
            <div class="capability-item">
              <span class="cap-icon">🎙️</span>
              <div>
                <h4>Natural AI Voiceovers &amp; Narration</h4>
                <p>Choose from dozens of lifelike AI voices across multiple languages and accents. Every scene gets a perfectly timed, studio-quality voiceover track.</p>
              </div>
            </div>
            <div class="capability-item">
              <span class="cap-icon">🎨</span>
              <div>
                <h4>Auto-Generated Visuals &amp; Animations</h4>
                <p>AI creates on-screen graphics, animated text overlays, transitions, and branded templates — producing polished, professional-looking video content.</p>
              </div>
            </div>
            <div class="capability-item">
              <span class="cap-icon">🚀</span>
              <div>
                <h4>One-Click Export &amp; Multi-Platform Publishing</h4>
                <p>Export as MP4, SCORM, or xAPI. Publish directly to any LMS, YouTube, Vimeo, or embed on your own website with a single click.</p>
              </div>
            </div>
          </div>

          <div class="cl-actions">
            <a
              href="https://creatorloom.mediasurf.ca"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-cl-primary"
              data-track-event="cta_click"
              data-track-category="creatorloom"
              data-track-label="try_creatorloom"
            >
              Try CreatorLoom &rarr;
            </a>
            <router-link
              to="/contact#contact-form"
              class="btn-cl-secondary"
              data-track-event="cta_click"
              data-track-category="creatorloom"
              data-track-label="request_cl_demo"
            >
              Request a Demo
            </router-link>
          </div>

          <div class="cl-trust">
            <span>AI video generation</span>
            <span>Multi-format export</span>
            <span>No filming required</span>
          </div>
        </div>

        <div class="cl-visual">
          <div class="cl-preview-frame">
            <div class="cl-preview-label">CreatorLoom — AI Video Studio Preview</div>
            <div class="cl-prompt-card">
              <div class="cl-pc-header">
                <span class="cl-pc-dot"></span>
                <span class="cl-pc-dot"></span>
                <span class="cl-pc-dot"></span>
              </div>
              <div class="cl-pc-body">
                <div class="cl-pc-prompt">
                  <span class="cl-pc-icon">✨</span>
                  <span>Generate a 5-module video course on "Introduction to Machine Learning"...</span>
                </div>
                <div class="cl-pc-output">
                  <div class="cl-pc-module" v-for="mod in creatorloomModules" :key="mod.title">
                    <div class="cl-pc-mod-header">
                      <span class="cl-pc-mod-icon">{{ mod.icon }}</span>
                      <div>
                        <span class="cl-pc-mod-title">{{ mod.title }}</span>
                        <span class="cl-pc-mod-meta">{{ mod.lessons }} lessons · {{ mod.duration }}</span>
                      </div>
                    </div>
                    <div class="cl-pc-mod-bar">
                      <div class="cl-pc-mod-fill" :style="{ width: mod.progress }"></div>
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
</template>

<script>
export default {
  name: 'CreatorLoomSection',
  data() {
    return {
      creatorloomModules: [
        { icon: '🎯', title: 'Module 1: What is Machine Learning?', lessons: '4', duration: '12m', progress: '100%' },
        { icon: '🧠', title: 'Module 2: Supervised vs Unsupervised Learning', lessons: '5', duration: '18m', progress: '85%' },
        { icon: '📊', title: 'Module 3: Data Preprocessing & Feature Engineering', lessons: '6', duration: '22m', progress: '40%' },
        { icon: '🤖', title: 'Module 4: Building Your First ML Model', lessons: '4', duration: '15m', progress: '10%' },
        { icon: '🚀', title: 'Module 5: Deployment & Real-World Applications', lessons: '3', duration: '10m', progress: '0%' }
      ]
    }
  }
}
</script>

<style scoped>
.cl-section {
  padding: var(--section-spacing) 0;
  background: var(--bg-white);
}

.cl-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 1rem;
  background: rgba(245, 158, 11, 0.1);
  color: #d97706;
  border: 1px solid rgba(245, 158, 11, 0.2);
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.cl-title {
  font-size: 2.25rem;
  font-weight: 800;
  line-height: 1.15;
  color: var(--text-primary);
  margin-bottom: 1.25rem;
}

.cl-description {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.65;
  margin-bottom: 2rem;
}

.cl-capabilities {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.capability-item {
  display: flex;
  gap: 1rem;
}

.cap-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  margin-top: 0.15rem;
}

.capability-item h4 {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.capability-item p {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.cl-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
}

.btn-cl-primary {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 10px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-cl-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(245, 158, 11, 0.35);
}

.btn-cl-secondary {
  background: rgba(245, 158, 11, 0.1);
  color: #d97706;
  padding: 0.8rem 2rem;
  border-radius: 10px;
  font-weight: 700;
  text-decoration: none;
  border: 1px solid rgba(245, 158, 11, 0.25);
  transition: all 0.3s ease;
}

.btn-cl-secondary:hover {
  background: rgba(245, 158, 11, 0.18);
}

.cl-trust {
  display: flex;
  gap: 1.25rem;
  font-size: 0.8rem;
  color: var(--text-secondary);
  opacity: 0.7;
}

/* Visual */
.cl-visual {
  display: flex;
  justify-content: center;
}

.cl-preview-frame {
  width: 100%;
  max-width: 500px;
}

.cl-preview-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: #d97706;
  text-align: center;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.cl-prompt-card {
  background: var(--bg-white);
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
}

:root[data-theme="black"] .cl-prompt-card {
  border-color: #333;
  box-shadow: 0 20px 60px rgba(255, 255, 255, 0.03);
}

.cl-pc-header {
  display: flex;
  gap: 6px;
  padding: 0.75rem 1rem;
  background: var(--bg-light);
  border-bottom: 1px solid #e5e7eb;
}

.cl-pc-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #d1d5db;
}

.cl-pc-dot:first-child { background: #f59e0b; }

.cl-pc-body {
  padding: 1.25rem;
}

.cl-pc-prompt {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  background: var(--bg-light);
  padding: 0.85rem 1rem;
  border-radius: 10px;
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-bottom: 1.25rem;
  line-height: 1.5;
}

.cl-pc-icon {
  font-size: 1.1rem;
  flex-shrink: 0;
}

.cl-pc-output {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.cl-pc-module {
  padding: 0.6rem 0;
}

.cl-pc-mod-header {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 0.4rem;
}

.cl-pc-mod-icon {
  font-size: 1.2rem;
}

.cl-pc-mod-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-primary);
  display: block;
}

.cl-pc-mod-meta {
  font-size: 0.72rem;
  color: var(--text-secondary);
}

.cl-pc-mod-bar {
  height: 4px;
  background: #e5e7eb;
  border-radius: 2px;
  overflow: hidden;
}

.cl-pc-mod-fill {
  height: 100%;
  background: linear-gradient(90deg, #f59e0b, #d97706);
  border-radius: 2px;
  transition: width 1s ease;
}

@media (max-width: 768px) {
  .cl-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .cl-title {
    font-size: 1.75rem;
  }
}
</style>
