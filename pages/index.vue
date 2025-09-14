

<template>

  <main>
    
    <!-- <BlogSection /> -->
    <Header />
    <DjHerosection2 />
    <!-- <DjLatestRelease /> -->
    <DjEvents />
    <DjShopNaarly />
    <Footer />


  </main>

</template>

<script setup>
definePageMeta({
  title: 'Soatech Solutions – CNG Conversion Experts in Nigeria',
  description: 'Convert your vehicle to Compressed Natural Gas (CNG) and save money, reduce emissions, and drive cleaner. Trusted by drivers across Nigeria.',
  image: '/images/og/home.jpg',
  ogType: 'website',
  ogUrl: 'https://soatech.ng',
  ogTitle: 'Soatech Solutions – CNG Conversion Experts in Nigeria',
  ogDescription: 'Switch to CNG and reduce your fuel cost up to 60%. Learn how Soatech helps you convert safely and affordably.',
  ogImage: 'https://soatech.ng/images/og/home.jpg',

  twitterCard: 'summary_large_image',
  twitterSite: '@soatech_ng',
  twitterTitle: 'Soatech Solutions – CNG Conversion Experts',
  twitterDescription: 'Convert to CNG and save big. Join thousands of smart Nigerian drivers.',
  twitterImage: 'https://soatech.ng/images/og/home.jpg',

  schemaOrg: {
    '@type': 'Organization',
    name: 'Soatech Solutions',
    url: 'https://soatech.ng',
    logo: 'https://soatech.ng/logo.png',
    description: 'CNG conversion company in Nigeria helping drivers cut fuel costs.',
    sameAs: [
      'https://facebook.com/soatech',
      'https://twitter.com/soatech_ng',
      'https://instagram.com/soatech.ng'
    ]
  }
});

</script>

