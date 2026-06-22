<template>
  <section id="home" class="hero">
    <!-- Geometric grid overlay -->
    <div class="hero-grid-overlay" aria-hidden="true"></div>
    <div class="hero-circles" aria-hidden="true">
      <span class="circle circle-1"></span>
      <span class="circle circle-2"></span>
      <span class="circle circle-3"></span>
    </div>

    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <div class="badge">Authoring, Course Training Development, LMS, and Analytics</div>
          <h1 class="hero-title">
            Build Any Course<br>
            Experience with LMS<br>
            and Live Analytics
          </h1>
          <p class="hero-description">
            MediaSurf Technologies helps teams create technical, compliance, onboarding, and product training
            with custom course development, learning analytics, and instructor-ready authoring workflows.
          </p>
          <a
            href="https://pp-ai-tool.mediasurf.ca/"
            target="_blank"
            rel="noopener noreferrer"
            class="hero-highlight promotional-link"
            @click="$emit('track', 'hero_presentation_authoring_tool')"
          >
            <span class="hero-highlight-label">NEW</span>
            Use our <strong>Slide-Based Presentation Authoring Tool</strong> to create multimedia course content and export it for Learncraft LMS delivery. <span class="try-now">Launch Tool &rarr;</span>
          </a>
          <div class="hero-actions">
            <router-link
              to="/contact#contact-form"
              class="btn-primary-lg"
              @click="$emit('track', 'hero_get_started')"
              data-track-event="cta_click"
              data-track-category="hero"
              data-track-label="book_discovery_call"
            >
              Book Discovery Call
            </router-link>
            <router-link
              to="/learncraft"
              class="btn-secondary-lg"
              @click="$emit('track', 'hero_learn_more')"
              data-track-event="cta_click"
              data-track-category="hero"
              data-track-label="view_tools_workflow"
            >
              View Tool Workflow
            </router-link>
          </div>
          <div class="hero-trust-list" aria-label="Learning solution highlights">
            <span>Course Development for Any Domain</span>
            <span>Learning Analytics and Reporting</span>
            <span>Instructor Create/Edit with Live Preview</span>
          </div>
        </div>

        <div class="hero-image">
          <div class="collage-frame" aria-label="Authoring and Learncraft workflow collage">
            <div class="collage-label">Tool Workflow Snapshot</div>
            <div
              v-for="(card, index) in collageCards"
              :key="index"
              class="panel collage-card"
              :class="card.className"
              :style="{ backgroundImage: `linear-gradient(140deg, rgba(10, 16, 38, 0.18), rgba(15, 118, 110, 0.18)), url('${card.image}')` }"
              role="img"
              :aria-label="card.alt"
            >
              <span class="collage-chip">{{ card.chip }}</span>
              <div class="panel-glow" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  emits: ['track'],
  data() {
    return {
      collageCards: [
        {
          image: '/learncraft/hero-home.png',
          alt: 'Slide-based authoring dashboard for course training development',
          chip: 'Authoring Home',
          className: 'card-home'
        },
        {
          image: '/learncraft/hero-templates.png',
          alt: 'Course templates for authoring course training development workflows',
          chip: 'Templates',
          className: 'card-templates'
        },
        {
          image: '/learncraft/hero-editor.png',
          alt: 'Presentation editor for multimedia LMS development content',
          chip: 'Slide Editor',
          className: 'card-editor'
        },
        {
          image: '/learncraft/hero-live-editor.png',
          alt: 'Learncraft live editor showing course content updates and preview',
          chip: 'Live Edit',
          className: 'card-live'
        },
        {
          image: '/learncraft/hero-inspector.png',
          alt: 'Learning analytics and content inspector panel in authoring workflow',
          chip: 'Props and Analytics',
          className: 'card-inspector'
        },
        {
          image: '/learncraft/gallery-editor-quiz.png',
          alt: 'Quiz editing experience with content inspector and lesson canvas',
          chip: 'Quiz Authoring',
          className: 'card-quiz'
        },
        {
          image: '/learncraft/gallery-learner-progress.png',
          alt: 'Learner progress and module completion tracking interface',
          chip: 'Learner Progress',
          className: 'card-progress'
        },
        {
          image: '/learncraft/gallery-content-authoring.png',
          alt: 'Content authoring interface with rich media lesson builder',
          chip: 'Content Builder',
          className: 'card-content'
        },
        {
          image: '/learncraft/gallery-live-editor-wide.png',
          alt: 'Wide live editor preview with real-time course rendering',
          chip: 'Live Preview',
          className: 'card-live-wide'
        }
      ]
    };
  }
}
</script>

