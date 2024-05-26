<script setup lang="ts">

import Projects from "~/pages/projects.vue";

definePageMeta({
  title: 'About Wogwon Society - Our Mission and Vision',
  meta: [
    {
      name: 'description',
      content: 'Learn about Wogwon Society, our mission to foster a thriving community of creatives, and our vision to enrich lives through the arts.'
    },
    {name: 'keywords', content: 'Wogwon Society, about, mission, vision, arts, culture, community'}
  ]
});
</script>

<template>
  <main class="container mx-auto py-12 px-4">
    <section class="text-center mb-12">
      <h1 class="text-4xl font-bold text-secondary mb-4">About Wogwon Society</h1>
      <p class="text-lg text-secondary">Promoting music, arts, and culture through community-driven events and
        initiatives.</p>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-semibold text-primary dark:text-white mb-4">Our Mission</h2>
        <p class="text-gray-700 dark:text-gray-300">Our mission is to foster a thriving community of creatives by
          providing platforms for expression and engagement.</p>
      </div>
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-semibold text-primary dark:text-white mb-4">Our Vision</h2>
        <p class="text-gray-700 dark:text-gray-300">We envision a world where the arts and culture flourish, bringing
          people together and enriching lives through shared experiences and creative endeavors.</p>
      </div>
    </section>

    <section class="text-center mb-12">
      <h2 class="text-3xl font-semibold text-black mb-4">Impact and Achievements</h2>
      <p class="text-gray-700 mb-4">Since our inception, we have successfully organized numerous
        events and initiatives, bringing together diverse communities and promoting the arts. Our achievements
        include:</p>
      <ul class="list-disc list-inside text-gray-700">
        <li>Collaborating with local and international artists</li>
        <li>Providing platforms for emerging talents to showcase their work</li>
        <li>Contributing to community development through cultural events</li>
      </ul>
    </section>

    <Projects component/>

    <section class="text-center">
      <h2 class="text-3xl font-semibold text-black mb-4">Get Involved</h2>
      <p class="text-gray-700 mb-8">Join us in our mission to promote the arts and culture. Whether
        you're an artist, a volunteer, or an investor, your support can make a significant impact.</p>
      <p class="text-gray-500 mb-4 text-sm italic">Founded by <a href="https://youtube.com/@Islati">Islati</a></p>
    </section>
  </main>
</template>

<style scoped>

</style>