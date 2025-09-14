<template>
  <main>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>


<script setup>
useHead({
  link: [
    {
      rel: "preload",
      as: "image",
      href: "https://res.cloudinary.com/dgdnews6i/image/upload/v1757428830/WhatsApp_Image_2025-09-09_at_9.13.58_AM_1_dwtiwo.jpg",
      fetchpriority: "high"
    }
  ],
  script: [
    {
      children: `
        (function() {
          var vh = window.innerHeight * 0.01;
          document.documentElement.style.setProperty('--vh', vh + 'px');
        })();
      `
    }
  ]
})
</script>
