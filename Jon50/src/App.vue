<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'
import { userContentStore } from './stores/content'

const store = userContentStore()
const { isPaused } = storeToRefs(store)
const { togglePaused } = store
</script>

<template>
  <header class="header">
    <nav>
      <RouterLink to="/">
        <img class="icon" src="./assets/icons/home.svg" alt="Go home" />
      </RouterLink>
    </nav>
    <h1>Jonathan 50th</h1>
    <button v-if="isPaused" @click="togglePaused">
      <img class="icon" src="./assets/icons/restart.svg" alt="Go home" />
    </button>
  </header>

  <RouterView />
</template>

<style>
.header {
  .icon {
    height: 18px;
  }
}
</style>
