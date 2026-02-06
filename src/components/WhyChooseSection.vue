<template>
  <section class="why-choose">
    <div class="container">
      <div class="why-choose-content">
        <div class="image-side">
          <div class="image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=600&fit=crop" 
              alt="Team working on laptop"
              class="main-image"
            />
          </div>
        </div>

        <div class="content-side">
          <h2 class="section-title">Why Choose MediaSurf Tech?</h2>
          <p class="section-description">
            We understand the unique challenges of corporate learning and development. 
            Our team combines technical expertise with educational insights to deliver 
            solutions that drive real results.
          </p>

          <div class="benefits">
            <div class="benefit-item" v-for="(benefit, index) in benefits" :key="index">
              <div class="benefit-icon" :style="{ background: benefit.color }">
                <span v-html="benefit.icon"></span>
              </div>
              <div class="benefit-content">
                <h3 class="benefit-title">{{ benefit.title }}</h3>
                <p class="benefit-description">{{ benefit.description }}</p>
              </div>
            </div>
          </div>

          <button class="btn-learn-more">
            Learn More About Us
            <span class="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WhyChooseSection',
  data() {
    return {
      benefits: [
        {
          icon: '🧩',
          title: 'Custom Solutions',
          description: 'Tailored to your specific corporate learning needs',
          color: '#dbeafe'
        },
        {
          icon: '🎯',
          title: 'Results-Driven',
          description: 'Focus on measurable learning outcomes',
          color: '#dbeafe'
        },
        {
          icon: '⚡',
          title: 'Fast Delivery',
          description: 'Efficient project timelines without compromising quality',
          color: '#dbeafe'
        }
      ]
    }
  }
}
</script>

<style scoped>
.why-choose {
  padding: var(--section-spacing) 0;
  background: var(--bg-light);
}

.why-choose-content {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 5rem;
  align-items: center;
}

.image-side {
  animation: fadeInLeft 0.8s ease-out;
}

.image-wrapper {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.main-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.content-side {
  animation: fadeInRight 0.8s ease-out;
}

/* Typography styles inherited from global section-title and section-description */

.benefits {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  margin-bottom: 3rem;
}

.benefit-item {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.benefit-icon {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  flex-shrink: 0;
  box-shadow: none;
}

.benefit-content {
  flex: 1;
}

.benefit-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.4rem;
}

.benefit-description {
  font-size: 0.98rem;
  color: #6b7280;
  line-height: 1.6;
}

.btn-learn-more {
  padding: 1rem 2rem;
  background: #1a1a1a;
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.3s;
}

.btn-learn-more:hover {
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
}

.arrow {
  font-size: 1.2rem;
  transition: transform 0.3s;
}

.btn-learn-more:hover .arrow {
  transform: translateX(5px);
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

@media (max-width: 968px) {
  .why-choose-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .image-side {
    order: 2;
  }

  .content-side {
    order: 1;
  }
}
</style>
