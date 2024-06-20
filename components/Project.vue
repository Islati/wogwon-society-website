<script setup lang="ts">
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const props = defineProps<{
  title: string,
  description: string,
  imageUrl: string,
  footerUrl: string,
  imageClasses?: string,
}>();

const { title, description, imageUrl, footerUrl, imageClasses } = props;
</script>

<template>
  <Card class="text-center flex flex-col bg-secondary ld:p-4 lg:m-4 dark:bg-gray-800 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
    <CardHeader class="flex flex-col items-center">
      <CardTitle class="text-xl md:mb-2">{{ title }}</CardTitle>
      <CardDescription class="text-base">{{ description }}</CardDescription>
    </CardHeader>
    <CardContent class="flex justify-center">
      <AspectRatio :ratio="16/9" class="w-full">
        <NuxtImg :src="imageUrl" :alt="title" class="rounded-lg hover:scale-105 transform transition duration-150"
                 :class="[imageClasses, 'h-48', 'w-80']"
                 format="webp" fit="cover"
        />
      </AspectRatio>
    </CardContent>
    <CardFooter class="justify-center flex md:mt-4">
      <a :href="footerUrl" class="text-white text-sm hover:underline transition nav-link duration-150">Learn More</a>
    </CardFooter>
  </Card>
</template>
