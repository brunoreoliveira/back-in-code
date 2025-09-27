<template>
  <ul>
    <li v-for="article in articles" :key="article.slug" class="p-2">
    <NuxtLink :to="`/posts/${article.slug}`">
      <h1 class="text-5xl">{{ article.title }}</h1>
      <h2 class="text-2xl">{{ article.summary }}</h2>
    </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
  const {data: articles} = await useFetch('/api/posts')
</script>