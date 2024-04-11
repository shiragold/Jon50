<script setup>
import { useContentStore } from '@/stores/content'
import Content from '../components/content/Content.vue'

const store = useContentStore()
</script>

<template>
  <Content v-if="store.isPlaying" />
  <div v-else class="play-container">
    <button @click="store.togglePlay()">
      <img class="icon large" src="@icons/play.svg" alt="Start playing" />
    </button>
  </div>
</template>

<style>
.play-container {
  height: 100%;
  display: grid;
  place-content: center;
}
</style>
