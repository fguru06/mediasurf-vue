<template>
  <section id="pitstop" class="pitstop-section">
    <div class="container">
      <div class="pitstop-layout">
        <div class="pitstop-copy">
          <div class="section-badge">� PitStop</div>
          <h2 class="section-title pitstop-title">
            Mobile Mechanic<br>
            Service, Delivered<br>
            to Your Door
          </h2>
          <p class="pitstop-description">
            PitStop connects customers with certified mobile technicians for fast, transparent automotive service. Describe your issue, receive bids from verified mechanics, and book repairs at home or work — all through one platform.
          </p>

          <div class="pitstop-capabilities">
            <div class="ps-cap-item">
              <span class="ps-cap-icon">🔍</span>
              <div>
                <h4>Customer‑to‑Technician Matching &amp; Bidding</h4>
                <p>Describe your car issue and receive competitive bids from certified mobile technicians in your area. Compare prices, ratings, and availability.</p>
              </div>
            </div>
            <div class="ps-cap-item">
              <span class="ps-cap-icon">📍</span>
              <div>
                <h4>Real‑Time Job Tracking &amp; Secure Payments</h4>
                <p>Track your technician's arrival in real time. All payments are held securely and released only when the job is completed to your satisfaction.</p>
              </div>
            </div>
            <div class="ps-cap-item">
              <span class="ps-cap-icon">🤖</span>
              <div>
                <h4>AI‑Assisted Diagnostics &amp; Smart Work Orders</h4>
                <p>Technicians use AI‑powered tools to diagnose issues faster and generate detailed work orders. Customers get transparent breakdowns before any work begins.</p>
              </div>
            </div>
            <div class="ps-cap-item">
              <span class="ps-cap-icon">⭐</span>
              <div>
                <h4>Verified Technician Profiles &amp; Ratings</h4>
                <p>Every technician is background‑checked and certified. Browse profiles, read reviews from real customers, and book with confidence.</p>
              </div>
            </div>
          </div>

          <div class="pitstop-actions">
            <a
              href="https://pitstop.mediasurf.ca/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-pitstop-primary"
              data-track-event="cta_click"
              data-track-category="pitstop"
              data-track-label="explore_pitstop_marketplace"
            >
              Explore PitStop Marketplace &rarr;
            </a>
            <a
              href="https://pitstop.mediasurf.ca/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-pitstop-secondary"
              data-track-event="cta_click"
              data-track-category="pitstop"
              data-track-label="become_technician"
            >
              Become a Technician
            </a>
          </div>

          <div class="pitstop-trust">
            <span>Verified technicians</span>
            <span>Secure payments</span>
            <span>AI‑assisted diagnostics</span>
          </div>
        </div>

        <div class="pitstop-visual">
          <div class="pitstop-mockup-frame">
            <div class="pitstop-mockup-label">PitStop — Marketplace Dashboard</div>
            <div class="pitstop-dash-mock">
              <!-- Search bar -->
              <div class="ps-search-bar">
                <span class="ps-search-icon">🔍</span>
                <span class="ps-search-text">Brake pad replacement — 2019 Honda Civic</span>
              </div>

              <!-- Bids -->
              <div class="ps-bids-label">Active Bids</div>
              <div class="ps-bid-cards">
                <div class="ps-bid" v-for="bid in pitstopBids" :key="bid.name">
                  <div class="ps-bid-header">
                    <span class="ps-bid-avatar">{{ bid.avatar }}</span>
                    <div class="ps-bid-info">
                      <span class="ps-bid-name">{{ bid.name }}</span>
                      <span class="ps-bid-rating">⭐ {{ bid.rating }} ({{ bid.reviews }})</span>
                    </div>
                    <span class="ps-bid-price">{{ bid.price }}</span>
                  </div>
                  <div class="ps-bid-details">
                    <span>{{ bid.eta }}</span>
                    <span>·</span>
                    <span>{{ bid.jobs }} jobs completed</span>
                  </div>
                </div>
              </div>

              <!-- Quick stats -->
              <div class="ps-quick-stats">
                <div class="ps-stat">
                  <span class="ps-stat-value">1,200+</span>
                  <span class="ps-stat-label">Verified Techs</span>
                </div>
                <div class="ps-stat">
                  <span class="ps-stat-value">4.8</span>
                  <span class="ps-stat-label">Avg Rating</span>
                </div>
                <div class="ps-stat">
                  <span class="ps-stat-value">24h</span>
                  <span class="ps-stat-label">Avg Response</span>
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
  name: 'PitstopLMSSection',
  data() {
    return {
      pitstopBids: [
        { name: 'Marcus T.', avatar: '👨‍🔧', rating: '4.9', reviews: '342', price: '$180', eta: 'Today by 2 PM', jobs: '1,240' },
        { name: 'David K.', avatar: '👨‍🔧', rating: '4.8', reviews: '218', price: '$155', eta: 'Tomorrow 9 AM', jobs: '876' },
        { name: 'James R.', avatar: '👨‍🔧', rating: '4.7', reviews: '156', price: '$195', eta: 'Today by 5 PM', jobs: '543' }
      ]
    }
  }
}
</script>

