<template>
  <section id="learncraft-editor" class="lce-section">
    <div class="container">
      <div class="lce-layout">
        <div class="lce-visual">
          <div class="lce-mockup-frame">
            <div class="lce-mockup-label">LearnCraft Editor — Live Preview</div>
            <!-- Simulated editor mockup -->
            <div class="lce-editor-mock">
              <div class="editor-sidebar">
                <div class="sidebar-tab active">Slides</div>
                <div class="sidebar-tab">Media</div>
                <div class="sidebar-tab">Quiz</div>
                <div class="sidebar-tab">Settings</div>
              </div>
              <div class="editor-main">
                <div class="editor-toolbar">
                  <span class="tool-btn">B</span>
                  <span class="tool-btn">I</span>
                  <span class="tool-btn">U</span>
                  <span class="tool-btn">🎨</span>
                  <span class="tool-btn">📷</span>
                </div>
                <div class="editor-content">
                  <div class="editor-line head">Introduction to Data Privacy</div>
                  <div class="editor-line body">In this module, learners will explore key privacy frameworks...</div>
                  <div class="editor-line img-placeholder">
                    <span>🖼️ Image placeholder</span>
                  </div>
                  <div class="editor-line body">Learning objectives include GDPR compliance and data handling best practices.</div>
                  <div class="editor-cursor"></div>
                </div>
              </div>
              <div class="editor-preview-panel">
                <div class="preview-label">Live Preview</div>
                <div class="preview-slide">
                  <div class="preview-slide-title">Introduction to Data Privacy</div>
                  <div class="preview-slide-body">In this module, learners will explore key privacy frameworks including GDPR, CCPA, and their practical implications in the workplace.</div>
                  <div class="preview-slide-image">
                    <span>🛡️</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lce-copy">
          <div class="section-badge">✏️ LearnCraft Editor</div>
          <h2 class="section-title lce-title">
            Traditional Authoring<br>
            With Live Preview<br>
            &amp; Instructor Control
          </h2>
          <p class="lce-description">
            LearnCraft Editor gives instructors full command over course content. Inline WYSIWYG editing, slide-based authoring, rich templates, and a live preview panel — so you see exactly what learners see, as you build.
          </p>

          <div class="lce-capabilities">
            <div class="cap-item">
              <span class="cap-marker">01</span>
              <div>
                <h4>Inline WYSIWYG Editing</h4>
                <p>Edit text, media, and quizzes directly on the slide. No toggling between editor and preview — it's all live.</p>
              </div>
            </div>
            <div class="cap-item">
              <span class="cap-marker">02</span>
              <div>
                <h4>Slide-Based Authoring with Templates</h4>
                <p>Choose from a library of professional templates. Build multimedia courses using drag-and-drop slide components.</p>
              </div>
            </div>
            <div class="cap-item">
              <span class="cap-marker">03</span>
              <div>
                <h4>Instructor Review &amp; Publish Workflow</h4>
                <p>Assign content to instructors for review, edits, and approval. Publish only when ready — with full version control.</p>
              </div>
            </div>
            <div class="cap-item">
              <span class="cap-marker">04</span>
              <div>
                <h4>Rich Media &amp; Multimedia Embedding</h4>
                <p>Embed video, audio, images, PDFs, and interactive elements. All content renders in the live preview panel.</p>
              </div>
            </div>
          </div>

          <div class="lce-actions">
            <router-link
              to="/learncraft"
              class="btn-editor-primary"
              data-track-event="cta_click"
              data-track-category="learncraft_editor"
              data-track-label="open_editor"
            >
              Open LearnCraft Editor &rarr;
            </router-link>
            <router-link
              to="/contact#contact-form"
              class="btn-editor-secondary"
              data-track-event="cta_click"
              data-track-category="learncraft_editor"
              data-track-label="schedule_editor_demo"
            >
              Schedule a Demo
            </router-link>
          </div>

          <div class="lce-trust">
            <span>Inline editing</span>
            <span>Live preview</span>
            <span>Template library</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LearnCraftEditorSection'
}
</script>

<style scoped>
.lce-section {
  padding: var(--section-spacing) 0;
  background: var(--bg-white);
}

