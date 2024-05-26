<script setup lang="ts">
import Project from "~/components/Project.vue";
import {useHead} from '@vueuse/head'

const projects = ref([
  {
    name: 'Spellbound Saga',
    description: 'Card Game to save the world from litter.',
    imageUrl: '/imgs/projects/spellbound-saga.png',
    footerUrl: 'https://spellboundsaga.com'
  },
  {
    name: 'Skreet Media Inc.',
    description: 'Canadian Urban Record Label',
    imageUrl: '/imgs/projects/skreet-media-inc-white.png',
    footerUrl: 'https://skreetmedia.com',
    imageClasses: 'bg-black hover:filter hover:invert object-contain h-36 w-96',
  },
  {
    name: 'Wogwon Society',
    description: 'Arts & Culture Not for Profit Organization',
    imageUrl: '/imgs/logo-dark.png',
    footerUrl: 'https://wogwon.com/about',
    coverAndFit: true,
    imageClasses: 'bg-white hover:filter hover:invert object-contain h-36 w-96',
  }
]);

useHead({
  title: 'Our Projects - Wogwon Society',
  meta: [
    {
      name: 'description',
      content: 'Explore the various projects by Wogwon Society, including Spellbound Saga, Skreet Media Inc., and more.'
    },
    {
      name: 'keywords',
      content: 'Wogwon Society, projects, Spellbound Saga, Skreet Media Inc., arts, culture, community'
    }
  ]
})
</script>

<template>
  <main class="container mx-auto py-12 px-4">
    <section class="text-center mb-12">
      <h1 class="text-4xl font-bold text-secondary mb-4">Our Projects</h1>
    </section>

    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <Project v-for="project in projects" :key="project.name" :title="project.name" :description="project.description"
               :imageUrl="project.imageUrl" :footerUrl="project.footerUrl" :imageClasses="project.imageClasses"/>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  title: 'Our Projects - Wogwon Society',
  meta: [
    {
      name: 'description',
      content: 'Explore the various projects by Wogwon Society, including Spellbound Saga, Skreet Media Inc., and more.'
    },
    {
      name: 'keywords',
      content: 'Wogwon Society, projects, Spellbound Saga, Skreet Media Inc., arts, culture, community'
    }
  ]
});
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
