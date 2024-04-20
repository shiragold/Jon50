<script setup>
import { useContentStore } from '@/stores/content'
import Content from '../components/content/Content.vue'

const store = useContentStore()
</script>

<template>
  <Content v-if="store.isPlaying" />
  <div v-else class="content-view">
    <button class="button" @click="store.togglePlay()">
      <img class="icon large" src="@icons/play.svg" alt="Start playing" />
    </button>
  </div>
</template>

<style>
.content-view {
  height: calc(100vh - 2rem);
  display: grid;
  place-content: center;
  background-color: lightskyblue;
}
</style>
