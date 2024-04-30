<script setup>
import { onMounted } from 'vue'

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
    <source :src="src" type="audio/mpeg" />
  </audio>
</template>
