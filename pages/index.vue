<template>
  <main class="container mx-auto p-8 text-center">
    <section class="md:mb-6 bg-cover">
      <div class="flex items-center justify-center h-full">
        <img src="/imgs/logo-dark.png" alt="Wogwon Society Logo" class="logo">
      </div>
    </section>
    <section class="md:mb-2 sm:mb-6">
      <h2 class="text-3xl font-semibold mb-4">Our Mission</h2>
      <p class="text-accent">Promoting music, arts, and culture through community-driven events, projects, and initiatives.</p>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Wogwon Society - Promoting Music, Arts, and Culture',
  meta: [
    { name: 'description', content: 'Wogwon Society is dedicated to promoting music, arts, and culture through community-driven events and initiatives.' },
    { name: 'keywords', content: 'Wogwon Society, music, arts, culture, community events, non-profit' }
  ],
  // description: "Promoting music, arts, and culture through community-driven events and initiatives.",
  // image: "/imgs/logo-dark.png"
});
</script>

<style scoped>
.logo {
  will-change: filter;
  transition: filter 300ms;
}

</style>
