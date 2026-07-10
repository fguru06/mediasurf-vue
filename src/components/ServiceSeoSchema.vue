<template></template>

<script setup>
import { computed } from 'vue';
import { useHead } from '@unhead/vue';

const props = defineProps({
  schemaId: {
    type: String,
    required: true
  },
  serviceName: {
    type: String,
    required: true
  },
  serviceType: {
    type: String,
    required: true
  },
  serviceUrl: {
    type: String,
    required: true
  },
  serviceDescription: {
    type: String,
    required: true
  }
});

const scriptElId = computed(() => `service-seo-${props.schemaId}`);

const serviceSchema = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${props.serviceUrl}#service`,
  name: props.serviceName,
  serviceType: props.serviceType,
  description: props.serviceDescription,
  provider: {
    '@type': 'Organization',
    '@id': 'https://mediasurf.ca/#organization',
    name: 'MediaSurf Technologies',
    url: 'https://mediasurf.ca'
  },
  areaServed: {
    '@type': 'State',
    name: 'Ontario'
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'CAD',
    availability: 'https://schema.org/InStock',
    url: props.serviceUrl,
    description: 'Custom quote based on project scope and requirements.'
  }
}));

useHead(computed(() => ({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(serviceSchema.value),
      id: `json-ld-${props.schemaId}`,
    }
  ],
})));
</script>
