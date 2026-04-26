<template>
  <section id="home" class="hero">
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
              class="collage-card"
              :class="card.className"
              :style="{ backgroundImage: `linear-gradient(140deg, rgba(10, 16, 38, 0.18), rgba(15, 118, 110, 0.18)), url('${card.image}')` }"
              role="img"
              :aria-label="card.alt"
            >
              <span class="collage-chip">{{ card.chip }}</span>
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
        }
      ]
    };
  }
}
</script>

<style scoped>
.hero {
  padding: clamp(7.5rem, 12vw, 9rem) 0 var(--section-spacing);
  background: var(--gradient-hero);
  overflow: hidden;
  min-height: 90vh;
  display: flex;
  align-items: center;
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.18'%3E%3Cpath d='M60 0v120M0 60h120'/%3E%3C/g%3E%3Ccircle cx='60' cy='60' r='18' stroke='%23ffffff' stroke-opacity='0.2' fill='none'/%3E%3C/svg%3E");
  background-size: 120px 120px;
  opacity: 0.35;
  pointer-events: none;
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
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  color: white;
  padding: 0.6rem 1.5rem;
  border-radius: 50px;
  font-weight: 500;
  font-size: 0.95rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.15;
  color: white;
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: rgba(255, 255, 255, 0.9);
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
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-primary-lg {
  padding: 1rem 2.5rem;
  background: white;
  color: var(--primary);
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
  border: 2px solid rgba(255, 255, 255, 0.3);
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
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}

.hero-image {
  position: relative;
  animation: fadeInRight 0.8s ease-out;
  padding-top: 1rem;
}

.collage-frame {
  position: relative;
  min-height: 620px;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  background: linear-gradient(145deg, rgba(13, 30, 66, 0.5), rgba(21, 55, 118, 0.42));
  box-shadow: 0 24px 54px rgba(2, 10, 28, 0.45);
  overflow: hidden;
}

.collage-label {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 3;
  background: rgba(13, 24, 53, 0.8);
  color: #e5edfb;
  border: 1px solid rgba(147, 197, 253, 0.36);
  border-radius: 999px;
  padding: 0.4rem 0.85rem;
  font-size: 0.74rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
}

.collage-card {
  position: absolute;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.24);
  background-size: cover;
  background-position: center;
  box-shadow: 0 14px 32px rgba(4, 9, 27, 0.35);
  overflow: hidden;
}

.collage-chip {
  position: absolute;
  top: 0.6rem;
  left: 0.6rem;
  background: rgba(10, 17, 40, 0.8);
  color: #f8fbff;
  border: 1px solid rgba(147, 197, 253, 0.35);
  border-radius: 999px;
  padding: 0.28rem 0.62rem;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.card-home {
  width: 64%;
  height: 46%;
  right: 1.2rem;
  top: 2.8rem;
  transform: rotate(-2.5deg);
}

.card-templates {
  width: 43%;
  height: 33%;
  left: 1.4rem;
  top: 6.8rem;
  transform: rotate(2.5deg);
}

.card-editor {
  width: 48%;
  height: 36%;
  right: 0.9rem;
  bottom: 1.2rem;
  transform: rotate(2deg);
}

.card-live {
  width: 50%;
  height: 31%;
  left: 1.2rem;
  bottom: 1.1rem;
  transform: rotate(-3.5deg);
}

.card-inspector {
  width: 30%;
  height: 24%;
  right: 2.3rem;
  top: 0.95rem;
  transform: rotate(6deg);
}

.card-quiz {
  width: 46%;
  height: 27%;
  left: 2.1rem;
  top: 21.9rem;
  transform: rotate(-5deg);
}

.card-progress {
  width: 42%;
  height: 25%;
  right: 1.3rem;
  top: 28.2rem;
  transform: rotate(3deg);
}

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

  .card-home,
  .card-templates,
  .card-editor,
  .card-live,
  .card-inspector,
  .card-quiz,
  .card-progress {
    transform: none;
  }
}
</style>
