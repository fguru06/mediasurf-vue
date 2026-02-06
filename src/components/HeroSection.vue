<template>
  <section id="home" class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <div class="badge">🚀 Transforming Corporate Learning</div>
          <h1 class="hero-title">
            Elevate Your<br>
            Corporate Learning<br>
            Experience
          </h1>
          <p class="hero-description">
            MediaSurf Technologies delivers cutting-edge web development and e-learning solutions tailored for corporate training, onboarding, and educational excellence.
          </p>
          <div class="hero-actions">
            <button class="btn-primary-lg">Get Started</button>
            <button class="btn-secondary-lg">Learn More</button>
          </div>
        </div>
        
        <div class="hero-image">
          <div class="image-grid">
            <!-- Main image with badge -->
            <div class="main-image">
              <div class="badge-overlay badge-top">
                <span class="badge-icon">😊</span>
                Trusted by 50+ Companies
              </div>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop" alt="Corporate Training" />
            </div>
            
            <!-- Bottom images -->
            <div class="bottom-images">
              <div class="small-image">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop" alt="Team Collaboration" />
              </div>
              <div class="small-image">
                <div class="badge-overlay badge-bottom">
                  <span class="badge-icon">👥</span>
                  10+ Years Experience
                </div>
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop" alt="Professional Training" />
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
  name: 'HeroSection'
}
</script>

<style scoped>
.hero {
  padding: var(--section-spacing) 0;
  background: var(--gradient-primary);
  overflow: hidden;
  min-height: 90vh;
  display: flex;
  align-items: center;
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

.hero-actions {
  display: flex;
  gap: 1rem;
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
  transition: all 0.3s;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
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
  transition: all 0.3s;
}

.btn-secondary-lg:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}

.hero-image {
  position: relative;
  animation: fadeInRight 0.8s ease-out;
}

.image-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.main-image {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.main-image img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  aspect-ratio: 16 / 10;
}

.bottom-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.small-image {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
}

.small-image img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  aspect-ratio: 4 / 3;
}

.badge-overlay {
  position: absolute;
  z-index: 10;
  background: white;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  font-weight: 600;
  font-size: 0.9rem;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  animation: fadeInScale 0.6s ease-out 0.5s both;
}

.badge-top {
  top: 1.5rem;
  right: 1.5rem;
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  color: #1e40af;
}

.badge-bottom {
  bottom: 1.5rem;
  left: 1.5rem;
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  color: #065f46;
}

.badge-icon {
  font-size: 1.1rem;
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
}

@media (max-width: 768px) {
  .hero {
    padding: 60px 0 40px;
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

  .btn-primary-lg,
  .btn-secondary-lg {
    width: 100%;
    justify-content: center;
  }

  .bottom-images {
    grid-template-columns: 1fr;
  }

  .badge-overlay {
    font-size: 0.8rem;
    padding: 0.6rem 1.2rem;
  }

  .badge-top {
    top: 1rem;
    right: 1rem;
  }

  .badge-bottom {
    bottom: 1rem;
    left: 1rem;
  }
}
</style>
