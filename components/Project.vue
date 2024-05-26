<script setup lang="ts">

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {AspectRatio} from "@/components/ui/aspect-ratio";

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
  <Card class="text-center flex flex-col bg-secondary">
    <CardHeader class="flex">
      <CardTitle class="text-xl">{{ title }}</CardTitle>
      <CardDescription>{{ description }}</CardDescription>
    </CardHeader>
    <CardContent class="flex">
      <AspectRatio :ratio="16/9">
        <img :src="imageUrl" :alt="title" class="rounded-lg hover:scale-105 duration-150"
             :class="[imageClasses]"
        >
      </AspectRatio>
    </CardContent>
    <CardFooter class="justify-center flex">
      <a :href="footerUrl" class="nav-link text-grey-700 text-sm duration-150">Learn More</a>
    </CardFooter>
  </Card>
</template>

<style scoped>

</style>