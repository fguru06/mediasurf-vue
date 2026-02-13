<template>
  <section class="testimonials">
    <div class="container">
      <div class="section-header">
        <div class="section-badge">💬 Client Testimonials</div>
        <h2 class="section-title">What Our Clients Say</h2>
        <p class="section-description">
          Trusted by leading companies to deliver exceptional training solutions
        </p>
      </div>

      <div class="testimonials-grid">
        <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
          <div class="quote-icon">"</div>
          <p class="testimonial-text">{{ testimonial.text }}</p>
          <div class="testimonial-author">
            <div class="author-avatar" :style="{ background: testimonial.color }">
              {{ testimonial.initials }}
            </div>
            <div class="author-info">
              <div class="author-name">{{ testimonial.name }}</div>
              <div class="author-role">{{ testimonial.role }}</div>
            </div>
          </div>
          <div class="testimonial-rating">
            <span v-for="n in 5" :key="n">⭐</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialsSection',
  data() {
    return {
      testimonials: [
        {
          text: "MediaSurf Tech delivered an exceptional onboarding platform that reduced our new hire ramp-up time by 40%. Their attention to detail and understanding of our business needs was impressive.",
          name: "Sarah Johnson",
          role: "Head of HR at TechCorp Global",
          initials: "SJ",
          color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        },
        {
          text: "The custom LMS they built for us has transformed how we train our employees. The platform is intuitive, scalable, and our team engagement has increased significantly. Excellent work!",
          name: "Michael Chen",
          role: "Learning & Development Director at FinanceHub",
          initials: "MC",
          color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
        },
        {
          text: "Working with MediaSurf Tech was a game-changer. They created interactive training modules that our employees actually enjoy. The compliance training completion rate went from 60% to 98%!",
          name: "Emily Rodriguez",
          role: "Chief Operations Officer at MediCare Plus",
          initials: "ER",
          color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
        },
        {
          text: "Their e-learning content is top-notch. The team understood our technical training needs perfectly and delivered engaging, practical modules that upskilled our entire development team.",
          name: "David Kim",
          role: "CTO at InnovateTech Solutions",
          initials: "DK",
          color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
        },
        {
          text: "Professional, responsive, and creative. MediaSurf Tech exceeded our expectations in every way. The quiz platform they developed has become integral to our certification program.",
          name: "Lisa Anderson",
          role: "Training Manager at RetailPro International",
          initials: "LA",
          color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
        },
        {
          text: "From concept to deployment, the MediaSurf Tech team was with us every step. The onboarding system they created is modern, mobile-friendly, and has received rave reviews from new hires.",
          name: "James Wilson",
          role: "VP of People Operations at StartupVentures",
          initials: "JW",
          color: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
        }
      ]
    }
  }
}
</script>

<style scoped>
.testimonials {
  padding: var(--section-spacing) 0;
  background: var(--bg-light);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}


/* Typography styles inherited from global section-title and section-description */

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  position: relative;
  transition: all 0.3s;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: #2563eb;
}

.quote-icon {
  font-size: 4rem;
  color: #e5e7eb;
  line-height: 1;
  margin-bottom: 1rem;
  font-family: Georgia, serif;
}

.testimonial-text {
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.author-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.author-info {
  flex: 1;
}

.author-name {
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.2rem;
}

.author-role {
  font-size: 0.85rem;
  color: #6b7280;
}

.testimonial-rating {
  display: flex;
  gap: 0.2rem;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}
</style>
