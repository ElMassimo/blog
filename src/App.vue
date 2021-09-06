<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'The Vue Point',
  description: 'The offical blog for the Vue.js project',
})
</script>

<template>
  <router-view/>
</template>
