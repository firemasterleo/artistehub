<script setup>
const { getAllPosts } = useBlog()
const posts = ref([])

onMounted(async () => {
  posts.value = await getAllPosts()
})
import Header from '@/components/Header.vue';
</script>

<template>
  <div>
    <h1>homepage</h1>
    <h1>Latest News</h1>
    <ul>
      <li v-for="post in posts" :key="post.slug">
        <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>

  </div>

</template>
