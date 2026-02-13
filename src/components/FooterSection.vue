<template>
  <section id="contact" class="cta-section">
    <div class="container">
      <div class="cta-card">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Transform Your Training?</h2>
          <p class="cta-description">
            Let's discuss how we can create custom e-learning solutions that engage your team and drive results.
          </p>
          <div class="cta-actions">
            <router-link to="/contact" class="btn-primary-lg">Get Started Today</router-link>
            <router-link to="/contact#contact-form" class="btn-secondary-lg">Schedule a Consultation</router-link>
          </div>
          <div class="cta-features">
            <div class="feature-item">✓ Free consultation</div>
            <div class="feature-item">✓ Custom solutions</div>
            <div class="feature-item">✓ Expert support</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-column footer-brand">
          <div class="footer-logo">
            <img src="/logo.svg" alt="MediaSurf Technologies" class="footer-logo-image" />
          </div>
          <p class="footer-description">
            Transforming corporate learning through innovative web development and e-learning solutions.
          </p>
          <div class="social-links">
            <a href="#" class="social-link">
              <span>𝕏</span>
            </a>
            <a href="#" class="social-link">
              <span>in</span>
            </a>
            <a href="#" class="social-link">
              <span>f</span>
            </a>
            <a href="#" class="social-link">
              <span>▶</span>
            </a>
          </div>
        </div>

        <div class="footer-column">
          <h3 class="footer-heading">Services</h3>
          <ul class="footer-links">
            <li><a href="#">Web Development</a></li>
            <li><a href="#">E-Learning Content</a></li>
            <li><a href="#">Corporate Training</a></li>
            <li><a href="#">Quiz Development</a></li>
            <li><a href="#">Employee Onboarding</a></li>
            <li><a href="#">Custom LMS</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h3 class="footer-heading">Company</h3>
          <ul class="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h3 class="footer-heading">Resources</h3>
          <ul class="footer-links">
            <li><a href="#">Blog</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Client Portal</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Request Demo</a></li>
            <li><a href="#">Get Quote</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h3 class="footer-heading">Legal</h3>
          <ul class="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Licenses</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">© 2026 MediaSurf Tech. All rights reserved.</p>
        <div class="footer-meta">
          <span>Empowering businesses through innovative learning solutions</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>

<style scoped>
.cta-section {
  padding: 80px 0;
  background: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.cta-card {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  border-radius: 24px;
  padding: 4rem;
  position: relative;
  overflow: hidden;
}

.cta-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.cta-content {
  position: relative;
  z-index: 1;
  text-align: center;
}

.cta-title {
  font-size: 3rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
}

.cta-description {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.btn-primary-lg {
  padding: 1rem 2.5rem;
  background: white;
  color: #2563eb;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary-lg:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.3);
}

.btn-secondary-lg {
  padding: 1rem 2.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid white;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  backdrop-filter: blur(10px);
}

.btn-secondary-lg:hover {
  background: rgba(255, 255, 255, 0.2);
}

.cta-features {
  display: flex;
  justify-content: center;
  gap: 2rem;
  color: white;
  font-size: 1rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer {
  background: #1a1a1a;
  color: white;
  padding: 60px 0 30px;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-brand {
  padding-right: 2rem;
}

.footer-logo {
  margin-bottom: 1.5rem;
}

.footer-logo-image {
  height: 50px;
  width: auto;
  filter: brightness(0) invert(1);
}

.footer-description {
  color: #9ca3af;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s;
  font-weight: 700;
}

.social-link:hover {
  background: #2563eb;
  transform: translateY(-3px);
}

.footer-heading {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.8rem;
}

.footer-links a {
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.3s;
  font-size: 0.95rem;
}

.footer-links a:hover {
  color: #2563eb;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright {
  color: #9ca3af;
  margin: 0;
}

.footer-meta {
  color: #9ca3af;
  font-size: 0.9rem;
}

@media (max-width: 968px) {
  .cta-card {
    padding: 3rem 2rem;
  }

  .cta-title {
    font-size: 2rem;
  }

  .cta-actions {
    flex-direction: column;
  }

  .btn-primary-lg,
  .btn-secondary-lg {
    width: 100%;
  }

  .cta-features {
    flex-direction: column;
    gap: 0.8rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-brand {
    padding-right: 0;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>
