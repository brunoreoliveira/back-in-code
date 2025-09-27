import fs from "node:fs/promises";
import { join } from "node:path";
import matter from "gray-matter";
import { renderMarkdown as markdown } from "~~/server/utils/markdown";


export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug');
  const file = join(process.cwd(), 'content', 'posts', `${slug}.md`)

  try {
    const raw = await fs.readFile(file, 'utf8')
    const { data, content } = matter(raw)
    const html = await markdown(content)

    setHeader(event, 'Cache-Control', 'public, max-age=60, stale-while-revalidate=86400');
    return { html, meta: { ...data, slug } }
  } catch (error) {
    throw createError({ statusCode: 404, statusMessage: 'Post not found' })
  }
});