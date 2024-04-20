<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

import { useContentStore } from '@/stores/content'

const route = useRoute()
const isContent = computed(() => route.name === 'content')

const store = useContentStore()
</script>

<template>
  <header class="header">
    <h3 class="header-title">Jonathan 50th</h3>
    <nav class="header-nav">
      <RouterLink v-if="isContent && store.isPlaying" to="/">
        <img class="icon small" src="@icons/restart.svg" alt="Reset play" />
      </RouterLink>
      <div v-else class="icon small" />
      <RouterLink v-if="isContent" to="/">
        <img class="icon small" src="@icons/home.svg" alt="Go home" />
      </RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style>
.header {
  height: 2rem;
  display: grid;
  grid-template-columns: auto 4rem;
  place-items: center;
  border-bottom: 2px darkslateblue solid;
  color: lightskyblue;

  .header-title {
    place-self: start;
    align-self: center;
    padding-left: 0.5rem;
    font-weight: 600;
  }

  .header-nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5rem;
    height: 1.25rem;
  }
}
</style>
