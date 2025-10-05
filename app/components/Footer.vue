<template>
  <footer
    class="flex items-center justify-center border-t border-zinc-200/80 py-10 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400 mt-8"
  >
    <span>© <span id="{{year}}"></span> Back in Code</span>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>
