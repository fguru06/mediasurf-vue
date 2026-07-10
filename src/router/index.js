import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ContactPage from '../views/ContactPage.vue'
import CustomLmsDevelopmentPage from '../views/CustomLmsDevelopmentPage.vue'
import EmployeeOnboardingPage from '../views/EmployeeOnboardingPage.vue'
import BlogPage from '../views/BlogPage.vue'
import LearncraftPage from '../views/LearncraftPage.vue'
import CreatorLoomPage from '../views/CreatorLoomPage.vue'
import PrivacyPage from '../views/PrivacyPage.vue'
import TermsPage from '../views/TermsPage.vue'
import CookiePolicyPage from '../views/CookiePolicyPage.vue'
import { SEO_METADATA } from '../seo/metadata'

const { siteUrl, siteName, defaultImage, twitterSite, pages } = SEO_METADATA

const makeHead = (page) => {
  const canonical = siteUrl + (page.path === '/' ? '' : page.path)
  return {
    title: page.meta.title,
    meta: [
      { name: 'description', content: page.meta.description },
      { name: 'keywords', content: page.meta.keywords },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: canonical },
      { property: 'og:title', content: page.meta.title },
      { property: 'og:description', content: page.meta.description },
      { property: 'og:image', content: siteUrl + (page.meta.image || defaultImage) },
      { property: 'og:site_name', content: siteName },
      { property: 'og:locale', content: 'en_CA' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: canonical },
      { property: 'twitter:title', content: page.meta.title },
      { property: 'twitter:description', content: page.meta.description },
      { property: 'twitter:image', content: siteUrl + (page.meta.image || defaultImage) },
      { property: 'twitter:site', content: twitterSite },
    ],
    link: [
      { rel: 'canonical', href: canonical },
    ],
  }
}

const routes = [
  { path: '/', name: 'Home', component: HomePage, meta: { ...pages.home, head: makeHead({ path: '/', meta: pages.home }) } },
  { path: '/about', name: 'About', component: AboutPage, meta: { ...pages.about, head: makeHead({ path: '/about', meta: pages.about }) } },
  { path: '/contact', name: 'Contact', component: ContactPage, meta: { ...pages.contact, head: makeHead({ path: '/contact', meta: pages.contact }) } },
  { path: '/services/custom-lms-development', name: 'CustomLmsDevelopment', component: CustomLmsDevelopmentPage, meta: { ...pages.customLmsDevelopment, head: makeHead({ path: '/services/custom-lms-development', meta: pages.customLmsDevelopment }) } },
  { path: '/services/employee-onboarding', name: 'EmployeeOnboarding', component: EmployeeOnboardingPage, meta: { ...pages.employeeOnboarding, head: makeHead({ path: '/services/employee-onboarding', meta: pages.employeeOnboarding }) } },
  { path: '/blog', name: 'Blog', component: BlogPage, meta: { ...pages.blog, head: makeHead({ path: '/blog', meta: pages.blog }) } },
  { path: '/learncraft', name: 'Learncraft', component: LearncraftPage, meta: { ...pages.learncraft, head: makeHead({ path: '/learncraft', meta: pages.learncraft }) } },
  { path: '/creatorloom', name: 'CreatorLoom', component: CreatorLoomPage, meta: { ...pages.creatorloom, head: makeHead({ path: '/creatorloom', meta: pages.creatorloom }) } },
  { path: '/privacy', name: 'Privacy', component: PrivacyPage, meta: { ...pages.privacy, head: makeHead({ path: '/privacy', meta: pages.privacy }) } },
  { path: '/terms', name: 'Terms', component: TermsPage, meta: { ...pages.terms, head: makeHead({ path: '/terms', meta: pages.terms }) } },
  { path: '/cookie-policy', name: 'CookiePolicy', component: CookiePolicyPage, meta: { ...pages.cookiePolicy, head: makeHead({ path: '/cookie-policy', meta: pages.cookiePolicy }) } },
]

export default routes