<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-bg-pattern"></div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">Contact Us</div>
          <h1 class="hero-title">
            Let's Start a 
            <span class="gradient-text">Conversation</span>
          </h1>
          <p class="hero-description">
            Ready to transform your corporate learning? Let's discuss your project and explore
            how we can help achieve your goals.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Info Cards -->
    <section class="contact-info-section">
      <div class="container">
        <div class="contact-cards">
          <div class="contact-card">
            <div class="icon-wrapper email-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m2 7 10 7 10-7"/>
              </svg>
            </div>
            <h3>Email</h3>
            <p>info@mediasurf.ca</p>
          </div>

          <div class="contact-card">
            <div class="icon-wrapper phone-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h3>Phone</h3>
            <p>+1 (647) 849-9656</p>
          </div>

          <div class="contact-card">
            <div class="icon-wrapper location-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3>Location</h3>
            <p>Waterloo, Ontario, Canada</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content Section -->
    <section class="main-content-section">
      <div class="container">
        <div class="content-grid">
          <!-- Contact Form -->
          <div class="form-container" id="contact-form">
            <h2>Send Us a Message</h2>
            <p class="form-subtitle">Fill out the form below and we'll get back to you within 24 hours.</p>
            
            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="fullName">Full Name *</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    v-model="formData.fullName"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div class="form-group">
                  <label for="email">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="formData.email"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="company">Company</label>
                  <input 
                    type="text" 
                    id="company" 
                    v-model="formData.company"
                    placeholder="Your Company"
                  />
                </div>
                
                <div class="form-group">
                  <label for="phone">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    v-model="formData.phone"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="message">Message *</label>
                <textarea 
                  id="message" 
                  v-model="formData.message"
                  placeholder="Tell us about your project..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" class="submit-btn">
                <span>Send Message</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </form>
          </div>

          <!-- Sidebar -->
          <div class="sidebar">
            <!-- Services -->
            <div class="sidebar-card services-card">
              <h3>Our Services</h3>
              <p class="card-subtitle">Explore what we can do for your organization</p>
              <ul class="services-list">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span>Custom E-Learning Development</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span>Learning Management Systems</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span>Corporate Training Platforms</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span>Quiz & Assessment Tools</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span>Onboarding Solutions</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span>AI Learning Assistants & Automation</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span>Research-Driven Decision Support</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span>Content Migration Services</span>
                </li>
              </ul>
            </div>

            <!-- Why Partner With Us -->
            <div class="sidebar-card partnership-card">
              <h3>Why Partner With Us?</h3>
              <div class="benefit">
                <div class="benefit-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div class="benefit-content">
                  <h4>Expert Team</h4>
                  <p>Experienced developers and learning specialists</p>
                </div>
              </div>
              <div class="benefit">
                <div class="benefit-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div class="benefit-content">
                  <h4>Flexible Contracts</h4>
                  <p>Tailored engagement models to fit your needs</p>
                </div>
              </div>
              <div class="benefit">
                <div class="benefit-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div class="benefit-content">
                  <h4>Proven Results</h4>
                  <p>95% client satisfaction and repeat business</p>
                </div>
              </div>
            </div>

            <!-- Business Hours -->
            <div class="sidebar-card hours-card">
              <h3>Business Hours</h3>
              <div class="hours-row">
                <span>Monday - Friday:</span>
                <span class="hours-time">9:00 AM - 6:00 PM PST</span>
              </div>
              <div class="hours-row">
                <span>Saturday - Sunday:</span>
                <span class="hours-time">Closed</span>
              </div>
              <p class="hours-note">* We typically respond to all inquiries within 24 hours during business days.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Prefer to Schedule a Call?</h2>
          <p>Book a free 30-minute consultation to discuss your project requirements<br>and see how we can help.</p>
          <a href="#contact-form" class="cta-button">Schedule a Consultation</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      formData: {
        fullName: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted:', this.formData);
      // Add your form submission logic here
      alert('Thank you for your message! We will get back to you within 24 hours.');
      
      // Reset form
      this.formData = {
        fullName: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      };
    }
  }
}
</script>

