<template>
  <main class="container mx-auto p-8 text-center bg-white">
    <section class="md:mb-6 bg-cover">
      <div class="flex items-center justify-center h-full">
        <img src="/imgs/logo-dark.png" alt="Wogwon Society Logo" class="logo">
      </div>
    </section>
    <section class="md:mb-2 sm:mb-6">
      <h2 class="text-3xl font-semibold mb-4">Our Mission</h2>
      <p class="text-accent">Promoting music, arts, and culture through community-driven events, projects, and initiatives.</p>
    </section>
  </main>
</template>

<script setup lang="ts">
import {definePageMeta} from "#imports";

definePageMeta({
  title: "Home",
  description: "Promoting music, arts, and culture through community-driven events and initiatives.",
  image: "/imgs/logo-dark.png"
});
</script>

<style>
.bg-cover {
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 0;
}

.bg-cover::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.nav-link {
  @apply text-white relative;
}

.nav-link::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: white;
  transition: width 0.3s;
}

.nav-link:hover::after,
.nav-link:focus::after {
  width: 100%;
}

.nav-link:hover,
.nav-link:focus {
  color: white;
}
</style>

<style scoped>
.logo {
  will-change: filter;
  transition: filter 300ms;
}

</style>
