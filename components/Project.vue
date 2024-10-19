<script setup lang="ts">
const props = defineProps<{
  title: string,
  description: string,
  imageUrl: string,
  footerUrl: string,
  imageClasses?: string,
}>();

const {title, description, imageUrl, footerUrl, imageClasses} = props;
</script>

<template>
  <div
      class="text-center flex flex-col bg-secondary p-4 m-4 dark:bg-gray-800 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
    <!-- Card Header -->
    <div class="flex flex-col items-center">
      <h2 class="text-xl font-semibold mb-2 dark:text-white">{{ title }}</h2>
      <p class="text-base text-gray-400">{{ description }}</p>
    </div>

    <!-- Card Content with Image -->
    <div class="flex justify-center m-4">
      <div class="relative w-full">
        <img
            :src="imageUrl"
            :alt="title"
            class="rounded-lg w-full h-full object-cover hover:scale-105 transform transition duration-150 ease-in-out"
            :class="[imageClasses]"
        />
      </div>
    </div>

    <!-- Card Footer -->
    <div class="flex justify-center mt-4">
      <a
          :href="footerUrl"
          class="text-white text-sm hover:underline transition duration-150 ease-in-out"
      >
        Learn More
      </a>
    </div>
  </div>
</template>