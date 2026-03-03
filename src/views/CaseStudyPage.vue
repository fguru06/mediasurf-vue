<template>
  <div class="case-study-page">
    <header class="case-study-header">
      <div class="container">
        <router-link to="/" class="back-link">← Back to Home</router-link>
        <span class="category-badge">E-Learning Platform</span>
        <h1 class="main-title">Modernizing Compliance Training for FinTechCorp</h1>
        <p class="subtitle">How we increased engagement by 300% and reduced completion time by 40%</p>
      </div>
    </header>

    <div class="container">
      <div class="content-grid">
        <main class="case-study-content">
          <section class="case-section">
            <h2>The Challenge</h2>
            <p>FinTechCorp faced a critical issue: their compliance training completion rates were stagnating at 65%. The legacy system was non-responsive, slow, and delivered content via static PDF slides.</p>
          </section>

          <section class="case-section">
            <h2>Our Solution</h2>
            <p>We developed a custom, mobile-first Learning Management System (LMS) with bite-sized microlearning modules.</p>
            <ul>
              <li><strong>Interactive Scenarios:</strong> Replaced text-heavy policies with decision-based roleplay.</li>
              <li><strong>Gamification:</strong> Introduced leaderboards and badges for early completion.</li>
              <li><strong>Instant Analytics:</strong> Managers received real-time dashboards on team progress.</li>
            </ul>
          </section>

          <section class="case-section">
            <h2>The Results</h2>
            <p>Within 3 months of launch, the results exceeded all expectations.</p>
            <div class="stats-grid">
              <div class="stat-item">
                <span class="stat-number">98%</span>
                <span class="stat-label">Completion Rate</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">40%</span>
                <span class="stat-label">Faster Onboarding</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">4.8/5</span>
                <span class="stat-label">User Rating</span>
              </div>
            </div>
          </section>
        </main>
        
        <aside class="case-sidebar">
          <div class="sidebar-card">
            <h3>Key Results</h3>
            <ul class="key-results-list">
              <li>🚀 <strong>300%</strong> Engagement Increase</li>
              <li>⏱ <strong>15h</strong> Saved per Manager/Month</li>
              <li>📱 <strong>100%</strong> Mobile Compatible</li>
            </ul>
          </div>
          
          <div class="sidebar-card client-info">
            <h3>Client Profile</h3>
            <p><strong>Industry:</strong> Financial Services</p>
            <p><strong>Employees:</strong> 500-1000</p>
            <p><strong>Location:</strong> Toronto, ON</p>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CaseStudyPage',
  metaInfo: {
    title: 'FinTechCorp Case Study - MediaSurf Technologies',
    meta: [
      { name: 'description', content: 'See how MediaSurf Technologies helped a leading FinTech company increase compliance training completion by 40%.' }
    ]
  }
}
</script>

<style scoped>
.case-study-page {
  padding-top: 80px;
  padding-bottom: 4rem;
}

.case-study-header {
  background: var(--bg-light);
  padding: 4rem 0;
  margin-bottom: 3rem;
  border-bottom: 1px solid var(--border-color);
}

.back-link {
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 1.5rem;
}

.category-badge {
  background: var(--primary-light);
  color: var(--primary-dark);
  padding: 0.25rem 0.75rem;
  border-radius: 99px;
  font-size: 0.875rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1rem;
}

.main-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 800px;
}

.content-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
}

.case-section {
  margin-bottom: 3rem;
}

.case-section h2 {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.case-section p, .case-section li {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}

.stat-item {
  text-align: center;
  padding: 1.5rem;
  background: var(--bg-card);
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.sidebar-card {
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  margin-bottom: 2rem;
}

.sidebar-card h3 {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--primary);
  padding-bottom: 0.5rem;
  display: inline-block;
}

.key-results-list {
  list-style: none;
  padding: 0;
}

.key-results-list li {
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>