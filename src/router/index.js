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
      description: 'MediaSurf Technologies delivers cutting-edge web development and e-learning solutions tailored for corporate training and educational excellence.',
      keywords: 'MediaSurf Technologies, eLearning, corporate training, LMS development, web development, onboarding, learning analytics',
      image: '/og-image.svg'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
    meta: {
      title: 'About Us - MediaSurf Technologies',
      description: 'Learn about MediaSurf Technologies, our mission, vision, and the team of experts dedicated to transforming corporate education.',
      keywords: 'about MediaSurf, learning design, eLearning experts, corporate training partner, educational technology',
      image: '/og-image.svg'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
    meta: {
      title: 'Contact Us - MediaSurf Technologies',
      description: 'Get in touch with MediaSurf Technologies to discuss your corporate learning and e-learning project requirements.',
      keywords: 'contact MediaSurf, eLearning services, corporate training consultation, LMS development quote, web development services',
      image: '/og-image.svg'
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
  const siteUrl = 'https://mediasurf.ca';
  const defaults = {
    title: 'MediaSurf Technologies',
    description: 'MediaSurf Technologies delivers cutting-edge web development and e-learning solutions.',
    keywords: 'eLearning, corporate training, web development, LMS development, MediaSurf Technologies',
    image: '/og-image.svg'
  };

  const meta = {
    title: to.meta.title || defaults.title,
    description: to.meta.description || defaults.description,
    keywords: to.meta.keywords || defaults.keywords,
    image: to.meta.image || defaults.image
  };

  document.title = meta.title;

  const setMeta = (selector, content, attrName = 'content', tagName = 'meta') => {
    let element = document.querySelector(selector);
    if (!element) {
      element = document.createElement(tagName);
      if (tagName === 'meta') {
        const [attrKey, attrValue] = selector.match(/\[(.+?)="(.+?)"\]/)?.slice(1) || [];
        if (attrKey && attrValue) {
          element.setAttribute(attrKey, attrValue);
        }
      } else if (tagName === 'link') {
        element.setAttribute('rel', 'canonical');
      }
      document.head.appendChild(element);
    }
    element.setAttribute(attrName, content);
  };

  setMeta('meta[name="description"]', meta.description);
  setMeta('meta[name="keywords"]', meta.keywords);

  const canonicalUrl = `${siteUrl}${to.path}`;
  setMeta('link[rel="canonical"]', canonicalUrl, 'href', 'link');

  setMeta('meta[property="og:title"]', meta.title);
  setMeta('meta[property="og:description"]', meta.description);
  setMeta('meta[property="og:url"]', canonicalUrl);
  setMeta('meta[property="og:image"]', `${siteUrl}${meta.image}`);

  setMeta('meta[property="twitter:title"]', meta.title);
  setMeta('meta[property="twitter:description"]', meta.description);
  setMeta('meta[property="twitter:url"]', canonicalUrl);
  setMeta('meta[property="twitter:image"]', `${siteUrl}${meta.image}`);
  
  next();
});

export default router;
