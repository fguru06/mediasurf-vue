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
          <div class="badge">
            <span class="badge-dot" aria-hidden="true"></span>
            B2B Digital Technology &amp; AI Solutions Partner
          </div>
          <h1 class="hero-title">
            Custom Web Development<br>
            &amp; AI-Powered Learning<br>
            Platforms
          </h1>
          <p class="hero-subheadline">
            MediaSurf Technologies provides B2B front-end engineering, custom web applications, and AI course generators — powering the full learning lifecycle for agencies and enterprises.
          </p>

          <div class="hero-actions">
            <a
              href="#b2b-services"
              class="btn-primary-lg"
              @click="$emit('track', 'hero_services')"
              data-track-event="cta_click"
              data-track-category="hero"
              data-track-label="explore_services"
            >
              Explore Services
            </a>
            <a
              href="#products"
              class="btn-secondary-lg"
              @click="$emit('track', 'hero_products')"
              data-track-event="cta_click"
              data-track-category="hero"
              data-track-label="view_products"
            >
              View Products
            </a>
          </div>

          <p class="hero-micro-tagline">
            Available for B2B Sub-Contracts &amp; Agency Overflow Development
          </p>

          <div class="hero-capabilities-row" aria-label="Core capabilities">
            <div class="cap-chip">
              <span class="cap-chip-icon">🔄</span>
              Agency Sub-Contracting
            </div>
            <div class="cap-chip">
              <span class="cap-chip-icon">⚡</span>
              Front-End Engineering
            </div>
            <div class="cap-chip">
              <span class="cap-chip-icon">⚛️</span>
              Vue.js / React / Next.js
            </div>
            <div class="cap-chip">
              <span class="cap-chip-icon">🤖</span>
              AI Learning Platforms
            </div>
          </div>
        </div>

        <div class="hero-image">
          <div class="collage-frame" aria-label="MediaSurf product ecosystem preview">
            <div class="collage-label">AI Learning Ecosystem</div>
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

          <!-- Product pills under image -->
          <div class="hero-image-pills">
            <a
              href="https://learncraftedu.ca"
              target="_blank"
              rel="noopener noreferrer"
              class="image-pill pill-flagship"
              @click="$emit('track', 'hero_learncraft_suite')"
            >
              <span class="image-pill-icon">✨</span>
              <span class="image-pill-content">
                <strong>LearnCraft Suite</strong>
                <small>AI Course Generator &amp; Editor</small>
              </span>
              <span class="image-pill-badge">Flagship</span>
            </a>
            <a
              href="https://pitstopservices.ca/"
              target="_blank"
              rel="noopener noreferrer"
              class="image-pill pill-pitstop"
              @click="$emit('track', 'hero_pitstop')"
            >
              <span class="image-pill-icon">🔧</span>
              <span class="image-pill-content">
                <strong>PitStop</strong>
                <small>Mobile Mechanic Marketplace</small>
              </span>
            </a>
            <a
              href="https://creatorloom.mediasurf.ca"
              target="_blank"
              rel="noopener noreferrer"
              class="image-pill pill-creatorloom"
              @click="$emit('track', 'hero_creatorloom')"
            >
              <span class="image-pill-icon">🎬</span>
              <span class="image-pill-content">
                <strong>CreatorLoom</strong>
                <small>AI Video Course Studio</small>
              </span>
            </a>
            <a
              href="https://pp-ai-tool.mediasurf.ca/"
              target="_blank"
              rel="noopener noreferrer"
              class="image-pill pill-ppai"
              @click="$emit('track', 'hero_pp_ai_tool')"
            >
              <span class="image-pill-icon">📊</span>
              <span class="image-pill-content">
                <strong>PowerPoint AI Tool</strong>
                <small>Slide Builder &amp; Converter</small>
              </span>
            </a>
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
          alt: 'AI-powered course authoring dashboard with content generation tools',
          chip: 'AI Generator',
          className: 'card-home'
        },
        {
          image: '/learncraft/hero-templates.png',
          alt: 'Smart course templates with AI-assisted content structuring',
          chip: 'Smart Templates',
          className: 'card-templates'
        },
        {
          image: '/learncraft/hero-editor.png',
          alt: 'AI-enhanced slide editor for multimedia course development',
          chip: 'AI Slide Editor',
          className: 'card-editor'
        },
        {
          image: '/learncraft/hero-live-editor.png',
          alt: 'Live instructor editor with real-time preview and AI suggestions',
          chip: 'Live + AI',
          className: 'card-live'
        },
        {
          image: '/learncraft/hero-inspector.png',
          alt: 'AI learning analytics dashboard with content inspector',
          chip: 'AI Analytics',
          className: 'card-inspector'
        },
        {
          image: '/learncraft/gallery-editor-quiz.png',
          alt: 'AI-generated quiz authoring with auto-assessment tools',
          chip: 'AI Quizzes',
          className: 'card-quiz'
        },
        {
          image: '/learncraft/gallery-learner-progress.png',
          alt: 'AI-powered learner progress tracking and adaptive paths',
          chip: 'Smart Progress',
          className: 'card-progress'
        },
        {
          image: '/learncraft/gallery-content-authoring.png',
          alt: 'AI content builder with rich media and auto-generated lessons',
          chip: 'AI Content',
          className: 'card-content'
        },
        {
          image: '/learncraft/gallery-live-editor-wide.png',
          alt: 'Full AI-powered live editor with real-time collaborative preview',
          chip: 'AI Live Preview',
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
  padding: clamp(7rem, 10vw, 8rem) 0 clamp(4rem, 6vw, 5rem);
  background: linear-gradient(135deg, #0a1628 0%, #141c3a 30%, #1a2156 60%, #1e266d 100%);
  overflow: hidden;
  min-height: auto;
  display: flex;
  align-items: flex-start;
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
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
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
  font-weight: 600;
  font-size: 0.88rem;
  letter-spacing: 0.02em;
  margin-bottom: 2rem;
  border: 1px solid rgba(147, 197, 253, 0.22);
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #38bdf8;
  box-shadow: 0 0 10px rgba(56, 189, 248, 0.6);
  animation: badgePulse 2s ease-in-out infinite;
}

@keyframes badgePulse {
  0%, 100% { opacity: 1; box-shadow: 0 0 10px rgba(56, 189, 248, 0.6); }
  50% { opacity: 0.5; box-shadow: 0 0 20px rgba(56, 189, 248, 0.9); }
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #93c5fd 25%, #38bdf8 50%, #a78bfa 75%, #f9a8d4 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: heroTextShimmer 4s ease-in-out infinite;
  filter: drop-shadow(0 0 20px rgba(56, 189, 248, 0.3));
}

@keyframes heroTextShimmer {
  0%, 100% { background-position: 0% 50%; }
  25% { background-position: 100% 0%; }
  50% { background-position: 100% 100%; }
  75% { background-position: 0% 100%; }
}

.hero-description {
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: rgba(229, 237, 251, 0.92);
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 540px;
}

.hero-subheadline {
  font-size: clamp(1.05rem, 2vw, 1.2rem);
  font-weight: 400;
  color: rgba(229, 237, 251, 0.72);
  line-height: 1.55;
  margin-bottom: 2rem;
  max-width: 560px;
}

.hero-description {
  display: none;
}

/* ---- Product Pills ---- */
.hero-products {
  display: none;
}

/* ---- Product Pills Under Hero Image ---- */
.hero-image-pills {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-top: 1rem;
}

.image-pill {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.55rem 0.75rem;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.25s ease;
  cursor: pointer;
  border: 1px solid transparent;
}

.image-pill:hover {
  transform: translateY(-1px);
}

.image-pill-icon {
  font-size: 1rem;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
}

.image-pill-content {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  flex: 1;
  min-width: 0;
}

.image-pill-content strong {
  font-size: 0.72rem;
  color: white;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.image-pill-content small {
  font-size: 0.62rem;
  color: rgba(229, 237, 251, 0.6);
  font-weight: 400;
  line-height: 1.3;
}

.image-pill-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.1rem 0.4rem;
  border-radius: 999px;
  font-size: 0.55rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  flex-shrink: 0;
}

/* Pill color variants */
.image-pill.pill-flagship {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.15));
  border-color: rgba(99, 102, 241, 0.35);
}
.image-pill.pill-flagship:hover {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.25));
  border-color: rgba(99, 102, 241, 0.55);
}

