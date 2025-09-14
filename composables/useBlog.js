import { marked } from 'marked'
import fm from 'front-matter'

export const useBlog = () => {
  const getAllPosts = async () => {
    const files = import.meta.glob('../posts/*.md', {
      query: '?raw',
      import: 'default'
    })    
    const posts = []

    for (const path in files) {
      const raw = await files[path]()
      const { attributes, body } = fm(raw)
      posts.push({
        ...attributes,
        content: marked.parse(body)
      })
    }

    return posts
  }

  const getPostBySlug = async (slug) => {
    try {
      const file = await import(`../posts/${slug}.md?raw`)
      const { attributes, body } = fm(file.default || file)
      return {
        ...attributes,
        content: marked.parse(body)
      }
    } catch (error) {
      return null
    }
  }

  return { getAllPosts, getPostBySlug }
}
