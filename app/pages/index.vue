<template>
  <ul>
    <li v-for="article in articles" :key="article.slug" class="p-2">
    <NuxtLink :to="`/posts/${article.slug}`">
      <h1 class="text-5xl">{{ article.title }}</h1>
      <h2 class="text-2xl">{{ article.resume }}</h2>
    </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
  const articles = [
    {slug: "uuslug-01", title: "Install NVM on Arch Linux", resume: "How to install NVM in your machine"},
    {slug: "uuslug-02", title: "Install NVM on Arch Linux", resume: "How to install NVM in your machine"},
    {slug: "uuslug-03", title: "Install NVM on Arch Linux", resume: "How to install NVM in your machine"},
    {slug: "uuslug-04", title: "Install NVM on Arch Linux", resume: "How to install NVM in your machine"}
  ]
</script>