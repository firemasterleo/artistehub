<template>
  <main>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>


<script setup>
useHead({
  // link: [
  //   {
  //     rel: "preload",
  //     as: "image",
  //     href: "https://res.cloudinary.com/dgdnews6i/image/upload/v1757838386/WhatsApp_Image_2025-09-08_at_3.00.19_PM_g4nohq.jpg",
  //     fetchpriority: "high"
  //   }
  // ],
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
