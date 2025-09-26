<template>
  <h1>{{ slug }}</h1>
</template>

<script setup lang="ts">
  const route = useRoute()
  const slug = route.params.slug
</script>