<style scoped>
/* =============================================
   Hero Section — Navy → Indigo Gradient
   ============================================= */
.hero {
  padding: clamp(7.5rem, 12vw, 9rem) 0 var(--section-spacing);
  background: linear-gradient(135deg, #0a1628 0%, #141c3a 30%, #1a2156 60%, #1e266d 100%);
  overflow: hidden;
  min-height: 90vh;
  display: flex;
  align-items: center;
  position: relative;
}

/* ---- Geometric grid overlay ---- */
.hero-grid-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 70%);
}

/* ---- Floating geometric circles ---- */
.hero-circles {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.circle {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(147, 197, 253, 0.15);
  animation: floatCircle 20s ease-in-out infinite;
}

.circle-1 {
  width: 420px;
  height: 420px;
  top: -10%;
  right: -5%;
  animation-delay: 0s;
}

.circle-2 {
  width: 280px;
  height: 280px;
  bottom: -8%;
  left: 55%;
  border-color: rgba(56, 189, 248, 0.12);
  animation-delay: -7s;
}

.circle-3 {
  width: 180px;
  height: 180px;
  top: 30%;
  right: 42%;
  border-color: rgba(147, 197, 253, 0.1);
  animation-delay: -14s;
}

@keyframes floatCircle {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(15px, -20px) rotate(5deg); }
  50% { transform: translate(-10px, 10px) rotate(-3deg); }
  75% { transform: translate(20px, 5px) rotate(2deg); }
}

