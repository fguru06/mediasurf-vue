<template>
  <div class="learncraft-page">
    <section class="hero-section">
      <div class="container">
        <div class="hero-layout">
          <div class="hero-copy">
            <p class="eyebrow">MediaSurf Tools</p>
            <h1>{{ heroCopy.title }}</h1>
            <p class="lead">{{ heroCopy.description }}</p>

            <div class="hero-actions">
              <a
                href="https://pp-ai-tool.mediasurf.ca/"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-primary"
                data-track-event="tool_cta_click"
                data-track-category="tools"
                data-track-label="launch_presentation_authoring"
              >
                Launch Presentation Authoring Tool
              </a>
              <a
                href="https://learncraft.mediasurf.ca/login"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-secondary"
                data-track-event="tool_cta_click"
                data-track-category="tools"
                data-track-label="open_learncraft"
              >
                Open Learncraft LMS
              </a>
              <router-link
                to="/contact#contact-form"
                class="btn-outline"
                data-track-event="tool_cta_click"
                data-track-category="tools"
                data-track-label="book_tool_demo"
              >
                Book a Tool Demo
              </router-link>
            </div>

            <div class="variant-note">
              Active copy variant: <strong>{{ activeVariant.toUpperCase() }}</strong>
              <span>Switch with <code>?variant=a</code> or <code>?variant=b</code></span>
            </div>
          </div>

          <div class="hero-product" aria-label="Learncraft product preview">
            <img
              class="hero-product-main"
              src="/learncraft/hero-home.png"
              alt="Learncraft dashboard and course creation workspace"
              loading="eager"
              decoding="async"
            />
            <img
              class="hero-product-float hero-product-float-left"
              src="/learncraft/hero-editor.png"
              alt="Slide editor interface in Learncraft"
              loading="lazy"
              decoding="async"
            />
            <img
              class="hero-product-float hero-product-float-right"
              src="/learncraft/hero-live-editor.png"
              alt="Live content editing and preview in Learncraft"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="workflow-section">
      <div class="container">
        <h2>How the Authoring Workflow Works</h2>
        <div class="workflow-grid">
          <article class="workflow-card">
            <p class="step">Step 1</p>
            <h3>Create Slide-Based Course Content</h3>
            <p>
              Use the AI-powered Presentation Authoring Tool to build slide-driven learning content and
              multimedia experiences quickly.
            </p>
          </article>
          <article class="workflow-card">
            <p class="step">Step 2</p>
            <h3>Export as Multimedia Package</h3>
            <p>
              Generate export-ready multimedia output for your course assets and instructional flow.
            </p>
          </article>
          <article class="workflow-card">
            <p class="step">Step 3</p>
            <h3>Import and Deliver in Learncraft LMS</h3>
            <p>
              Import the content into Learncraft, manage edits, and validate learner experience with live preview.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="preview-section">
      <div class="container">
        <h2>Instructor-Focused Experience</h2>
        <div class="preview-grid">
          <div class="preview-card">
            <h3>Authoring Workspace</h3>
            <ul>
              <li>Create and edit slide-based lessons</li>
              <li>Organize modules and lessons</li>
              <li>Produce export-ready multimedia</li>
            </ul>
          </div>
          <div class="preview-card">
            <h3>Learncraft Live Preview</h3>
            <ul>
              <li>Preview learner-facing course flow</li>
              <li>Review interaction and pacing</li>
              <li>Publish when quality checks are complete</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="gallery-section">
      <div class="container">
        <h2>Learncraft Product Collage</h2>
        <p class="gallery-subtitle">
          Real interface snapshots showing authoring, module management, live editing, and learner-side progression.
        </p>
        <div class="gallery-grid" aria-label="Learncraft UI collage gallery">
          <article
            v-for="(shot, index) in galleryShots"
            :key="index"
            class="gallery-tile"
            :class="shot.size"
            :style="{ backgroundImage: `linear-gradient(140deg, rgba(9, 14, 33, 0.16), rgba(68, 56, 162, 0.2)), url('${shot.src}')` }"
            role="img"
            :aria-label="shot.alt"
          >
            <span class="gallery-chip">{{ shot.label }}</span>
          </article>
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
      title: 'From Slide Authoring to LMS Delivery in One Workflow',
      description:
        'Design courses in our presentation authoring tool, export multimedia content, and deliver through Learncraft with instructor edit control and live learner preview.'
    };
  }

  return {
    title: 'Create, Export, and Deliver Courses with MediaSurf Tools',
    description:
      'Our first slide-based authoring tool helps you create multimedia course content, then import it into Learncraft LMS to edit, preview, and publish confidently.'
  };
});

const galleryShots = [
  {
    src: '/learncraft/gallery-editor-quiz.png',
    alt: 'Quiz editor panel and inline lesson block editing in Learncraft',
    label: 'Quiz Authoring',
    size: 'tile-lg'
  },
  {
    src: '/learncraft/gallery-live-iframe.png',
    alt: 'Embedded content block displayed in Learncraft live editor',
    label: 'Embedded Media',
    size: 'tile-md'
  },
  {
    src: '/learncraft/gallery-learner-progress.png',
    alt: 'Learner progress view with module completion tracking',
    label: 'Learner Progress',
    size: 'tile-md'
  },
  {
    src: '/learncraft/gallery-lesson-quiz.png',
    alt: 'Lesson quiz view with submit controls and progression panel',
    label: 'Lesson Quiz View',
    size: 'tile-lg'
  },
  {
    src: '/learncraft/gallery-content-authoring.png',
    alt: 'Content authoring workspace with AI generation and block tools',
    label: 'Content Authoring',
    size: 'tile-lg'
  },
  {
    src: '/learncraft/gallery-module-list.png',
    alt: 'Module and lesson list management interface in Learncraft',
    label: 'Module Manager',
    size: 'tile-sm'
  },
  {
    src: '/learncraft/gallery-live-editor-wide.png',
    alt: 'Live editor canvas with inline block editing controls',
    label: 'Live Editor',
    size: 'tile-md'
  }
];
</script>

