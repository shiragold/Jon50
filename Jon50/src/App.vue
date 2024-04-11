<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()
const onContent = computed(() => route.name === 'content')
</script>

<template>
  <header class="header">
    <nav class="header-nav">
      <RouterLink v-if="onContent" to="/">
        <img class="icon small" src="@icons/home.svg" alt="Go home" />
      </RouterLink>
    </nav>
    <h3 class="header-title">Jonathan 50th</h3>
  </header>

  <RouterView />
</template>

<style>
.header {
  height: 2rem;
  display: grid;
  grid-template-columns: 2rem auto;
  align-items: center;
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
