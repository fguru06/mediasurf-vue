import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import ContactPage from '../views/ContactPage.vue';
import CustomLmsDevelopmentPage from '../views/CustomLmsDevelopmentPage.vue';
import EmployeeOnboardingPage from '../views/EmployeeOnboardingPage.vue';
import BlogPage from '../views/BlogPage.vue';
import LearncraftPage from '../views/LearncraftPage.vue';
import PrivacyPage from '../views/PrivacyPage.vue';
import TermsPage from '../views/TermsPage.vue';
import CookiePolicyPage from '../views/CookiePolicyPage.vue';
import { SEO_METADATA } from '../seo/metadata';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: SEO_METADATA.pages.home
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
    meta: SEO_METADATA.pages.about
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
    meta: SEO_METADATA.pages.contact
  },
  {
    path: '/services/custom-lms-development',
    name: 'CustomLmsDevelopment',
    component: CustomLmsDevelopmentPage,
    meta: SEO_METADATA.pages.customLmsDevelopment
  },
  {
    path: '/services/employee-onboarding',
    name: 'EmployeeOnboarding',
    component: EmployeeOnboardingPage,
    meta: SEO_METADATA.pages.employeeOnboarding
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogPage,
    meta: SEO_METADATA.pages.blog
  },
  {
    path: '/learncraft',
    name: 'Learncraft',
    component: LearncraftPage,
    meta: SEO_METADATA.pages.learncraft
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: PrivacyPage,
    meta: SEO_METADATA.pages.privacy
  },
  {
    path: '/terms',
    name: 'Terms',
    component: TermsPage,
    meta: SEO_METADATA.pages.terms
  },
  {
    path: '/cookie-policy',
    name: 'CookiePolicy',
    component: CookiePolicyPage,
    meta: SEO_METADATA.pages.cookiePolicy
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
  const siteUrl = SEO_METADATA.siteUrl;
  const defaults = {
    title: SEO_METADATA.siteName,
    description: SEO_METADATA.pages.home.description,
    keywords: SEO_METADATA.pages.home.keywords,
    image: SEO_METADATA.defaultImage
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
    // Update attribute logic
    if (content) {
      element.setAttribute(attrName, content);
    }
  };

  setMeta('meta[name="description"]', meta.description);
  setMeta('meta[name="keywords"]', meta.keywords);

  // Dynamic Canonical URL (ensure no trailing slash unless root)
  const path = to.path === '/' ? '/' : to.path.replace(/\/$/, '');
  const canonicalUrl = `${siteUrl}${path}`;
  setMeta('link[rel="canonical"]', canonicalUrl, 'href', 'link');

  // Open Graph
  setMeta('meta[property="og:title"]', meta.title);
  setMeta('meta[property="og:description"]', meta.description);
  setMeta('meta[property="og:url"]', canonicalUrl);
  setMeta('meta[property="og:image"]', `${siteUrl}${meta.image}`);
  setMeta('meta[property="og:type"]', 'website');
  setMeta('meta[property="og:site_name"]', SEO_METADATA.siteName);
  setMeta('meta[property="og:locale"]', 'en_CA'); // Target Ontario/Canada Market

  // Twitter
  setMeta('meta[property="twitter:title"]', meta.title);
  setMeta('meta[property="twitter:description"]', meta.description);
  setMeta('meta[property="twitter:url"]', canonicalUrl);
  setMeta('meta[property="twitter:image"]', `${siteUrl}${meta.image}`);
  setMeta('meta[property="twitter:card"]', 'summary_large_image');
  setMeta('meta[property="twitter:site"]', SEO_METADATA.twitterSite);

  // Google Analytics Page View
  if (window.gtag) {
    window.gtag('config', 'G-310ZB3F2R7', {
      page_path: to.path,
      page_title: meta.title
    });
  }

  next();
});

export default router;
