<template>
  <section id="learncraft-ai" class="lcai-section">
    <div class="container">
      <div class="lcai-layout">
        <div class="lcai-copy">
          <div class="section-badge">🤖 LearnCraft AI</div>
          <h2 class="section-title lcai-title">
            Generate Courses<br>
            With AI — in Minutes,<br>
            Not Weeks
          </h2>
          <p class="lcai-description">
            LearnCraft AI is our flagship AI course generator. Describe your topic, and our engine auto-generates complete course structures — modules, lessons, quizzes, images, and SCORM-ready outlines — all in one flow.
          </p>

          <div class="lcai-capabilities">
            <div class="capability-item">
              <span class="cap-icon">📋</span>
              <div>
                <h4>Auto-Generated Course Outlines</h4>
                <p>Structured modules and learning objectives generated from a single prompt. No instructional design bottleneck.</p>
              </div>
            </div>
            <div class="capability-item">
              <span class="cap-icon">📝</span>
              <div>
                <h4>AI-Written Lessons &amp; Multimedia</h4>
                <p>Each lesson includes rich text, generated images, and contextual examples tailored to your audience.</p>
              </div>
            </div>
            <div class="capability-item">
              <span class="cap-icon">❓</span>
              <div>
                <h4>Smart Quiz &amp; Assessment Generation</h4>
                <p>Auto-generated question banks with multiple question types, difficulty levels, and answer explanations.</p>
              </div>
            </div>
            <div class="capability-item">
              <span class="cap-icon">📦</span>
              <div>
                <h4>One-Click Export to LMS</h4>
                <p>Export complete courses as SCORM, xAPI, or directly into LearnCraft LMS for instructor review and delivery.</p>
              </div>
            </div>
          </div>

          <div class="lcai-actions">
            <a
              href="https://learncraft.mediasurf.ca"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-ai-primary"
              data-track-event="cta_click"
              data-track-category="learncraft_ai"
              data-track-label="try_ai_generator"
            >
              Try LearnCraft AI &rarr;
            </a>
            <router-link
              to="/contact#contact-form"
              class="btn-ai-secondary"
              data-track-event="cta_click"
              data-track-category="learncraft_ai"
              data-track-label="request_ai_demo"
            >
              Request a Demo
            </router-link>
          </div>

          <div class="lcai-trust">
            <span>AI content generation</span>
            <span>SCORM/xAPI export</span>
            <span>Human-in-the-loop review</span>
          </div>
        </div>

        <div class="lcai-visual">
          <div class="lcai-preview-frame">
            <div class="lcai-preview-label">AI Course Generator Preview</div>
            <div class="lcai-prompt-card">
              <div class="prompt-header">
                <span class="prompt-dot"></span>
                <span class="prompt-label">Course Prompt</span>
              </div>
              <div class="prompt-text">
                "Create a cybersecurity awareness course for enterprise employees with 5 modules, assessments, and real-world scenarios"
              </div>
            </div>
            <div class="lcai-output-preview">
              <div class="output-chip">5 modules generated</div>
              <div class="output-chip">24 lessons</div>
              <div class="output-chip">60+ quiz questions</div>
              <div class="output-chip">AI images</div>
            </div>
            <div class="lcai-progress-bar">
              <div class="progress-fill"></div>
            </div>
            <div class="lcai-course-preview">
              <div class="course-module" v-for="m in 3" :key="m">
                <span class="module-num">{{ String(m).padStart(2, '0') }}</span>
                <span class="module-label">Module {{ m }}</span>
                <span class="module-status">✓ Generated</span>
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
  name: 'LearnCraftAISection'
}
</script>

<style scoped>
.lcai-section {
  padding: var(--section-spacing) 0;
  background: linear-gradient(180deg, #f8fafc 0%, #eef2ff 50%, #f8fafc 100%);
}

.lcai-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.lcai-title {
  text-align: left;
  font-size: clamp(2rem, 4vw, 2.75rem);
}

.lcai-description {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 540px;
}

/* Capabilities */
.lcai-capabilities {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.capability-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.cap-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: white;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
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

/* Actions */
.lcai-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.btn-ai-primary {
  padding: 0.9rem 2.25rem;
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

.btn-ai-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
}

.btn-ai-secondary {
  padding: 0.9rem 2.25rem;
  background: transparent;
  color: #6366f1;
  border: 2px solid rgba(99, 102, 241, 0.3);
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s;
  cursor: pointer;
}

.btn-ai-secondary:hover {
  background: rgba(99, 102, 241, 0.05);
  border-color: rgba(99, 102, 241, 0.55);
}

/* Trust pills */
.lcai-trust {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.lcai-trust span {
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #6366f1;
  background: rgba(99, 102, 241, 0.08);
  border: 1px solid rgba(99, 102, 241, 0.15);
}

/* ---- Visual Preview ---- */
.lcai-visual {
  position: relative;
}

.lcai-preview-frame {
  background: linear-gradient(145deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(147, 197, 253, 0.15);
  box-shadow: 0 24px 60px rgba(79, 70, 229, 0.3);
  position: relative;
  overflow: hidden;
}

.lcai-preview-label {
  color: rgba(229, 237, 251, 0.7);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
}

.lcai-prompt-card {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(147, 197, 253, 0.15);
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1.25rem;
}

.prompt-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.6rem;
}

.prompt-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22d3ee;
}

.prompt-label {
  color: rgba(229, 237, 251, 0.8);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.prompt-text {
  color: #e5edfb;
  font-size: 0.85rem;
  line-height: 1.5;
  font-style: italic;
}

.lcai-output-preview {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.output-chip {
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 600;
  color: #a5f3fc;
  background: rgba(34, 211, 238, 0.12);
  border: 1px solid rgba(34, 211, 238, 0.25);
}

.lcai-progress-bar {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  margin-bottom: 1.25rem;
  overflow: hidden;
}

.progress-fill {
  width: 78%;
  height: 100%;
  background: linear-gradient(90deg, #6366f1, #22d3ee);
  border-radius: 2px;
  animation: progressPulse 3s ease-in-out infinite;
}

@keyframes progressPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.lcai-course-preview {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.course-module {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.65rem 0.85rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(147, 197, 253, 0.1);
}

.module-num {
  font-size: 0.75rem;
  font-weight: 700;
  color: #818cf8;
  font-family: 'Space Grotesk', monospace;
  min-width: 24px;
}

.module-label {
  font-size: 0.82rem;
  color: #e5edfb;
  font-weight: 500;
  flex: 1;
}

.module-status {
  font-size: 0.7rem;
  font-weight: 600;
  color: #34d399;
}

@media (max-width: 768px) {
  .lcai-layout {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .lcai-title {
    font-size: 1.75rem;
  }

  .lcai-actions {
    flex-direction: column;
  }
}
</style>