<style scoped>
.learncraft-page {
  width: 100%;
  padding-top: 80px;
}

.container {
  max-width: 1150px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-section {
  background: var(--gradient-hero);
  color: white;
  padding: 5rem 0 4rem;
}

.hero-layout {
  display: grid;
  grid-template-columns: 1fr 0.95fr;
  gap: 1.5rem;
  align-items: center;
}

.hero-copy {
  min-width: 0;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  font-size: 0.78rem;
  font-weight: 700;
}

h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.2;
  margin-bottom: 1rem;
}

.lead {
  max-width: 860px;
  line-height: 1.7;
  font-size: 1.05rem;
  margin-bottom: 1.6rem;
}

.hero-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary,
.btn-outline {
  text-decoration: none;
  border-radius: 10px;
  font-weight: 700;
  padding: 0.78rem 1.15rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-primary {
  background: white;
  color: var(--primary-dark);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.12);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.32);
}

.btn-outline {
  color: white;
  border: 1px dashed rgba(255, 255, 255, 0.45);
}

.variant-note {
  margin-top: 0.9rem;
  font-size: 0.85rem;
  opacity: 0.92;
}

.variant-note span {
  margin-left: 0.6rem;
}

.hero-product {
  position: relative;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(7, 13, 30, 0.35);
  box-shadow: 0 22px 44px rgba(4, 10, 28, 0.35);
  padding: 0.9rem;
  min-height: 360px;
}

.hero-product-main {
  width: 100%;
  border-radius: 12px;
  display: block;
  object-fit: cover;
  aspect-ratio: 16 / 10;
  border: 1px solid rgba(255, 255, 255, 0.16);
}

.hero-product-float {
  position: absolute;
  width: 38%;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.24);
  box-shadow: 0 14px 28px rgba(6, 10, 26, 0.4);
}

.hero-product-float-left {
  left: -1.1rem;
  bottom: -1.3rem;
  transform: rotate(-5deg);
}

.hero-product-float-right {
  right: -1.1rem;
  top: -1.1rem;
  transform: rotate(4deg);
}

.workflow-section,
.preview-section,
.gallery-section {
  padding: 3.5rem 0;
}

.workflow-section {
  background: var(--bg-light);
}

.preview-section {
  background: var(--bg-white);
}

.gallery-section {
  background: var(--bg-light);
}

h2 {
  font-size: clamp(1.6rem, 3.2vw, 2.2rem);
  margin-bottom: 1.1rem;
}

.workflow-grid,
.preview-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.preview-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.workflow-card,
.preview-card {
  background: var(--bg-white);
  border: 1px solid #dbe5ef;
  border-radius: 14px;
  padding: 1.2rem;
}

.workflow-card h3,
.preview-card h3 {
  margin-bottom: 0.6rem;
  font-size: 1.18rem;
}

.workflow-card p,
.preview-card li {
  color: var(--text-secondary);
  line-height: 1.6;
}

.step {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
  color: var(--primary);
  font-size: 0.76rem;
  margin-bottom: 0.5rem;
}

.preview-card ul {
  padding-left: 1.1rem;
}

.gallery-subtitle {
  margin-bottom: 1.2rem;
  color: var(--text-secondary);
  max-width: 860px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-auto-rows: 130px;
  gap: 0.9rem;
}

.gallery-tile {
  position: relative;
  border-radius: 14px;
  border: 1px solid #d5deea;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  box-shadow: 0 10px 28px rgba(7, 13, 30, 0.12);
}

.gallery-chip {
  position: absolute;
  top: 0.55rem;
  left: 0.55rem;
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 700;
  color: #e5edfb;
  background: rgba(10, 17, 40, 0.78);
  border: 1px solid rgba(147, 197, 253, 0.4);
  border-radius: 999px;
  padding: 0.26rem 0.56rem;
}

.tile-lg {
  grid-column: span 6;
  grid-row: span 2;
}

.tile-md {
  grid-column: span 4;
  grid-row: span 2;
}

.tile-sm {
  grid-column: span 4;
  grid-row: span 1;
}

@media (max-width: 900px) {
  .hero-layout {
    grid-template-columns: 1fr;
  }

  .hero-product {
    min-height: 0;
    margin-top: 0.5rem;
  }

  .hero-product-float {
    width: 34%;
  }

  .hero-product-float-left {
    left: 0.2rem;
    bottom: -0.9rem;
  }

  .hero-product-float-right {
    right: 0.2rem;
    top: -0.8rem;
  }

  .workflow-grid,
  .preview-grid {
    grid-template-columns: 1fr;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 200px;
  }

  .tile-lg,
  .tile-md,
  .tile-sm {
    grid-column: span 1;
    grid-row: span 1;
  }
}
</style>