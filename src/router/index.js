import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import ContactPage from '../views/ContactPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      title: 'Home - MediaSurf Technologies',
      description: 'MediaSurf Technologies delivers cutting-edge web development and e-learning solutions tailored for corporate training and educational excellence.'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
    meta: {
      title: 'About Us - MediaSurf Technologies',
      description: 'Learn about MediaSurf Technologies, our mission, vision, and the team of experts dedicated to transforming corporate education.'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
    meta: {
      title: 'Contact Us - MediaSurf Technologies',
      description: 'Get in touch with MediaSurf Technologies to discuss your corporate learning and e-learning project requirements.'
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  // Update title
  document.title = to.meta.title || 'MediaSurf Technologies';
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description || 'MediaSurf Technologies delivers cutting-edge web development and e-learning solutions.');
  }
  
  next();
});

export default router;
