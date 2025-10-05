<template>
  <ul class="mx-auto w-full px-4 py-8 space-y-6">
    <li v-for="article in articles" :key="article.slug">
      <article
        class="group rounded-xl border border-zinc-200 hover:border-zinc-300 transition-colors"
      >
        <NuxtLink
          class="block p-5 md:p-6"
          :to="`/posts/${article.slug}`"
          aria-labelledby="post-hello-world-title"
        >
          <header class="flex items-baseline justify-between gap-3">
            <h2 class="text-xl md:text-2xl font-semibold tracking-tight">
              {{ article.title }}
            </h2>
            <time class="shrink-0 text-sm text-zinc-500" :datetime="`${article.date}`">
              {{
                new Date(article.date)
                  .toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                  .replaceAll("de", "")
                  .replace(".", "")
              }}
            </time>
          </header>
          <p class="mt-2 text-zinc-700">{{ article.summary }}</p>
          <div class="flex justify-between">
            <ul class="mt-3 flex flex-wrap gap-2">
              <li v-for="tag in article.tags" :key="tag">
                <span
                  class="inline-flex items-center rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-600"
                >
                  {{ tag }}
                </span>
              </li>
            </ul>

            <!-- “Leia mais” discreto (apenas decorativo) -->
            <div class="mt-4 flex justify-end text-sm text-zinc-500">
              <span class="group-hover:underline underline-offset-4">Ler post</span> →
            </div>
          </div>
        </NuxtLink>
      </article>
    </li>
  </ul>
</template>

<script setup>
const { data: articles } = await useFetch("/api/posts");
</script>
