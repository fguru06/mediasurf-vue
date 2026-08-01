<template>
  <section id="products" class="products-section">
    <div class="container">
      <div class="section-header">
        <div class="section-badge">🚀 MediaSurf Products</div>
        <h2 class="section-title">AI-Powered Learning Products — Proof of Our Engineering Depth</h2>
        <p class="section-description">
          Four flagship products built in-house, demonstrating our full-stack capabilities across AI, front-end engineering, and platform development. From AI-generated courses to marketplace platforms — we build products that scale.
        </p>
      </div>

      <div class="products-grid">
        <!-- LearnCraft Authoring Suite -->
        <article class="product-card card-suite">
          <div class="card-glow" aria-hidden="true"></div>
          <div class="card-icon-wrapper">
            <span class="card-icon">✨</span>
          </div>
          <div class="card-badge badge-suite">AI + Editor</div>
          <h3 class="card-title">LearnCraft Authoring Suite</h3>
          <p class="card-subtitle">AI Course Generator &amp; Live Editor</p>
          <p class="card-description">
            LearnCraft combines AI-powered course generation with a live block-based editor. Generate full lessons, modules, quizzes, and multimedia content using AI, then refine everything with a powerful drag-and-drop editor. Publish instantly to LearnCraft LMS or export as SCORM/xAPI.
          </p>
          <ul class="card-features">
            <li>AI course generator (GPT‑4o)</li>
            <li>Live block‑based editor</li>
            <li>Auto quizzes, flashcards, branching</li>
            <li>Publish to LearnCraft LMS or export SCORM</li>
          </ul>
          <a
            href="https://learncraftedu.ca/editor"
            target="_blank"
            rel="noopener noreferrer"
            class="card-cta cta-suite"
            data-track-event="cta_click"
            data-track-category="products"
            data-track-label="open_learncraft_suite"
          >
            Open LearnCraft Editor &rarr;
          </a>
        </article>

        <!-- PitStop -->
        <article class="product-card card-pitstop">
          <div class="card-glow" aria-hidden="true"></div>
          <div class="card-icon-wrapper">
            <span class="card-icon">🚗</span>
          </div>
          <div class="card-badge badge-pitstop">On‑Demand Service</div>
          <h3 class="card-title">PitStop</h3>
          <p class="card-subtitle">Mobile Mechanic Marketplace</p>
          <p class="card-description">
            PitStop connects customers with certified mobile technicians for fast, transparent automotive service. Customers describe their issue, receive bids, and book repairs at home or work. Technicians use PitStop to find jobs, submit bids, and complete work orders with AI‑assisted tools.
          </p>
          <ul class="card-features">
            <li>Customer‑to‑technician matching and bidding system</li>
            <li>Real‑time job tracking and secure payments</li>
            <li>AI‑assisted diagnostics and smart work orders</li>
            <li>Verified technician profiles and ratings</li>
          </ul>
          <a
            href="https://pitstopservices.ca/"
            target="_blank"
            rel="noopener noreferrer"
            class="card-cta cta-pitstop"
            data-track-event="cta_click"
            data-track-category="products"
            data-track-label="explore_pitstop_marketplace"
          >
            Explore PitStop Marketplace &rarr;
          </a>
        </article>

        <!-- CreatorLoom -->
        <article class="product-card card-creatorloom">
          <div class="card-glow" aria-hidden="true"></div>
          <div class="card-icon-wrapper">
            <span class="card-icon">🎬</span>
          </div>
          <div class="card-badge badge-creatorloom">AI Video Authoring</div>
          <h3 class="card-title">CreatorLoom</h3>
          <p class="card-subtitle">AI Video Course Generator &amp; Authoring Studio</p>
          <p class="card-description">
            CreatorLoom is a fully AI-powered video course generation and authoring platform. Describe your topic and our AI engine auto-generates complete video courses — scripts, voiceovers, on-screen visuals, and animations — all ready to publish. Built for creators who want to launch professional video courses at scale without filming a single frame.
          </p>
          <ul class="card-features">
            <li>AI-generated video scripts, voiceovers &amp; visuals</li>
            <li>Full course authoring with scene-by-scene editor</li>
            <li>Auto-generated animations, captions &amp; branding</li>
            <li>Publish to LMS, YouTube, or embed anywhere</li>
          </ul>
          <a
            href="https://creatorloom.mediasurf.ca"
            target="_blank"
            rel="noopener noreferrer"
            class="card-cta cta-creatorloom"
            data-track-event="cta_click"
            data-track-category="products"
            data-track-label="open_creatorloom"
          >
            Open CreatorLoom Studio &rarr;
          </a>
        </article>

                <!-- PowerPoint AI Tool -->
        <article class="product-card card-ppai">
          <div class="card-glow" aria-hidden="true"></div>
          <div class="card-icon-wrapper">
            <span class="card-icon">📊</span>
          </div>
          <div class="card-badge badge-ppai">AI Authoring</div>
          <h3 class="card-title">PowerPoint AI Tool</h3>
          <p class="card-subtitle">AI-Powered Slide Builder &amp; Course Converter</p>
          <p class="card-description">
            The PowerPoint AI Tool transforms slides into structured learning content. Upload any PPT file and instantly convert it into lessons, modules, quizzes, or full courses. Edit slides, rewrite content, generate visuals, and publish directly to LearnCraft LMS.
          </p>
          <ul class="card-features">
            <li>Upload PowerPoint and convert to courses</li>
            <li>AI rewriting, summarization, and slide enhancement</li>
            <li>Auto-generate quizzes, modules, and lesson blocks</li>
            <li>Export to LearnCraft LMS or SCORM</li>
          </ul>
          <a
            href="https://learncraftedu.ca"
            target="_blank"
            rel="noopener noreferrer"
            class="card-cta cta-ppai"
            data-track-event="cta_click"
            data-track-category="products"
            data-track-label="try_pp_ai_tool"
          >
            Try PowerPoint AI Tool &rarr;
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MediaSurfProductsSection'
}
</script>

