<script setup>
import { onMounted } from 'vue'
import VisualsPrompter from './VisualsPrompter.vue'

onMounted(() => {
  for (const audio of document.getElementsByTagName('audio')) {
    audio.play()
  }
})
</script>

<template>
  <VisualsPrompter class="content" />
  <audio>
    <source src="@media/instrumental.mp3" type="audio/mpeg" />
  </audio>
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
}
</style>
