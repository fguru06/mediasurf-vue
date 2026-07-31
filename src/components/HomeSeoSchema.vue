<template></template>

<script setup>
import { useHead } from '@unhead/vue';

const homeSeoSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://mediasurf.ca/#organization',
      name: 'MediaSurf Technologies',
      url: 'https://mediasurf.ca',
      logo: 'https://mediasurf.ca/logo.svg',
      email: 'info@mediasurf.ca',
      description: 'AI-first learning technology company building LearnCraft Authoring Suite (AI course generator + live editor), PowerPoint AI Tool (PPT-to-course converter), and PitStop (mobile mechanic marketplace).',
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
      '@type': 'LocalBusiness',
      '@id': 'https://mediasurf.ca/#localbusiness',
      name: 'MediaSurf Technologies',
      url: 'https://mediasurf.ca',
      image: 'https://mediasurf.ca/og-image.png',
      email: 'info@mediasurf.ca',
      areaServed: {
        '@type': 'State',
        name: 'Ontario'
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Waterloo',
        addressRegion: 'ON',
        addressCountry: 'CA'
      }
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://mediasurf.ca/#professionalservice',
      name: 'MediaSurf Technologies — AI Learning Products & Custom LMS Solutions',
      provider: {
        '@id': 'https://mediasurf.ca/#organization'
      },
      areaServed: {
        '@type': 'State',
        name: 'Ontario'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AI Course Generator, Course Authoring, Automotive LMS, Custom LMS Development, Instructional Design, and Learning Analytics',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@id': 'https://mediasurf.ca/#product-learncraft-suite'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@id': 'https://mediasurf.ca/#product-pp-ai-tool'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@id': 'https://mediasurf.ca/#product-pitstop'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@id': 'https://mediasurf.ca/#service-custom-lms'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@id': 'https://mediasurf.ca/#service-employee-onboarding'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@id': 'https://mediasurf.ca/#service-instructional-design'
            }
          }
        ]
      }
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://mediasurf.ca/#product-learncraft-suite',
      name: 'LearnCraft Authoring Suite',
      description: 'AI course generator (GPT-4o) combined with a live block-based editor. Generate lessons, modules, quizzes, flashcards, and branching scenarios. Publish to LearnCraft LMS or export SCORM/xAPI.',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Web',
      url: 'https://learncraftedu.ca/editor',
      publisher: {
        '@id': 'https://mediasurf.ca/#organization'
      }
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://mediasurf.ca/#product-pp-ai-tool',
      name: 'PowerPoint AI Tool',
      description: 'AI-powered slide builder and course converter. Upload any PPT file and instantly convert it into lessons, modules, quizzes, or full courses with AI rewriting and slide enhancement.',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Web',
      url: 'https://learncraftedu.ca/',
      publisher: {
        '@id': 'https://mediasurf.ca/#organization'
      }
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://mediasurf.ca/#product-pitstop',
      name: 'PitStop',
      description: 'Mobile mechanic marketplace connecting customers with certified mobile technicians. Customer-to-technician matching, real-time job tracking, AI-assisted diagnostics, and secure payments.',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: 'https://pitstopservices.ca/',
      publisher: {
        '@id': 'https://mediasurf.ca/#organization'
      }
    },
    {
      '@type': 'Service',
      '@id': 'https://mediasurf.ca/#service-custom-lms',
      name: 'Custom LMS Development',
      provider: {
        '@id': 'https://mediasurf.ca/#organization'
      },
      serviceType: 'LMS Development',
      areaServed: {
        '@type': 'State',
        name: 'Ontario'
      },
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
      provider: {
        '@id': 'https://mediasurf.ca/#organization'
      },
      serviceType: 'Corporate Employee Onboarding & Training',
      areaServed: {
        '@type': 'State',
        name: 'Ontario'
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'CAD',
        availability: 'https://schema.org/InStock',
        url: 'https://mediasurf.ca/services/employee-onboarding',
        description: 'AI-powered employee onboarding and corporate training with SCORM/xAPI-compliant course delivery, curriculum authoring, and role-based learning pathways.'
      }
    },
    {
      '@type': 'Service',
      '@id': 'https://mediasurf.ca/#service-instructional-design',
      name: 'Instructional Design & AI Learning Strategy',
      provider: {
        '@id': 'https://mediasurf.ca/#organization'
      },
      serviceType: 'Instructional Design & eLearning Strategy',
      areaServed: {
        '@type': 'State',
        name: 'Ontario'
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'CAD',
        availability: 'https://schema.org/InStock',
        url: 'https://mediasurf.ca/contact',
        description: 'Professional instructional design services for AI-enhanced corporate training. SCORM and xAPI-compliant curriculum authoring with proven learning methodologies.'
      }
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://learncraftedu.ca/#app-ppt',
      name: 'LearnCraft AI — AI Course Generator & PPT to Course Converter',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Web',
      url: 'https://learncraftedu.ca/',
      publisher: {
        '@id': 'https://mediasurf.ca/#organization'
      },
      description:
        'AI-powered course generator and PowerPoint-to-course converter. Upload PPT files and instantly convert slides into structured lessons, modules, and quizzes. AI rewriting, summarization, and slide enhancement.',
      featureList: [
        'Upload PowerPoint and convert to courses',
        'AI rewriting and summarization',
        'Auto-generate quizzes and modules',
        'Slide enhancement and visual generation',
        'Export to LearnCraft LMS or SCORM/xAPI',
        'One-click publish workflow'
      ]
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://learncraftedu.ca/#app-editor',
      name: 'LearnCraft Authoring Suite — AI Generator + Live Editor',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Web',
      url: 'https://learncraftedu.ca/editor',
      publisher: {
        '@id': 'https://mediasurf.ca/#organization'
      },
      description:
        'GPT-4o AI course generator with a live block-based editor. Generate complete SCORM/xAPI-compliant courses with auto-generated lessons, quizzes, flashcards, and branching scenarios.',
      featureList: [
        'GPT-4o AI-powered course generation',
        'Live block-based editor',
        'Auto-generated lessons, modules, and quizzes',
        'Flashcard and branching scenario generation',
        'SCORM and xAPI-compliant export',
        'Publish to LearnCraft LMS'
      ]
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://pitstopservices.ca/#app',
      name: 'PitStop — Mobile Mechanic Marketplace',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: 'https://pitstopservices.ca/',
      publisher: {
        '@id': 'https://mediasurf.ca/#organization'
      },
      description:
        'Mobile mechanic marketplace connecting customers with certified technicians. Real-time job tracking, AI-assisted diagnostics, secure payments, and verified technician profiles.',
      featureList: [
        'Customer-to-technician matching and bidding',
        'Real-time job tracking',
        'AI-assisted diagnostics and smart work orders',
        'Verified technician profiles and ratings',
        'Secure in-app payments',
        'Mobile-friendly booking experience'
      ]
    }
  ]
};

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(homeSeoSchema),
      id: 'home-seo-schema',
    }
  ],
});
</script>