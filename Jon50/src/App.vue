<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>Sing-a-Long!</h1>
    <nav>
      <RouterLink to="/">
        <object data="@assets/home.svg" width="18" height="18" />
      </RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