.container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
  width: 100%;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-text {
  animation: fadeInLeft 0.8s ease-out;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
  color: #e5edfb;
  padding: 0.6rem 1.5rem;
  border-radius: 50px;
  font-weight: 500;
  font-size: 0.95rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(147, 197, 253, 0.22);
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.15;
  color: white;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.hero-description {
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: rgba(229, 237, 251, 0.92);
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 540px;
}

.hero-highlight {
  display: inline-block;
  color: var(--text-primary);
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 2rem;
  padding: 0.9rem 1.1rem;
  border-radius: 12px;
  background: var(--bg-white);
  border: 1px solid rgba(var(--primary-rgb), 0.35);
  border-left: 4px solid var(--primary);
  backdrop-filter: blur(8px);
  max-width: 600px;
  box-shadow: 0 12px 30px rgba(var(--primary-rgb), 0.25);
}

.promotional-link {
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.promotional-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 40px rgba(var(--primary-rgb), 0.35);
}

.try-now {
  color: var(--primary);
  font-weight: 700;
  margin-left: 0.5rem;
  white-space: nowrap;
}

.hero-highlight-label {
  display: inline-flex;
  align-items: center;
  margin-right: 0.45rem;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  background: var(--gradient-accent);
  color: var(--primary-dark);
  font-weight: 800;
  letter-spacing: 0.3px;
}

:root[data-theme="black"] .hero-highlight-label {
  color: var(--text-primary);
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.hero-trust-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.hero-trust-list span {
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  font-size: 0.78rem;
  letter-spacing: 0.02em;
  color: #e5edfb;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(147, 197, 253, 0.2);
}

.btn-primary-lg {
  padding: 1rem 2.5rem;
  background: white;
  color: #141c3a;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
}

:root[data-theme="black"] .btn-primary-lg {
  color: black;
}

.btn-primary-lg:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
}

.btn-secondary-lg {
  padding: 1rem 2.5rem;
  background: transparent;
  color: white;
  border: 2px solid rgba(147, 197, 253, 0.35);
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.btn-secondary-lg:hover {
  background: rgba(147, 197, 253, 0.08);
  border-color: rgba(147, 197, 253, 0.55);
}

/* =============================================
   Image Collage — Floating Panels
   ============================================= */
.hero-image {
  position: relative;
  animation: fadeInRight 0.8s ease-out;
  padding-top: 1rem;
  perspective: 800px;
}

.collage-frame {
  position: relative;
  min-height: 750px;
  border-radius: 22px;
  border: 1px solid rgba(147, 197, 253, 0.18);
  background: linear-gradient(145deg, rgba(13, 30, 66, 0.55), rgba(26, 33, 86, 0.45));
  box-shadow:
    0 24px 54px rgba(2, 10, 28, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  overflow: hidden;
}

.collage-label {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 3;
  background: rgba(13, 24, 53, 0.85);
  color: #e5edfb;
  border: 1px solid rgba(147, 197, 253, 0.4);
  border-radius: 999px;
  padding: 0.4rem 0.85rem;
  font-size: 0.74rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
  backdrop-filter: blur(6px);
}

/* ---- Interactive panels with hover effects ---- */
.panel {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  cursor: pointer;
  will-change: transform, box-shadow;
}

.panel:hover {
  transform: scale(1.05) translateY(-5px) !important;
  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.4), 0 0 30px rgba(56, 189, 248, 0.15) !important;
  z-index: 5 !important;
}

.panel:hover .panel-glow {
  opacity: 1;
}

/* Glow overlay — hidden by default, shown on hover */
.panel-glow {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(ellipse at 50% 0%, rgba(56, 189, 248, 0.18) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
  z-index: 2;
}

.collage-card {
  position: absolute;
  border-radius: 16px;
  border: 1px solid rgba(147, 197, 253, 0.22);
  background-size: cover;
  background-position: center;
  box-shadow: 0 14px 32px rgba(4, 9, 27, 0.4);
  overflow: hidden;
}

.collage-chip {
  position: absolute;
  top: 0.6rem;
  left: 0.6rem;
  background: rgba(10, 17, 40, 0.85);
  color: #f8fbff;
  border: 1px solid rgba(147, 197, 253, 0.38);
  border-radius: 999px;
  padding: 0.28rem 0.62rem;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  z-index: 1;
  backdrop-filter: blur(4px);
}

/* ---- Individual card positions ---- */
.card-home {
  width: 62%;
  height: 44%;
  right: 1.2rem;
  top: 2.8rem;
  transform: rotate(-2.5deg);
  z-index: 1;
}

.card-templates {
  width: 40%;
  height: 30%;
  left: 1.4rem;
  top: 6.8rem;
  transform: rotate(2.5deg);
  z-index: 2;
}

.card-editor {
  width: 44%;
  height: 34%;
  right: 0.9rem;
  bottom: 1.2rem;
  transform: rotate(2deg);
  z-index: 2;
}

.card-live {
  width: 46%;
  height: 28%;
  left: 1.2rem;
  bottom: 1.1rem;
  transform: rotate(-3.5deg);
  z-index: 3;
}

.card-inspector {
  width: 28%;
  height: 22%;
  right: 2.3rem;
  top: 0.95rem;
  transform: rotate(6deg);
  z-index: 4;
}

.card-quiz {
  width: 42%;
  height: 24%;
  left: 2.1rem;
  top: 19.8rem;
  transform: rotate(-5deg);
  z-index: 2;
}

.card-progress {
  width: 38%;
  height: 22%;
  right: 1.3rem;
  top: 27.8rem;
  transform: rotate(3deg);
  z-index: 2;
}

/* New cards */
.card-content {
  width: 35%;
  height: 23%;
  left: 1.5rem;
  top: 1.8rem;
  transform: rotate(-1.5deg);
  z-index: 3;
}

.card-live-wide {
  width: 48%;
  height: 26%;
  right: 1rem;
  top: 20.5rem;
  transform: rotate(1.5deg);
  z-index: 1;
}

/* =============================================
   Keyframes
   ============================================= */
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* =============================================
   Reduced motion — accessibility
   ============================================= */
@media (prefers-reduced-motion: reduce) {
  .panel,
  .panel:hover {
    transition: none !important;
    transform: none !important;
  }

  .panel-glow {
    transition: none !important;
  }

  .circle {
    animation: none !important;
  }

  .hero-text,
  .hero-image {
    animation: none !important;
  }
}

/* =============================================
   Responsive
   ============================================= */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .hero-title {
    font-size: 3rem;
  }

  .hero-description {
    max-width: 100%;
  }

  .collage-frame {
    min-height: 560px;
  }

  .hero-image {
    perspective: none;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 125px 0 40px;
    min-height: auto;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .hero-actions {
    flex-direction: column;
  }

  .hero-trust-list {
    gap: 0.45rem;
  }

  .hero-trust-list span {
    font-size: 0.72rem;
  }

  .btn-primary-lg,
  .btn-secondary-lg {
    width: 100%;
    justify-content: center;
  }

  .collage-frame {
    min-height: 500px;
  }

  .collage-label {
    font-size: 0.66rem;
  }

  .hero-image {
    perspective: none;
  }

  .card-home,
  .card-templates,
  .card-editor,
  .card-live,
  .card-inspector,
  .card-quiz,
  .card-progress,
  .card-content,
  .card-live-wide {
    transform: none !important;
  }

  .panel:hover {
    transform: scale(1.02) translateY(-2px) !important;
  }
}
</style>
