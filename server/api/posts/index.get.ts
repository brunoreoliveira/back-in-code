import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'

export default defineEventHandler(async () => {
  const base = path.join(process.cwd(), 'content', 'posts')
  const dirFiles = await fs.readdir(base)

  const articles = [];

  for (const file of dirFiles) {
    if (!file.endsWith(".md")) continue

    const raw = await fs.readFile(path.join(base, file), "utf8")
    const { data } = matter(raw)

    const slug = (data.slug ?? file.replace(/\.md$/, '')) as string
    articles.push({
      slug,
      title: (data.title ?? slug) as string,
      summary: data.summary,
      tags: data.tags,
      date: data.date ?? null,
    })
  }

  articles.sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''))
  return articles
})