<style scoped>
.contact-page {
  padding-top: 80px;
}

/* Hero Section */
.hero-section {
  position: relative;
  background: var(--gradient-hero);
  color: white;
  padding: 5rem 0;
  text-align: center;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&h=900&fit=crop');
  background-size: cover;
  background-position: center;
  opacity: 0.14;
  mix-blend-mode: soft-light;
  pointer-events: none;
}

.hero-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  animation: float 20s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 30px;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 1.5rem 0;
  line-height: 1.2;
}

.gradient-text {
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

.hero-description {
  font-size: 1.15rem;
  line-height: 1.8;
  opacity: 0.95;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
}

/* Contact Info Cards */
.contact-info-section {
  padding: 3rem 0;
  background: #f7fafc;
}

.contact-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.contact-card {
  background: white;
  border-radius: 12px;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  transition: transform 0.3s, box-shadow 0.3s;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.icon-wrapper {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
}

.email-icon {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.phone-icon {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.location-icon {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.contact-card h3 {
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
  color: #2d3748;
}

.contact-card p {
  font-size: 1.1rem;
  color: #718096;
  margin: 0;
}

/* Main Content Section */
.main-content-section {
  padding: 4rem 0;
  background: white;
}

.content-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 3rem;
  margin-top: 2rem;
}

/* Contact Form */
.form-container h2 {
  font-size: 2rem;
  margin: 0 0 0.5rem 0;
  color: #2d3748;
}

.form-subtitle {
  color: #718096;
  margin: 0 0 2rem 0;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 500;
  color: #4a5568;
  font-size: 0.95rem;
}

.form-group input,
.form-group textarea {
  padding: 0.875rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;
  background: #f7fafc;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  background: white;
}

.form-group textarea {
  resize: vertical;
  font-family: inherit;
}

.submit-btn {
  background: #1a202c;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background 0.3s, transform 0.2s;
}

.submit-btn:hover {
  background: #2d3748;
  transform: translateY(-2px);
}

.submit-btn:active {
  transform: translateY(0);
}

/* Sidebar */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.sidebar-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 2rem;
}

.sidebar-card h3 {
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  color: #2d3748;
}

.card-subtitle {
  color: #718096;
  margin: 0 0 1.5rem 0;
  font-size: 0.95rem;
}

/* Services List */
.services-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.services-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #4a5568;
}

.services-list li svg {
  color: #667eea;
  flex-shrink: 0;
}

/* Partnership Card */
.partnership-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.partnership-card h3 {
  color: white;
  margin-bottom: 1.5rem;
}

.benefit {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.benefit:last-child {
  margin-bottom: 0;
}

.benefit-icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.benefit-content h4 {
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
  color: white;
}

.benefit-content p {
  margin: 0;
  font-size: 0.95rem;
  opacity: 0.9;
  color: white;
}

/* Business Hours */
.hours-card h3 {
  margin-bottom: 1.5rem;
}

.hours-row {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #e2e8f0;
  color: #4a5568;
}

.hours-row:last-of-type {
  margin-bottom: 1rem;
}

.hours-time {
  font-weight: 600;
  color: #2d3748;
}

.hours-note {
  font-size: 0.875rem;
  color: #718096;
  margin: 0;
  font-style: italic;
}

/* CTA Section */
.cta-section {
  background: #f7fafc;
  padding: 4rem 0;
  text-align: center;
}

.cta-content h2 {
  font-size: 2rem;
  margin: 0 0 1rem 0;
  color: #2d3748;
}

.cta-content p {
  font-size: 1.1rem;
  color: #718096;
  margin: 0 0 2rem 0;
  line-height: 1.6;
}

.cta-button {
  background: white;
  color: #2d3748;
  padding: 1rem 2rem;
  border: 2px solid #2d3748;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.cta-button:hover {
  background: #2d3748;
  color: white;
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 968px) {
  .content-grid {
    grid-template-columns: 1fr;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .contact-cards {
    grid-template-columns: 1fr;
  }

  .cta-content h2 {
    font-size: 1.5rem;
  }
}
</style>
