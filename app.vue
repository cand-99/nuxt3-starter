<script setup lang="ts">
const { setMeta } = useCustomMeta()
setMeta('App Title')
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
