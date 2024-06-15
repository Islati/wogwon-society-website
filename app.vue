<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  meta: [
    {'http-equiv': 'Cache-Control', content: 'public, max-age=31536000, immutable'}
  ]
})
</script>