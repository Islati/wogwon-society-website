<template>
  <div class="relative w-full h-screen overflow-hidden flex">
    <div class="fixed top-0 left-0 w-full h-full z-0">
      <video id="background-video" autoplay muted loop playsinline class="bg-video">
        <source src="/vids/wogwon-society-bg.webm" type="video/webm">
        <source src="/vids/hq-bg-720p.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <main
        id="mission-vision"
        ref="missionVision"
        class="observe-section z-10 w-full h-screen flex flex-col justify-center items-center transition-all duration-1000 transform"
        :class="{
          'opacity-0 translate-y-5': !showMissionVision,
          'opacity-100 translate-y-0': showMissionVision
        }">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-secondary mb-4 text-white">About Wogwon Society</h1>
        <p class="text-lg text-secondary mb-8 text-white">Promoting music, arts, and culture through community-driven
          events and initiatives.</p>
      </div>
      <div class="mb-6 text-center">
        <NuxtImg :src="'/imgs/logo-dark.webp'" alt="Wogwon Society Logo" class="mx-auto h-28 w-42" format="webp"
                 fit="inside"/>
      </div>
    </main>
  </div>

  <section id="our-vision"
           ref="ourVision"
           class="observe-section z-10 w-full h-screen flex flex-col justify-center items-center transition-all duration-1000 transform"
           :class="{
             'opacity-0 translate-x-5': !showVision,
             'opacity-100 translate-x-0': showVision
           }">
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-3xl">
      <h2 class="text-2xl font-semibold text-primary dark:text-white mb-4">Our Vision</h2>
      <p class="text-gray-700 dark:text-gray-300">We envision a world where the arts and culture flourish, bringing
        people together and enriching lives through shared experiences and creative endeavors.</p>
    </div>
  </section>

  <section id="projects"
           ref="projectsSection"
           class="observe-section z-10 w-full h-screen flex flex-col justify-center items-center transition-all duration-1000 transform"
           :class="{
             'opacity-0 translate-y-5': !showProjects,
             'opacity-100 translate-y-0': showProjects
           }">
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
      <Project
          v-for="project in projects"
          :key="project.name"
          :title="project.name"
          :description="project.description"
          :imageUrl="project.imageUrl"
          :footerUrl="project.footerUrl"
          :imageClasses="project.imageClasses"
      />
    </section>
  </section>

  <section id="involvement"
           ref="involvementSection"
           class="observe-section z-10 w-full h-screen flex flex-col justify-center items-center transition-all duration-1000 transform"
           :class="{
             'opacity-0 translate-x-5': !showInvolvement,
             'opacity-100 translate-x-0': showInvolvement
           }">
    <div class="text-center">
      <h2 class="text-3xl font-semibold text-white mb-4">Get Involved</h2>
      <p class="text-white mb-8">Join us in our mission to promote the arts and culture. Whether you're an artist, a
        volunteer, or an investor, your support can make a significant impact.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {useIntersectionObserver} from '@vueuse/core';
import Project from '~/components/Project.vue';

const title = ref("About Wogwon Society - Our Mission and Vision");

const showMissionVision = ref(false);
const showVision = ref(false);
const showProjects = ref(false);
const showInvolvement = ref(false);

const missionVision = ref<HTMLElement | null>(null);
const ourVision = ref<HTMLElement | null>(null);
const projectsSection = ref<HTMLElement | null>(null);
const involvementSection = ref<HTMLElement | null>(null);

const projects = ref([
  {
    name: 'Spellbound Saga',
    description: 'Card Game to save the world from litter.',
    imageUrl: '/imgs/projects/spellbound-saga.webp',
    footerUrl: 'https://spellboundsaga.com',
    imageClasses: 'object-contain xs:h-4/5 sm:h-36 md:h-42 lg:h-48 w-96'
  },
  {
    name: 'Skreet Media Inc.',
    description: 'Canadian Urban Record Label',
    imageUrl: '/imgs/projects/skreet-media-inc-white.webp',
    footerUrl: 'https://skreetmedia.com',
    imageClasses: 'bg-black hover:filter hover:invert object-contain xs:h-4/5 sm:h-36 md:h-42 lg:h-48 w-96',
  }
]);

useHead({
  title: 'About Wogwon Society - Our Mission and Vision',
  meta: [
    {
      name: 'description',
      content: 'Learn about Wogwon Society, our mission to foster a thriving community of creatives, and our vision to enrich lives through the arts.'
    },
    {name: 'keywords', content: 'Wogwon Society, about, mission, vision, arts, culture, community'},
    {name: 'og:title', content: 'About Wogwon Society - Our Mission and Vision'},
  ]
});

const handleIntersect = (isVisible: boolean, sectionId: string) => {
  switch (sectionId) {
    case 'mission-vision':
      showMissionVision.value = isVisible;
      break;
    case 'our-vision':
      showVision.value = isVisible;
      break;
    case 'projects':
      showProjects.value = isVisible;
      break;
    case 'involvement':
      showInvolvement.value = isVisible;
      break;
  }
};

const setupIntersectionObserver = (ref: Ref<HTMLElement | null>, id: string) => {
  useIntersectionObserver(ref, ([{isIntersecting}]) => handleIntersect(isIntersecting, id), {threshold: 0.5});
};

onMounted(() => {
  setupIntersectionObserver(missionVision, 'mission-vision');
  setupIntersectionObserver(ourVision, 'our-vision');
  setupIntersectionObserver(projectsSection, 'projects');
  setupIntersectionObserver(involvementSection, 'involvement');
});
</script>


<style scoped>
.bg-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  filter: blur(10px);
  transform: translate(-50%, -50%);
}

.observe-section {
  transition: opacity 1s ease-in-out;
}
</style>
