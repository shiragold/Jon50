<script setup>
import { ref, onBeforeMount, onMounted } from 'vue'
import tune from '@media/tune.mp3'
import song from '@media/song.mp3'

const props = defineProps({
  src: {
    type: String,
    required: true
  }
})
onMounted(() => {
  document.getElementsByTagName('audio')[0].play()
})
</script>
<template>
  <audio>
    <source v-if="src === 'tune'" :src="tune" type="audio/mpeg" />
    <source v-if="src === 'song'" :src="song" type="audio/mpeg" />
  </audio>
</template>
