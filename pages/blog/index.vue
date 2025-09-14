<script setup>
const { getAllPosts } = useBlog()
const posts = ref([])

onMounted(async () => {
  posts.value = await getAllPosts()
})
</script>

<template>
  <div>
    <h1>Blog</h1>
    <ul>
      <li v-for="post in posts" :key="post.slug">
        <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
