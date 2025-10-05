<template>
  <header class="w-screen p-4 flex justify-between items-center">
    <div class="flex flex-1 justify-start items-center">
      <Logo />
    </div>
    <div class="h-full flex flex-1 justify-end items-center mr-32">
      <NuxtLink to="/posts" class="h-full mr-[5rem] text-5xl">Posts</NuxtLink>
      <a 
      v-if=yt_channel
      :href=yt_channel
      target="_blank">
        <div
          class="w-32 h-12 flex justify-center items-center bg-red-600 text-white rounded-2xl"
        >
          <div
            class="w-0 h-0 border-b-[.5rem] border-b-transparent border-t-[.5rem] border-t-transparent border-l-[1rem] border-l-white mr-[.75rem]"
          ></div>
          YouTube
        </div>
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
  const yt_channel = useRuntimeConfig().public.YOUTUBE_URL_CHANNEL
</script>