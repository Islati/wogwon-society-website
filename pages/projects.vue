<script setup lang="ts">
import Project from "~/components/Project.vue";

const props = defineProps<{
  component?: boolean
}>();

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
    imageClasses: 'bg-black hover:filter hover:invert object-contain lg:h-52 sm:h-32 w-96',
  },
  {
    name: 'Wogwon Society',
    description: 'Arts & Culture Not for Profit Organization',
    imageUrl: '/imgs/logo-dark.png',
    footerUrl: 'https://wogwon.com/about',
    coverAndFit: true,
    imageClasses: 'bg-white hover:filter hover:invert object-contain lg:h-52 sm:h-32 w-96',
  }
]);

</script>

<template>
  <main class="container mx-auto py-12 px-4" v-if="!component">
    <section class="text-center mb-12">
      <h1 class="text-4xl font-bold text-secondary mb-4">Our Projects</h1>
    </section>

    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <Project v-for="project in projects" :key="project.name" :title="project.name" :description="project.description"
               :imageUrl="project.imageUrl" :footerUrl="project.footerUrl" :imageClasses="project.imageClasses"/>
    </section>
  </main>
  <section v-else class="text-center mb-12">
    <h2 class="text-3xl font-semibold text-black mb-4">Our Projects</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <Project v-for="project in projects" :key="project.name" :title="project.name" :description="project.description"
               :imageClasses="project.imageClasses" :imageUrl="project.imageUrl" :footerUrl="project.footerUrl"/>
    </div>
  </section>
</template>

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