.image-pill.pill-pitstop {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.15));
  border-color: rgba(16, 185, 129, 0.35);
}
.image-pill.pill-pitstop:hover {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(5, 150, 105, 0.25));
  border-color: rgba(16, 185, 129, 0.55);
}

.image-pill.pill-creatorloom {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(217, 119, 6, 0.15));
  border-color: rgba(245, 158, 11, 0.35);
}
.image-pill.pill-creatorloom:hover {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.3), rgba(217, 119, 6, 0.25));
  border-color: rgba(245, 158, 11, 0.55);
}

.image-pill.pill-ppai {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(34, 211, 238, 0.15));
  border-color: rgba(59, 130, 246, 0.35);
}
.image-pill.pill-ppai:hover {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(34, 211, 238, 0.25));
  border-color: rgba(59, 130, 246, 0.55);
}

@media (max-width: 600px) {
  .hero-image-pills {
    grid-template-columns: 1fr;
  }
}

.hero-product-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.1rem;
  border-radius: 14px;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  max-width: 520px;
  border: 1px solid transparent;
}

.hero-product-pill:hover {
  transform: translateY(-2px);
}

.pill-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.12);
}

.pill-content {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  flex: 1;
}

.pill-content strong {
  font-size: 0.95rem;
  color: white;
  line-height: 1.2;
}