<style scoped>
.products-section {
  padding: var(--section-spacing) 0;
  background: var(--bg-light);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* ---- Product Card ---- */
.product-card {
  position: relative;
  background: var(--bg-white);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  border: 1px solid var(--text-light);
  transition: all 0.35s ease;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

:root[data-theme="black"] .product-card {
  border-color: #333;
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.1);
  border-color: transparent;
}

:root[data-theme="black"] .product-card:hover {
  box-shadow: 0 24px 48px rgba(255, 255, 255, 0.05);
}

.card-glow {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.35s ease;
  pointer-events: none;
  z-index: 0;
}

.product-card:hover .card-glow {
  opacity: 1;
}

.card-suite .card-glow {
  background: radial-gradient(ellipse at 50% 0%, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
}

.card-ppai .card-glow {
  background: radial-gradient(ellipse at 50% 0%, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
}

.card-pitstop .card-glow {
  background: radial-gradient(ellipse at 50% 0%, rgba(16, 185, 129, 0.1) 0%, transparent 70%);
}

.card-creatorloom .card-glow {
  background: radial-gradient(ellipse at 50% 0%, rgba(245, 158, 11, 0.1) 0%, transparent 70%);
}

.card-icon-wrapper {
  position: relative;
  z-index: 1;
  margin-bottom: 1.25rem;
}

.card-icon {
  font-size: 2.5rem;
  display: inline-block;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: var(--bg-light);
  border: 1px solid #e5e7eb;
}

.card-suite .card-icon {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.08));
  border-color: rgba(99, 102, 241, 0.2);
}

.card-ppai .card-icon {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(34, 211, 238, 0.08));
  border-color: rgba(59, 130, 246, 0.2);
}

.card-pitstop .card-icon {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.06));
  border-color: rgba(16, 185, 129, 0.2);
}

.card-creatorloom .card-icon {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(217, 119, 6, 0.06));
  border-color: rgba(245, 158, 11, 0.2);
}

.card-badge {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-self: flex-start;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.badge-suite {
  background: rgba(99, 102, 241, 0.1);
  color: #6366f1;
  border: 1px solid rgba(99, 102, 241, 0.25);
}

.badge-ppai {
  background: rgba(59, 130, 246, 0.1);
  color: #2563eb;
  border: 1px solid rgba(59, 130, 246, 0.25);
}

.badge-pitstop {
  background: rgba(16, 185, 129, 0.1);
  color: #059669;
  border: 1px solid rgba(16, 185, 129, 0.25);
}

.badge-creatorloom {
  background: rgba(245, 158, 11, 0.1);
  color: #d97706;
  border: 1px solid rgba(245, 158, 11, 0.25);
}

.card-title {
  position: relative;
  z-index: 1;
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.card-subtitle {
  position: relative;
  z-index: 1;
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
  margin-bottom: 1rem;
}

.card-description {
  position: relative;
  z-index: 1;
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

.card-features {
  position: relative;
  z-index: 1;
  list-style: none;
  padding: 0;
  margin: 0 0 1.75rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.card-features li {
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.card-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  font-weight: 700;
  font-size: 0.8rem;
}

.card-suite .card-features li::before { color: #6366f1; }
.card-ppai .card-features li::before { color: #2563eb; }
.card-pitstop .card-features li::before { color: #059669; }
.card-creatorloom .card-features li::before { color: #d97706; }

.card-cta {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem 2rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: auto;
  cursor: pointer;
}

.cta-suite {
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  color: white;
}

.cta-suite:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.35);
}

.cta-ppai {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
}

.cta-ppai:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.35);
}

.cta-pitstop {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
}

.cta-pitstop:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.35);
}

.cta-creatorloom {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
}

.cta-creatorloom:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(245, 158, 11, 0.35);
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: 1fr;
  }

  .product-card {
    padding: 2rem 1.5rem;
  }
}
</style>
