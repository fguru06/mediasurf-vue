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
        name: 'AI Course Generator, LMS Development, Curriculum Authoring, Instructional Design, SCORM/xAPI Compliance, and Learning Analytics Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@id': 'https://mediasurf.ca/#service-ai-course-generator'
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
              '@id': 'https://mediasurf.ca/#service-curriculum-authoring'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@id': 'https://mediasurf.ca/#service-instructional-design'
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
      '@id': 'https://mediasurf.ca/#service-ai-course-generator',
      name: 'AI Course Generator',
      provider: {
        '@id': 'https://mediasurf.ca/#organization'
      },
      serviceType: 'AI-Powered Course Authoring',
      areaServed: {
        '@type': 'State',
        name: 'Ontario'
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'CAD',
        availability: 'https://schema.org/InStock',
        url: 'https://pp-ai-tool.mediasurf.ca/',
        description: 'Best free AI course generator for building SCORM and xAPI-compliant courses. Generate slide-based multimedia course content with AI-powered instructional design.'
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
        description: 'SCORM and xAPI-compliant custom LMS development with AI course generator integration, curriculum authoring, and learning analytics. Custom quote based on LMS scope and requirements.'
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
        description: 'AI-powered employee onboarding and corporate training with SCORM/xAPI-compliant course delivery, curriculum authoring, instructional design, and role-based learning pathways.'
      }
    },
    {
      '@type': 'Service',
      '@id': 'https://mediasurf.ca/#service-curriculum-authoring',
      name: 'Curriculum Authoring',
      provider: {
        '@id': 'https://mediasurf.ca/#organization'
      },
      serviceType: 'Curriculum Development & Authoring',
      areaServed: {
        '@type': 'State',
        name: 'Ontario'
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'CAD',
        availability: 'https://schema.org/InStock',
        url: 'https://mediasurf.ca/learncraft',
        description: 'AI-assisted curriculum authoring for corporate training. Build SCORM/xAPI-compliant course curricula with instructional design best practices and export to any LMS.'
      }
    },
    {
      '@type': 'Service',
      '@id': 'https://mediasurf.ca/#service-instructional-design',
      name: 'Instructional Design Services',
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
        description: 'Professional instructional design services for SCORM and xAPI-compliant corporate training. AI-enhanced curriculum authoring with proven learning methodologies.'
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
        description: 'SCORM/xAPI learning analytics dashboards and reporting for corporate training outcomes, instructional design effectiveness, and learner engagement trends.'
      }
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://pp-ai-tool.mediasurf.ca/#app',
      name: 'AI Course Generator & Presentation Authoring Tool',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Web',
      url: 'https://pp-ai-tool.mediasurf.ca/',
      publisher: {
        '@id': 'https://mediasurf.ca/#organization'
      },
      description:
        'Best free AI course generator and slide-based authoring tool that creates SCORM and xAPI-compliant multimedia course content with AI-powered instructional design for export and LMS delivery workflows.',
      featureList: [
        'AI-powered slide-based course authoring',
        'SCORM and xAPI-compliant content generation',
        'AI-generated instructional design',
        'Multimedia export output',
        'Workflow-ready packaging for LMS import',
        'Curriculum authoring and structuring'
      ]
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://learncraft.mediasurf.ca/#app',
      name: 'Learncraft LMS & Curriculum Authoring Platform',
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
        'Learncraft is a SCORM/xAPI-compliant LMS and curriculum authoring platform. Instructors import AI-generated multimedia courses, edit content, apply instructional design strategies, and use live learner preview before publishing for corporate training.',
      featureList: [
        'SCORM and xAPI-compliant course delivery',
        'Import AI-generated multimedia courses',
        'Curriculum authoring and course editing',
        'Instructional design workflow',
        'Live course preview',
        'Instructor publishing and analytics',
        'Corporate training management'
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