.lce-layout {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.lce-title {
  text-align: left;
  font-size: clamp(2rem, 4vw, 2.75rem);
}

.lce-description {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 540px;
}

/* Capabilities */
.lce-capabilities {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.cap-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.cap-marker {
  font-family: 'Space Grotesk', monospace;
  font-size: 0.8rem;
  font-weight: 700;
  color: #d97706;
  background: rgba(245, 158, 11, 0.1);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  flex-shrink: 0;
  border: 1px solid rgba(245, 158, 11, 0.2);
}

.cap-item h4 {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.cap-item p {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Actions */
.lce-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.btn-editor-primary {
  padding: 0.9rem 2.25rem;
  background: linear-gradient(135deg, #f59e0b, #d97706);
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

.btn-editor-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(245, 158, 11, 0.4);
}

.btn-editor-secondary {
  padding: 0.9rem 2.25rem;
  background: transparent;
  color: #d97706;
  border: 2px solid rgba(245, 158, 11, 0.3);
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s;
  cursor: pointer;
}

.btn-editor-secondary:hover {
  background: rgba(245, 158, 11, 0.05);
  border-color: rgba(245, 158, 11, 0.55);
}

/* Trust pills */
.lce-trust {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.lce-trust span {
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #d97706;
  background: rgba(245, 158, 11, 0.08);
  border: 1px solid rgba(245, 158, 11, 0.15);
}

/* ---- Mockup Visual ---- */
.lce-visual {
  position: relative;
}

.lce-mockup-frame {
  background: linear-gradient(145deg, #1c1917 0%, #292524 50%, #1c1917 100%);
  border-radius: 20px;
  padding: 1.75rem;
  border: 1px solid rgba(245, 158, 11, 0.15);
  box-shadow: 0 24px 60px rgba(120, 53, 15, 0.25);
  overflow: hidden;
}

.lce-mockup-label {
  color: rgba(229, 237, 251, 0.65);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.lce-editor-mock {
  display: grid;
  grid-template-columns: 90px 1fr 200px;
  gap: 0.75rem;
}

.editor-sidebar {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.sidebar-tab {
  padding: 0.5rem 0.65rem;
  border-radius: 6px;
  font-size: 0.68rem;
  font-weight: 600;
  color: rgba(229, 237, 251, 0.55);
  background: rgba(255, 255, 255, 0.04);
  cursor: default;
  transition: all 0.2s;
}

.sidebar-tab.active {
  background: rgba(245, 158, 11, 0.2);
  color: #fbbf24;
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.editor-main {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 1rem;
  border: 1px solid rgba(147, 197, 253, 0.08);
}

.editor-toolbar {
  display: flex;
  gap: 0.35rem;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(147, 197, 253, 0.1);
}

.tool-btn {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-size: 0.65rem;
  font-weight: 700;
  color: rgba(229, 237, 251, 0.6);
  background: rgba(255, 255, 255, 0.06);
  cursor: default;
}

.editor-content {
  position: relative;
}

.editor-line {
  margin-bottom: 0.6rem;
  line-height: 1.5;
}

.editor-line.head {
  font-size: 0.95rem;
  font-weight: 700;
  color: #f5f5f4;
}

.editor-line.body {
  font-size: 0.75rem;
  color: rgba(229, 237, 251, 0.65);
}

.editor-line.img-placeholder {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 6px;
  border: 1px dashed rgba(147, 197, 253, 0.2);
  text-align: center;
  font-size: 0.7rem;
  color: rgba(229, 237, 251, 0.4);
}

.editor-cursor {
  width: 2px;
  height: 16px;
  background: #fbbf24;
  animation: cursorBlink 1s step-end infinite;
  display: inline-block;
  vertical-align: middle;
}

@keyframes cursorBlink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.editor-preview-panel {
  background: rgba(255, 255, 255, 0.04);
  border-radius: 10px;
  padding: 0.75rem;
  border: 1px solid rgba(245, 158, 11, 0.15);
}

.preview-label {
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #fbbf24;
  margin-bottom: 0.65rem;
}

.preview-slide {
  background: white;
  border-radius: 8px;
  padding: 0.85rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.preview-slide-title {
  font-size: 0.75rem;
  font-weight: 700;
  color: #1c1917;
  margin-bottom: 0.4rem;
}

.preview-slide-body {
  font-size: 0.65rem;
  color: #57534e;
  line-height: 1.5;
  margin-bottom: 0.5rem;
}

.preview-slide-image {
  background: #f5f5f4;
  border-radius: 6px;
  padding: 0.75rem;
  text-align: center;
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .lce-layout {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .lce-visual {
    order: -1;
  }

  .lce-title {
    font-size: 1.75rem;
  }

  .lce-actions {
    flex-direction: column;
  }

  .lce-editor-mock {
    grid-template-columns: 1fr;
  }

  .editor-sidebar {
    flex-direction: row;
  }

  .editor-preview-panel {
    display: none;
  }
}
</style>
