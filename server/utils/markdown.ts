import MarkdownIt from "markdown-it";
import { getSingletonHighlighter, type Highlighter } from "shiki";
import mermaid from "mermaid";
import { v7 as uuid } from 'uuid';

let highlighter: Highlighter | null = null;

async function buildHighlighter() {
  if (!highlighter) {
    highlighter = await getSingletonHighlighter({
      themes: ['dracula'],
      langs: ['ts', 'js', 'bash', 'json', 'sql', 'yaml', 'md']
    })
  }

  return highlighter;
}

export async function renderMarkdown(mdText: string) {
  const _highlither = await buildHighlighter();

  const markdown = new MarkdownIt({
    html: false,
    linkify: true,
    breaks: true,
    highlight(code: string, lang: string) {
      if (lang === 'mermaid') {
        const safe = MarkdownIt().utils.escapeHtml(code)
        return `<pre class="mermaid">${safe}</pre>`
      }
      try {
        return _highlither.codeToHtml(code, {
          lang: lang || 'text',
          theme: 'dracula'
        })
      } catch (error) {
        return `<pre><code>${MarkdownIt().utils.escapeHtml(code)}</code></pre>`
      }
    },
  })

  return markdown.render(mdText)
}