export function useSchemaOrg(type = 'organization') {
    const schemas = {
      organization: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'CNGHub',
        url: 'https://cnghub.ng',
        logo: 'https://cnghub.ng/logo.png',
        description: 'CNGHub helps drivers book CNG refill appointments to reduce fuel wait times and improve convenience.',
        sameAs: [
          'https://facebook.com/cnghub',
          'https://twitter.com/cnghub',
          'https://instagram.com/cnghub'
        ]
      },
  
      bookingPage: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Book a CNG Refill Slot',
        url: 'https://cnghub.ng/Booking',
        description: 'Easily book your CNG refill appointment online with CNGHub.'
      },
  
      homePage: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'CNGHub',
        url: 'https://cnghub.ng',
        description: 'CNGHub helps Nigerian drivers beat fuel queues with online CNG booking.'
      }
  
      // Add more as needed
    }
  
    const schema = schemas[type]
  
    if (!schema) {
      console.warn(`[SchemaOrg] Unknown schema type: ${type}`)
      return
    }
  
    useHead({
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify(schema)
        }
      ]
    })
  }
  