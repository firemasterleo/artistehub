import fs from 'fs'
import path from 'path'

export function getBlogSlugs() {
  const postsDir = path.resolve('./posts') // adjust if your path is different
  if (!fs.existsSync(postsDir)) return []

  return fs
    .readdirSync(postsDir)
    .filter(file => file.endsWith('.md')) // now targeting markdown files
    .map(file => `/blog/${file.replace('.md', '')}`)
}
