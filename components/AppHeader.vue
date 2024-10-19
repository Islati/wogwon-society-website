<template>
  <header class="sticky top-0 left-0 w-full z-50 p-2 flex items-center justify-between">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo and site title -->
      <div class="flex items-center">
        <img src="/imgs/logo.png" alt="Wogwon Society Logo" class="h-12 w-14" />
        <h1 class="text-white text-2xl font-semibold ml-4">
          <a href="#" class="nav-link">Wogwon Society</a>
        </h1>
      </div>
      <!-- Navigation for larger screens -->
      <nav class="hidden md:flex items-center space-x-4">
        <ul class="flex space-x-4">
          <li>
            <a href="#mission-vision" class="nav-link" @click="scrollToSection('mission-vision')">Home</a>
          </li>
          <li class="mx-0.5">
            <a href="#our-vision" class="nav-link" @click="scrollToSection('our-vision')">Vision</a>
          </li>
          <li class="mx-0.5">
            <a href="#projects" class="nav-link" @click="scrollToSection('projects')">Projects</a>
          </li>
          <li>
            <a href="#involvement" class="nav-link" @click="scrollToSection('involvement')">Get Involved</a>
          </li>
        </ul>
      </nav>
      <!-- Mobile menu button -->
      <div class="md:hidden flex items-center">
        <button @click="toggleMobileMenu" class="text-white focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>
    <!-- Mobile navigation menu -->
    <transition name="slide-fade">
      <div v-if="mobileMenuOpen" class="fixed top-0 left-0 w-full h-full bg-secondary overflow-y-auto">
        <div class="container mx-auto p-4">
          <ul class="flex flex-col space-y-4 text-center">
            <li>
              <a href="#mission-vision" class="nav-link" @click="scrollToSection('mission-vision'); toggleMobileMenu()">Home</a>
            </li>
            <li>
              <a href="#our-vision" class="nav-link" @click="scrollToSection('our-vision'); toggleMobileMenu()">Vision</a>
            </li>
            <li>
              <a href="#projects" class="nav-link" @click="scrollToSection('projects'); toggleMobileMenu()">Projects</a>
            </li>
            <li>
              <a href="#involvement" class="nav-link" @click="scrollToSection('involvement'); toggleMobileMenu()">Get Involved</a>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

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
  document.body.style.overflow = newValue ? 'hidden' : 'auto';
});
</script>

<style scoped>
.nav-link {
  @apply text-white transition-colors duration-300 ease-in-out;
}

.nav-link:hover {
  @apply text-yellow-500;
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