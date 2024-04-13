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
    <nav class="header-nav">
      <RouterLink v-if="isContent" to="/">
        <img class="icon small" src="@icons/home.svg" alt="Go home" />
      </RouterLink>
    </nav>
    <h3 class="header-title">Jonathan 50th</h3>
    <nav class="header-nav">
      <RouterLink v-if="isContent && store.isPlaying" to="/">
        <img class="icon small" src="@icons/restart.svg" alt="Reset play" />
      </RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style>
.header {
  height: 2rem;
  display: grid;
  grid-template-columns: 2rem auto 2rem;
  place-items: center;

  .header-title {
    place-self: start;
    align-self: center;
  }

  .header-nav {
    height: 1.25rem;
  }
}
</style>