.pill-content small {
  font-size: 0.78rem;
  color: rgba(229, 237, 251, 0.7);
  font-weight: 400;
}

.pill-arrow {
  font-size: 1.1rem;
  color: rgba(229, 237, 251, 0.6);
  transition: transform 0.3s;
  flex-shrink: 0;
}

.hero-product-pill:hover .pill-arrow {
  transform: translateX(3px);
  color: white;
}

/* PowerPoint AI pill */
.pill-ppai {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.18), rgba(34, 211, 238, 0.13));
  border-color: rgba(59, 130, 246, 0.35);
}

.pill-ppai:hover {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.28), rgba(34, 211, 238, 0.22));
  border-color: rgba(59, 130, 246, 0.6);
  box-shadow: 0 8px 28px rgba(59, 130, 246, 0.25);
}

/* Flagship pill — LearnCraft Authoring Suite */
.pill-flagship {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(139, 92, 246, 0.2));
  border-color: rgba(99, 102, 241, 0.5);
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.15);
  position: relative;
}

.pill-flagship:hover {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.35), rgba(139, 92, 246, 0.3));
  border-color: rgba(99, 102, 241, 0.75);
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.35), 0 0 24px rgba(139, 92, 246, 0.2);
}

.pill-badge-flagship {
  display: inline-flex;
  align-items: center;
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  flex-shrink: 0;
  animation: flagshipGlow 2.5s ease-in-out infinite;
}

@keyframes flagshipGlow {
  0%, 100% { box-shadow: 0 0 8px rgba(99, 102, 241, 0.4); }
  50% { box-shadow: 0 0 16px rgba(139, 92, 246, 0.7); }
}

/* Pitstop pill */
.pill-pitstop {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.18), rgba(5, 150, 105, 0.13));
  border-color: rgba(16, 185, 129, 0.35);
}

.pill-pitstop:hover {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.28), rgba(5, 150, 105, 0.22));
  border-color: rgba(16, 185, 129, 0.6);
  box-shadow: 0 8px 28px rgba(16, 185, 129, 0.25);
}

/* CreatorLoom pill */
.pill-creatorloom {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.18), rgba(217, 119, 6, 0.13));
  border-color: rgba(245, 158, 11, 0.35);
}

.pill-creatorloom:hover {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.28), rgba(217, 119, 6, 0.22));
  border-color: rgba(245, 158, 11, 0.6);
  box-shadow: 0 8px 28px rgba(245, 158, 11, 0.25);
}

@media (max-width: 600px) {
  .hero-product-pill {
    padding: 0.65rem 0.9rem;
  }

  .pill-icon {
    width: 36px;
    height: 36px;
    font-size: 1.2rem;
  }
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.hero-micro-tagline {
  font-size: 0.82rem;
  font-weight: 500;
  color: rgba(56, 189, 248, 0.85);
  margin-bottom: 0.75rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(147, 197, 253, 0.12);
}

.hero-trust-list {
  display: none;
}

/* ---- Capabilities Row ---- */
.hero-capabilities-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(147, 197, 253, 0.12);
}

.cap-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.85rem;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  color: #e5edfb;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(147, 197, 253, 0.15);
  transition: all 0.2s;
}

.cap-chip:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(147, 197, 253, 0.3);
}

.cap-chip-icon {
  font-size: 0.85rem;
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
  perspective: 800px;
  margin-top: 0;
}

.collage-frame {
  position: relative;
  min-height: 500px;
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
  right: 1rem;
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
  display: none;
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
    gap: 2.5rem;
  }

  .hero-title {
    font-size: 2.75rem;
  }

  .hero-subheadline {
    max-width: 100%;
  }

  .collage-frame {
    min-height: 380px;
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
