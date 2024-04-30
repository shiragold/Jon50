<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { useContentStore } from '@/stores/content'
import { HomeIcon, RestartIcon } from '@icons'

const route = useRoute()
const isContent = computed(() => route.path.includes('content'))

const store = useContentStore()
</script>

<template>
  <header class="header">
    <h3 class="header-title">Jonathan 50th</h3>
    <nav class="header-nav">
      <RouterLink v-if="isContent && store.isPlaying" to="/" custom v-slot="{ navigate }">
        <button class="button" role="link" @click="navigate">
          <RestartIcon class="icon small" />
        </button>
      </RouterLink>
      <div v-else class="icon small" />
      <RouterLink v-if="isContent" to="/" custom v-slot="{ navigate }">
        <button class="button" role="link" @click="navigate">
          <HomeIcon class="icon small" />
        </button>
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
  color: var(--color-secondary);
  border-bottom: 2px var(--color-secondary) solid;

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
    width: 100%;
  }
}
</style>
