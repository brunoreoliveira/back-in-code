<template>
  <div ref="container" class="markdown-body" v-html="html"></div>
</template>

<script setup lang="ts">
import { onMounted, watch, nextTick, ref, computed } from "vue";
import mermaid from "mermaid";
import { v7 as uuid } from "uuid";

const route = useRoute();
const {data} = await useFetch(`/api/posts/${route.params.slug}`)
const html = computed(() => data.value?.html ?? '')
const meta = computed(() => data.value?.meta ?? null)
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
    const {svg} = await mermaid.render(id, code);
    (element.closest('pre') ?? element).replaceWith(htmlToElement(svg))
  }
}

function htmlToElement(svg: string) {
  const doc = document.createElement('div');
  doc.innerHTML = svg;
  return doc.firstElementChild!
}

onMounted(renderMermaids)
watch(() => html.value, renderMermaids)
</script>
