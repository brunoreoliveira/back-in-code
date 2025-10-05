<template>
  <div ref="container" class="markdown-body w-full" v-html="html"></div>
</template>

<script setup lang="ts">
import { onMounted, watch, nextTick, ref, computed } from "vue";
import mermaid from "mermaid";
import { v7 as uuid } from "uuid";

const route = useRoute();
const { data } = await useFetch(`/api/posts/${route.params.slug}`);
const html = computed(() => data.value?.html ?? "");
const meta = computed(() => data.value?.meta ?? null);
const container = ref<HTMLDivElement | null>(null);

mermaid.initialize({ startOnLoad: false, theme: "default" });

async function renderMermaids() {
  await nextTick();

  const root = container.value;

  if (!root) return;

  const blocks = root.querySelectorAll<HTMLPreElement>(
    "code.language-mermaid, pre.mermaid, div.mermaid"
  );
  for (const element of blocks) {
    const code = element.textContent?.trim();

    if (!code) continue;

    const id = `mmd-${uuid()}`;
    const { svg } = await mermaid.render(id, code);
    (element.closest("pre") ?? element).replaceWith(htmlToElement(svg));
  }
}

function htmlToElement(svg: string) {
  const doc = document.createElement("div");
  doc.innerHTML = svg;
  return doc.firstElementChild!;
}

onMounted(renderMermaids);
watch(() => html.value, renderMermaids);
</script>

<style scoped>
@reference "tailwindcss";

  .markdown-body :deep(h1) {
    @apply text-6xl font-bold mb-6 flex justify-center items-center p-4;
  }
  .markdown-body :deep(h2) {
    @apply text-2xl font-semibold mt-8 mb-3;
  }
  .markdown-body :deep(p) {
    @apply my-4 leading-7;
  }
  .markdown-body :deep(ul) {
    @apply list-disc ms-6 my-4;
  }
  .markdown-body :deep(ol) {
    @apply list-decimal ms-6 my-4;
  }
  .markdown-body :deep(a) {
    @apply text-blue-600 underline underline-offset-4;
  }
  .markdown-body :deep(pre) {
    @apply w-[80%] m-auto p-6 rounded-2xl overflow-x-auto;
  }
  .markdown-body :deep(code) {
    @apply px-1 py-0.5 rounded;
  }
</style>
