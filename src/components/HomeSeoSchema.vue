<template></template>

<script setup>
import { onBeforeUnmount, onMounted } from 'vue';

const schemaScriptId = 'home-seo-schema';

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
      image: 'https://mediasurf.ca/og-image.svg',
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
      name: 'MediaSurf Technologies Professional Services',
      provider: {
        '@id': 'https://mediasurf.ca/#organization'
      },
      areaServed: {
        '@type': 'State',
        name: 'Ontario'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Authoring, Course Training Development, LMS, and Analytics Services',
        itemListElement: [
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
              '@id': 'https://mediasurf.ca/#service-learning-analytics'
            }
          }
        ]
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
        description: 'Custom quote based on LMS scope and integration requirements.'
      }
    },
    {
      '@type': 'Service',
      '@id': 'https://mediasurf.ca/#service-employee-onboarding',
      name: 'Employee Onboarding',
      provider: {
        '@id': 'https://mediasurf.ca/#organization'
      },
      serviceType: 'Corporate Employee Onboarding',
      areaServed: {
        '@type': 'State',
        name: 'Ontario'
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'CAD',
        availability: 'https://schema.org/InStock',
        url: 'https://mediasurf.ca/services/employee-onboarding',
        description: 'Custom quote based on onboarding curriculum and delivery model.'
      }
    },
    {
      '@type': 'Service',
      '@id': 'https://mediasurf.ca/#service-learning-analytics',
      name: 'Learning Analytics and Course Performance Reporting',
      provider: {
        '@id': 'https://mediasurf.ca/#organization'
      },
      serviceType: 'Learning Analytics',
      areaServed: {
        '@type': 'State',
        name: 'Ontario'
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'CAD',
        availability: 'https://schema.org/InStock',
        url: 'https://mediasurf.ca/#courses',
        description: 'Custom analytics dashboards and reporting for learning outcomes and engagement trends.'
      }
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://pp-ai-tool.mediasurf.ca/#app',
      name: 'Presentation Authoring Tool',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Web',
      url: 'https://pp-ai-tool.mediasurf.ca/',
      publisher: {
        '@id': 'https://mediasurf.ca/#organization'
      },
      description:
        'Slide-based authoring tool that generates multimedia course content for export and LMS delivery workflows.',
      featureList: [
        'Slide-based course authoring',
        'Multimedia export output',
        'Workflow-ready packaging for LMS import'
      ]
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://learncraft.mediasurf.ca/#app',
      name: 'Learncraft Course Authoring Tool',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Web',
      url: 'https://learncraft.mediasurf.ca/login',
      publisher: {
        '@id': 'https://mediasurf.ca/#organization'
      },
      isPartOf: {
        '@id': 'https://pp-ai-tool.mediasurf.ca/#app'
      },
      description:
        'Learncraft enables instructors to import exported multimedia courses, edit content, and use live learner preview before publishing.',
      featureList: [
        'Import exported multimedia courses',
        'Create and edit course content',
        'Live course preview',
        'Instructor publishing workflow'
      ]
    }
  ]
};

onMounted(() => {
  let scriptEl = document.getElementById(schemaScriptId);

  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.setAttribute('type', 'application/ld+json');
    scriptEl.setAttribute('id', schemaScriptId);
    document.head.appendChild(scriptEl);
  }

  scriptEl.textContent = JSON.stringify(homeSeoSchema);
});

onBeforeUnmount(() => {
  const scriptEl = document.getElementById(schemaScriptId);
  if (scriptEl) {
    scriptEl.remove();
  }
});
</script>