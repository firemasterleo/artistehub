<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const { getPostBySlug } = useBlog()

const post = ref(null)

onMounted(async () => {
  post.value = await getPostBySlug(route.params.slug)

  if (post.value) {
    useSchemaOrg([
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.value.title,
        description: post.value.description,
        articleBody: post.content, // full body text if available
        datePublished: post.value.date,
        dateModified: post.value.date, // update if editable
        publisher: {
            '@type': 'Organization',
            name: 'Soatech',
            logo: {
              '@type': 'ImageObject',
              url: 'https://soatech.ng/logo.png'
            }
          },
        author: {
            '@type': post.value.author?.['@type'] || 'Organization',
            name: post.value.author?.name,
            url: post.value.author?.url,
            logo: {
              '@type': 'ImageObject',
              url: post.value.author?.logo
            },
            sameAs: post.value.author?.sameAs
          },
        image: post.value.coverImage || 'https://soatech.ng/default-og-image.jpg',
        url: `https://soatech.ng/blog/${route.params.slug}`,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://soatech.ng/blog/${route.params.slug}`
        }
      }
    ])
  }
})

// UseHead for SEO + social tags
useHead(() => {
  const title = post.value?.seo?.ogTitle || post.value?.title || 'Post Not Found'
  const description = post.value?.seo?.ogDescription || post.value?.description || 'No description available.'
  const image = post.value?.seo?.ogImage || post.value?.coverImage || 'https://soatech.ng/default-og-image.jpg'
  const url = `https://nuxtlaunchpad.netlify.app/blog/${route.params.slug}`
  const twitterCard = post.value?.seo?.twitterCard || 'summary_large_image'

  return {
    title,
    meta: [
      { name: 'description', content: description },

      // Open Graph (Facebook, WhatsApp, LinkedIn, Reddit)
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },

      // Twitter Card
      { name: 'twitter:card', content: twitterCard },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image }
    ],
    link: [{ rel: 'canonical', href: url }]
  }
})
</script>

<template>
  <div>
    <div v-if="post">
      <h1>{{ post.title }}</h1>
      <article class="post-content" v-html="post.content" />
    </div>
    <div v-else>
      <p>Post not found.</p>
    </div>
    <nuxt-link to="/">Back to home</nuxt-link>
    <div class="testcontainers">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use "@/assets/sass/variables" as *; // Import variables

h1{
  color: red;
}
div {
background-color:$bg-white ;
  // border: solid red;

}
.testcontainers {
  display: flex;
  flex-wrap: wrap;
  div {
  border: solid grey;
  width: 50%;
  height: 10rem;
}
:nth-child(1){
  background-color: $bg-white;
}
:nth-child(2){
  background-color: $primary-bg;
}
:nth-child(3){
  background-color: $accent-limegreen;
}
:nth-child(4){
  background-color: $secondary-bg;
}
}
</style>
