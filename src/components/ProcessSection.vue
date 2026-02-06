<template>
  <section class="process">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Our Process</h2>
        <p class="section-description">
          A streamlined approach to delivering exceptional learning solutions
        </p>
      </div>

      <div class="process-steps">
        <div class="process-step" v-for="(step, index) in steps" :key="index">
          <div class="step-number">{{ step.number }}</div>
          <h3 class="step-title">{{ step.title }}</h3>
          <p class="step-description">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProcessSection',
  data() {
    return {
      steps: [
        {
          number: '01',
          title: 'Discover',
          description: 'We analyze your needs and objectives'
        },
        {
          number: '02',
          title: 'Design',
          description: 'Custom solutions tailored to your goals'
        },
        {
          number: '03',
          title: 'Develop',
          description: 'Build and test with your feedback'
        },
        {
          number: '04',
          title: 'Deploy',
          description: 'Launch and provide ongoing support'
        }
      ]
    }
  }
}
</script>

<style scoped>
.process {
  padding: var(--section-spacing) 0;
  background: var(--bg-white);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.process-step {
  text-align: center;
  animation: fadeInUp 0.6s ease-out;
  animation-fill-mode: both;
}

.process-step:nth-child(1) {
  animation-delay: 0.1s;
}

.process-step:nth-child(2) {
  animation-delay: 0.2s;
}

.process-step:nth-child(3) {
  animation-delay: 0.3s;
}

.process-step:nth-child(4) {
  animation-delay: 0.4s;
}

.step-number {
  width: 70px;
  height: 70px;
  background: var(--gradient-primary);
  color: white;
  font-size: 1.5rem;
  font-weight: 800;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.2rem;
  box-shadow: 0 10px 30px rgba(37, 99, 235, 0.3);
  transition: all 0.3s;
}

.process-step:hover .step-number {
  transform: scale(1.1) translateY(-5px);
  box-shadow: 0 15px 40px rgba(37, 99, 235, 0.4);
}

.step-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.6rem;
}

.step-description {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .process-steps {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
