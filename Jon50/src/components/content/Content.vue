<script setup>
import { onMounted } from 'vue'
import LyricsPrompter from './VisualsPrompter.vue'

onMounted(() => {
  for (const audio of document.getElementsByTagName('audio')) {
    audio.play()
  }
})
</script>

<template>
  <div class="content">
    <LyricsPrompter />
  </div>
  <audio>
    <source src="@media/instrumental.mp3" type="audio/mpeg" />
  </audio>
  <RouterView />
</template>

<style>
.content {
  height: calc(100vh - 2rem);
  width: 100vw;
  display: grid;
  grid-template-rows: 2fr 1fr;
  place-content: center;
  place-items: center;
  direction: rtl;
}
</style>
