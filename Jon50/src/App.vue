<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="o-header">
    <nav>
      <RouterLink to="/">
        <!-- <object data="@assets/home.svg" width="18" height="18" /> -->
        <img class="icon" src="./assets/icons/home.svg" alt="Go home" />
      </RouterLink>
    </nav>
    <h1>Jonathan 50th!</h1>
  </header>

  <RouterView />
</template>

<style>
.o-header {
  .icon {
    height: 18px;
  }
}
</style>
