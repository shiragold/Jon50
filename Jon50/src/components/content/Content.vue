<script setup>
import { onMounted } from 'vue'
import VisualsPrompter from './VisualsPrompter.vue'

onMounted(() => {
  document.getElementsByTagName('audio')[0].play()
})
</script>

<template>
  <VisualsPrompter class="content">
    <template #placeholder>
      <h1 class="content-placeholder-header">יונתן</h1>
      <h2 class="content-placeholder-title">- אתה הבית -</h2>
    </template>
  </VisualsPrompter>
  <RouterView />
</template>

<style>
.content {
  direction: rtl;
  height: calc(100vh - 2rem);
  width: 100vw;
  display: grid;
  place-content: center;
  place-items: center;
  text-align: center;
  background-color: lightskyblue;
  color: darkslateblue;

  .content-placeholder-header {
    font-size: 8rem;
  }

  .content-placeholder-title {
    font-size: 4rem;
  }
}
</style>
