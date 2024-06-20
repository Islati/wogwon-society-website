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
  <Card class="text-center flex flex-col bg-secondary p-4 m-4 dark:bg-gray-800 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
    <CardHeader class="flex flex-col items-center">
      <CardTitle class="text-xl mb-2">{{ title }}</CardTitle>
      <CardDescription class="text-base">{{ description }}</CardDescription>
    </CardHeader>
    <CardContent class="flex justify-center">
      <AspectRatio :ratio="16/9" class="w-full">
        <NuxtImg :src="imageUrl" :alt="title" class="rounded-lg hover:scale-105 transform transition duration-150"
                 :class="[imageClasses]"
                 height="192" width="335" format="webp" fit="cover"
        />
      </AspectRatio>
    </CardContent>
    <CardFooter class="justify-center flex mt-4">
      <a :href="footerUrl" class="text-white text-sm hover:underline transition nav-link duration-150">Learn More</a>
    </CardFooter>
  </Card>
</template>

<style scoped>

</style>
