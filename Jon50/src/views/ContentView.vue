<script setup>
import { onMounted } from 'vue'
import LyricsPropter from '../components/LyricsPrompter.vue'

onMounted(() => {
  for (const audio of document.getElementsByTagName('audio')) {
    audio.play()
  }
})
</script>

<template>
  <div class="o-content">
    <div class="image" />
    <LyricsPropter />
  </div>
  <audio>
    <source src="../assets/media/instrumental.mp3" type="audio/mpeg" />
  </audio>
  <RouterView />
</template>

<style></style>
