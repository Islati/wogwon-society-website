<template>
  <header class="sticky top-0 left-0 w-full z-50 bg-secondary p-2 flex items-center justify-between">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex items-center">
        <NuxtImg :src="'/imgs/logo.png'" alt="Wogwon Society Logo" class="h-12 w-14" format="webp"/>
        <h1 class="text-white text-2xl font-semibold ml-4">
          <NuxtLink to="#" class="nav-link">Wogwon Society</NuxtLink>
        </h1>
      </div>
      <nav class="hidden md:flex items-center space-x-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="#mission-vision" class="nav-link" @click="scrollToSection('mission-vision')">Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem class="mx-0.5">
              <NavigationMenuLink href="#our-vision" class="nav-link" @click="scrollToSection('our-vision')">Vision</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem class="mx-0.5">
              <NavigationMenuLink href="#projects" class="nav-link" @click="scrollToSection('projects')">Projects</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#involvement" class="nav-link" @click="scrollToSection('involvement')">Get Involved</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <div class="md:hidden flex items-center">
        <button @click="toggleMobileMenu" class="text-white focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>
    <transition name="slide-fade">
      <div v-if="mobileMenuOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
        <div class="fixed top-0 right-0 w-3/4 max-w-sm h-full bg-secondary p-4 overflow-y-auto">
          <button @click="toggleMobileMenu" class="text-white focus:outline-none mb-4">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <NavigationMenu>
            <NavigationMenuList class="flex flex-col space-y-2">
              <NavigationMenuItem>
                <NavigationMenuLink href="#mission-vision" class="nav-link" @click="scrollToSection('mission-vision'); toggleMobileMenu()">Home</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#our-vision" class="nav-link" @click="scrollToSection('our-vision'); toggleMobileMenu()">Vision</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#projects" class="nav-link" @click="scrollToSection('projects'); toggleMobileMenu()">Projects</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#involvement" class="nav-link" @click="scrollToSection('involvement'); toggleMobileMenu()">Get Involved</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu";

function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

const mobileMenuOpen = ref(false);

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}

watch(mobileMenuOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});
</script>

<style scoped>
.nav-link {
  @apply text-white transition-colors duration-300 ease-in-out;
}

.nav-link:hover {
  @apply text-yellow-500; /* Adjust hover color as needed */
}

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.slide-fade-enter-from, .slide-fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.fixed {
  position: fixed;
}

.overflow-y-auto {
  overflow-y: auto;
}
</style>