<style scoped>
.pitstop-section {
  padding: var(--section-spacing) 0;
  background: linear-gradient(180deg, #f0fdf4 0%, #ecfdf5 50%, #f8fafc 100%);
}

:root[data-theme="black"] .pitstop-section {
  background: linear-gradient(180deg, #0a1a0a 0%, #0d1a0d 50%, #0a0a0a 100%);
}

.pitstop-layout {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 4rem;
  align-items: center;
}

.pitstop-title {
  text-align: left;
  font-size: clamp(2rem, 4vw, 2.75rem);
}

.pitstop-description {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 540px;
}

/* Capabilities */
.pitstop-capabilities {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.ps-cap-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.ps-cap-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: var(--bg-white);
  border: 1px solid rgba(16, 185, 129, 0.15);
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.06);
}

:root[data-theme="black"] .ps-cap-icon {
  border-color: #333;
  box-shadow: none;
}

.ps-cap-item h4 {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.ps-cap-item p {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Actions */
.pitstop-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.btn-pitstop-primary {
  padding: 0.9rem 2.25rem;
  background: linear-gradient(135deg, #10b981, #059669);
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

.btn-pitstop-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.4);
}

.btn-pitstop-secondary {
  padding: 0.9rem 2.25rem;
  background: transparent;
  color: #059669;
  border: 2px solid rgba(16, 185, 129, 0.3);
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s;
  cursor: pointer;
}

.btn-pitstop-secondary:hover {
  background: rgba(16, 185, 129, 0.05);
  border-color: rgba(16, 185, 129, 0.55);
}

/* Trust pills */
.pitstop-trust {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.pitstop-trust span {
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #059669;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.15);
}

/* ---- Visual Marketplace Mockup ---- */
.pitstop-visual {
  position: relative;
}

.pitstop-mockup-frame {
  background: linear-gradient(145deg, #022c22 0%, #064e3b 50%, #022c22 100%);
  border-radius: 20px;
  padding: 1.75rem;
  border: 1px solid rgba(52, 211, 153, 0.15);
  box-shadow: 0 24px 60px rgba(6, 78, 59, 0.3);
  overflow: hidden;
}

.pitstop-mockup-label {
  color: rgba(229, 237, 251, 0.65);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

/* Search bar */
.ps-search-bar {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.7rem 0.85rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(52, 211, 153, 0.2);
  border-radius: 10px;
  margin-bottom: 1.25rem;
}

.ps-search-icon {
  font-size: 0.85rem;
  opacity: 0.7;
}

.ps-search-text {
  font-size: 0.78rem;
  color: rgba(229, 237, 251, 0.65);
}

/* Bids */
.ps-bids-label {
  font-size: 0.7rem;
  font-weight: 700;
  color: #6ee7b7;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.75rem;
}

.ps-bid-cards {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 1.25rem;
}

.ps-bid {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(52, 211, 153, 0.12);
  border-radius: 10px;
  padding: 0.75rem 0.85rem;
}

.ps-bid-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.4rem;
}

.ps-bid-avatar {
  font-size: 1.1rem;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
}

.ps-bid-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.ps-bid-name {
  font-size: 0.8rem;
  font-weight: 600;
  color: #ecfdf5;
}

.ps-bid-rating {
  font-size: 0.65rem;
  color: #fbbf24;
}

.ps-bid-price {
  font-size: 0.9rem;
  font-weight: 700;
  color: #6ee7b7;
}

.ps-bid-details {
  display: flex;
  gap: 0.35rem;
  font-size: 0.65rem;
  color: rgba(229, 237, 251, 0.4);
  padding-left: 2.4rem;
}

/* Quick stats */
.ps-quick-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.55rem;
}

.ps-stat {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 0.65rem 0.5rem;
  text-align: center;
  border: 1px solid rgba(52, 211, 153, 0.1);
}

.ps-stat-value {
  display: block;
  font-size: 0.95rem;
  font-weight: 700;
  color: #6ee7b7;
  margin-bottom: 0.15rem;
}

.ps-stat-label {
  display: block;
  font-size: 0.6rem;
  color: rgba(229, 237, 251, 0.45);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

@media (max-width: 768px) {
  .pitstop-layout {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .pitstop-visual {
    order: -1;
  }

  .pitstop-title {
    font-size: 1.75rem;
  }

  .pitstop-actions {
    flex-direction: column;
  }
}
</style>
