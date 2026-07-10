<script setup>
import { useHead } from '@unhead/vue'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://mediasurf.ca/#organization',
      name: 'MediaSurf Technologies',
      url: 'https://mediasurf.ca',
      logo: 'https://mediasurf.ca/logo.svg',
      email: 'info@mediasurf.ca',
      description: 'AI-first learning technology company building LearnCraft Authoring Suite (AI course generator + live editor), PowerPoint AI Tool (PPT-to-course converter), CreatorLoom (AI video course generator & studio), and PitStop (mobile mechanic marketplace).',
      sameAs: [
        'https://www.linkedin.com/company/mediasurf-tech',
        'https://x.com/mediasurftech'
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Waterloo',
        addressRegion: 'ON',
        addressCountry: 'CA'
      }
    },
    {
      '@type': 'Product',
      '@id': 'https://mediasurf.ca/#product-learncraft-suite',
      name: 'LearnCraft Authoring Suite',
      description: 'AI course generator (GPT-4o) combined with a live block-based editor. Generate lessons, modules, quizzes, flashcards, and branching scenarios. Publish to LearnCraft LMS or export SCORM/xAPI.',
      brand: { '@id': 'https://mediasurf.ca/#organization' },
      category: 'AI Course Generator & Editor',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'CAD',
        availability: 'https://schema.org/InStock',
        url: 'https://learncraft.mediasurf.ca/editor'
      }
    },
    {
      '@type': 'Product',
      '@id': 'https://mediasurf.ca/#product-pp-ai-tool',
      name: 'PowerPoint AI Tool',
      description: 'AI-powered slide builder and course converter. Upload any PPT file and instantly convert it into lessons, modules, quizzes, or full courses with AI rewriting and slide enhancement.',
      brand: { '@id': 'https://mediasurf.ca/#organization' },
      category: 'AI Slide-to-Course Converter',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'CAD',
        availability: 'https://schema.org/InStock',
        url: 'https://learncraft.mediasurf.ca/'
      }
    },
    {
      '@type': 'Product',
      '@id': 'https://mediasurf.ca/#product-creatorloom',
      name: 'CreatorLoom',
      description: 'Fully AI-powered video course generation and authoring platform. Generate complete video courses with AI scripts, voiceovers, visuals, and animations — no filming required.',
      brand: { '@id': 'https://mediasurf.ca/#organization' },
      category: 'AI Video Course Generator & Studio',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'CAD',
        availability: 'https://schema.org/InStock',
        url: 'https://learncraft.mediasurf.ca/creatorloom'
      }
    },
    {
      '@type': 'Product',
      '@id': 'https://mediasurf.ca/#product-pitstop',
      name: 'PitStop',
      description: 'Mobile mechanic marketplace connecting customers with certified mobile technicians. Real-time job tracking, AI-assisted diagnostics, secure payments, and verified technician profiles.',
      brand: { '@id': 'https://mediasurf.ca/#organization' },
      category: 'Mobile Mechanic Marketplace',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'CAD',
        availability: 'https://schema.org/InStock',
        url: 'https://pitstop.mediasurf.ca/'
      }
    },
    {
      '@type': 'Service',
      '@id': 'https://mediasurf.ca/#service-custom-lms',
      name: 'Custom LMS Development',
      provider: { '@id': 'https://mediasurf.ca/#organization' },
      serviceType: 'LMS Development',
      areaServed: { '@type': 'State', name: 'Ontario' },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'CAD',
        availability: 'https://schema.org/InStock',
        url: 'https://mediasurf.ca/services/custom-lms-development',
        description: 'SCORM and xAPI-compliant custom LMS development with AI course generator integration, curriculum authoring, and learning analytics.'
      }
    },
    {
      '@type': 'Service',
      '@id': 'https://mediasurf.ca/#service-employee-onboarding',
      name: 'Employee Onboarding & Corporate Training',
      provider: { '@id': 'https://mediasurf.ca/#organization' },
      serviceType: 'Corporate Employee Onboarding & Training',
      areaServed: { '@type': 'State', name: 'Ontario' },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'CAD',
        availability: 'https://schema.org/InStock',
        url: 'https://mediasurf.ca/services/employee-onboarding',
        description: 'AI-powered employee onboarding and corporate training with SCORM/xAPI-compliant course delivery, curriculum authoring, and role-based learning pathways.'
      }
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://learncraft.mediasurf.ca/#app',
      name: 'LearnCraft Authoring Suite — AI Generator + Live Editor',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Web',
      url: 'https://learncraft.mediasurf.ca/editor',
      publisher: { '@id': 'https://mediasurf.ca/#organization' },
      description: 'GPT-4o AI course generator with a live block-based editor. Generate complete SCORM/xAPI-compliant courses with auto-generated lessons, quizzes, flashcards, and branching scenarios.'
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://mediasurf.ca/#app-creatorloom',
      name: 'CreatorLoom — AI Video Course Generator & Studio',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Web',
      url: 'https://learncraft.mediasurf.ca/creatorloom',
      publisher: { '@id': 'https://mediasurf.ca/#organization' },
      description: 'Fully AI-powered video course generation and authoring. Generate complete video courses with AI scripts, voiceovers, visuals, and animations — no filming required.'
    }
  ]
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(jsonLd),
      id: 'json-ld-schema',
    }
  ],
})
</script>

<template>
  <div style="display: none" aria-hidden="true"><!-- JSON-LD injected via useHead --></div>
</template>