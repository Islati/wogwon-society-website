<script setup lang="ts">

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu";
</script>

<template>
  <header class="bg-secondary p-2 flex items-center justify-between fixed top-0 left-0 w-full z-20">
    <div class="container-fluid mx-auto flex self-start justify-between">
      <div class="flex items-center">
        <NuxtImg :src="'/imgs/logo.png'" alt="Wogwon Society Logo" class="h-12" height="48" width="57" format="webp"/>
        <h1 class="text-white text-2xl font-semibold ml-4"><NuxtLink to="/" class="nav-link">Wogwon Society</NuxtLink></h1>
      </div>
    </div>
    <div class="container-fluid mx-auto flex items-center justify-end h-4">
      <div class="flex items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/" class="nav-link">Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about" class="nav-link ml-2">About</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/projects" class="nav-link ml-2">Projects</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>
